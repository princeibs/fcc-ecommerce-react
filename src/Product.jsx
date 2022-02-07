import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    console.log('Constructor - Product');
    super(props);
    this.state = {
      product: this.props.product,
    };
  }

  componentDidMount() {
    console.log("componentDidMount - Shopping");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate - Shopping");
  }

  componentWillUnmount() {
    console.log("ComponentDidUnmount - Shopping");
  }

  render() {
    console.log("render - Shopping");
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              #{this.state.product.id}
              <span
                className="pull-right"
                onClick={() => this.props.onDelete(this.state.product)}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>

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
                <button
                  onClick={() => this.props.onIncrement(this.state.product, 10)}
                  className="btn btn-outline-success"
                >
                  +
                </button>
                <button
                  onClick={() => this.props.onDecrement(this.state.product, 0)}
                  className="btn btn-outline-warning"
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-right">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
