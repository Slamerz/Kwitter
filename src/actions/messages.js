import {
  FETCH_TWEETS_FAILURE,
  FETCH_TWEETS_SUCCESS,
  FETCH_TWEETS_BEGIN,
  CREATE_TWEET,
  DELETE_TWEET_BEGIN,
  DELETE_TWEET_SUCCESS,
  DELETE_TWEET_FAILURE,
  domain,
  handleJsonResponse,
  jsonHeaders
} from "./constants";
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

export const postTweet = tweet => ({
  type: CREATE_TWEET,
  payload: {tweet}
});

export const deleteTweetBegin = () => ({
  type: DELETE_TWEET_BEGIN
});

export const deleteTweetSuccess = messageId => ({
  type: DELETE_TWEET_SUCCESS,
  payload: { messageId }
})

export const deleteTweetFailure = error => ({
  type: DELETE_TWEET_FAILURE,
  payload: { error }
})

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
      return dispatch(postTweet(res.message));
    });
};

export function deleteTweet(messageId, userToken) {
  return dispatch => {
    dispatch(deleteTweetBegin())
    fetch(`${domain}/messages/${messageId}`, {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(deleteTweetSuccess(messageId))
        return json
      })
      .catch(error => deleteTweetFailure(error))
  }
}


