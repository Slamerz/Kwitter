export const domain = "https://kwitter-api.herokuapp.com";

export const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export const handleJsonResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then(result => {
    throw result;
  });
};

export const FETCH_TWEETS_BEGIN = "FETCH_TWEETS_BEGIN";
export const FETCH_TWEETS_SUCCESS = "FETCH_TWEETS_SUCCESS";
export const FETCH_TWEETS_FAILURE = "FETCH_TWEETS_FAILURE";

export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const FETCH_LIKES_BEGIN = "FETCH_LIKES_BEGIN";
export const FETCH_LIKES_SUCCESS = "FETCH_LIKES_SUCCESS";
export const FETCH_LIKES_FAILURE = "FETCH_LIKES_FAILURE";

export const POST_LIKE_BEGIN = "POST_LIKE_BEGIN";
export const POST_LIKE_SUCCESS = "POST_LIKE_SUCCESS";
export const POST_LIKE_FAILURE = "POST_LIKE_FAILURE";

export const DELETE_LIKE_BEGIN = "DELETE_LIKE_BEGIN";
export const DELETE_LIKE_SUCCESS = "DELETE_LIKE_SUCCESS";
export const DELETE_LIKE_FAILURE = "DELETE_LIKE_FAILURE";


export const REGISTER_USER = 'REGISTER_USER';
export const DELETE_TWEET_BEGIN = 'DELETE_TWEET_BEGIN'
export const DELETE_TWEET_SUCCESS = 'DELETE_TWEET_SUCCESS'
export const DELETE_TWEET_FAILURE = 'DELETE_TWEET_FAILURE'

export const CREATE_TWEET = 'CREATE_TWEET'
export const UPDATE_PROFILE_BEGIN = "UPDATE_PROFILE_BEGIN";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";

export const UPDATE_PROFILE_PICTURE_BEGIN = "UPDATE_PROFILE_PICTURE_BEGIN";
export const UPDATE_PROFILE_PICTURE_SUCCESS = "UPDATE_PROFILE_PICTURE_SUCCESS";
export const UPDATE_PROFILE_PICTURE_FAILURE = "UPDATE_PROFILE_PICTURE_FAILURE";
