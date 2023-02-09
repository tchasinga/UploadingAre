/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Upload.js":
/*!***********************!*\
  !*** ./src/Upload.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switcher\": () => (/* binding */ switcher)\n/* harmony export */ });\nconst switcher = () => {\r\n  var carousel = document.querySelector(\".carousel\");\r\n  var firstImage = carousel.querySelectorAll(\"img\")[0];\r\n  var arrowIcons = document.querySelectorAll(\".wrapper i\");\r\n\r\n  let isGragStart = false,\r\n    prevPageX,\r\n    prevScrollLeft;\r\n  let firstImageWidth = firstImage.clientWidth + 14;\r\n  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;\r\n\r\n\r\n  const autoSlide = () =>{\r\n    positiobDiff = Math.abs(positiobDiff);\r\n    let firstImageWidth = firstImage.clientWidth + 14;\r\n    let valDifference = firstImageWidth - positiobDiff;\r\n     console.log(positiobDiff);\r\n  }\r\n\r\n  let showHideIcon = () => {\r\n    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? \"none\" : \"block\";\r\n    arrowIcons[1].style.display =\r\n      carousel.scrollLeft == scrollWidth ? \"none\" : \"block\";\r\n  };\r\n\r\n  arrowIcons.forEach((icon) => {\r\n    icon.addEventListener(\"click\", () => {\r\n      carousel.scrollLeft +=\r\n        icon.id == \"left\" ? -firstImageWidth : firstImageWidth;\r\n      setTimeout(() => showHideIcon(), 60);\r\n    });\r\n  });\r\n\r\n  var DragStart = (e) => {\r\n    isGragStart = true;\r\n    prevPageX = e.pageX || e.touches[0].pageX;\r\n    prevScrollLeft = carousel.scrollLeft;\r\n  };\r\n\r\n  var dragging = (e) => {\r\n    if (!isGragStart) return;\r\n    e.preventDefault();\r\n    carousel.classList.add(\"dragging\");\r\n     positiobDiff =(e.pageX || e.touches[0].pageX) - prevPageX;\r\n    carousel.scrollLeft = prevScrollLeft - possitiobDiff;\r\n  };\r\n\r\n  var dragStop = () => {\r\n    isGragStart = false;\r\n    carousel.classList.remove(\"dragging\");\r\n    autoSlide();\r\n  };\r\n\r\n  carousel.addEventListener(\"mousedown\", DragStart);\r\n  carousel.addEventListener(\"touchstart\", DragStart);\r\n\r\n  carousel.addEventListener(\"mousemove\", dragging);\r\n  carousel.addEventListener(\"touchmove\", dragging);\r\n\r\n  carousel.addEventListener(\"mouseup\", dragStop);\r\n  carousel.addEventListener(\"mouseleave\", dragStop);\r\n  carousel.addEventListener(\"touchend\", dragStop);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2Utc3dpdGNoLy4vc3JjL1VwbG9hZC5qcz9lNTZlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzd2l0Y2hlciA9ICgpID0+IHtcclxuICB2YXIgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsXCIpO1xyXG4gIHZhciBmaXJzdEltYWdlID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKVswXTtcclxuICB2YXIgYXJyb3dJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3JhcHBlciBpXCIpO1xyXG5cclxuICBsZXQgaXNHcmFnU3RhcnQgPSBmYWxzZSxcclxuICAgIHByZXZQYWdlWCxcclxuICAgIHByZXZTY3JvbGxMZWZ0O1xyXG4gIGxldCBmaXJzdEltYWdlV2lkdGggPSBmaXJzdEltYWdlLmNsaWVudFdpZHRoICsgMTQ7XHJcbiAgbGV0IHNjcm9sbFdpZHRoID0gY2Fyb3VzZWwuc2Nyb2xsV2lkdGggLSBjYXJvdXNlbC5jbGllbnRXaWR0aDtcclxuXHJcblxyXG4gIGNvbnN0IGF1dG9TbGlkZSA9ICgpID0+e1xyXG4gICAgcG9zaXRpb2JEaWZmID0gTWF0aC5hYnMocG9zaXRpb2JEaWZmKTtcclxuICAgIGxldCBmaXJzdEltYWdlV2lkdGggPSBmaXJzdEltYWdlLmNsaWVudFdpZHRoICsgMTQ7XHJcbiAgICBsZXQgdmFsRGlmZmVyZW5jZSA9IGZpcnN0SW1hZ2VXaWR0aCAtIHBvc2l0aW9iRGlmZjtcclxuICAgICBjb25zb2xlLmxvZyhwb3NpdGlvYkRpZmYpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHNob3dIaWRlSWNvbiA9ICgpID0+IHtcclxuICAgIGFycm93SWNvbnNbMF0uc3R5bGUuZGlzcGxheSA9IGNhcm91c2VsLnNjcm9sbExlZnQgPT0gMCA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xyXG4gICAgYXJyb3dJY29uc1sxXS5zdHlsZS5kaXNwbGF5ID1cclxuICAgICAgY2Fyb3VzZWwuc2Nyb2xsTGVmdCA9PSBzY3JvbGxXaWR0aCA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xyXG4gIH07XHJcblxyXG4gIGFycm93SWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjYXJvdXNlbC5zY3JvbGxMZWZ0ICs9XHJcbiAgICAgICAgaWNvbi5pZCA9PSBcImxlZnRcIiA/IC1maXJzdEltYWdlV2lkdGggOiBmaXJzdEltYWdlV2lkdGg7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2hvd0hpZGVJY29uKCksIDYwKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgRHJhZ1N0YXJ0ID0gKGUpID0+IHtcclxuICAgIGlzR3JhZ1N0YXJ0ID0gdHJ1ZTtcclxuICAgIHByZXZQYWdlWCA9IGUucGFnZVggfHwgZS50b3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgcHJldlNjcm9sbExlZnQgPSBjYXJvdXNlbC5zY3JvbGxMZWZ0O1xyXG4gIH07XHJcblxyXG4gIHZhciBkcmFnZ2luZyA9IChlKSA9PiB7XHJcbiAgICBpZiAoIWlzR3JhZ1N0YXJ0KSByZXR1cm47XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XHJcbiAgICAgcG9zaXRpb2JEaWZmID0oZS5wYWdlWCB8fCBlLnRvdWNoZXNbMF0ucGFnZVgpIC0gcHJldlBhZ2VYO1xyXG4gICAgY2Fyb3VzZWwuc2Nyb2xsTGVmdCA9IHByZXZTY3JvbGxMZWZ0IC0gcG9zc2l0aW9iRGlmZjtcclxuICB9O1xyXG5cclxuICB2YXIgZHJhZ1N0b3AgPSAoKSA9PiB7XHJcbiAgICBpc0dyYWdTdGFydCA9IGZhbHNlO1xyXG4gICAgY2Fyb3VzZWwuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpO1xyXG4gICAgYXV0b1NsaWRlKCk7XHJcbiAgfTtcclxuXHJcbiAgY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBEcmFnU3RhcnQpO1xyXG4gIGNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIERyYWdTdGFydCk7XHJcblxyXG4gIGNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZHJhZ2dpbmcpO1xyXG4gIGNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZHJhZ2dpbmcpO1xyXG5cclxuICBjYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBkcmFnU3RvcCk7XHJcbiAgY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZHJhZ1N0b3ApO1xyXG4gIGNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBkcmFnU3RvcCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Upload.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Upload */ \"./src/Upload.js\");\n\r\nconsole.log(_Upload__WEBPACK_IMPORTED_MODULE_0__.switcher());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBbUM7QUFDbkMsWUFBWSw2Q0FBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLXN3aXRjaC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFVwbG9hZCBmcm9tIFwiLi9VcGxvYWRcIjtcclxuY29uc29sZS5sb2coVXBsb2FkLnN3aXRjaGVyKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;