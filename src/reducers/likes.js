import {
  FETCH_LIKES_BEGIN,
  FETCH_LIKES_FAILURE,
  FETCH_LIKES_SUCCESS,
  POST_LIKE_BEGIN,
  POST_LIKE_SUCCESS,
  POST_LIKE_FAILURE,
  DELETE_LIKE_BEGIN,
  DELETE_LIKE_SUCCESS,
  DELETE_LIKE_FAILURE
} from "../actions/constants";

const initialState = {
  likes: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIKES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_LIKES_SUCCESS:
      return {
        ...state,
        loading: false,
        likes: action.payload.likes
      };
    case FETCH_LIKES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        likes: []
      };
    case POST_LIKE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case POST_LIKE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        likes: []
      };
    case POST_LIKE_SUCCESS:
      return {
        ...state,
        loading: false,
        likes: [action.payload.like, ...state.likes]
      };
    case DELETE_LIKE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case DELETE_LIKE_SUCCESS:
      const updated = [...state.likes];
      const index = updated.map(like => like.id).indexOf(action.payload.likeId);
      updated.splice(index, 1);
      return {
        ...state,
        loading: false,
        likes: updated
      };
    case DELETE_LIKE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        likes: []
      };
    default:
      return state;
  }
};
