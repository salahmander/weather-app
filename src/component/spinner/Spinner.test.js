import React from "react";
import { shallow } from "enzyme";
import Spinner from "./Spinner";

describe("Spinner", () => {
  const spinner = shallow(<Spinner />);

  it("it renders without error", () => {
    expect(spinner.find(".Loader").length).toBe(1);
  });
});
