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

/***/ "./src/layout/Footer/Footer.tsx":
/*!**************************************!*\
  !*** ./src/layout/Footer/Footer.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Footer() {\n    _s();\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)(), account = ref.account, library = ref.library, chainId = ref.chainId;\n    var active = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)().active;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), balance1 = ref1[0], setBalance = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!!account && !!library) {\n            var stale = false;\n            library.getBalance(account).then(function(balance) {\n                if (!stale) {\n                    setBalance(balance);\n                }\n            }).catch(function() {\n                if (!stale) {\n                    setBalance(null);\n                }\n            });\n            return function() {\n                stale = true;\n                setBalance(null);\n            };\n        }\n    }, [\n        account,\n        library,\n        chainId\n    ]) // ensures refresh if referential identity of library doesn't change across chainIds\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n            className: \"w-screen fixed bottom-0 p-1\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"items-start text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"https://soundcloud.com/sightsofsounds\",\n                            target: \"_blank\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn md:btn-lg btn-circle btn-ghost transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMusic\n                                }, void 0, false, {\n                                    fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 141\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"items-end text-xl font-medium\",\n                        children: active && account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \" \",\n                                balance1 === null ? 'Error' : balance1 ? \"Ξ\".concat((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(balance1).substring(0, 7)) : ''\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 37\n                        }, this) : null\n                    }, void 0, false, {\n                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                lineNumber: 40,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_s(Footer, \"xNFgrp4nXZiffl+iLQMEND7Npj8=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React,\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React\n    ];\n});\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L0Zvb3Rlci9Gb290ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDSDtBQUNpQjtBQUNMO0FBQ1Q7O0FBRzNDLFNBQVNPLE1BQU0sR0FBRyxDQUFDOztJQUN0QixHQUFLLENBQWlDSixHQUFjLEdBQWRBLDhEQUFZLElBQTFDSyxPQUFPLEdBQXVCTCxHQUFjLENBQTVDSyxPQUFPLEVBQUVDLE9BQU8sR0FBY04sR0FBYyxDQUFuQ00sT0FBTyxFQUFFQyxPQUFPLEdBQUtQLEdBQWMsQ0FBMUJPLE9BQU87SUFDakMsR0FBSyxDQUFHQyxNQUFNLEdBQUtSLDhEQUFZLEdBQXZCUSxNQUFNO0lBQ2QsR0FBSyxDQUF5QlYsSUFBNkIsR0FBN0JBLCtDQUFRLENBQWdCLElBQUksR0FBbkRXLFFBQU8sR0FBZ0JYLElBQTZCLEtBQTNDWSxVQUFVLEdBQUlaLElBQTZCO0lBRTNEQyxnREFBUyxDQUFDLFFBQVEsR0FBRyxDQUFDO1FBQ2xCLEVBQUUsSUFBSU0sT0FBTyxNQUFNQyxPQUFPLEVBQUUsQ0FBQztZQUMzQixHQUFHLENBQUNLLEtBQUssR0FBRyxLQUFLO1lBRWpCTCxPQUFPLENBQ0pNLFVBQVUsQ0FBQ1AsT0FBTyxFQUNsQlEsSUFBSSxDQUFDLFFBQVEsQ0FBUEosT0FBWSxFQUFLLENBQUM7Z0JBQ3ZCLEVBQUUsR0FBR0UsS0FBSyxFQUFFLENBQUM7b0JBQ1hELFVBQVUsQ0FBQ0QsT0FBTztnQkFDcEIsQ0FBQztZQUNILENBQUMsRUFDQUssS0FBSyxDQUFDLFFBQ25CLEdBRHlCLENBQUM7Z0JBQ1osRUFBRSxHQUFHSCxLQUFLLEVBQUUsQ0FBQztvQkFDWEQsVUFBVSxDQUFDLElBQUk7Z0JBQ2pCLENBQUM7WUFDSCxDQUFDO1lBRUgsTUFBTSxDQUFDLFFBQ2pCLEdBRHVCLENBQUM7Z0JBQ1pDLEtBQUssR0FBRyxJQUFJO2dCQUNaRCxVQUFVLENBQUMsSUFBSTtZQUNqQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDTDtRQUFBQSxPQUFPO1FBQUVDLE9BQU87UUFBRUMsT0FBTztJQUFBLENBQUMsQ0FBRSxDQUFvRjs7SUFFdEgsTUFBTTs4RkFFSFEsQ0FBTTtZQUFDQyxTQUFTLEVBQUMsQ0FBNkI7a0dBQzFDQyxDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBc0I7O2dHQUNsQ0MsQ0FBRzt3QkFBQ0QsU0FBUyxFQUFDLENBQXlCOzhHQUNyQ0UsQ0FBSTs0QkFBQ0MsTUFBTSxFQUFDLENBQXVDOzRCQUFDQyxNQUFNLEVBQUMsQ0FBUTtrSEFDakVDLENBQU07Z0NBQUNMLFNBQVMsRUFBQyxDQUF5RztzSEFBRWYsMkVBQWU7b0NBQUNxQixJQUFJLEVBQUVwQixzRUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQUc3SmUsQ0FBRzt3QkFBQ0QsU0FBUyxFQUFDLENBQStCO2tDQUMxQ1IsTUFBTSxJQUFJSCxPQUFPLCtFQUFJWSxDQUFHOztnQ0FBQyxDQUFDO2dDQUFDUixRQUFPLEtBQUssSUFBSSxHQUFHLENBQU8sU0FBR0EsUUFBTyxHQUFJLENBQUMsSUFBdUMsdUVBQXJDTixDQUFXLENBQUNNLFFBQU8sRUFBRWMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQU0sQ0FBRTs7Ozs7O21DQUNqSCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEIsQ0FBQztHQTlDZW5CLE1BQU07O1FBQ29CSiwwREFBWTtRQUMvQkEsMERBQVk7OztLQUZuQkksTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0L0Zvb3Rlci9Gb290ZXIudHN4P2Y5YTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYU11c2ljIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvdW5pdHMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gICAgY29uc3QgeyBhY2NvdW50LCBsaWJyYXJ5LCBjaGFpbklkIH0gPSB1c2VXZWIzUmVhY3QoKTtcbiAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdXNlV2ViM1JlYWN0KCk7XG4gICAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCk6IGFueSA9PiB7XG4gICAgICAgIGlmICghIWFjY291bnQgJiYgISFsaWJyYXJ5KSB7XG4gICAgICAgICAgbGV0IHN0YWxlID0gZmFsc2VcbiAgICBcbiAgICAgICAgICBsaWJyYXJ5XG4gICAgICAgICAgICAuZ2V0QmFsYW5jZShhY2NvdW50KVxuICAgICAgICAgICAgLnRoZW4oKGJhbGFuY2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXN0YWxlKSB7XG4gICAgICAgICAgICAgICAgc2V0QmFsYW5jZShiYWxhbmNlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFzdGFsZSkge1xuICAgICAgICAgICAgICAgIHNldEJhbGFuY2UobnVsbClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc3RhbGUgPSB0cnVlXG4gICAgICAgICAgICBzZXRCYWxhbmNlKG51bGwpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBbYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZF0pIC8vIGVuc3VyZXMgcmVmcmVzaCBpZiByZWZlcmVudGlhbCBpZGVudGl0eSBvZiBsaWJyYXJ5IGRvZXNuJ3QgY2hhbmdlIGFjcm9zcyBjaGFpbklkc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIFxuICAgIDw+PGZvb3RlciBjbGFzc05hbWU9J3ctc2NyZWVuIGZpeGVkIGJvdHRvbS0wIHAtMSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtc3RhcnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9zaWdodHNvZnNvdW5kc1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gbWQ6YnRuLWxnIGJ0bi1jaXJjbGUgYnRuLWdob3N0IHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZGVsYXktNzUgaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6c2NhbGUtMTAwJz48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTXVzaWN9Lz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWVuZCB0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIHsgYWN0aXZlICYmIGFjY291bnQgPyA8ZGl2PiB7YmFsYW5jZSA9PT0gbnVsbCA/ICdFcnJvcicgOiBiYWxhbmNlID8gYM6eJHtmb3JtYXRFdGhlcihiYWxhbmNlKS5zdWJzdHJpbmcoMCwgNyl9YCA6ICcnfTwvZGl2PiAgICAgXG4gICAgICAgICAgICAgIDogbnVsbCB9XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgICApO1xufSBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlV2ViM1JlYWN0IiwiRm9udEF3ZXNvbWVJY29uIiwiZmFNdXNpYyIsImZvcm1hdEV0aGVyIiwiRm9vdGVyIiwiYWNjb3VudCIsImxpYnJhcnkiLCJjaGFpbklkIiwiYWN0aXZlIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJzdGFsZSIsImdldEJhbGFuY2UiLCJ0aGVuIiwiY2F0Y2giLCJmb290ZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJmb3JtIiwiYWN0aW9uIiwidGFyZ2V0IiwiYnV0dG9uIiwiaWNvbiIsInN1YnN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/Footer/Footer.tsx\n");

/***/ })

});