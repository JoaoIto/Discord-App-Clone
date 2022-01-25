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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("style", {
    jsx: true,
    children: `
      /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      body {
        line-height: 1;
        font-family: sans-serif;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: "";
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    `
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

function Titulo(props) {
  const Tag = props.tag || "h1";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Tag, {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1607025725", [Tag, _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals["000"]]]]),
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1607025725",
      dynamic: [Tag, _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals["000"]],
      children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals["000"]};font-size:24px;font-weight:600;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbXVyaWxcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZXRvcy1Gcm9udC1FbmRcXEFsdXJhRGV2XFxSZWFjdFxcYWx1cmFfZGlzY29yZFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlKa0IsQUFHOEMsbUNBQ3BCLGVBQ0MsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbXVyaWxcXERvY3VtZW50c1xcR2l0SHViXFxQcm9qZXRvcy1Gcm9udC1FbmRcXEFsdXJhRGV2XFxSZWFjdFxcYWx1cmFfZGlzY29yZFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcclxuXHJcbmZ1bmN0aW9uIEdsb2JhbFN0eWxlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxyXG4gICB2Mi4wIHwgMjAxMTAxMjZcclxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcclxuKi9cclxuXHJcbiAgICAgIGh0bWwsXHJcbiAgICAgIGJvZHksXHJcbiAgICAgIGRpdixcclxuICAgICAgc3BhbixcclxuICAgICAgYXBwbGV0LFxyXG4gICAgICBvYmplY3QsXHJcbiAgICAgIGlmcmFtZSxcclxuICAgICAgaDEsXHJcbiAgICAgIGgyLFxyXG4gICAgICBoMyxcclxuICAgICAgaDQsXHJcbiAgICAgIGg1LFxyXG4gICAgICBoNixcclxuICAgICAgcCxcclxuICAgICAgYmxvY2txdW90ZSxcclxuICAgICAgcHJlLFxyXG4gICAgICBhLFxyXG4gICAgICBhYmJyLFxyXG4gICAgICBhY3JvbnltLFxyXG4gICAgICBhZGRyZXNzLFxyXG4gICAgICBiaWcsXHJcbiAgICAgIGNpdGUsXHJcbiAgICAgIGNvZGUsXHJcbiAgICAgIGRlbCxcclxuICAgICAgZGZuLFxyXG4gICAgICBlbSxcclxuICAgICAgaW1nLFxyXG4gICAgICBpbnMsXHJcbiAgICAgIGtiZCxcclxuICAgICAgcSxcclxuICAgICAgcyxcclxuICAgICAgc2FtcCxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIHN0cmlrZSxcclxuICAgICAgc3Ryb25nLFxyXG4gICAgICBzdWIsXHJcbiAgICAgIHN1cCxcclxuICAgICAgdHQsXHJcbiAgICAgIHZhcixcclxuICAgICAgYixcclxuICAgICAgdSxcclxuICAgICAgaSxcclxuICAgICAgY2VudGVyLFxyXG4gICAgICBkbCxcclxuICAgICAgZHQsXHJcbiAgICAgIGRkLFxyXG4gICAgICBvbCxcclxuICAgICAgdWwsXHJcbiAgICAgIGxpLFxyXG4gICAgICBmaWVsZHNldCxcclxuICAgICAgZm9ybSxcclxuICAgICAgbGFiZWwsXHJcbiAgICAgIGxlZ2VuZCxcclxuICAgICAgdGFibGUsXHJcbiAgICAgIGNhcHRpb24sXHJcbiAgICAgIHRib2R5LFxyXG4gICAgICB0Zm9vdCxcclxuICAgICAgdGhlYWQsXHJcbiAgICAgIHRyLFxyXG4gICAgICB0aCxcclxuICAgICAgdGQsXHJcbiAgICAgIGFydGljbGUsXHJcbiAgICAgIGFzaWRlLFxyXG4gICAgICBjYW52YXMsXHJcbiAgICAgIGRldGFpbHMsXHJcbiAgICAgIGVtYmVkLFxyXG4gICAgICBmaWd1cmUsXHJcbiAgICAgIGZpZ2NhcHRpb24sXHJcbiAgICAgIGZvb3RlcixcclxuICAgICAgaGVhZGVyLFxyXG4gICAgICBoZ3JvdXAsXHJcbiAgICAgIG1lbnUsXHJcbiAgICAgIG5hdixcclxuICAgICAgb3V0cHV0LFxyXG4gICAgICBydWJ5LFxyXG4gICAgICBzZWN0aW9uLFxyXG4gICAgICBzdW1tYXJ5LFxyXG4gICAgICB0aW1lLFxyXG4gICAgICBtYXJrLFxyXG4gICAgICBhdWRpbyxcclxuICAgICAgdmlkZW8ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAgIH1cclxuICAgICAgLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG4gICAgICBhcnRpY2xlLFxyXG4gICAgICBhc2lkZSxcclxuICAgICAgZGV0YWlscyxcclxuICAgICAgZmlnY2FwdGlvbixcclxuICAgICAgZmlndXJlLFxyXG4gICAgICBmb290ZXIsXHJcbiAgICAgIGhlYWRlcixcclxuICAgICAgaGdyb3VwLFxyXG4gICAgICBtZW51LFxyXG4gICAgICBuYXYsXHJcbiAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgIG9sLFxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBibG9ja3F1b3RlLFxyXG4gICAgICBxIHtcclxuICAgICAgICBxdW90ZXM6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgYmxvY2txdW90ZTpiZWZvcmUsXHJcbiAgICAgIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbiAgICAgIHE6YmVmb3JlLFxyXG4gICAgICBxOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgdGFibGUge1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaXR1bG8ocHJvcHMpIHtcclxuICBjb25zdCBUYWcgPSBwcm9wcy50YWcgfHwgXCJoMVwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICR7VGFnfSB7XHJcbiAgICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdfTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4vKiBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgIDxUaXRsZSB0YWc9XCJoMVwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0bGU+XHJcbiAgICAgIDxoMj5EaXNjb3JkIEFsdXJhIC0gQ2FzaW1pcm88L2gyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4qL1xyXG4vLyBleHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYUluaWNpYWwoKSB7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBcInBlYXNcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICBcInVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylcIixcclxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcclxuICAgICAgICAgICAgICB4czogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBzbTogXCJyb3dcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogXCI3MDBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMzJweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMTZweFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSlcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICB3aWR0aDogeyB4czogXCIxMDAlXCIsIHNtOiBcIjUwJVwiIH0sXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUaXR1bG8gdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdHVsbz5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTNcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YXBwQ29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB0ZXh0RmllbGRDb2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcclxuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW50cmFyXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcblxyXG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTk5XSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjI0MHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiM3B4IDEwcHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMDAwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VzZXJuYW1lfVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */
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
      lineNumber: 174,
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
            lineNumber: 219,
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
            lineNumber: 220,
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
            lineNumber: 230,
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
            lineNumber: 241,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
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
            lineNumber: 271,
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
            lineNumber: 278,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJUaXR1bG8iLCJwcm9wcyIsIlRhZyIsInRhZyIsImFwcENvbmZpZyIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJjaGlsZHJlbiIsIlBhZ2luYUluaWNpYWwiLCJ1c2VybmFtZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImZsZXhEaXJlY3Rpb24iLCJ4cyIsInNtIiwid2lkdGgiLCJtYXhXaWR0aCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW4iLCJib3hTaGFkb3ciLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsIm5hbWUiLCJuZXV0cmFsIiwidGV4dENvbG9yIiwibWFpbkNvbG9yIiwibWFpbkNvbG9ySGlnaGxpZ2h0IiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJmbGV4IiwibWluSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFB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QUMseURBQUQ7QUFDRSxtQkFBTyxFQUFDLE9BRFY7QUFFRSxzQkFBVSxFQUFFO0FBQ1ZxQixtQkFBSyxFQUFFM0IseUNBQVMsQ0FBQ0MsS0FBVixDQUFnQkMsTUFBaEIsQ0FBdUJDLFFBQXZCLENBQWdDLEdBQWhDLENBREc7QUFFVk8sNkJBQWUsRUFBRVYseUNBQVMsQ0FBQ0MsS0FBVixDQUFnQkMsTUFBaEIsQ0FBdUJDLFFBQXZCLENBQWdDLEdBQWhDLENBRlA7QUFHVm1CLHFCQUFPLEVBQUUsVUFIQztBQUlWRCwwQkFBWSxFQUFFO0FBSkosYUFGZDtBQUFBLHNCQVNHZjtBQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUEySEQsQzs7Ozs7Ozs7Ozs7QUN0U0QsaUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcclxuXHJcbmZ1bmN0aW9uIEdsb2JhbFN0eWxlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxyXG4gICB2Mi4wIHwgMjAxMTAxMjZcclxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcclxuKi9cclxuXHJcbiAgICAgIGh0bWwsXHJcbiAgICAgIGJvZHksXHJcbiAgICAgIGRpdixcclxuICAgICAgc3BhbixcclxuICAgICAgYXBwbGV0LFxyXG4gICAgICBvYmplY3QsXHJcbiAgICAgIGlmcmFtZSxcclxuICAgICAgaDEsXHJcbiAgICAgIGgyLFxyXG4gICAgICBoMyxcclxuICAgICAgaDQsXHJcbiAgICAgIGg1LFxyXG4gICAgICBoNixcclxuICAgICAgcCxcclxuICAgICAgYmxvY2txdW90ZSxcclxuICAgICAgcHJlLFxyXG4gICAgICBhLFxyXG4gICAgICBhYmJyLFxyXG4gICAgICBhY3JvbnltLFxyXG4gICAgICBhZGRyZXNzLFxyXG4gICAgICBiaWcsXHJcbiAgICAgIGNpdGUsXHJcbiAgICAgIGNvZGUsXHJcbiAgICAgIGRlbCxcclxuICAgICAgZGZuLFxyXG4gICAgICBlbSxcclxuICAgICAgaW1nLFxyXG4gICAgICBpbnMsXHJcbiAgICAgIGtiZCxcclxuICAgICAgcSxcclxuICAgICAgcyxcclxuICAgICAgc2FtcCxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIHN0cmlrZSxcclxuICAgICAgc3Ryb25nLFxyXG4gICAgICBzdWIsXHJcbiAgICAgIHN1cCxcclxuICAgICAgdHQsXHJcbiAgICAgIHZhcixcclxuICAgICAgYixcclxuICAgICAgdSxcclxuICAgICAgaSxcclxuICAgICAgY2VudGVyLFxyXG4gICAgICBkbCxcclxuICAgICAgZHQsXHJcbiAgICAgIGRkLFxyXG4gICAgICBvbCxcclxuICAgICAgdWwsXHJcbiAgICAgIGxpLFxyXG4gICAgICBmaWVsZHNldCxcclxuICAgICAgZm9ybSxcclxuICAgICAgbGFiZWwsXHJcbiAgICAgIGxlZ2VuZCxcclxuICAgICAgdGFibGUsXHJcbiAgICAgIGNhcHRpb24sXHJcbiAgICAgIHRib2R5LFxyXG4gICAgICB0Zm9vdCxcclxuICAgICAgdGhlYWQsXHJcbiAgICAgIHRyLFxyXG4gICAgICB0aCxcclxuICAgICAgdGQsXHJcbiAgICAgIGFydGljbGUsXHJcbiAgICAgIGFzaWRlLFxyXG4gICAgICBjYW52YXMsXHJcbiAgICAgIGRldGFpbHMsXHJcbiAgICAgIGVtYmVkLFxyXG4gICAgICBmaWd1cmUsXHJcbiAgICAgIGZpZ2NhcHRpb24sXHJcbiAgICAgIGZvb3RlcixcclxuICAgICAgaGVhZGVyLFxyXG4gICAgICBoZ3JvdXAsXHJcbiAgICAgIG1lbnUsXHJcbiAgICAgIG5hdixcclxuICAgICAgb3V0cHV0LFxyXG4gICAgICBydWJ5LFxyXG4gICAgICBzZWN0aW9uLFxyXG4gICAgICBzdW1tYXJ5LFxyXG4gICAgICB0aW1lLFxyXG4gICAgICBtYXJrLFxyXG4gICAgICBhdWRpbyxcclxuICAgICAgdmlkZW8ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAgIH1cclxuICAgICAgLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG4gICAgICBhcnRpY2xlLFxyXG4gICAgICBhc2lkZSxcclxuICAgICAgZGV0YWlscyxcclxuICAgICAgZmlnY2FwdGlvbixcclxuICAgICAgZmlndXJlLFxyXG4gICAgICBmb290ZXIsXHJcbiAgICAgIGhlYWRlcixcclxuICAgICAgaGdyb3VwLFxyXG4gICAgICBtZW51LFxyXG4gICAgICBuYXYsXHJcbiAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgIG9sLFxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBibG9ja3F1b3RlLFxyXG4gICAgICBxIHtcclxuICAgICAgICBxdW90ZXM6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgYmxvY2txdW90ZTpiZWZvcmUsXHJcbiAgICAgIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbiAgICAgIHE6YmVmb3JlLFxyXG4gICAgICBxOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgdGFibGUge1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaXR1bG8ocHJvcHMpIHtcclxuICBjb25zdCBUYWcgPSBwcm9wcy50YWcgfHwgXCJoMVwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICR7VGFnfSB7XHJcbiAgICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdfTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4vKiBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgIDxUaXRsZSB0YWc9XCJoMVwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0bGU+XHJcbiAgICAgIDxoMj5EaXNjb3JkIEFsdXJhIC0gQ2FzaW1pcm88L2gyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4qL1xyXG4vLyBleHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYUluaWNpYWwoKSB7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBcInBlYXNcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICBcInVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylcIixcclxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcclxuICAgICAgICAgICAgICB4czogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBzbTogXCJyb3dcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogXCI3MDBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMzJweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMTZweFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSlcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICB3aWR0aDogeyB4czogXCIxMDAlXCIsIHNtOiBcIjUwJVwiIH0sXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUaXR1bG8gdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdHVsbz5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTNcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YXBwQ29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB0ZXh0RmllbGRDb2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcclxuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW50cmFyXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcblxyXG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTk5XSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjI0MHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiM3B4IDEwcHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMDAwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VzZXJuYW1lfVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNreW5leHVpL2NvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==