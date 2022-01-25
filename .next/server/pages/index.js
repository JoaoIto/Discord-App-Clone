module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: name, theme, stickers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Aluracord - Matrix (peas)\",\"theme\":{\"colors\":{\"primary\":{\"100\":\"#C1EAC5\",\"200\":\"#A3D9A5\",\"300\":\"#7BC47F\",\"400\":\"#57AE5B\",\"500\":\"#3F9142\",\"600\":\"#2F8132\",\"700\":\"#207227\",\"800\":\"#0E5814\",\"900\":\"#05400A\",\"050\":\"#E3F9E5\"},\"neutrals\":{\"100\":\"#E4E7EB\",\"200\":\"#CBD2D9\",\"300\":\"#9AA5B1\",\"400\":\"#52667A\",\"500\":\"#313D49\",\"600\":\"#29333D\",\"700\":\"#212931\",\"800\":\"#181F25\",\"900\":\"#101418\",\"999\":\"#080A0C\",\"000\":\"#FFFFFF\",\"050\":\"#F5F7FA\"}}},\"stickers\":[\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_4.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_8.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_9.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_10.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_12.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_14.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_16.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_17.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_18.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_21.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_22.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_23.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_24.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_25.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_26.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_27.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png\",\"https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png\",\"http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif\",\"https://media1.giphy.com/media/BdghqxNFV4efm/200.gif\",\"https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif\",\"https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif\",\"https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif\",\"https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif\"]}");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaginaInicial; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ "@skynexui/components");
/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.json */ "./config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config.json */ "./config.json", 1);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\muril\\Documents\\GitHub\\Projetos-Front-End\\AluraDev\\React\\alura_discord\\pages\\index.js";






function GlobalStyle() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2232945979",
    children: "*{margin:0;padding:0;box-sizing:border-box;list-style:none;}body{font-family:'Open Sans',sans-serif;}html,body,#__next{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;}#__next{-webkit-flex:1;-ms-flex:1;flex:1;}#__next>*{-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbXVyaWxcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZXRvcy1Gcm9udC1FbmRcXEFsdXJhRGV2XFxSZWFjdFxcYWx1cmFfZGlzY29yZFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUt1QixBQUdrQixBQU0yQixBQU1uQixBQUtWLEFBR0EsU0FuQkcsUUFZRyxFQVhTLGNBZ0J4QixBQUdBLEVBZEEsTUFKa0IsZ0JBQ2xCLGtDQVVTLGlDQUNUIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbXVyaWxcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZXRvcy1Gcm9udC1FbmRcXEFsdXJhRGV2XFxSZWFjdFxcYWx1cmFfZGlzY29yZFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcclxuXHJcbmZ1bmN0aW9uIEdsb2JhbFN0eWxlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAqIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIEFwcCBmaXQgSGVpZ2h0ICovXHJcbiAgICAgIGh0bWwsXHJcbiAgICAgIGJvZHksXHJcbiAgICAgICNfX25leHQge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgICAjX19uZXh0IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICAgICNfX25leHQgPiAqIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIC4vQXBwIGZpdCBIZWlnaHQgKi9cclxuICAgIGB9PC9zdHlsZT5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaXR1bG8ocHJvcHMpIHtcclxuICBjb25zdCBUYWcgPSBwcm9wcy50YWcgfHwgXCJoMVwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICR7VGFnfSB7XHJcbiAgICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdfTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4vKiBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgIDxUaXRsZSB0YWc9XCJoMVwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0bGU+XHJcbiAgICAgIDxoMj5EaXNjb3JkIEFsdXJhIC0gQ2FzaW1pcm88L2gyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4qL1xyXG4vLyBleHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYUluaWNpYWwoKSB7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBcInBlYXNcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICBcInVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylcIixcclxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcclxuICAgICAgICAgICAgICB4czogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBzbTogXCJyb3dcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogXCI3MDBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMzJweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMTZweFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSlcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICB3aWR0aDogeyB4czogXCIxMDAlXCIsIHNtOiBcIjUwJVwiIH0sXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUaXR1bG8gdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdHVsbz5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTNcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YXBwQ29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB0ZXh0RmllbGRDb2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcclxuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW50cmFyXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcblxyXG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTk5XSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjI0MHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiM3B4IDEwcHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMDAwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VzZXJuYW1lfVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\muril\\\\Documents\\\\GitHub\\\\Projetos-Front-End\\\\AluraDev\\\\React\\\\alura_discord\\\\pages\\\\index.js */"
  }, void 0, false, void 0, this);
}

