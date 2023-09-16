/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    font-family: 'Arial';\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #f0f0f0;\r\n}\r\n\r\nnav {\r\n    background-color: #333;\r\n    padding: 1em;\r\n    color: #f0f0f0; \r\n}\r\n\r\nnav ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n\r\nnav li {\r\n    margin-right: 1em;\r\n}\r\n\r\nnav a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    color: #f0f0f0;\r\n}\r\n\r\nnav a:hover {\r\n    text-decoration: underline;\r\n    color: #b5b5b5;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 1em;\r\n    color: #333;\r\n}\r\n\r\nsection {\r\n    background-color: #fff;\r\n    margin: 1em;\r\n    padding: 1em;\r\n    border-radius: 8px;\r\n}\r\n\r\nsection h2 {\r\n    margin-top: 0;\r\n}\r\n\r\nform {\r\n    background-color: #fff;\r\n    margin: 1em;\r\n    padding: 1em;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n}\r\n\r\nform label {\r\n    margin-bottom: 0.5em;\r\n}\r\n\r\nform input {\r\n    margin-bottom: 1em;\r\n    padding: 0.5em;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\n\r\nform button {\r\n    padding: 0.5em 1em;\r\n    border: none;\r\n    border-radius: 4px;\r\n    background-color: #28a745;\r\n    color: #fff;\r\n    font-size: 1em;\r\n    cursor: pointer;\r\n}\r\n\r\nform button:hover {\r\n    background-color: #218838;\r\n}\r\n\r\n.city-select-container {\r\n    background-color: #fff;\r\n    padding: 1em;\r\n    border-radius: 8px;\r\n    margin: 1em;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.city-select-container label {\r\n    margin-right: 1em;\r\n}\r\n\r\n.city-select-container select {\r\n    padding: 0.5em;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    font-size: 1em;\r\n}\r\n\r\n.nav-header {\r\n    margin-bottom: 0.5em;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.card{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: aquamarine;\r\n    opacity: 0.5;\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    width: 70px;\r\n    height: 70px;\r\n}\r\n\r\ntr{\r\n    display: flex;\r\n    height:120px;\r\n}\r\ntd{\r\n    width: 90px;\r\n    height: 90px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n    margin: 2px;\r\n} \r\n#forecastSection{\r\n    width: 100%;\r\n    height: 600px;\r\n    overflow: scroll;\r\n    overflow-y: hidden;\r\n}\r\n#time_header{\r\n    height: 30px;\r\n}\r\n th{\r\n    width: 90px;\r\n    border: 1px solid transparent;\r\n    padding: 5px;\r\n    margin: 2px;  \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nsvg{\r\n    cursor: pointer;\r\n    margin-left: 5px;\r\n}\r\n#latest-measurements{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n\r\n}\r\n.measurement{\r\n    width: 120px;\r\n    margin: 5px;\r\n    border: 1px solid black;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n}\r\n\r\nform {\r\n    background-color: #fff;\r\n    margin: 1em;\r\n    padding: 1em;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n\r\n}\r\n\r\nform#weather-data-form {\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center; /* Centers the divs horizontally within the form */\r\n}\r\n\r\nform#weather-data-form div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    margin-right: 10em; /* Adds some margin to the right of each div to give them a bit of space */\r\n}\r\n\r\n#wind-label {\r\n    margin-top: 1em;\r\n}\r\n\r\n\r\n\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://wacky_weather/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://wacky_weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://wacky_weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t=1e3,e=6e4,n=36e5,r=\"millisecond\",i=\"second\",s=\"minute\",u=\"hour\",a=\"day\",o=\"week\",c=\"month\",f=\"quarter\",h=\"year\",d=\"date\",l=\"Invalid Date\",$=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\"),ordinal:function(t){var e=[\"th\",\"st\",\"nd\",\"rd\"],n=t%100;return\"[\"+t+(e[(n-20)%10]||e[n]||e[0])+\"]\"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+m(r,2,\"0\")+\":\"+m(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},g=\"en\",D={};D[g]=M;var p=function(t){return t instanceof b},S=function t(e,n,r){var i;if(!e)return g;if(\"string\"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split(\"-\");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,f=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate(\"s\"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v=\"set\"+(this.$u?\"UTC\":\"\");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+\"Hours\",0);case u:return $(v+\"Minutes\",1);case s:return $(v+\"Seconds\",2);case i:return $(v+\"Milliseconds\",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),f=\"set\"+(this.$u?\"UTC\":\"\"),l=(n={},n[a]=f+\"Date\",n[d]=f+\"Date\",n[c]=f+\"Month\",n[h]=f+\"FullYear\",n[u]=f+\"Hours\",n[s]=f+\"Minutes\",n[i]=f+\"Seconds\",n[r]=f+\"Milliseconds\",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=O.p(f),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||\"YYYY-MM-DDTHH:mm:ssZ\",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return O.s(s%12||12,t,\"0\")},$=f||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case\"YY\":return String(e.$y).slice(-2);case\"YYYY\":return O.s(e.$y,4,\"0\");case\"M\":return a+1;case\"MM\":return O.s(a+1,2,\"0\");case\"MMM\":return h(n.monthsShort,a,c,3);case\"MMMM\":return h(c,a);case\"D\":return e.$D;case\"DD\":return O.s(e.$D,2,\"0\");case\"d\":return String(e.$W);case\"dd\":return h(n.weekdaysMin,e.$W,o,2);case\"ddd\":return h(n.weekdaysShort,e.$W,o,3);case\"dddd\":return o[e.$W];case\"H\":return String(s);case\"HH\":return O.s(s,2,\"0\");case\"h\":return d(1);case\"hh\":return d(2);case\"a\":return $(s,u,!0);case\"A\":return $(s,u,!1);case\"m\":return String(u);case\"mm\":return O.s(u,2,\"0\");case\"s\":return String(e.$s);case\"ss\":return O.s(e.$s,2,\"0\");case\"SSS\":return O.s(e.$ms,3,\"0\");case\"Z\":return i}return null}(t)||i.replace(\":\",\"\")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=O.p(d),m=w(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return O.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:O.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),_=b.prototype;return w.prototype=_,[[\"$ms\",r],[\"$s\",i],[\"$m\",s],[\"$H\",u],[\"$W\",a],[\"$M\",c],[\"$y\",h],[\"$D\",d]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,b,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));\n\n//# sourceURL=webpack://wacky_weather/./node_modules/dayjs/dayjs.min.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://wacky_weather/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://wacky_weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://wacky_weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://wacky_weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://wacky_weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://wacky_weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://wacky_weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api/sendWeatherDataHttp.js":
/*!****************************************!*\
  !*** ./src/api/sendWeatherDataHttp.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/styles.css */ \"./src/styles.css\");\n/* harmony import */ var _objects_temperature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/temperature.js */ \"./src/objects/temperature.js\");\n/* harmony import */ var _objects_precipitation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/precipitation.js */ \"./src/objects/precipitation.js\");\n/* harmony import */ var _objects_cloudCoverage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/cloudCoverage.js */ \"./src/objects/cloudCoverage.js\");\n/* harmony import */ var _objects_wind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../objects/wind.js */ \"./src/objects/wind.js\");\n/* harmony import */ var _objects_places_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../objects/places.js */ \"./src/objects/places.js\");\n/* harmony import */ var _objects_types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../objects/types.js */ \"./src/objects/types.js\");\n/* harmony import */ var _objects_units_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../objects/units.js */ \"./src/objects/units.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', (event) => {\r\n    document.getElementById('weather-data-form').addEventListener('submit', (event) => {\r\n        event.preventDefault();\r\n\r\n            const city = document.getElementById('city-select').value;\r\n            const time = dayjs__WEBPACK_IMPORTED_MODULE_8__()\r\n            const temp = document.getElementById('temperature-value').value;\r\n            const tempUnit = document.getElementById('temperature-unit').value;\r\n            const precipitationValue = document.getElementById('precipitation-value').value;\r\n            const precipitationType = document.getElementById('precipitation-type').value;\r\n            const precipitationUnit = document.getElementById('precipitation-unit').value;\r\n            const windValue = document.getElementById('wind-value').value;\r\n            const windDirection = document.getElementById('wind-direction').value;\r\n            const windUnit = document.getElementById('wind-unit').value;\r\n            const cloudCoverageValue = document.getElementById('cloudCoverage-value').value;\r\n\r\n            const temp1 = (0,_objects_temperature_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(time, city, temp, _objects_types_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].TEMPERATURE, tempUnit);\r\n            const precip1 = (0,_objects_precipitation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(time, city, precipitationValue, _objects_types_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].PRECIPITATION, precipitationUnit, precipitationType);\r\n            const cloudCoverage1 = (0,_objects_cloudCoverage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(time, city, cloudCoverageValue, _objects_types_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CLOUD_COVERAGE, _objects_units_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].PERCENT);\r\n            const wind1 = (0,_objects_wind_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(time, city, windValue, _objects_types_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].WIND_SPEED, windUnit, windDirection);\r\n            \r\n         const weatherData = [temp1, precip1, cloudCoverage1, wind1] \r\n  \r\n        \r\n    \r\n\r\n        sendWeatherData(weatherData);\r\n    });\r\n});\r\n\r\n\r\n\r\nfunction sendWeatherData(weatherData) {\r\n    const xhr = new XMLHttpRequest();\r\n    xhr.open(\"POST\", \"http://localhost:8080/data\", true);\r\n    xhr.setRequestHeader(\"Content-Type\", \"application/json\");\r\n    xhr.send(JSON.stringify(weatherData));\r\n    xhr.onload = () => {\r\n        if (xhr.status === 201) {\r\n            alert(\"Data sent successfully\");         \r\n        } else {\r\n            alert(\"Error sending data\");\r\n        }\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://wacky_weather/./src/api/sendWeatherDataHttp.js?");

