import {
  FETCH_TWEETS_FAILURE,
  FETCH_TWEETS_SUCCESS,
  FETCH_TWEETS_BEGIN,
  CREATE_TWEET,
  //DELETE_TWEET,
  domain,
  handleJsonResponse,
  jsonHeaders
} from "../actions/constants";
import { store } from "../index";

export const fetchTweetsBegin = () => ({
  type: FETCH_TWEETS_BEGIN
});
export const fetchTweetsSuccess = tweets => ({
  type: FETCH_TWEETS_SUCCESS,
  payload: { tweets }
});
export const fetchTweetsFailure = error => ({
  type: FETCH_TWEETS_FAILURE,
  payload: { error }
});

export function fetchTweets() {
  return dispatch => {
    dispatch(fetchTweetsBegin());
    return fetch(domain + "/messages")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchTweetsSuccess(json.messages));
        return json.messages;
      })
      .catch(error => dispatch(fetchTweetsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const createTweet = text => dispatch => {
  const token = store.getState().auth.login.token;
  return fetch(domain + "/messages", {
    method: "POST",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ text })
  })
    .then(handleJsonResponse)
    .then(res => {
      console.log(res);
      return dispatch({
        type: CREATE_TWEET,
        payload: res.messsage
      });
    });
};

// export const deleteTweet = id => dispatch => {
//   const token = store.getState().auth.login.token
//   return fetch(domain + "/messages", {
//     method: "DELETE",
//     headers: {
//       ...jsonHeaders,
//       Authorization: `Bearer ${token}`
//     },
//     body: JSON.stringify({text})
//   })
//     .then(handleJsonResponse)
//     .then(res => {
//       console.log(res)
//       return dispatch({
//         type: DELETE_TWEET,
//         payload: res.messsage
//       })
//     })
//   // return {type: DELETE_TWEET, id}
// }
