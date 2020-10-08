import * as actionTypes from "./ActionTypes";
import axios from "axios";
import { API_KEY } from "../../constant";

export const setCity = (city) => {
  return {
    type: actionTypes.SET_CITY,
    city: city,
  };
};

export const setLoading = () => {
  return {
    type: actionTypes.LOADING,
  };
};

export const setWeatherSucess = (weather) => {
  return {
    type: actionTypes.FETCH_WEATHER_SUCCESS,
    weather: weather,
  };
};

export const setWeatherFail = (error) => {
  return {
    type: actionTypes.FETCH_WEATHER_FAIL,
    error: error,
  };
};

export const fetchWeather = (city) => {
  return (dispatch) => {
    dispatch(setLoading());
    return axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        dispatch(setWeatherSucess(response.data));
      })
      .catch((error) => {
        dispatch(setWeatherFail(error.message));
      });
  };
};
