import React from "react";
import { shallow } from "enzyme";
import { WeatherSearch } from "./WeatherSearch";

describe("WeatherSearch", () => {
  let wrapper;
  // our mock onfetchWeather function to replace the one provided by mapDispatchToProps
  const mockFetchWeather = jest.fn();
  const mockSetCity = jest.fn();

  beforeEach(() => {
    // pass the mock function as the onFetchWeather props
    wrapper = shallow(
      <WeatherSearch
        onfetchWeather={mockFetchWeather}
        onSetCity={mockSetCity}
      />
    );
  });

  it("renders without errors", () => {
    expect(wrapper.find(".search-container").length).toBe(1);
  });

  describe("when the city name is submitted", () => {
    const city = "London";
    const fieldName = ".search-bar";
    const enter = 13;

    afterEach(() => {
      jest.clearAllMocks(); 
    });

    it("should call the mock FetchWeather function", () => {
      wrapper.find(fieldName).simulate("keypress", { keyCode: enter });
      expect(mockFetchWeather.mock.calls.length).toBe(1);
    });
    it("should call the mock SetCity function", () => {
      wrapper.find(fieldName).simulate("keypress", { keyCode: enter });
      expect(mockSetCity.mock.calls.length).toBe(1);
    });
    it("should be called with city in the state as arguments", () => {
      // fill  in the search field with London
      wrapper.find(fieldName).simulate("change", { target: { value: city } });
      wrapper.find(fieldName).simulate("keypress", { keyCode: enter });

      expect(mockFetchWeather.mock.calls[0][0]).toEqual(city);
    });
  });
});
