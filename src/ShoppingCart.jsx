import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const data = fetch("http://localhost:5000/products", {
      method: "GET",
    });
    data.then((response) => {
      console.log(response);

      const objData = response.json();
      objData.then((data) => {
        this.setState({ products: data });
      });
    });
  }

  componentDidUpdate() {}

  conponentWillUnmount() {}

  handleIncrement = (product, max) => {
    const allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < max) {
      allProducts[index].quantity++;
      this.setState({
        products: allProducts,
      });
    }
  };

  handleDecrement = (product, min) => {
    const allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > min) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product) => {
    if (window.confirm("Are you sure you wanto to delete?")) {
      const allProducts = [...this.state.products];
      let prodIndex = allProducts.indexOf(product);

      this.setState({
        products: allProducts.filter((prod, index) => {
          return prodIndex !== index;
        }),
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="m-3">Shopping Cart</h1>
        <div>
          {this.state.products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