/***/ }),

/***/ "./src/objects/cloudCoverage.js":
/*!**************************************!*\
  !*** ./src/objects/cloudCoverage.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cloudCoverage)\n/* harmony export */ });\n/* harmony import */ var _weatherData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData.js */ \"./src/objects/weatherData.js\");\n/* harmony import */ var _objects_places_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/places.js */ \"./src/objects/places.js\");\n/* harmony import */ var _objects_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/types.js */ \"./src/objects/types.js\");\n/* harmony import */ var _objects_units_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/units.js */ \"./src/objects/units.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction cloudCoverage(time, place, value, type, unit) {\r\n  let _weatherData = (0,_weatherData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(time, place, value, type, unit);\r\n  return {\r\n    time: time,\r\n    place: place,\r\n    value: value,\r\n    type: type,\r\n    unit: unit,\r\n  };\r\n  //return { ..._weatherData };\r\n}\r\n\r\n// Tests\r\n/* \r\nlet cloudCoverage1 = cloudCoverage(\"2020-10-10\", Place.HORSENS, 70, Type.CLOUD_COVERAGE, Units.PERCENT, \"North\");\r\nconsole.log(cloudCoverage1.getValue()); // 70\r\nconsole.log(cloudCoverage1.getType()); // \"CloudCoverage\"\r\nconsole.log(cloudCoverage1.getUnit()); // Units.PERCENTAGE\r\nconsole.log(cloudCoverage1.getTime()); // \"2020-10-10\"\r\nconsole.log(cloudCoverage1.getPlace()); // \"Horsens\"\r\n\r\nlet cloudCoverage2 = cloudCoverage(\"2020-10-11\", Place.COPENHAGEN, 50, Type.CLOUD_COVERAGE, Units.PERCENT, \"East\");\r\nconsole.log(cloudCoverage2.getValue()); // 50\r\nconsole.log(cloudCoverage2.getType()); // \"CloudCoverage\"\r\nconsole.log(cloudCoverage2.getUnit()); // Units.PERCENTAGE\r\nconsole.log(cloudCoverage2.getTime()); // \"2020-10-11\"\r\nconsole.log(cloudCoverage2.getPlace()); // \"Copenhagen\"\r\n */\n\n//# sourceURL=webpack://wacky_weather/./src/objects/cloudCoverage.js?");

