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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Footer() {\n    _s();\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)(), account = ref.account, library = ref.library, chainId = ref.chainId;\n    var active = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)().active;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), balance1 = ref1[0], setBalance = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!!account && !!library) {\n            var stale = false;\n            library.getBalance(account).then(function(balance) {\n                if (!stale) {\n                    setBalance(balance);\n                }\n            }).catch(function() {\n                if (!stale) {\n                    setBalance(null);\n                }\n            });\n            return function() {\n                stale = true;\n                setBalance(null);\n            };\n        }\n    }, [\n        account,\n        library,\n        chainId\n    ]) // ensures refresh if referential identity of library doesn't change across chainIds\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n            className: \"p-2.5 w-screen fixed bottom-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-1 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"items-start flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"self-center transition ease-in-out delay-150 hover:animate-bounce\",\n                                action: \"https://soundcloud.com/sightsofsounds\",\n                                target: \"_blank\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"transition ease-in-out delay-150\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMusic\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 70\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm\",\n                                children: \"My other muse.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"items-end text-2xl font-medium\",\n                        children: active && account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \" \",\n                                balance1 === null ? 'Error' : balance1 ? \"Ξ\".concat((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(balance1).substring(0, 7)) : ''\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 37\n                        }, this) : null\n                    }, void 0, false, {\n                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                lineNumber: 41,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_s(Footer, \"xNFgrp4nXZiffl+iLQMEND7Npj8=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React,\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React\n    ];\n});\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L0Zvb3Rlci9Gb290ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDSDtBQUNpQjtBQUNMO0FBQ1Q7O0FBRzNDLFNBQVNPLE1BQU0sR0FBRyxDQUFDOztJQUN0QixHQUFLLENBQWlDSixHQUFjLEdBQWRBLDhEQUFZLElBQTFDSyxPQUFPLEdBQXVCTCxHQUFjLENBQTVDSyxPQUFPLEVBQUVDLE9BQU8sR0FBY04sR0FBYyxDQUFuQ00sT0FBTyxFQUFFQyxPQUFPLEdBQUtQLEdBQWMsQ0FBMUJPLE9BQU87SUFDakMsR0FBSyxDQUFHQyxNQUFNLEdBQUtSLDhEQUFZLEdBQXZCUSxNQUFNO0lBQ2QsR0FBSyxDQUF5QlYsSUFBNkIsR0FBN0JBLCtDQUFRLENBQWdCLElBQUksR0FBbkRXLFFBQU8sR0FBZ0JYLElBQTZCLEtBQTNDWSxVQUFVLEdBQUlaLElBQTZCO0lBRTNEQyxnREFBUyxDQUFDLFFBQVEsR0FBRyxDQUFDO1FBQ2xCLEVBQUUsSUFBSU0sT0FBTyxNQUFNQyxPQUFPLEVBQUUsQ0FBQztZQUMzQixHQUFHLENBQUNLLEtBQUssR0FBRyxLQUFLO1lBRWpCTCxPQUFPLENBQ0pNLFVBQVUsQ0FBQ1AsT0FBTyxFQUNsQlEsSUFBSSxDQUFDLFFBQVEsQ0FBUEosT0FBWSxFQUFLLENBQUM7Z0JBQ3ZCLEVBQUUsR0FBR0UsS0FBSyxFQUFFLENBQUM7b0JBQ1hELFVBQVUsQ0FBQ0QsT0FBTztnQkFDcEIsQ0FBQztZQUNILENBQUMsRUFDQUssS0FBSyxDQUFDLFFBQ25CLEdBRHlCLENBQUM7Z0JBQ1osRUFBRSxHQUFHSCxLQUFLLEVBQUUsQ0FBQztvQkFDWEQsVUFBVSxDQUFDLElBQUk7Z0JBQ2pCLENBQUM7WUFDSCxDQUFDO1lBRUgsTUFBTSxDQUFDLFFBQ2pCLEdBRHVCLENBQUM7Z0JBQ1pDLEtBQUssR0FBRyxJQUFJO2dCQUNaRCxVQUFVLENBQUMsSUFBSTtZQUNqQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDTDtRQUFBQSxPQUFPO1FBQUVDLE9BQU87UUFBRUMsT0FBTztJQUFBLENBQUMsQ0FBRSxDQUFvRjs7SUFFdEgsTUFBTTs4RkFFSFEsQ0FBTTtZQUFDQyxTQUFTLEVBQUMsQ0FBK0I7a0dBRTVDQyxDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBNkI7O2dHQUN6Q0MsQ0FBRzt3QkFBQ0QsU0FBUyxFQUFDLENBQTJCOzt3R0FDdkNFLENBQUk7Z0NBQUNGLFNBQVMsRUFBQyxDQUFtRTtnQ0FBQ0csTUFBTSxFQUFDLENBQXVDO2dDQUFDQyxNQUFNLEVBQUMsQ0FBUTtzSEFDL0lDLENBQU07b0NBQUNMLFNBQVMsRUFBQyxDQUFrQzswSEFBRWYsMkVBQWU7d0NBQUNxQixJQUFJLEVBQUVwQixzRUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozt3R0FFcEZxQixDQUFDO2dDQUFDUCxTQUFTLEVBQUMsQ0FBUzswQ0FBQyxDQUFjOzs7Ozs7Ozs7Ozs7Z0dBRXRDQyxDQUFHO3dCQUFDRCxTQUFTLEVBQUMsQ0FBZ0M7a0NBQzNDUixNQUFNLElBQUlILE9BQU8sK0VBQUlZLENBQUc7O2dDQUFDLENBQUM7Z0NBQUNSLFFBQU8sS0FBSyxJQUFJLEdBQUcsQ0FBTyxTQUFHQSxRQUFPLEdBQUksQ0FBQyxJQUF1Qyx1RUFBckNOLENBQVcsQ0FBQ00sUUFBTyxFQUFFZSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBTSxDQUFFOzs7Ozs7bUNBQ2pILElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQixDQUFDO0dBaERlcEIsTUFBTTs7UUFDb0JKLDBEQUFZO1FBQy9CQSwwREFBWTs7O0tBRm5CSSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQvRm9vdGVyL0Zvb3Rlci50c3g/ZjlhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhTXVzaWMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC91bml0cyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnksIGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICAgIGNvbnN0IHsgYWN0aXZlIH0gPSB1c2VXZWIzUmVhY3QoKTtcbiAgICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKTogYW55ID0+IHtcbiAgICAgICAgaWYgKCEhYWNjb3VudCAmJiAhIWxpYnJhcnkpIHtcbiAgICAgICAgICBsZXQgc3RhbGUgPSBmYWxzZVxuICAgIFxuICAgICAgICAgIGxpYnJhcnlcbiAgICAgICAgICAgIC5nZXRCYWxhbmNlKGFjY291bnQpXG4gICAgICAgICAgICAudGhlbigoYmFsYW5jZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghc3RhbGUpIHtcbiAgICAgICAgICAgICAgICBzZXRCYWxhbmNlKGJhbGFuY2UpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXN0YWxlKSB7XG4gICAgICAgICAgICAgICAgc2V0QmFsYW5jZShudWxsKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzdGFsZSA9IHRydWVcbiAgICAgICAgICAgIHNldEJhbGFuY2UobnVsbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIFthY2NvdW50LCBsaWJyYXJ5LCBjaGFpbklkXSkgLy8gZW5zdXJlcyByZWZyZXNoIGlmIHJlZmVyZW50aWFsIGlkZW50aXR5IG9mIGxpYnJhcnkgZG9lc24ndCBjaGFuZ2UgYWNyb3NzIGNoYWluSWRzXG5cbiAgICByZXR1cm4gKFxuICAgICAgXG4gICAgPD48Zm9vdGVyIGNsYXNzTmFtZT0ncC0yLjUgdy1zY3JlZW4gZml4ZWQgYm90dG9tLTAnPlxuICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtMSBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1zdGFydCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nc2VsZi1jZW50ZXIgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkZWxheS0xNTAgaG92ZXI6YW5pbWF0ZS1ib3VuY2UnIGFjdGlvbj1cImh0dHBzOi8vc291bmRjbG91ZC5jb20vc2lnaHRzb2Zzb3VuZHNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndHJhbnNpdGlvbiBlYXNlLWluLW91dCBkZWxheS0xNTAnPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFNdXNpY30vPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSc+TXkgb3RoZXIgbXVzZS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtZW5kIHRleHQtMnhsIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIHsgYWN0aXZlICYmIGFjY291bnQgPyA8ZGl2PiB7YmFsYW5jZSA9PT0gbnVsbCA/ICdFcnJvcicgOiBiYWxhbmNlID8gYM6eJHtmb3JtYXRFdGhlcihiYWxhbmNlKS5zdWJzdHJpbmcoMCwgNyl9YCA6ICcnfTwvZGl2PiAgICAgXG4gICAgICAgICAgICAgIDogbnVsbCB9XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgICApO1xufSBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlV2ViM1JlYWN0IiwiRm9udEF3ZXNvbWVJY29uIiwiZmFNdXNpYyIsImZvcm1hdEV0aGVyIiwiRm9vdGVyIiwiYWNjb3VudCIsImxpYnJhcnkiLCJjaGFpbklkIiwiYWN0aXZlIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJzdGFsZSIsImdldEJhbGFuY2UiLCJ0aGVuIiwiY2F0Y2giLCJmb290ZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJmb3JtIiwiYWN0aW9uIiwidGFyZ2V0IiwiYnV0dG9uIiwiaWNvbiIsInAiLCJzdWJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layout/Footer/Footer.tsx\n");

/***/ })

});