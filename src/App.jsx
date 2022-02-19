import React, { Component } from "react";
import NavBar from "./NavBar";
import Customers from "./Customers";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ShoppingCart />
      </React.Fragment>
    );
  }
}
