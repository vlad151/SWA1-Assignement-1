function createPrecipitation(
    time,
    place,
    value,
    type,
    unit,
    precipitationType
  ) {
    let weatherData;
    weatherData = createWeatherData(time, place, value, type, unit);
  
    function getPrecipitationType() {
      return precipitationType;
    }
    function convertToInches() {
      let inchesValue;
      if (unit === Units.INCHES) {
        inchesValue = value;
      } else {
        inchesValue = value / 25.4;
      }
      return inchesValue;
    }
    function convertToMM() {
      let mmValue;
      if ((unit = Units.MM)) {
        mmValue = value;
      } else {
        mmValue = value * 25.4;
      }
      return mmValue;
    }
    return { ...weatherData, getPrecipitationType, convertToInches, convertToMM };
  }
  