import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar.jsx";
import "./index.css";

let element = <button class="btn btn-primary">Hello</button>;
ReactDOM.render(<NavBar />, document.getElementById("root"));