/***/ }),

/***/ "./src/objects/event.js":
/*!******************************!*\
  !*** ./src/objects/event.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ event)\n/* harmony export */ });\n\r\n\r\nfunction event(time, place) {\r\n  function getTime() {\r\n    return time;\r\n  }\r\n\r\n  function getPlace() {\r\n    return place;\r\n  }\r\n  return { getTime, getPlace };\r\n}\r\n\r\n//Tests\r\n/* \r\nlet temp1 = event(\"2020-10-10\", Place.HORSENS);\r\nconsole.log(temp1.getTime());\r\nconsole.log(temp1.getPlace()); \r\n */\n\n//# sourceURL=webpack://wacky_weather/./src/objects/event.js?");

/***/ }),

/***/ "./src/objects/places.js":
/*!*******************************!*\
  !*** ./src/objects/places.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Place = {\r\n    HORSENS: \"Horsens\",\r\n    AARHUS: \"Aarhus\",\r\n    COPENHAGEN: \"Copenhagen\",\r\n  };\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Place);\n\n//# sourceURL=webpack://wacky_weather/./src/objects/places.js?");

/***/ }),

/***/ "./src/objects/precipitation.js":
/*!**************************************!*\
  !*** ./src/objects/precipitation.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ precipitation)\n/* harmony export */ });\n/* harmony import */ var _weatherData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData.js */ \"./src/objects/weatherData.js\");\n/* harmony import */ var _units_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units.js */ \"./src/objects/units.js\");\n/* harmony import */ var _objects_places_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/places.js */ \"./src/objects/places.js\");\n/* harmony import */ var _objects_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/types.js */ \"./src/objects/types.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction precipitation(\r\n  time,\r\n  place,\r\n  value,\r\n  type,\r\n  unit,\r\n  precipitationType\r\n) {\r\n  let _weatherData = (0,_weatherData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(time, place, value, type, unit);\r\n\r\n  function getPrecipitationType() {\r\n    return precipitationType;\r\n  }\r\n\r\n  function convertToInches() {\r\n    return unit === _units_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].INCHES ? value : value / 25.4;\r\n  }\r\n\r\n  function convertToMM() {\r\n    return unit === _units_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MM ? value : value * 25.4;\r\n  }\r\n\r\n\r\n  return {\r\n    time: time,\r\n    place: place,\r\n    value: value,\r\n    type: type,\r\n    unit: unit,\r\n    precipitation_type: precipitationType,\r\n  };\r\n/*   return {\r\n    ..._weatherData,\r\n    getPrecipitationType,\r\n    convertToInches,\r\n    convertToMM,\r\n  }; */\r\n}\r\n\r\n\r\n// Tests\r\n\r\n/* \r\nlet precip1 = precipitation(\"2020-10-10\", Place.HORSENS, 100, Type.PRECIPITATION, Units.MM, \"Rain\");\r\nconsole.log(precip1.getPrecipitationType()); // \"Rain\"\r\nconsole.log(precip1.convertToInches()); // Approximately 3.937\r\nconsole.log(precip1.convertToMM()); // 100\r\nconsole.log(precip1.getValue()); // 100\r\nconsole.log(precip1.getType()); // \"Precipitation\"\r\nconsole.log(precip1.getUnit()); // Units.MM\r\nconsole.log(precip1.getTime()); // \"2020-10-10\"\r\nconsole.log(precip1.getPlace()); // \"Horsens\"\r\n\r\nlet precip2 = precipitation(\"2020-10-10\", Place.HORSENS, 3.937, Type.PRECIPITATION, Units.INCHES, \"Rain\");\r\nconsole.log(precip2.getPrecipitationType()); // \"Rain\"\r\nconsole.log(precip2.convertToInches()); // 3.937\r\nconsole.log(precip2.convertToMM()); // Approximately 100\r\nconsole.log(precip2.getValue()); // 3.937\r\nconsole.log(precip2.getType()); // \"Precipitation\"\r\nconsole.log(precip2.getUnit()); // Units.INCHES\r\nconsole.log(precip2.getTime()); // \"2020-10-10\"\r\nconsole.log(precip2.getPlace()); // \"Horsens\" \r\n */\n\n//# sourceURL=webpack://wacky_weather/./src/objects/precipitation.js?");

