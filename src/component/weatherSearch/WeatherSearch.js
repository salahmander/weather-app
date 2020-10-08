import React, { Component } from "react";

import { connect } from "react-redux";

import "./WeatherSearch.css";

import * as weatherActions from "../../store/actions/WeatherAction";

export class WeatherSearch extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
    };
  }
  cityNameChangeHandler = (event) => {
    this.setState({ city: event.target.value });
  };
  cityNameSubmitHandler = (event) => {
    let code = event.keyCode || event.which;
    if (code === 13) {
      this.props.onSetCity(this.state.city);
      this.props.onfetchWeather(this.state.city);
    }
  };
  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="London, GB..."
          onKeyPress={this.cityNameSubmitHandler}
          onChange={this.cityNameChangeHandler}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCity: (city) => dispatch(weatherActions.setCity(city)),
    onfetchWeather: (city) => dispatch(weatherActions.fetchWeather(city)),
  };
};

export default connect(null, mapDispatchToProps)(WeatherSearch);
