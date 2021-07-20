exports.ids = [23];
exports.modules = {

/***/ "./components/XtoneAltissimaTabSelect.js":
/*!***********************************************!*\
  !*** ./components/XtoneAltissimaTabSelect.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_XtoneAltissima_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/XtoneAltissima.context */ \"./helpers/XtoneAltissima.context.js\");\n\n\nvar _jsxFileName = \"/Users/es00400142/test-projects/flicking-reproducible-pagination/components/XtoneAltissimaTabSelect.js\";\n\n\n\n\n\nconst XtoneAltissimaTabSelect = ({\n  className\n}) => {\n  const {\n    altissima\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_helpers_XtoneAltissima_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  const {\n    t\n  } = Object(next_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"])(\"common\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: className,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-col items-center gap-6 sm:gap-6 md:gap-16 sm:flex-row justify-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Selector, {\n          active: altissima === false,\n          children: t(\"sinteredCompact\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Selector, {\n          active: altissima === true,\n          children: t(\"naturalStone\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n{\n  /* Supposing the altissima state is handled with boolean */\n}\n\nconst Selector = ({\n  active,\n  children\n}) => {\n  const {\n    altissima,\n    setAltissima\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_helpers_XtoneAltissima_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      onClick: () => !active ? setAltissima(!altissima) : null,\n      className: \"jsx-2456295192\" + \" \" + `selector select-none font-secondary text-xs sm:text-sm font-bold uppercase tracking-200 mr-tracking link--metis cursor-pointer transition-all duration-500 ease-easing hover:opacity-80 ${active ? \"active\" : \" opacity-40\"}`,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2456295192\",\n      children: \".link--metis.jsx-2456295192::before,.link--metis.jsx-2456295192::after{top:120%;}.link--metis.active.jsx-2456295192::before{top:120%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lczAwNDAwMTQyL3Rlc3QtcHJvamVjdHMvZmxpY2tpbmctcmVwcm9kdWNpYmxlLXBhZ2luYXRpb24vY29tcG9uZW50cy9YdG9uZUFsdGlzc2ltYVRhYlNlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2tCLEFBSW9CLEFBSUEsU0FIWCxBQUlBIiwiZmlsZSI6Ii9Vc2Vycy9lczAwNDAwMTQyL3Rlc3QtcHJvamVjdHMvZmxpY2tpbmctcmVwcm9kdWNpYmxlLXBhZ2luYXRpb24vY29tcG9uZW50cy9YdG9uZUFsdGlzc2ltYVRhYlNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcIm5leHQtaTE4bmV4dFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgWHRvbmVBbHRpc3NpbWFDb250ZXh0IGZyb20gXCIuLi9oZWxwZXJzL1h0b25lQWx0aXNzaW1hLmNvbnRleHRcIjtcblxuY29uc3QgWHRvbmVBbHRpc3NpbWFUYWJTZWxlY3QgPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCB7IGFsdGlzc2ltYSB9ID0gdXNlQ29udGV4dChYdG9uZUFsdGlzc2ltYUNvbnRleHQpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFwiY29tbW9uXCIpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNiBzbTpnYXAtNiBtZDpnYXAtMTYgc206ZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8U2VsZWN0b3IgYWN0aXZlPXthbHRpc3NpbWEgPT09IGZhbHNlfT5cbiAgICAgICAgICAgIHt0KFwic2ludGVyZWRDb21wYWN0XCIpfVxuICAgICAgICAgIDwvU2VsZWN0b3I+XG4gICAgICAgICAgPFNlbGVjdG9yIGFjdGl2ZT17YWx0aXNzaW1hID09PSB0cnVlfT57dChcIm5hdHVyYWxTdG9uZVwiKX08L1NlbGVjdG9yPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxue1xuICAvKiBTdXBwb3NpbmcgdGhlIGFsdGlzc2ltYSBzdGF0ZSBpcyBoYW5kbGVkIHdpdGggYm9vbGVhbiAqL1xufVxuY29uc3QgU2VsZWN0b3IgPSAoeyBhY3RpdmUsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBhbHRpc3NpbWEsIHNldEFsdGlzc2ltYSB9ID0gdXNlQ29udGV4dChYdG9uZUFsdGlzc2ltYUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxhXG4gICAgICAgIG9uQ2xpY2s9eygpID0+ICghYWN0aXZlID8gc2V0QWx0aXNzaW1hKCFhbHRpc3NpbWEpIDogbnVsbCl9XG4gICAgICAgIGNsYXNzTmFtZT17YHNlbGVjdG9yIHNlbGVjdC1ub25lIGZvbnQtc2Vjb25kYXJ5IHRleHQteHMgc206dGV4dC1zbSBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLTIwMCBtci10cmFja2luZyBsaW5rLS1tZXRpcyBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1lYXNpbmcgaG92ZXI6b3BhY2l0eS04MCAke1xuICAgICAgICAgIGFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIiBvcGFjaXR5LTQwXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubGluay0tbWV0aXM6OmJlZm9yZSxcbiAgICAgICAgLmxpbmstLW1ldGlzOjphZnRlciB7XG4gICAgICAgICAgdG9wOiAxMjAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmstLW1ldGlzLmFjdGl2ZTo6YmVmb3JlIHtcbiAgICAgICAgICB0b3A6IDEyMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFh0b25lQWx0aXNzaW1hVGFiU2VsZWN0O1xuIl19 */\\n/*@ sourceURL=/Users/es00400142/test-projects/flicking-reproducible-pagination/components/XtoneAltissimaTabSelect.js */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (XtoneAltissimaTabSelect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1h0b25lQWx0aXNzaW1hVGFiU2VsZWN0LmpzP2JjOTAiXSwibmFtZXMiOlsiWHRvbmVBbHRpc3NpbWFUYWJTZWxlY3QiLCJjbGFzc05hbWUiLCJhbHRpc3NpbWEiLCJ1c2VDb250ZXh0IiwiWHRvbmVBbHRpc3NpbWFDb250ZXh0IiwidCIsInVzZVRyYW5zbGF0aW9uIiwiU2VsZWN0b3IiLCJhY3RpdmUiLCJjaGlsZHJlbiIsInNldEFsdGlzc2ltYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsdUJBQXVCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBbUI7QUFDakQsUUFBTTtBQUFFQztBQUFGLE1BQWdCQyx3REFBVSxDQUFDQyx1RUFBRCxDQUFoQztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFRQyxtRUFBYyxDQUFDLFFBQUQsQ0FBNUI7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFTCxTQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxnRkFBZjtBQUFBLGdDQUNFLHFFQUFDLFFBQUQ7QUFBVSxnQkFBTSxFQUFFQyxTQUFTLEtBQUssS0FBaEM7QUFBQSxvQkFDR0csQ0FBQyxDQUFDLGlCQUFEO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFLHFFQUFDLFFBQUQ7QUFBVSxnQkFBTSxFQUFFSCxTQUFTLEtBQUssSUFBaEM7QUFBQSxvQkFBdUNHLENBQUMsQ0FBQyxjQUFEO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBWUQsQ0FmRDs7QUFpQkE7QUFDRTtBQUNEOztBQUNELE1BQU1FLFFBQVEsR0FBRyxDQUFDO0FBQUVDLFFBQUY7QUFBVUM7QUFBVixDQUFELEtBQTBCO0FBQ3pDLFFBQU07QUFBRVAsYUFBRjtBQUFhUTtBQUFiLE1BQThCUCx3REFBVSxDQUFDQyx1RUFBRCxDQUE5QztBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxhQUFPLEVBQUUsTUFBTyxDQUFDSSxNQUFELEdBQVVFLFlBQVksQ0FBQyxDQUFDUixTQUFGLENBQXRCLEdBQXFDLElBRHZEO0FBQUEsMENBRWMsMkxBQ1ZNLE1BQU0sR0FBRyxRQUFILEdBQWMsYUFDckIsRUFKSDtBQUFBLGdCQU1HQztBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQXVCRCxDQTFCRDs7QUE0QmVULHNGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9YdG9uZUFsdGlzc2ltYVRhYlNlbGVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcIm5leHQtaTE4bmV4dFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgWHRvbmVBbHRpc3NpbWFDb250ZXh0IGZyb20gXCIuLi9oZWxwZXJzL1h0b25lQWx0aXNzaW1hLmNvbnRleHRcIjtcblxuY29uc3QgWHRvbmVBbHRpc3NpbWFUYWJTZWxlY3QgPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCB7IGFsdGlzc2ltYSB9ID0gdXNlQ29udGV4dChYdG9uZUFsdGlzc2ltYUNvbnRleHQpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFwiY29tbW9uXCIpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNiBzbTpnYXAtNiBtZDpnYXAtMTYgc206ZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8U2VsZWN0b3IgYWN0aXZlPXthbHRpc3NpbWEgPT09IGZhbHNlfT5cbiAgICAgICAgICAgIHt0KFwic2ludGVyZWRDb21wYWN0XCIpfVxuICAgICAgICAgIDwvU2VsZWN0b3I+XG4gICAgICAgICAgPFNlbGVjdG9yIGFjdGl2ZT17YWx0aXNzaW1hID09PSB0cnVlfT57dChcIm5hdHVyYWxTdG9uZVwiKX08L1NlbGVjdG9yPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxue1xuICAvKiBTdXBwb3NpbmcgdGhlIGFsdGlzc2ltYSBzdGF0ZSBpcyBoYW5kbGVkIHdpdGggYm9vbGVhbiAqL1xufVxuY29uc3QgU2VsZWN0b3IgPSAoeyBhY3RpdmUsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBhbHRpc3NpbWEsIHNldEFsdGlzc2ltYSB9ID0gdXNlQ29udGV4dChYdG9uZUFsdGlzc2ltYUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxhXG4gICAgICAgIG9uQ2xpY2s9eygpID0+ICghYWN0aXZlID8gc2V0QWx0aXNzaW1hKCFhbHRpc3NpbWEpIDogbnVsbCl9XG4gICAgICAgIGNsYXNzTmFtZT17YHNlbGVjdG9yIHNlbGVjdC1ub25lIGZvbnQtc2Vjb25kYXJ5IHRleHQteHMgc206dGV4dC1zbSBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLTIwMCBtci10cmFja2luZyBsaW5rLS1tZXRpcyBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1lYXNpbmcgaG92ZXI6b3BhY2l0eS04MCAke1xuICAgICAgICAgIGFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIiBvcGFjaXR5LTQwXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubGluay0tbWV0aXM6OmJlZm9yZSxcbiAgICAgICAgLmxpbmstLW1ldGlzOjphZnRlciB7XG4gICAgICAgICAgdG9wOiAxMjAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmstLW1ldGlzLmFjdGl2ZTo6YmVmb3JlIHtcbiAgICAgICAgICB0b3A6IDEyMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFh0b25lQWx0aXNzaW1hVGFiU2VsZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/XtoneAltissimaTabSelect.js\n");

/***/ })

};;