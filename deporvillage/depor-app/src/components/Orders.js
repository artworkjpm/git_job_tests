import React, { Component } from "react";
import ordersJson from "./objects/orderJson.json";
import OrderHeading from "./OrderHeading";
import Items from "./Items";

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
        <form onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
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
                        <Items item={item} key={item.itemId} />
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
