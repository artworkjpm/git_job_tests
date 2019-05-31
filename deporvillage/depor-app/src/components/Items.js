import React, { Component } from "react";
import APIKey from "./objects/apiKey.json";
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
    axios
      .get(
        "https://api.unsplash.com/search/photos?query=office?page=1&per_page=1?&client_id=" +
          APIKey.APIKey
      )
      .then(data => {
        console.log(data.data.results[0]);
        this.setState({ imgs: data.data.results[0].urls.thumb });
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
