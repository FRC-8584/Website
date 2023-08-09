import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

window.scroll(0, 0)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

reportWebVitals();
