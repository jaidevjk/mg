import { FETCH_SINGLE_CAREER } from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SINGLE_CAREER:
      return action.payload;

    default:
      return state;
  }
};
