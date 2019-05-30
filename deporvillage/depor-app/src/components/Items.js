import React from "react";

const Items = props => {
  return (
    <li className="media item-list">
      <img
        src={props.item.src + "?random=" + Math.random()}
        className="mr-3"
        alt="..."
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{props.item.itemsku}</h5>
        <div>Product ID: {props.item.itemId}</div>
        <div>Price: €{props.item.price}</div>
        <div>Quantity: {props.item.quantity}</div>
      </div>
    </li>
  );
};
export default Items;
