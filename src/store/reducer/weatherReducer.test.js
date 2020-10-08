import weatherReducer from "./weatherReducer";
import * as actionTypes from "../actions/ActionTypes";
import { weatherMock } from "../../test/mocks/MockData";

const initialState = {
  city: "",
  weather: [],
  loading: true,
  error: "",
};

describe("weather reducer", () => {
  it("returns the initial state", () => {
    expect(weatherReducer(undefined, {})).toEqual(initialState);
  });

  it("sets a city", () => {
    const city = "London";
    expect(
      weatherReducer(initialState, { type: actionTypes.SET_CITY, city })
    ).toEqual({
      ...initialState,
      city: city,
      loading: false,
    });
  });

  it("sets `loading` to true", () => {
    expect(weatherReducer(initialState, { type: actionTypes.LOADING })).toEqual(
      {
        ...initialState,
        loading: true,
      }
    );
  });

  it("fetches and sets the weather data", () => {
    const weather = weatherMock;
    expect(
      weatherReducer(initialState, {
        type: actionTypes.FETCH_WEATHER_SUCCESS,
        weather,
      })
    ).toEqual({
      ...initialState,
      weather: weatherMock,
      loading: false,
    });
  });

  it("sets a error if it fails to fetch weather data", () => {
    const error = "404";
    expect(
      weatherReducer(initialState, {
        type: actionTypes.FETCH_WEATHER_FAIL,
        error,
      })
    ).toEqual({ ...initialState, error: error, loading: false });
  });
});
