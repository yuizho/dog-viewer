import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import App from "./App";
import reducer from "./reducer";
import rootSaga from "./sagas/dogCeo";
import * as serviceWorker from "./serviceWorker";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
sagaMiddleWare.run(rootSaga);