/***/ }),

/***/ "./src/objects/temperature.js":
/*!************************************!*\
  !*** ./src/objects/temperature.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ temperature)\n/* harmony export */ });\n/* harmony import */ var _weatherData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData.js */ \"./src/objects/weatherData.js\");\n/* harmony import */ var _units_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units.js */ \"./src/objects/units.js\");\n\r\n\r\n\r\n\r\nfunction temperature(time, place, value, type, unit) {\r\n  let _weatherData = (0,_weatherData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(time, place, value, type, unit);\r\n  \r\n  function convertToF() {\r\n    return unit === _units_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].F ? value : (value * 9) / 5 + 32;\r\n  }\r\n\r\n  function convertToC() {\r\n    return unit === _units_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].C ? value : (value - 32) / 1.8;\r\n  }\r\n  \r\n\r\n  return {\r\n    time: time,\r\n    place: place,\r\n    value: value,\r\n    type: type,\r\n    unit: unit,\r\n  };\r\n //return { ..._weatherData, convertToF, convertToC };\r\n  }\r\n\r\n  // Tests\r\n/*   \r\nlet temp1 = temperature(\"2020-10-10\", Place.HORSENS, 0, Type.TEMPERATURE, Units.C);\r\nconsole.log(temp1.convertToF()); // 32\r\nconsole.log(temp1.convertToC()); // 0\r\nconsole.log(temp1.getValue()); // 0\r\nconsole.log(temp1.getType()); // \"Temp\"\r\nconsole.log(temp1.getUnit()); // Units.C\r\nconsole.log(temp1.getTime()); // \"2020-10-10\"\r\nconsole.log(temp1.getPlace()); // \"Horsens\"\r\n\r\nlet temp2 = temperature(\"2020-10-10\", Place.HORSENS, 32, Type.TEMPERATURE, Units.F);\r\nconsole.log(temp2.convertToF()); // 32\r\nconsole.log(temp2.convertToC()); // 0\r\nconsole.log(temp2.getValue()); // 32\r\nconsole.log(temp2.getType()); // \"Temp\"\r\nconsole.log(temp2.getUnit()); // Units.F\r\nconsole.log(temp2.getTime()); // \"2020-10-10\"\r\nconsole.log(temp2.getPlace()); // \"Horsens\" \r\n */\n\n//# sourceURL=webpack://wacky_weather/./src/objects/temperature.js?");

