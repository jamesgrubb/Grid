import React from "react";
import { createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "tachyons";
import * as serviceWorker from "./serviceWorker";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400');

h1,h2,h3,h4{
    font-family: 'IBM Plex Sans'
}
`;

ReactDOM.render(
  <React.Fragment>
    <Global />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
