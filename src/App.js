import React, { Component } from "react";

import Weather from "./container/weather/Weather";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Weather />
      </div>
    );
  }
}

export default App;
