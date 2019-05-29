import React, { Component } from "react";
import Header from "./components/Header";
import OrderTable from "./components/OrderTable";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <OrderTable />
        <OrderTable />
      </div>
    );
  }
}

export default App;
