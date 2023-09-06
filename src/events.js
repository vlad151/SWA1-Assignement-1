const Units = {
  C: "C",
  F: "F",
  MM: "mm",
  MS: "m/s",
  PERCENT: "%",
  INCHES: "inches",
  MPH: "mph",
};
const Type = {
  TEMPERATURE: "temperature",
  PRECIPITATION: "precipitation",
  WIND_SPEED: "wind speed",
  CLOUD_COVERAGE: "cloud_coverage",
};
const Place = {
  HORSENS: "Horsens",
  AARHUS: "Aarhus",
  COPENHAGEN: "Copenhagen",
};

function createEvent(time, place) {
  function getTime() {
    return time;
  }

  function getPlace() {
    return place;
  }
  return { getTime, getPlace };
}

function createWeatherData(time, place, value, type, unit) {
  let event;
  event = createEvent(time, place);

  function getValue() {
    return value;
  }
  function getType() {
    return type;
  }
  function getUnit() {
    return unit;
  }
  return { ...event, getValue, getType, getUnit };
}

function createTemperature(time, place, value, type, unit) {
  let weatherData;
  weatherData = createWeatherData(time, place, value, type, unit);

  function convertToF() {
    let fahrenheitValue;
    if (unit === Units.F) {
      fahrenheitValue = value;
    } else {
      fahrenheitValue = (value * 9) / 5 + 32;
    }
    return fahrenheitValue;
  }

  function convertToC() {
    let celsiusValue;
    if (unit === Units.C) {
      celsiusVsalue = value;
    } else {
      celsiusValue = (value - 32) / 1.8;
    }
    return celsiusValue;
  }
  return { ...weatherData, convertToF, convertToC };
}

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
function createWind(time, place, value, type, unit, direction) {
  let weatherData;
  weatherData = createWeatherData(time, place, value, type, unit);

  function getDirection() {
    return direction;
  }
  function convertToMPH() {
    const conversionFactor = 2.23694;
    let mphValue;
    if (unit === Units.MPH) {
      mphValue = value;
    } else {
      mphValue = value * conversionFactor;
    }
    return mphValue;
  }
  function convertToMS() {
    const conversionFactor = 0.44704;
    let msValue;
    if (unit === Units.MS) {
      msValue = value;
    } else {
      msValue = value * conversionFactor;
    }
    return msValue;
  }
  return { ...weatherData, getDirection, convertToMPH, convertToMS };
}

function createCloudCoverage(time, place, value, type, unit) {
  let weatherData;
  weatherData = createWeatherData(time, place, value, type, unit);
  return { ...weatherData };
}

function createWeatherPrediction(time, place, min, max, type, unit) {
  let event;
  event = createEvent(time, place);

  function getMax() {
    return max;
  }

  function getMin() {
    return min;
  }

  function getType() {
    return type;
  }
  function getUnit() {
    return unit;
  }
  function matches(data) {
    let inRange = false;
    if (data.unit === unit && data.type === type) {
      if (min <= data.value && max >= data.value) {
        inRange = true;
      }
    }
    return inRange;
  }
  return { ...event, matches, getMax, getMin, getType, getUnit };
}

function createTemperaturePrediction(time, place, min, max, type, unit) {
  let weatherPrediction;
  weatherData = createWeatherPrediction(time, place, min, max, type, unit);

  function convertToF() {
    let fahrenheitValue;
    if (unit === Units.F) {
      fahrenheitValue = value;
    } else {
      fahrenheitValue = (value * 9) / 5 + 32;
    }
    return fahrenheitValue;
  }

  function convertToC() {
    let celsiusValue;
    if (unit === Units.C) {
      celsiusVsalue = value;
    } else {
      celsiusValue = (value - 32) / 1.8;
    }
    return celsiusValue;
  }

  return { ...weatherPrediction, convertToF, convertToC };
}

function createPrecipitationPrediction(
  time,
  place,
  min,
  max,
  type,
  unit,
  precipitationTypes
) {
  let weatherPrediction;
  weatherPrediction = createWeatherPrediction(
    time,
    place,
    min,
    max,
    type,
    unit
  );
  function getExpectedTypes() {
    return precipitationTypes;
  }
  function matches(data) {
    if (data.type === type && data.unit === unit) {
      if (min <= data.value && data.value <= max) {
        if (precipitationTypes.includes(data.precipitationType)) {
          return true;
        }
      }
    }
    return false;
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
  return {
    ...weatherPrediction,
    getExpectedTypes,
    matches,
    convertToInches,
    convertToMM,
  };
}
function createWindPrediction(
  time,
  place,
  min,
  max,
  type,
  unit,
  expectedDirection
) {
  let weatherPrediction;
  weatherPrediction = createWeatherPrediction(
    time,
    place,
    min,
    max,
    type,
    unit
  );
  function getExpectedDirection() {
    return expectedDirection;
  }
  function matches(data) {
    let isMatching = false;
    if (data.type === type && data.unit === unit) {
      if (expectedDirection.includes(data.direction)) {
        isMatching = true;
      }
    }
    return isMatching;
  }
  function convertToMPH() {
    const conversionFactor = 2.23694;
    let mphValue;
    if (unit === Units.MPH) {
      mphValue = value;
    } else {
      mphValue = value * conversionFactor;
    }
    return mphValue;
  }
  function convertToMS() {
    const conversionFactor = 0.44704;
    let msValue;
    if (unit === Units.MS) {
      msValue = value;
    } else {
      msValue = value * conversionFactor;
    }
    return msValue;
  }
  return {
    ...weatherPrediction,
    getExpectedDirection,
    matches,
    convertToMPH,
    convertToMS,
  };
}

function createCloudCoveragePrediction(time, place, min, max, type, unit) {
  let weatherPrediction;
  weatherPrediction = createWeatherPrediction(
    time,
    place,
    min,
    max,
    type,
    unit
  );
  return { ...weatherPrediction };
}
