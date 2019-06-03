import React, { Component } from "react";
import ordersJson from "./objects/orderJson.json";
import OrderHeading from "./OrderHeading";
import Items from "./Items";

class OrderTable extends Component {
  constructor() {
    super();
    this.state = {
      ordersJson,
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    let searchResult = this.state.ordersJson.orders.filter(name => {
      return name.name.indexOf(this.state.search) !== -1;
    });
    return (
      <React.Fragment>
        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input
              className="form-control mr-sm-2"
              type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {searchResult.map((order, index) => (
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
