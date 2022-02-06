import React, { Component } from "react";

export default class MainComponent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 8,
  };

  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    })
  }

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-1">
            {this.state.customersCount}
          </span>
          <button className="btn btn-success" onClick={this.onRefreshClick}>Refresh</button>
        </h4>
      </div> 
    );
  }
}
