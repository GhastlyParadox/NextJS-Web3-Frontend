"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/portal",{

/***/ "./src/layout/Main.tsx":
/*!*****************************!*\
  !*** ./src/layout/Main.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Main\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/Header */ \"./src/layout/Header/Header.tsx\");\n/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer/Footer */ \"./src/layout/Footer/Footer.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n// import { useRouter } from 'next/router';\n\n\n\nvar _this = undefined;\nvar Main = function(props) {\n    // const router = useRouter();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        w: \"100%\",\n        height: \"100vh\",\n        children: [\n            props.meta,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                fileName: \"/Users/Adam/Git/NextWave/src/layout/Main.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                align: \"center\",\n                justify: \"center\",\n                mt: \"18vh\",\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/Users/Adam/Git/NextWave/src/layout/Main.tsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                bottom: \"0\",\n                position: \"absolute\",\n                width: \"100%\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.Footer, {}, void 0, false, {\n                    fileName: \"/Users/Adam/Git/NextWave/src/layout/Main.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Adam/Git/NextWave/src/layout/Main.tsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Adam/Git/NextWave/src/layout/Main.tsx\",\n        lineNumber: 20,\n        columnNumber: 3\n    }, _this));\n};\n_c = Main;\n\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L01haW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxFQUEyQztBQUNIO0FBQ0E7QUFJZDs7QUFPMUIsR0FBSyxDQUFDSSxJQUFJLEdBQUcsUUFBUSxDQUFQQyxLQUFpQixFQUFLLENBQUM7SUFFbkMsRUFBOEI7SUFFOUIsTUFBTSw2RUFDTEYsaURBQUc7UUFBQ0csQ0FBQyxFQUFDLENBQU07UUFBQ0MsTUFBTSxFQUFDLENBQU87O1lBQ3pCRixLQUFLLENBQUNHLElBQUk7d0ZBQ1ZSLGtEQUFNOzs7Ozt3RkFDTkUsa0RBQUk7Z0JBQUNPLEtBQUssRUFBQyxDQUFRO2dCQUFDQyxPQUFPLEVBQUMsQ0FBUTtnQkFBQ0MsRUFBRSxFQUFDLENBQU07MEJBRTFDTixLQUFLLENBQUNPLFFBQVE7Ozs7Ozt3RkFHbEJWLGtEQUFJO2dCQUFDVyxNQUFNLEVBQUMsQ0FBRztnQkFBQ0MsUUFBUSxFQUFDLENBQVU7Z0JBQUNDLEtBQUssRUFBQyxDQUFNO3NHQUM5Q2Qsa0RBQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUFHWixDQUFDO0tBakJJRyxJQUFJO0FBbUJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQvTWFpbi50c3g/NzAzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9Gb290ZXIvRm9vdGVyJztcblxuaW1wb3J0IHsgRmxleCwgXG4gIEJveCxcbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG50eXBlIElNYWluUHJvcHMgPSB7XG4gIG1ldGE6IFJlYWN0Tm9kZTtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmNvbnN0IE1haW4gPSAocHJvcHM6IElNYWluUHJvcHMpID0+IHtcbiAgXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gIDxCb3ggdz1cIjEwMCVcIiBoZWlnaHQ9XCIxMDB2aFwiPlxuICAgIHtwcm9wcy5tZXRhfVxuICAgIDxIZWFkZXIgLz5cbiAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBtdD1cIjE4dmhcIj5cblxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gIFxuICAgIDwvRmxleD5cbiAgICA8RmxleCBib3R0b209XCIwXCIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvRmxleD5cbiAgPC9Cb3g+XG4pfTtcblxuZXhwb3J0IHsgTWFpbiB9O1xuIl0sIm5hbWVzIjpbIkhlYWRlciIsIkZvb3RlciIsIkZsZXgiLCJCb3giLCJNYWluIiwicHJvcHMiLCJ3IiwiaGVpZ2h0IiwibWV0YSIsImFsaWduIiwianVzdGlmeSIsIm10IiwiY2hpbGRyZW4iLCJib3R0b20iLCJwb3NpdGlvbiIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layout/Main.tsx\n");

/***/ })

});