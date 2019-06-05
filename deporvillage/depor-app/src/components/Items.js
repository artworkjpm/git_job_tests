import React, { Component } from "react";
import OrderAgain from "./modals/orderAgain";
import Return from "./modals/Return";
import Cancel from "./modals/Cancel";
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

  componentDidMount() {
    //I made an api call to unsplash to get images using the item name
    let itemName = this.props.item.itemsku;
    let unsplashApiKey = process.env.REACT_APP_UNSPLASH;
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${itemName}?&client_id=${unsplashApiKey}`
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
              <h5 className="mt-0 mb-1">{props.item.itemsku}</h5>
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
                data-target={"#OrderAgain" + props.item.itemId}
              >
                Order again
              </button>
              <button
                type="button"
                className="btn btn-warning mr-3"
                data-toggle="modal"
                data-target={"#return" + props.item.itemId}
              >
                Return item
              </button>
              <button
                type="button"
                className="btn btn-danger mr-3"
                data-toggle="modal"
                data-target={"#cancel" + props.item.itemId}
                //passit={this.state.buttonType}
              >
                Cancel order
              </button>

              <OrderAgain
                data-target="#OrderAgain"
                src={this.state.imgs}
                name={props.item.itemsku}
                productId={props.item.itemId}
                price={props.item.price}
                quantity={props.item.quantity}
              />
              <Return
                data-target="#return"
                src={this.state.imgs}
                name={props.item.itemsku}
                productId={props.item.itemId}
                price={props.item.price}
              />
              <Cancel
                data-target="#cancel"
                src={this.state.imgs}
                name={props.item.itemsku}
                productId={props.item.itemId}
                price={props.item.price}
              />
            </div>
          </div>
        </div>
      </li>
    );
  }
}
