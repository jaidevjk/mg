import {
  DELETE_TESTIMONIAL,
  FETCH_TESTIMONIALS,
  CREATE_TESTIMONIAL,
  UPDATE_TESTIMONIALS,
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TESTIMONIALS:
      return action.payload;
    case CREATE_TESTIMONIAL:
      return [...state, action.payload];
    case DELETE_TESTIMONIAL:
      return state.filter((state) => state._id !== action.payload);
    case UPDATE_TESTIMONIALS:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    default:
      return state;
  }
};