/***/ }),

/***/ "./src/objects/types.js":
/*!******************************!*\
  !*** ./src/objects/types.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Type = {\r\n    TEMPERATURE: \"temperature\",\r\n    PRECIPITATION: \"precipitation\",\r\n    WIND_SPEED: \"wind speed\",\r\n    CLOUD_COVERAGE: \"cloud coverage\",\r\n  };\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Type); \n\n//# sourceURL=webpack://wacky_weather/./src/objects/types.js?");

/***/ }),

/***/ "./src/objects/units.js":
/*!******************************!*\
  !*** ./src/objects/units.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Units = {\r\n    C: \"C\",\r\n    F: \"F\",\r\n    MM: \"mm\",\r\n    MS: \"m/s\",\r\n    PERCENT: \"%\",\r\n    INCHES: \"inches\",\r\n    MPH: \"mph\",\r\n  };\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Units);\n\n//# sourceURL=webpack://wacky_weather/./src/objects/units.js?");

/***/ }),

/***/ "./src/objects/weatherData.js":
/*!************************************!*\
  !*** ./src/objects/weatherData.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ weatherData)\n/* harmony export */ });\n/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ \"./src/objects/event.js\");\n\r\n\r\n\r\nfunction weatherData(time, place, value, type, unit) {\r\n  \r\n    let _event;\r\n    _event = (0,_event_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(time, place);\r\n  \r\n    function getValue() {\r\n      return value;\r\n    }\r\n    function getType() {\r\n      return type;\r\n    }\r\n    function getUnit() {\r\n      return unit;\r\n    }\r\n    return { ..._event, getValue, getType, getUnit };\r\n  }\r\n\r\n//Tests\r\n/* \r\n  let temp1 = weatherData(\"2020-10-10\", Place.HORSENS, 10, Type.TEMPERATURE, Units.C);\r\n  console.log(temp1.getValue())\r\n  console.log(temp1.getType())\r\n  console.log(temp1.getUnit())\r\n  console.log(temp1.getTime())\r\n  console.log(temp1.getPlace()) \r\n*/\n\n//# sourceURL=webpack://wacky_weather/./src/objects/weatherData.js?");