function Titulo(props) {
  const Tag = props.tag || "h1";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Tag, {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607025725", [Tag, _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals["000"]]]]),
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1607025725",
      dynamic: [Tag, _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals["000"]],
      children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals["000"]};font-size:24px;font-weight:600;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbXVyaWxcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZXRvcy1Gcm9udC1FbmRcXEFsdXJhRGV2XFxSZWFjdFxcYWx1cmFfZGlzY29yZFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDa0IsQUFHOEMsbUNBQ3BCLGVBQ0MsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbXVyaWxcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZXRvcy1Gcm9udC1FbmRcXEFsdXJhRGV2XFxSZWFjdFxcYWx1cmFfZGlzY29yZFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcclxuXHJcbmZ1bmN0aW9uIEdsb2JhbFN0eWxlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAqIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIEFwcCBmaXQgSGVpZ2h0ICovXHJcbiAgICAgIGh0bWwsXHJcbiAgICAgIGJvZHksXHJcbiAgICAgICNfX25leHQge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgICAjX19uZXh0IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICAgICNfX25leHQgPiAqIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIC4vQXBwIGZpdCBIZWlnaHQgKi9cclxuICAgIGB9PC9zdHlsZT5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaXR1bG8ocHJvcHMpIHtcclxuICBjb25zdCBUYWcgPSBwcm9wcy50YWcgfHwgXCJoMVwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICR7VGFnfSB7XHJcbiAgICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdfTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4vKiBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgIDxUaXRsZSB0YWc9XCJoMVwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0bGU+XHJcbiAgICAgIDxoMj5EaXNjb3JkIEFsdXJhIC0gQ2FzaW1pcm88L2gyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4qL1xyXG4vLyBleHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYUluaWNpYWwoKSB7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBcInBlYXNcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICBcInVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylcIixcclxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcclxuICAgICAgICAgICAgICB4czogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBzbTogXCJyb3dcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogXCI3MDBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMzJweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMTZweFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSlcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICB3aWR0aDogeyB4czogXCIxMDAlXCIsIHNtOiBcIjUwJVwiIH0sXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUaXR1bG8gdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdHVsbz5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTNcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YXBwQ29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB0ZXh0RmllbGRDb2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcclxuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW50cmFyXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcblxyXG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTk5XSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjI0MHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiM3B4IDEwcHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMDAwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VzZXJuYW1lfVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */
/*@ sourceURL=C:\\Users\\muril\\Documents\\GitHub\\Projetos-Front-End\\AluraDev\\React\\alura_discord\\pages\\index.js */`
    }, void 0, false, void 0, this)]
  }, void 0, true);
}
/* function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Title tag="h1">Boas vindas de volta!</Title>
      <h2>Discord Alura - Casimiro</h2>
    </>
  );
}
*/
// export default HomePage;


function PaginaInicial() {
  const username = "peas";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      styleSheet: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],
        backgroundImage: "url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        styleSheet: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            sm: "row"
          },
          width: "100%",
          maxWidth: "700px",
          borderRadius: "5px",
          padding: "32px",
          margin: "16px",
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700]
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          as: "form",
          styleSheet: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: {
              xs: "100%",
              sm: "50%"
            },
            textAlign: "center",
            marginBottom: "32px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Titulo, {
            tag: "h2",
            children: "Boas vindas de volta!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            variant: "body3",
            styleSheet: {
              marginBottom: "32px",
              color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[300]
            },
            children: _config_json__WEBPACK_IMPORTED_MODULE_2__.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            fullWidth: true,
            textFieldColors: {
              neutral: {
                textColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[200],
                mainColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[900],
                mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],
                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800]
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            type: "submit",
            label: "Entrar",
            fullWidth: true,
            buttonColors: {
              contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals["000"],
              mainColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],
              mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[400],
              mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[600]
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          styleSheet: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "200px",
            padding: "16px",
            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800],
            border: "1px solid",
            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[999],
            borderRadius: "10px",
            flex: 1,
            minHeight: "240px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            styleSheet: {
              borderRadius: "50%",
              marginBottom: "16px"
            },
            src: `https://github.com/${username}.png`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            variant: "body4",
            styleSheet: {
              color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[200],
              backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[900],
              padding: "3px 10px",
              borderRadius: "1000px"
            },
            children: username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJUaXR1bG8iLCJwcm9wcyIsIlRhZyIsInRhZyIsImFwcENvbmZpZyIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJjaGlsZHJlbiIsIlBhZ2luYUluaWNpYWwiLCJ1c2VybmFtZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImZsZXhEaXJlY3Rpb24iLCJ4cyIsInNtIiwid2lkdGgiLCJtYXhXaWR0aCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW4iLCJib3hTaGFkb3ciLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsIm5hbWUiLCJuZXV0cmFsIiwidGV4dENvbG9yIiwibWFpbkNvbG9yIiwibWFpbkNvbG9ySGlnaGxpZ2h0IiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJmbGV4IiwibWluSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFB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LEVBQUUsQ0FWSTtBQVdWQyxxQkFBUyxFQUFFO0FBWEQsV0FEZDtBQUFBLGtDQWVFLHFFQUFDLDBEQUFEO0FBQ0Usc0JBQVUsRUFBRTtBQUNWbEIsMEJBQVksRUFBRSxLQURKO0FBRVZLLDBCQUFZLEVBQUU7QUFGSixhQURkO0FBS0UsZUFBRyxFQUFHLHNCQUFxQnBCLFFBQVM7QUFMdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFmRixlQXNCRSxxRUFBQyx5REFBRDtBQUNFLG1CQUFPLEVBQUMsT0FEVjtBQUVFLHNCQUFVLEVBQUU7QUFDVnFCLG1CQUFLLEVBQUUzQix5Q0FBUyxDQUFDQyxLQUFWLENBQWdCQyxNQUFoQixDQUF1QkMsUUFBdkIsQ0FBZ0MsR0FBaEMsQ0FERztBQUVWTyw2QkFBZSxFQUFFVix5Q0FBUyxDQUFDQyxLQUFWLENBQWdCQyxNQUFoQixDQUF1QkMsUUFBdkIsQ0FBZ0MsR0FBaEMsQ0FGUDtBQUdWbUIscUJBQU8sRUFBRSxVQUhDO0FBSVZELDBCQUFZLEVBQUU7QUFKSixhQUZkO0FBQUEsc0JBU0dmO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQTJIRCxDOzs7Ozs7Ozs7OztBQzVMRCxpRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSB9IGZyb20gXCJAc2t5bmV4dWkvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xyXG5cclxuZnVuY3Rpb24gR2xvYmFsU3R5bGUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICoge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgLyogQXBwIGZpdCBIZWlnaHQgKi9cclxuICAgICAgaHRtbCxcclxuICAgICAgYm9keSxcclxuICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICAgICNfX25leHQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgIH1cclxuICAgICAgI19fbmV4dCA+ICoge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgIH1cclxuICAgICAgLyogLi9BcHAgZml0IEhlaWdodCAqL1xyXG4gICAgYH08L3N0eWxlPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpdHVsbyhwcm9wcykge1xyXG4gIGNvbnN0IFRhZyA9IHByb3BzLnRhZyB8fCBcImgxXCI7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUYWc+e3Byb3BzLmNoaWxkcmVufTwvVGFnPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgJHtUYWd9IHtcclxuICAgICAgICAgIGNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl19O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbi8qIGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgPFRpdGxlIHRhZz1cImgxXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGEhPC9UaXRsZT5cclxuICAgICAgPGgyPkRpc2NvcmQgQWx1cmEgLSBDYXNpbWlybzwvaDI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiovXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hSW5pY2lhbCgpIHtcclxuICBjb25zdCB1c2VybmFtZSA9IFwicGVhc1wiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgIFwidXJsKGh0dHBzOi8vdmlydHVhbGJhY2tncm91bmRzLnNpdGUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvdGhlLW1hdHJpeC1kaWdpdGFsLXJhaW4uanBnKVwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjoge1xyXG4gICAgICAgICAgICAgIHhzOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgIHNtOiBcInJvd1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjcwMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBhcz1cImZvcm1cIlxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiBcIjEwMCVcIiwgc206IFwiNTAlXCIgfSxcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMycHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0dWxvPlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5M1wiXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMycHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHthcHBDb25maWcubmFtZX1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIHRleHRGaWVsZENvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgbmV1dHJhbDoge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvckhpZ2hsaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbnRyYXJcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIGJ1dHRvbkNvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgY29udHJhc3RDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3JMaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzQwMF0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuXHJcbiAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBtYXhXaWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5OTldLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IFwiMjQwcHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5NFwiXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMDBweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2t5bmV4dWkvY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9