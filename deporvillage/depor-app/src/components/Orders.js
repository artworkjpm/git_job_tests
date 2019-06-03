import React, { Component } from "react";
import ordersJson from "./objects/orderJson.json";
import OrderHeading from "./OrderHeading";
import Items from "./Items";
import SearchLastName from "./search/searchForm.js";

class OrderTable extends Component {
  constructor() {
    super();
    this.state = {
      ordersJson,
      search: ""
    };
  }

  updateSearchLastName(event) {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    //make it possible to search upper or lower case lastnames:
    const name = this.state.search;
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
    //search the json for lastnames
    let searchResult = this.state.ordersJson.orders.filter(name => {
      return name.lastname.indexOf(nameCapitalized) !== -1;
    });
    return (
      <React.Fragment>
        <SearchLastName
          onvalue={this.state.search}
          onChange={this.updateSearchLastName.bind(this)}
        />
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
