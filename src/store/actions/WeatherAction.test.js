import * as types from "./ActionTypes";
import * as actions from "./WeatherAction";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import { weatherMock } from "../../test/mocks/MockData";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("action", () => {
  it("creates an action to set the city", () => {
    const city = "Northampton";
    const expectedAction = {
      type: types.SET_CITY,
      city,
    };
    expect(actions.setCity(city)).toEqual(expectedAction);
  });

  it("creates an action to set loading", () => {
    const expectedAction = {
      type: types.LOADING,
    };
    expect(actions.setLoading()).toEqual(expectedAction);
  });

  it("creates an action to set the weather", () => {
    const weather = {
      weather: weatherMock,
    };
    const expectedAction = {
      type: types.FETCH_WEATHER_SUCCESS,
      weather,
    };
    expect(actions.setWeatherSucess(weather)).toEqual(expectedAction);
  });

  it("creates an action to set the error", () => {
    const error = "Request failed with status code 404";

    const expectedAction = {
      type: types.FETCH_WEATHER_FAIL,
      error,
    };
    expect(actions.setWeatherFail(error)).toEqual(expectedAction);
  });

  describe("fetchWeather action", () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it("creates FETCH_WEATHER_SUCCESS after sucessfuly fetching weather data", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: weatherMock,
        });
      });

      const expectedAction = [
        { type: types.LOADING },
        { type: types.FETCH_WEATHER_SUCCESS, weather: weatherMock },
      ];

      const store = mockStore({ weather: {} });

      return store.dispatch(actions.fetchWeather()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it("creates FETCH_WEATHER_FAIL after failing to fetch weather data", () => {
      const randomText = "adpwapawdpdaw";
      const errorMessage = "Request failed with status code 404";
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: randomText,
        });
      });

      const expectedAction = [
        { type: types.LOADING },
        { type: types.FETCH_WEATHER_FAIL, error: errorMessage },
      ];

      const store = mockStore({ error: "" });

      return store.dispatch(actions.fetchWeather()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});
