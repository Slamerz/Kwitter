import {
  FETCH_LIKES_FAILURE,
  FETCH_LIKES_SUCCESS,
  FETCH_LIKES_BEGIN,
  POST_LIKE_BEGIN,
  POST_LIKE_SUCCESS,
  domain,
  POST_LIKE_FAILURE
} from "./constants";

export const fetchLikesBegin = () => ({
  type: FETCH_LIKES_BEGIN
});
export const fetchLikesSuccess = likes => ({
  type: FETCH_LIKES_SUCCESS,
  payload: { likes }
});
export const fetchLikesFailure = error => ({
  type: FETCH_LIKES_FAILURE,
  payload: { error }
});

export const postLikeBegin = () => ({
  type: POST_LIKE_BEGIN
});

export const postLikeSuccess = like => ({
  type: POST_LIKE_SUCCESS,
  payload: { like }
});

export const postLikeFailure = error => ({
  type: POST_LIKE_FAILURE,
  payload: { error }
});

export function postLike(messageId, userToken) {
  const d =JSON.stringify({messageId: +messageId});
  console.log(messageId, userToken);
  return dispatch => {
    dispatch(postLikeBegin());
    return fetch(domain + "/likes", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`
      },
      body: d
    })
      .then(response => response.json())
      .then(json => {

        console.log(json.like);
        dispatch(postLikeSuccess(json.like));
        return json.like;
      })
      .catch(error => {
        console.log(error);
        return dispatch(postLikeFailure(error))});
  };
}

export function fetchLikes() {
  return dispatch => {
    dispatch(fetchLikesBegin());
    return fetch(domain + "/messages")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        const likes = [].concat(
          ...json.messages
            .filter(tweet => tweet.likes[0])
            .map(tweet => tweet.likes)
        );
        dispatch(fetchLikesSuccess(likes));
        return likes;
      })
      .catch(error => dispatch(fetchLikesFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
