import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);