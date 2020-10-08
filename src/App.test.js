import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);
  
  it("renders without error", () => {
    expect(app.find(".app-container").length).toBe(1);
  });
});
