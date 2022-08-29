import { FETCH_SUBSCRIBERS, DELETE_SUBSCRIBER } from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SUBSCRIBERS:
      return action.payload;
    case DELETE_SUBSCRIBER:
      return state.filter((state) => state._id !== action.payload);

    default:
      return state;
  }
};
