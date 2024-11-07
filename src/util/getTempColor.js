const COLOR_STOPS = [
  { temp: 40, rgb: [0, 0, 139] }, // Dark blue
  { temp: 50, rgb: [173, 216, 230] }, // Light blue
  { temp: 60, rgb: [152, 251, 152] }, // Green
  { temp: 70, rgb: [255, 255, 0] }, // Yellow
  { temp: 80, rgb: [255, 215, 0] }, // Gold
  { temp: 90, rgb: [255, 165, 0] }, // Orange
  { temp: 100, rgb: [255, 0, 0] }, // Red
];

export const getTempColor = (temp) => {
  const minTemp = COLOR_STOPS[0].temp;
  const maxTemp = COLOR_STOPS[COLOR_STOPS.length - 1].temp;

  if (temp <= minTemp) {
    const [red, green, blue] = COLOR_STOPS[0].rgb;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  if (temp >= maxTemp) {
    const [red, green, blue] = COLOR_STOPS[COLOR_STOPS.length - 1].rgb;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  for (let i = 0; i < COLOR_STOPS.length - 1; i++) {
    const start = COLOR_STOPS[i];
    const end = COLOR_STOPS[i + 1];

    if (temp >= start.temp && temp <= end.temp) {
      const proportion = (temp - start.temp) / (end.temp - start.temp);
      const red = Math.round(
        start.rgb[0] + proportion * (end.rgb[0] - start.rgb[0])
      );
      const green = Math.round(
        start.rgb[1] + proportion * (end.rgb[1] - start.rgb[1])
      );
      const blue = Math.round(
        start.rgb[2] + proportion * (end.rgb[2] - start.rgb[2])
      );
      return `rgb(${red}, ${green}, ${blue})`;
    }
  }

  throw new Error(`Could not find a color for temperature: ${temp}`);
};
