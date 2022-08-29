import {
  DELETE_VACANCY,
  FETCH_CAREER_VACANCY,
  CREATE_VACANCY,
  UPDATE_VACANCY,
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CAREER_VACANCY:
      return action.payload;
    case CREATE_VACANCY:
      return [...state, action.payload];
    case DELETE_VACANCY:
      return state.filter((state) => state._id !== action.payload);
    case UPDATE_VACANCY:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    default:
      return state;
  }
};
