"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Main.tsx":
/*!**********************!*\
  !*** ./src/Main.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Main\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/Header/Header */ \"./src/layout/Header/Header.tsx\");\n/* harmony import */ var _layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/Footer/Footer */ \"./src/layout/Footer/Footer.tsx\");\n\n// import { useRouter } from 'next/router';\n\n\nvar _this = undefined;\nvar Main = function(props) {\n    // const router = useRouter();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap bg-hero-main bg-cover min-h-screen subpixel-antialiased\",\n        children: [\n            props.meta,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen p-2.5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Header_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                    fileName: \"/Users/Adam/Git/NextWave/src/Main.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Adam/Git/NextWave/src/Main.tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-1 items-start justify-center\",\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/Users/Adam/Git/NextWave/src/Main.tsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen fixed bottom-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.Footer, {}, void 0, false, {\n                    fileName: \"/Users/Adam/Git/NextWave/src/Main.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Adam/Git/NextWave/src/Main.tsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Adam/Git/NextWave/src/Main.tsx\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, _this));\n};\n_c = Main;\n\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTWFpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsRUFBMkM7QUFDSTtBQUNBOztBQU8vQyxHQUFLLENBQUNFLElBQUksR0FBRyxRQUFRLENBQVBDLEtBQWlCLEVBQUssQ0FBQztJQUVuQyxFQUE4QjtJQUU5QixNQUFNLDZFQUNMQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUF3RTs7WUFDcEZGLEtBQUssQ0FBQ0csSUFBSTt3RkFDVkYsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWdCO3NHQUM1QkwseURBQU07Ozs7Ozs7Ozs7d0ZBRVJJLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUF3QzswQkFDakRGLEtBQUssQ0FBQ0ksUUFBUTs7Ozs7O3dGQUVuQkgsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXlCO3NHQUNyQ0oseURBQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUFHWixDQUFDO0tBakJJQyxJQUFJO0FBbUJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9NYWluLnRzeD80ODVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vbGF5b3V0L0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9sYXlvdXQvRm9vdGVyL0Zvb3Rlcic7XG5cbnR5cGUgSU1haW5Qcm9wcyA9IHtcbiAgbWV0YTogUmVhY3ROb2RlO1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcblxuY29uc3QgTWFpbiA9IChwcm9wczogSU1haW5Qcm9wcykgPT4ge1xuICBcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC13cmFwIGJnLWhlcm8tbWFpbiBiZy1jb3ZlciBtaW4taC1zY3JlZW4gc3VicGl4ZWwtYW50aWFsaWFzZWQnPlxuICAgIHtwcm9wcy5tZXRhfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gcC0yLjVcIj4gXG4gICAgICA8SGVhZGVyIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC0xIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9IFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LXNjcmVlbiBmaXhlZCBib3R0b20tMCc+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKX07XG5cbmV4cG9ydCB7IE1haW4gfTtcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJGb290ZXIiLCJNYWluIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJtZXRhIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Main.tsx\n");

/***/ })

});