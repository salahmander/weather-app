import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  city: "",
  weather: [],
  loading: true,
  error: "",
};

const setCity = (state, action) => {
  return {
    ...state,
    city: action.city,
    loading: false,
  };
};

const setLoading = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const fetchWeatherSucess = (state, action) => {
  return {
    ...state,
    weather: action.weather,
    loading: false,
  };
};

const fetchWeatherFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CITY:
      return setCity(state, action);
    case actionTypes.FETCH_WEATHER_SUCCESS:
      return fetchWeatherSucess(state, action);
    case actionTypes.FETCH_WEATHER_FAIL:
      return fetchWeatherFail(state, action);
    case actionTypes.LOADING:
      return setLoading(state, action);
    default:
      return state;
  }
};

export default weatherReducer;
