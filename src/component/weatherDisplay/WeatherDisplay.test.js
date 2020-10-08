import React from "react";
import { shallow } from "enzyme";
import WeatherDisplay from "./WeatherDisplay";

import { weatherMock } from "../../test/mocks/MockData";

describe("WeatherDisplay", () => {
  const props = { weather: weatherMock };
  const weatherDisplay = shallow(<WeatherDisplay {...props} />);

  it("it renders without crashing", () => {
    expect(weatherDisplay.find(".information-container").length).toBe(1);
  });
});
