import { todaysDate } from "./Utility";

import { days, months } from "../test/mocks/MockData";

describe("Date utility function", () => {
  const theDate = new Date();
  const day = days[theDate.getDay()];
  const date = theDate.getDate();
  const month = months[theDate.getMonth()];
  const year = theDate.getFullYear();
  const fullDate = `${day} ${date} ${month} ${year}`;

  it("returns todays date", () => {
    expect(todaysDate(theDate)).toEqual(fullDate);
  });
});
