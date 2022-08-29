import { SIGNIN, SIGNUP, LOGOUT, AUTH_ERROR, FETCH_LOGINS } from './type';
import * as api from '../api/auth';

export const signin = (formValues, history) => async dispatch => {
  try {
    // console.log(formValues);
    const signin = (await api.signin(formValues)) || '';

    dispatch({
      type: SIGNIN,
      payload: signin.data,
    });
    history.push('/adminRedirect');
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid Email or Password',
    });
  }
};

export const signup = (formValues, history) => async dispatch => {
  try {
    const signup = await api.signup(formValues);
    dispatch({
      type: SIGNUP,
      payload: signup.data,
    });
    history.push('/signin');
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email Already Exist',
    });
  }
};

export const logout = history => async dispatch => {
  dispatch({
    type: LOGOUT,
  });
  history.push('/');
};

export const loginAttempts = formValues => async dispatch => {
  try {
    await api.loginAttempts(formValues);
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Cant't Save details",
    });
  }
};

export const fetchLogins = () => async dispatch => {
  const fetchLogins = await api.fetchLogins();
  try {
    dispatch({
      type: FETCH_LOGINS,
      payload: fetchLogins.data,
    });
  } catch (error) {
    console.log(error);
  }
};
