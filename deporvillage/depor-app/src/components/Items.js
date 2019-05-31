import React, { Component } from "react";
import axios from "axios";

export default class Items extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      loading: true
    };
  }

  componentDidMount() {
    var APIKey =
      "0a72573d610a225e4be9f7b1e2f914596091a66cc7894588f13ba3810ada5abc";
    axios
      .get("https://api.unsplash.com/photos/?client_id=" + APIKey)
      .then(data => {
        console.log(data.data);
        this.setState({ imgs: data.data });
      })
      .catch(err => {
        console.log("Error happened during fetching!", err);
      });
  }

  render() {
    const props = this.props;
    return (
      //console.log("gifs: " + gifs);
      <li className="media item-list">
        <img
          src={this.state.imgs}
          //src={props.item.src + "?random=" + Math.random()}
          className="mr-3"
          alt="..."
        />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{this.props.item.itemsku}</h5>
          <div>Product ID: {props.item.itemId}</div>
          <div>Price: €{props.item.price}</div>
          <div>Quantity: {props.item.quantity}</div>
        </div>
      </li>
    );
  }
}