/***/ }),

/***/ "./src/objects/wind.js":
/*!*****************************!*\
  !*** ./src/objects/wind.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ wind)\n/* harmony export */ });\n/* harmony import */ var _weatherData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData.js */ \"./src/objects/weatherData.js\");\n/* harmony import */ var _units_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units.js */ \"./src/objects/units.js\");\n\r\n\r\n\r\n\r\n\r\nfunction wind(time, place, value, type, unit, direction) {\r\n  let _weatherData = (0,_weatherData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(time, place, value, type, unit);\r\n\r\n  function getDirection() {\r\n    return direction;\r\n  }\r\n\r\n  function convertToMPH() {\r\n    return unit === _units_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MPH ? value : value * 2.23694;\r\n  }\r\n\r\n  function convertToMS() {\r\n    return unit === _units_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MS ? value : value * 0.44704;;\r\n  }\r\n\r\n  return {\r\n    time: time,\r\n    place: place,\r\n    value: value,\r\n    type: type,\r\n    unit: unit,\r\n    direction: direction,\r\n  };\r\n\r\n  //return { ..._weatherData, getDirection, convertToMPH, convertToMS };\r\n}\r\n\r\n// Tests\r\n/* \r\nlet wind1 = wind(\"2020-10-10\", Place.HORSENS, 10, Type.WIND_SPEED, Units.MS, \"North\");\r\nconsole.log(wind1.getDirection()); // \"North\"\r\nconsole.log(wind1.convertToMPH()); // Approximately 22.3694\r\nconsole.log(wind1.convertToMS()); // 10\r\nconsole.log(wind1.getValue()); // 10\r\nconsole.log(wind1.getType()); // \"Wind\"\r\nconsole.log(wind1.getUnit()); // Units.MS\r\nconsole.log(wind1.getTime()); // \"2020-10-10\"\r\nconsole.log(wind1.getPlace()); // \"Horsens\"\r\n\r\nlet wind2 = wind(\"2020-10-10\", Place.HORSENS, 22.3694, Type.WIND_SPEED, Units.MPH, \"North\");\r\nconsole.log(wind2.getDirection()); // \"North\"\r\nconsole.log(wind2.convertToMPH()); // 22.3694\r\nconsole.log(wind2.convertToMS()); // Approximately 10\r\nconsole.log(wind2.getValue()); // 22.3694\r\nconsole.log(wind2.getType()); // \"Wind\"\r\nconsole.log(wind2.getUnit()); // Units.MPH\r\nconsole.log(wind2.getTime()); // \"2020-10-10\"\r\nconsole.log(wind2.getPlace()); // \"Horsens\"\r\n */\n\n//# sourceURL=webpack://wacky_weather/./src/objects/wind.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/api/sendWeatherDataHttp.js");
/******/ 	
/******/ })()
;