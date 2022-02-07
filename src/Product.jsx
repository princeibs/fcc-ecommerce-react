import React, { Component } from "react";

export default class Product extends Component {
  state = {
    product: this.props.product,
  };
  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">#{this.state.product.id}</div>
            <h5 className="pt-5 border-top">
              {this.state.product.productName}
            </h5>
            <div>${this.state.product.price}</div>
          </div>
          <div className="card-footer">
            <div className="float-left">
              <span className="badge text-black">
                {this.state.product.quantity}
              </span>
              <div className="btn-group">
                <button onClick={() => this.props.onIncrement(this.state.product, 10)} className="btn btn-outline-success">+</button>
                <button onClick={() => this.props.onDecrement(this.state.product, 0)} className="btn btn-outline-warning">-</button>
              </div>
            </div>
            <div className="float-right">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
