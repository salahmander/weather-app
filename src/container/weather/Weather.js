import React, { Component } from "react";
import { connect } from "react-redux";

import "./Weather.css";

import * as weatherActions from "../../store/actions/WeatherAction";

import WeatherSearch from "../../component/weatherSearch/WeatherSearch";
import WeatherDisplay from "../../component/weatherDisplay/WeatherDisplay";
import Spinner from "../../component/spinner/Spinner";

export class Weather extends Component {
  componentDidMount() {
    this.props.onSetCity("london");
    this.props.onfetchWeather("london");
  }

  render() {
    const { weather, loading } = this.props;
    return (
      <div className="weather-container">
        <WeatherSearch weather={weather} />
        {loading ? <Spinner /> : <WeatherDisplay weather={weather} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  weather: state.weatherReducer.weather,
  loading: state.weatherReducer.loading,
  error: state.weatherReducer.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchWeather: (city) => dispatch(weatherActions.fetchWeather(city)),
    onSetCity: (city) => dispatch(weatherActions.setCity(city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
