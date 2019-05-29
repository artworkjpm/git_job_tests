import React, { Component } from "react";
import ordersJson from "./objects/orderJson.json";

class OrderTable extends Component {
  constructor() {
    super();
    this.state = {
      ordersJson
    };
  }

  render() {
    const orderJson = this.state.ordersJson.orders;
    var totalOrder;
    for (let i = 0; i < orderJson.length; i++) {
      totalOrder = orderJson[i].items.reduce((total, order) => {
        console.log("order.price: " + order.price);
        return total + order.price;
      }, 0);
    }

    return (
      <div className="order-items">
        {this.state.ordersJson.orders.map((order, index) => (
          <table className="table" key={index}>
            <tbody>
              <tr className="list-group-item-secondary">
                <td>
                  <div className="row">
                    <div className="col-6">
                      <div>
                        <b>ORDER ID:</b> {order.orderId}
                      </div>
                      <div>
                        <b>Order Billing Address:</b>{" "}
                        {order.orderAddress.billing}
                      </div>
                      <div>
                        <b>Order Shipping Address:</b>{" "}
                        {order.orderAddress.shipping}
                      </div>
                      <div>
                        <b>TOTAL PRICE:</b> {totalOrder}
                      </div>
                    </div>
                    <div className="col-6">
                      Order Status:{" "}
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-success">
                          Delivered
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <ul className="list-unstyled">
                    <li className="media">
                      <img
                        src={order.items[0].src + "?random=" + (index + 1)}
                        className="mr-3"
                        alt="..."
                      />
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Toaster</h5>
                        <div>Product ID: 111</div>
                        <div>Price: 111</div>
                        <div>Quantity: 1</div>
                      </div>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    );
  }
}

export default OrderTable;
