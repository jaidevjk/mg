import {
  DELETE_ARTICLE,
  FETCH_ARTICLES,
  CREATE_ARTICLE,
  UPDATE_ARTICLES,
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload;
    case CREATE_ARTICLE:
      return [...state, action.payload];
    case DELETE_ARTICLE:
      return state.filter((state) => state._id !== action.payload);
    case UPDATE_ARTICLES:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    default:
      return state;
  }
};
