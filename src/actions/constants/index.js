export const domain = domain + "/auth/register";
//export const domain = "http://localhost:3000";

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


export const REGISTER_USER = 'REGISTER_USER';