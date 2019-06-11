import {
  FETCH_TWEETS_FAILURE,
  FETCH_TWEETS_SUCCESS,
  FETCH_TWEETS_BEGIN,
  domain
} from "./constants";

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
