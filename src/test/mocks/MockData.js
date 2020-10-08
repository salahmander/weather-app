export const weatherMock = {
  coord: { lon: -75.25, lat: 40.88 },
  weather: [
    { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" },
  ],
  base: "stations",
  main: {
    temp: 294.96,
    feels_like: 296.53,
    temp_min: 293.71,
    temp_max: 295.93,
    pressure: 1019,
    humidity: 80,
  },
  visibility: 10000,
  wind: { speed: 1.87, deg: 225 },
  clouds: { all: 97 },
  dt: 1601052334,
  sys: {
    type: 3,
    id: 2003566,
    country: "US",
    sunrise: 1601031116,
    sunset: 1601074381,
  },
  timezone: -14400,
  id: 5203809,
  name: "Northampton",
  cod: 200,
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
