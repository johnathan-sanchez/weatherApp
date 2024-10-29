export const determineWeather = (temperature) => {
  if (temperature >= 95) {
    return "hot";
  }
  if (temperature >= 68) {
    return "warm";
  }
  if (temperature >= 50) {
    return "comfortable";
  }
  if (temperature >= 32) {
    return "cool";
  }
  if (temperature >= 14) {
    return "cold";
  }
  return "freezing";
};
