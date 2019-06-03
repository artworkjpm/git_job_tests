import React from "react";

const OrderHeading = props => {
  var totalOrder = [];
  for (let i = 0; i < props.orderJson.length; i++) {
    totalOrder.push(
      props.orderJson[i].items.reduce((total, order) => {
        return total + order.price * order.quantity;
      }, 0)
    );
  }

  return (
    <div className="row">
      <div className="col-6">
        <div className="names">
          <b>First name:</b> {props.order.firstname}
        </div>
        <div className="names">
          <b>Last name:</b> {props.order.lastname}
        </div>
        <div>
          <b>Billing Address:</b> {props.order.orderAddress.billing}
        </div>
        <div>
          <b>Shipping Address:</b> {props.order.orderAddress.shipping}
        </div>
        <div className="increase">
          <b>TOTAL PRICE:</b> €{totalOrder[props.ind].toFixed(2)}
        </div>
      </div>
      <div className="col-6">
        <div>
          <b>ORDER ID:</b> {props.order.orderId}
        </div>
        <div>
          <b>Order Status: </b>
          <ul className="list-group">
            <li className="list-group-item list-group-item-success">
              {props.order.orderStatus}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderHeading;
