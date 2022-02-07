import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  onLoginClick = () => {
    if (
      this.state.email === "test@mail.com" &&
      this.state.password === "test123"
    ) {
      this.setState({
        message: <span className="text-success">Successfully logged in</span>,
      });
    } else {
     this.setState({
      message: <span className="text-danger">Invalid email or password</span>
     })
    }
  };

  render() {
    return (
      <div className="col-lg-7">
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        <div className="form-group form-row">
          <label className="col-lg-4">Email</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) =>
              this.setState({
                email: event.target.value,
              })
            }
          />
        </div>
        <div className="form-group form-row">
          <label className="col-lg-4">Password</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) =>
              this.setState({
                password: event.target.value,
              })
            }
          />
          <div className="text-end m-2">
            {this.state.message}
            <button className="btn btn-primary" onClick={this.onLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
