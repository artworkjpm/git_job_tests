import React, { Component } from "react";
import OrderAgain from "./orderAgain";
import APIKey from "./objects/apiKey.json";
import axios from "axios";

export default class Items extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      loading: true,
      openModal: false,
      buttonType: ""
    };
  }

  handleIncrement = () => {
    this.setState({ buttonType: "balls" });
  };

  componentDidMount() {
    let itemName = this.props.item.itemsku;
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${itemName}?&client_id=` +
          APIKey.APIKey
      )
      .then(data => {
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
          height="100"
          width="100"
        />
        <div className="media-body">
          <div className="row">
            <div className="col-6">
              <h5 className="mt-0 mb-1">{this.props.item.itemsku}</h5>
              <div>Product ID: {props.item.itemId}</div>
              <div>Price: €{props.item.price}</div>
              <div>Quantity: {props.item.quantity}</div>
            </div>
            <div className="col-6">
              <p className="mt-0 mb-1">Modify item:</p>
              <button
                type="button"
                className="btn btn-primary mr-3"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Order again
              </button>
              <button
                type="button"
                className="btn btn-warning mr-3"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={this.handleIncrement}
              >
                > Return item
              </button>
              <button
                type="button"
                className="btn btn-danger mr-3"
                data-toggle="modal"
                data-target="#exampleModal"
                passit={this.state.buttonType}
              >
                Cancel order
              </button>
              <OrderAgain
                data-target="#exampleModal"
                src={this.state.imgs}
                name={this.props.item.itemsku}
                productId={props.item.itemId}
                price={props.item.price}
                quantity={props.item.quantity}
              />
            </div>
          </div>
        </div>
      </li>
    );
  }
}
