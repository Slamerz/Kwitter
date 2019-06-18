import {FETCH_TWEETS_BEGIN, FETCH_TWEETS_FAILURE, FETCH_TWEETS_SUCCESS, CREATE_TWEET, DELETE_TWEET} from "../actions/constants";

const initialState = {
  tweets: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_TWEETS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_TWEETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tweets: action.payload.tweets
      };
    case FETCH_TWEETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        tweets: []
      };
    case CREATE_TWEET:
      return {
        ...state,
        tweets: [action.payload, ...state.tweets]
      }
    default:
      return state;
  }
};
