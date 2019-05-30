import React, { Component } from "react";
import ordersJson from "./objects/orderJson.json";
import OrderHeading from "./OrderHeading";

class OrderTable extends Component {
  constructor() {
    super();
    this.state = {
      ordersJson
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.ordersJson.orders.map((order, index) => (
          <div className="order-items" key={index}>
            <table className="table">
              <tbody>
                <tr className="list-group-item-secondary">
                  <td>
                    <OrderHeading
                      ind={index}
                      orderJson={this.state.ordersJson.orders}
                      order={order}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul className="list-unstyled">
                      {order.items.map(item => (
                        <li className="media item-list" key={item.itemId}>
                          <img
                            src={item.src + "?random=" + Math.random()}
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body">
                            <h5 className="mt-0 mb-1">{item.itemsku}</h5>
                            <div>Product ID: {item.itemId}</div>
                            <div>Price: €{item.price}</div>
                            <div>Quantity: {item.quantity}</div>
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
