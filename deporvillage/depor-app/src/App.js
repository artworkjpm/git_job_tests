import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Details from "./components/Details";
import Liked from "./components/Liked";
import Header from "./components/Header";
import OrderTable from "./components/Orders";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route exact path="/" render={() => <OrderTable />} />
          <Route path="/details" component={Details} />
          <Route path="/liked" component={Liked} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
