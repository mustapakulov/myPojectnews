import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";
import "./Firebase"
import Navbar from "./components/Nav/Navbar/Navbar";
import NavbarLower from "./components/Nav/NavbarLower/NavbarLower";

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