import {
  DELETE_WELCOME,
  FETCH_WELCOME,
  CREATE_WELCOME,
  UPDATE_WELCOME,
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WELCOME:
      return action.payload;
    case CREATE_WELCOME:
      return [...state, action.payload];
    case DELETE_WELCOME:
      return state.filter((state) => state._id !== action.payload);
    case UPDATE_WELCOME:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    default:
      return state;
  }
};
