import React from "react";
import { Weather } from "./Weather";
import { shallow } from "enzyme";

import configureStore from "redux-mock-store";

describe("Weather container", () => {
  let wrapper;
  // our mock onfetchWeather function to replace the one provided by mapDispatchToProps
  const mockFetchWeather = jest.fn();
  const mockSetCity = jest.fn();

  beforeEach(() => {
    // pass the mock function as the onFetchWeather props
    wrapper = shallow(
      <Weather onfetchWeather={mockFetchWeather} onSetCity={mockSetCity} />
    );
  });

  it("renders without errors", () => {
    expect(wrapper.find(".weather-container").length).toBe(1);
  });
});
