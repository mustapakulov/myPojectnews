import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";
import "./Firebase";
import ContextMyProvider from "./Context/ContextMy";


ReactDOM.render(
  <React.StrictMode>
    <ContextMyProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ContextMyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
