import {
  FETCH_USERS_BEGIN, 
  FETCH_USERS_FAILURE, 
  FETCH_USERS_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_BEGIN,
  UPDATE_PROFILE_PICTURE_FAILURE,
  UPDATE_PROFILE_PICTURE_SUCCESS,
  UPDATE_PROFILE_PICTURE_BEGIN
} from "../actions/constants";

const initialState = {
  users: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        users: []
      };
    
  
};
  switch (action.type) {

    case UPDATE_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.users
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        user: []
      };
    }
    switch (action.type) {
      
      case UPDATE_PROFILE_PICTURE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
      case UPDATE_PROFILE_PICTURE_SUCCESS:
      return {
        ...state,
        loading: false,
        // user: action.payload.users
      };
      case UPDATE_PROFILE_PICTURE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        user: []
      };
      default:
        return state;
}};
