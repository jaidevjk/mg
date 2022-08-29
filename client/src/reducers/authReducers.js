import { LOGOUT, SIGNIN, AUTH_ERROR, FETCH_LOGINS } from "../actions/type";

export default (
  state = { authData: null, token: null, errorMessage: "" },
  action
) => {
  switch (action.type) {
    case SIGNIN:
      const token = sessionStorage.setItem(
        "profile",
        JSON.stringify(action.payload)
      );
      return { ...state, authData: action.payload, token };
    case LOGOUT:
      sessionStorage.removeItem("profile");
      return { ...state, authData: null, token: null };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case FETCH_LOGINS:
      return { ...state, authData: action.payload };
    default:
      return state;
  }
};
