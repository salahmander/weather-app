import rootReducer from "./index";

describe("rootReducer", () => {
  it("initializes the default state", () => {
    expect(rootReducer({}, {})).toEqual({
      weatherReducer: {
        city: "",
        weather: [],
        loading: true,
        error: "",
      },
    });
  });
});
