/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/xmlHttpRequest.js":
/*!***********************************!*\
  !*** ./src/api/xmlHttpRequest.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconsole.log(\"hello\")\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const citySelect = document.getElementById('city-select');\r\n  \r\n    citySelect.addEventListener('change', () => {\r\n      const selectedCity = citySelect.value;\r\n     // fetchWeatherData(selectedCity);\r\n      console.log(selectedCity, \"selected city\")\r\n    });\r\n  });\r\n  \r\n  function fetchWeatherData(city) {\r\n    const xhr = new XMLHttpRequest();\r\n    \r\n    xhr.open('GET', `http://localhost:8080/data?city=${city}`, true);\r\n    \r\n    xhr.onreadystatechange = () => {\r\n      if (xhr.readyState === 4) {\r\n        if (xhr.status === 200) {\r\n          const data = JSON.parse(xhr.responseText);\r\n          // Now data contains the weather data\r\n          // You can use this data to populate your HTML elements\r\n        } else {\r\n          console.error('Error fetching the weather data');\r\n        }\r\n      }\r\n    };\r\n    \r\n    xhr.send();\r\n  }\r\n  \n\n//# sourceURL=webpack://wacky_weather/./src/api/xmlHttpRequest.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/api/xmlHttpRequest.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;