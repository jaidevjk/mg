import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
// import createBrowserHistory from "history/createBrowserHistory";
import { createBrowserHistory } from 'history';

import App from "./components/App";
import reducers from "./reducers";
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="preloader">
        <div className="spinner">
          <img src="img/MULTIPLEX_IMAGES/MAIN_LOGO/icon.png" alt=""/>
        </div>
      </div>
    )
  );
};

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <App />
    <LoadingIndicator />
  </Provider>,
  document.querySelector("#root")
);
