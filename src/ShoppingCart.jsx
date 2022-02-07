import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, productName: "iPhone", price: 2300, quantity: 9 },
        { id: 2, productName: "Samsung", price: 2100, quantity: 3 },
        { id: 3, productName: "Infinix", price: 1300, quantity: 1 },
        { id: 4, productName: "Nokia", price: 3300, quantity: 5 },
        { id: 5, productName: "Nexus", price: 7300, quantity: 7 },
      ],
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  conponentWillUnmount() {
  }

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
