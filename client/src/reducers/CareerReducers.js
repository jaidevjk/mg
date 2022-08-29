import {
  DELETE_CATEGORY,
  FETCH_CAREERS,
  CREATE_CAREERS,
  // UPDATE_TESTIMONIALS,
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CAREERS:
      return action.payload;
    case CREATE_CAREERS:
      return [...state, action.payload];
    case DELETE_CATEGORY:
      return state.filter((state) => state._id !== action.payload);
    //   case UPDATE_TESTIMONIALS:
    //     return state.map((post) =>
    //       post._id === action.payload._id ? action.payload : post
    //     );

    default:
      return state;
  }
};
