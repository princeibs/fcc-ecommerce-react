import React, { Component } from "react";

export default class Customers extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 8,
    customers: [
      {
        id: 1,
        photo: "https://picsum.photos/id/121/50",
        name: "Allen",
        phone: "123-546",
        city: {
          pobox: 23,
          name: "Last City",
        },
      },
      {
        id: 2,
        photo: "https://picsum.photos/id/122/50",
        name: "Ballen",
        phone: "143-546",
        city: {
          pobox: 23,
          name: "Last City",
        },
      },
      {
        id: 3,
        photo: "https://picsum.photos/id/123/50",
        name: "Callen",
        phone: "3123-546",
        city: {
          pobox: 23,
          name: "Last City",
        },
      },
      {
        id: 4,
        photo: "https://picsum.photos/id/120/50",
        name: "Dallen",
        phone: "",
        city: {
          pobox: 23,
          name: "Last City",
        },
      },
    ],
  };

  onRefreshClick = () => {
    this.setState({
      customersCount: this.state.customersCount + 1,
    });
  };

  getCustomerPhone = (phone) => {
    return phone ? phone : <div className="text-warning">No Phone</div>;
  };

  onChangePhotoClick = (cust, index) => {
    let custArr = this.state.customers;
    custArr[index].photo = `https://picsum.photos/id/${index + 1}/50`;
    this.setState({ customers: custArr });
  };

  onChangeHoverPicture = (index) => {
    document.getElementById(`${index}`).height = "100";
  };

  onMouseLeavePicture = (index) => {
    document.getElementById(`${index}`).height = "50";
  };

  getCustomerRow = () => {
    return this.state.customers.map((customer, index) => {
      return (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>
            <img
              height={index + 50}
              id={index}
              onMouseOver={() => this.onChangeHoverPicture(index)}
              onMouseLeave={() => {
                this.onMouseLeavePicture(index);
              }}
              src={customer.photo}
            ></img>
            <button onClick={() => this.onChangePhotoClick(customer, index)}>
              Change
            </button>
          </td>
          <td>{customer.name}</td>
          <td>{this.getCustomerPhone(customer.phone)}</td>
          <td>{customer.city.name}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-1">
            {this.state.customersCount}
          </span>
          <button className="btn btn-success" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
}
