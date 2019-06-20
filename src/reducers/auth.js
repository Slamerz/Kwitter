import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS
} from "../actions";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGIN_SUCCESS:
      return { ...state, login: action.payload, loginLoading: false };
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };
    
    case LOGOUT:
      return {
        ...state,
        logoutLoading: true,
        logoutError: null
      };
    case LOGOUT_SUCCESS:
      return { ...state, 
        login: null, 
        logoutLoading: false };
    case LOGOUT_FAIL:
      return { ...state, 
        logoutError: action.payload, 
        logoutLoading: false };

    default:
      return state;
  }
};
