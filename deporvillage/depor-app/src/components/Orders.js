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
    var totalOrder = [];
    for (let i = 0; i < orderJson.length; i++) {
      totalOrder.push(
        orderJson[i].items.reduce((total, order) => {
          return total + order.price;
        }, 0)
      );
    }

    return (
      <React.Fragment>
        {this.state.ordersJson.orders.map((order, index) => (
          <div className="order-items" key={index}>
            <table className="table">
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
                          <b>TOTAL PRICE:</b> {totalOrder[index]}
                        </div>
                      </div>
                      <div className="col-6">
                        Order Status:{" "}
                        <ul className="list-group">
                          <li className="list-group-item list-group-item-success">
                            {order.orderStatus}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul className="list-unstyled">
                      {order.items.map(item => (
                        <li className="media item-list" key={item.itemId}>
                          <img
                            src={item.src + "?random=" + index++}
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body">
                            <h5 className="mt-0 mb-1">Toaster</h5>
                            <div>Product ID:</div>
                            <div>Price: 111</div>
                            <div>Quantity: 1</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default OrderTable;
