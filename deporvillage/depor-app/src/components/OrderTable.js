import React, { Component } from "react";

class OrderTable extends Component {
  state = {};
  render() {
    return (
      <div className="order-items">
        <table className="table">
          <tbody>
            <tr className="list-group-item-secondary">
              <td>
                <div className="row">
                  <div className="col-6">
                    <div>
                      <b>ORDER ID:</b> 111{" "}
                    </div>
                    <div>
                      <b>Order Billing Address:</b> 111 el prat{" "}
                    </div>
                    <div>
                      <b>Order Shipping Address:</b> 111 el prat{" "}
                    </div>
                    <div>
                      <b>TOTAL PRICE:</b> 111
                    </div>
                  </div>
                  <div className="col-6">
                    Order Status:{" "}
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-warning">
                        Pending Confirmation
                      </li>
                      <li className="list-group-item">Sent to Warehouse</li>
                      <li className="list-group-item">Shipped</li>
                      <li className="list-group-item">In Transit</li>
                      <li className="list-group-item list-group-item-success">
                        Confirmed
                      </li>
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
                      src="https://picsum.photos/100"
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
                  <li className="media my-4">
                    <img
                      src="https://picsum.photos/100"
                      className="mr-3"
                      alt="..."
                    />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">List-based media object</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderTable;
