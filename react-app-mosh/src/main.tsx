import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//  For importing index.css
//  But right now, we will not use it
//  Instead, we will use bootstrap
// import './index.css'

// Import bootstrap
import "bootstrap/dist/css/bootstrap.css";

//  We use React DOM to render the component tree inside the
//  html element with the id of root
//  If we want to use it for mobile, we can use React Native
//  instead of ReactDOM
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //  Component Tree
  //  StrictMode is a built-in react component
  //  This is used for identifying problems/errors
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
