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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Footer() {\n    _s();\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)(), account = ref.account, library = ref.library, chainId = ref.chainId;\n    var active = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)().active;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), balance1 = ref1[0], setBalance = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!!account && !!library) {\n            var stale = false;\n            library.getBalance(account).then(function(balance) {\n                if (!stale) {\n                    setBalance(balance);\n                }\n            }).catch(function() {\n                if (!stale) {\n                    setBalance(null);\n                }\n            });\n            return function() {\n                stale = true;\n                setBalance(null);\n            };\n        }\n    }, [\n        account,\n        library,\n        chainId\n    ]) // ensures refresh if referential identity of library doesn't change across chainIds\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-end m-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"https://soundcloud.com/sightsofsounds\",\n                            target: \"_blank\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn md:btn-lg btn-circle btn-ghost transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMusic\n                                }, void 0, false, {\n                                    fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 139\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"drawer-content\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"drawer place-content-end h-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"footer-drawer\",\n                                    type: \"checkbox\",\n                                    className: \"drawer-toggle\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"footer-drawer\",\n                                    className: \"drawer-button btn btn-sm bg-opacity-70\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faNavicon\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 97\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"drawer-side\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"footer-drawer\",\n                                            className: \"drawer-overlay rounded-lg\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"menu p-4 overflow-y-auto\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"list-item\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"/\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                className: \"link\",\n                                                                \"aria-label\": \"Home\",\n                                                                children: \"Home\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                                lineNumber: 56,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"list-item\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"https://github.com/GhastlyParadox\",\n                                                            target: \"_blank\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                \"aria-label\": \"Github\",\n                                                                className: \"link\",\n                                                                children: \"Github\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                                lineNumber: 63,\n                                                                columnNumber: 27\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                        lineNumber: 61,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"list-item\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"/portal/\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                \"aria-label\": \"Message\",\n                                                                className: \"link\",\n                                                                children: \"Messenger\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                                lineNumber: 70,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xl md:text-2xl font-medium p-1\",\n                        children: active && account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \" \",\n                                balance1 === null ? 'Error' : balance1 ? \"Ξ\".concat((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(balance1).substring(0, 7)) : ''\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 35\n                        }, this) : \"Ξ?.??\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_s(Footer, \"xNFgrp4nXZiffl+iLQMEND7Npj8=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React,\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React\n    ];\n});\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7NERBQUNDLElBQUksRUFBQyxDQUFtQzs0REFBQ1osTUFBTSxFQUFDLENBQVE7a0pBQ3REQyxDQUFNO2dFQUFDWSxDQUFVLGFBQUMsQ0FBUTtnRUFBQ2hCLFNBQVMsRUFBQyxDQUFNOzBFQUFDLENBRTdDOzs7Ozs7Ozs7Ozs7Ozs7O2dJQUdQYSxDQUFFO3dEQUFDYixTQUFTLEVBQUMsQ0FBVzs4SUFDcEJjLENBQUM7NERBQUNDLElBQUksRUFBQyxDQUFVO2tKQUNqQlgsQ0FBTTtnRUFBQ1ksQ0FBVSxhQUFDLENBQVM7Z0VBQUNoQixTQUFTLEVBQUMsQ0FBTTswRUFBQyxDQUU5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBUVhELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFxQztrQ0FDaERULE1BQU0sSUFBSUgsT0FBTywrRUFBSVcsQ0FBRzs7Z0NBQUMsQ0FBQztnQ0FBQ1AsUUFBTyxLQUFLLElBQUksR0FBRyxDQUFPLFNBQUdBLFFBQU8sR0FBSSxDQUFDLElBQXdDLHVFQUEzQk4sQ0FBQyxDQUFDTSxRQUFPLEVBQUV5QixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBTSxDQUFFOzs7Ozs7bUNBQ2hILENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQixDQUFDO0dBaEZlOUIsTUFBTTs7UUFDb0JMLDBEQUFZO1FBQy9CQSwwREFBWTs7O0tBRm5CSyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQvRm9vdGVyL0Zvb3Rlci50c3g/ZjlhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhTXVzaWMsIGZhTmF2aWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmb3JtYXRFdGhlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3VuaXRzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICAgIGNvbnN0IHsgYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZCB9ID0gdXNlV2ViM1JlYWN0KCk7XG4gICAgY29uc3QgeyBhY3RpdmUgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICAgIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpOiBhbnkgPT4ge1xuICAgICAgICBpZiAoISFhY2NvdW50ICYmICEhbGlicmFyeSkge1xuICAgICAgICAgIGxldCBzdGFsZSA9IGZhbHNlXG4gICAgXG4gICAgICAgICAgbGlicmFyeVxuICAgICAgICAgICAgLmdldEJhbGFuY2UoYWNjb3VudClcbiAgICAgICAgICAgIC50aGVuKChiYWxhbmNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFzdGFsZSkge1xuICAgICAgICAgICAgICAgIHNldEJhbGFuY2UoYmFsYW5jZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghc3RhbGUpIHtcbiAgICAgICAgICAgICAgICBzZXRCYWxhbmNlKG51bGwpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHN0YWxlID0gdHJ1ZVxuICAgICAgICAgICAgc2V0QmFsYW5jZShudWxsKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgW2FjY291bnQsIGxpYnJhcnksIGNoYWluSWRdKSAvLyBlbnN1cmVzIHJlZnJlc2ggaWYgcmVmZXJlbnRpYWwgaWRlbnRpdHkgb2YgbGlicmFyeSBkb2Vzbid0IGNoYW5nZSBhY3Jvc3MgY2hhaW5JZHNcblxuICAgIHJldHVybiAoXG4gICAgICBcbiAgICA8Pjxmb290ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmQgbS0xJz4gICBcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9zaWdodHNvZnNvdW5kc1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIG1kOmJ0bi1sZyBidG4tY2lyY2xlIGJ0bi1naG9zdCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGRlbGF5LTc1IGhvdmVyOi10cmFuc2xhdGUteS0xIGhvdmVyOnNjYWxlLTEwMCc+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU11c2ljfS8+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcmF3ZXItY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RyYXdlciBwbGFjZS1jb250ZW50LWVuZCBoLWF1dG8nPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmb290ZXItZHJhd2VyXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZHJhd2VyLXRvZ2dsZVwiIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZm9vdGVyLWRyYXdlclwiIGNsYXNzTmFtZT1cImRyYXdlci1idXR0b24gYnRuIGJ0bi1zbSBiZy1vcGFjaXR5LTcwXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYU5hdmljb259Lz48L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyYXdlci1zaWRlXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmb290ZXItZHJhd2VyXCIgY2xhc3NOYW1lPVwiZHJhd2VyLW92ZXJsYXkgcm91bmRlZC1sZ1wiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudSBwLTQgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsaW5rXCIgYXJpYS1sYWJlbD0nSG9tZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0doYXN0bHlQYXJhZG94XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0nR2l0aHViJyBjbGFzc05hbWU9XCJsaW5rXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2l0aHViXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT4gICBcbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wb3J0YWwvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPSdNZXNzYWdlJyBjbGFzc05hbWU9XCJsaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NlbmdlclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LW1lZGl1bSBwLTFcIj5cbiAgICAgICAgICAgIHsgYWN0aXZlICYmIGFjY291bnQgPyA8ZGl2PiB7YmFsYW5jZSA9PT0gbnVsbCA/ICdFcnJvcicgOiBiYWxhbmNlID8gYM6eJHtmb3JtYXRFdGhlcihiYWxhbmNlKS5zdWJzdHJpbmcoMCwgNyl9YCA6ICcnfTwvZGl2PiAgICAgXG4gICAgICAgICAgICA6IGDOnj8uPz9gIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgICApO1xufSBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlV2ViM1JlYWN0IiwiRm9udEF3ZXNvbWVJY29uIiwiZmFNdXNpYyIsImZhTmF2aWNvbiIsImZvcm1hdEV0aGVyIiwiRm9vdGVyIiwiYWNjb3VudCIsImxpYnJhcnkiLCJjaGFpbklkIiwiYWN0aXZlIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJzdGFsZSIsImdldEJhbGFuY2UiLCJ0aGVuIiwiY2F0Y2giLCJmb290ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiYWN0aW9uIiwidGFyZ2V0IiwiYnV0dG9uIiwiaWNvbiIsImlucHV0IiwiaWQiLCJ0eXBlIiwibGFiZWwiLCJodG1sRm9yIiwibmF2IiwidWwiLCJsaSIsImEiLCJocmVmIiwiYXJpYS1sYWJlbCIsInN1YnN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/Footer/Footer.tsx\n");

/***/ })

});