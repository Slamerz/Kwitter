import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_BEGIN,
  domain,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_BEGIN,
  UPDATE_PROFILE_PICTURE_FAILURE,
  UPDATE_PROFILE_PICTURE_SUCCESS,
  UPDATE_PROFILE_PICTURE_BEGIN
} from "./constants";
import { handleJsonResponse } from "./constants"
import { push } from "connected-react-router";

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN
});
export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users }
});
export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error }
});

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersBegin());
    return fetch(domain + "/users")
      .then(handleJsonResponse)
      .then(json => {
        console.log(json)
        dispatch(fetchUsersSuccess(json.users));
        return json.users;
      })
      .catch(error => dispatch(fetchUsersFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
export const updateprofileBegin = () => ({
  type: UPDATE_PROFILE_BEGIN
});
export const updateprofileSuccess = user => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: { user }
});
export const updateprofileFailure = error => ({
  type: UPDATE_PROFILE_FAILURE,
  payload: { error }
});
export function updateProfile(displayName) {
  return (dispatch, getState) => {
    dispatch(updateprofileBegin());
    const usersId = getState().auth.login.id;
    const token = getState().auth.login.token;

    return fetch(domain + "/users/" + usersId, {
      method: "PATCH",
      body: JSON.stringify({
        displayName: displayName,
        
      }),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        dispatch(updateprofileSuccess(json.user));
        dispatch(push('/homepage'))
        return json.user;
      })
      .catch(error => dispatch(updateprofileFailure(error)));
  };
}

export const updateProfilePictureBegin = () => ({
  type: UPDATE_PROFILE_PICTURE_BEGIN // loading true
});
export const updateProfilePictureSuccess = user => ({
  type: UPDATE_PROFILE_PICTURE_SUCCESS, // loading false
  payload: { user }
});
export const updateProfilePictureFailure = error => ({
  type: UPDATE_PROFILE_PICTURE_FAILURE,
  payload: { error }
});
export function updateProfilePicture(file) {
  return (dispatch, getState) => {
    dispatch(updateProfilePictureBegin());
    const usersId = getState().auth.login.id;
    const token = getState().auth.login.token;
    console.log('hey')

    return fetch(domain + "/users/" + usersId + "/picture", {
      method: "PUT",
      body: file,
      headers: {
        Authorization: "Bearer " + token
      }
    })
      // .then(handleErrors)
      .then(json => {
        console.log(json)
        if(json.statusCode === 200){
        return dispatch(updateProfilePictureSuccess());
      }
      })
      .catch(error => dispatch(updateProfilePictureFailure(error)));
  };
}