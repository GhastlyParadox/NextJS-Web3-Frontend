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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Footer() {\n    _s();\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)(), account = ref.account, library = ref.library, chainId = ref.chainId;\n    var active = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)().active;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), balance1 = ref1[0], setBalance = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!!account && !!library) {\n            var stale = false;\n            library.getBalance(account).then(function(balance) {\n                if (!stale) {\n                    setBalance(balance);\n                }\n            }).catch(function() {\n                if (!stale) {\n                    setBalance(null);\n                }\n            });\n            return function() {\n                stale = true;\n                setBalance(null);\n            };\n        }\n    }, [\n        account,\n        library,\n        chainId\n    ]) // ensures refresh if referential identity of library doesn't change across chainIds\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-end m-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"https://soundcloud.com/sightsofsounds\",\n                            target: \"_blank\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn md:btn-lg btn-circle btn-ghost transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMusic\n                                }, void 0, false, {\n                                    fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 139\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"drawer-content\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"drawer place-content-end h-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"footer-drawer\",\n                                    type: \"checkbox\",\n                                    className: \"drawer-toggle\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"footer-drawer\",\n                                    className: \"drawer-button btn btn-sm bg-opacity-60\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faNavicon\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 97\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"drawer-side\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"footer-drawer\",\n                                            className: \"drawer-overlay rounded-lg\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"menu p-4 overflow-y-auto\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"list-item\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"/\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                className: \"link\",\n                                                                \"aria-label\": \"Home\",\n                                                                children: \"Home\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                                lineNumber: 56,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"list-item\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"https://github.com/GhastlyParadox\",\n                                                            target: \"_blank\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                \"aria-label\": \"Github\",\n                                                                className: \"link\",\n                                                                children: \"Github\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                                lineNumber: 63,\n                                                                columnNumber: 27\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                        lineNumber: 61,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"list-item\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"/portal/\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                \"aria-label\": \"Message\",\n                                                                className: \"link\",\n                                                                children: \"Messenger\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                                lineNumber: 70,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"self-end text-xl md:text-2xl font-medium p-1\",\n                        children: active && account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \" \",\n                                balance1 === null ? 'Error' : balance1 ? \"Ξ\".concat((0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_5__.formatEther)(balance1).substring(0, 7)) : ''\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 35\n                        }, this) : \"Ξ?.??\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Adam/Git/NextWave/src/layout/Footer/Footer.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_s(Footer, \"xNFgrp4nXZiffl+iLQMEND7Npj8=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React,\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React\n    ];\n});\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFDLENBQVc7OElBQ3BCYyxDQUFDOzREQUFDQyxJQUFJLEVBQUMsQ0FBbUM7NERBQUNaLE1BQU0sRUFBQyxDQUFRO2tKQUN0REMsQ0FBTTtnRUFBQ1ksQ0FBVSxhQUFDLENBQVE7Z0VBQUNoQixTQUFTLEVBQUMsQ0FBTTswRUFBQyxDQUU3Qzs7Ozs7Ozs7Ozs7Ozs7OztnSUFHUGEsQ0FBRTt3REFBQ2IsU0FBUyxFQUFDLENBQVc7OElBQ3BCYyxDQUFDOzREQUFDQyxJQUFJLEVBQUMsQ0FBVTtrSkFDakJYLENBQU07Z0VBQUNZLENBQVUsYUFBQyxDQUFTO2dFQUFDaEIsU0FBUyxFQUFDLENBQU07MEVBQUMsQ0FFOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQVFYRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBOEM7a0NBQ3pEVCxNQUFNLElBQUlILE9BQU8sK0VBQUlXLENBQUc7O2dDQUFDLENBQUM7Z0NBQUNQLFFBQU8sS0FBSyxJQUFJLEdBQUcsQ0FBTyxTQUFHQSxRQUFPLEdBQUksQ0FBQyxJQUF3Qyx1RUFBM0JOLENBQUMsQ0FBQ00sUUFBTyxFQUFFeUIsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQU0sQ0FBRTs7Ozs7O21DQUNoSCxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEIsQ0FBQztHQWhGZTlCLE1BQU07O1FBQ29CTCwwREFBWTtRQUMvQkEsMERBQVk7OztLQUZuQkssTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0L0Zvb3Rlci9Gb290ZXIudHN4P2Y5YTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYU11c2ljLCBmYU5hdmljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC91bml0cyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnksIGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICAgIGNvbnN0IHsgYWN0aXZlIH0gPSB1c2VXZWIzUmVhY3QoKTtcbiAgICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKTogYW55ID0+IHtcbiAgICAgICAgaWYgKCEhYWNjb3VudCAmJiAhIWxpYnJhcnkpIHtcbiAgICAgICAgICBsZXQgc3RhbGUgPSBmYWxzZVxuICAgIFxuICAgICAgICAgIGxpYnJhcnlcbiAgICAgICAgICAgIC5nZXRCYWxhbmNlKGFjY291bnQpXG4gICAgICAgICAgICAudGhlbigoYmFsYW5jZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghc3RhbGUpIHtcbiAgICAgICAgICAgICAgICBzZXRCYWxhbmNlKGJhbGFuY2UpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXN0YWxlKSB7XG4gICAgICAgICAgICAgICAgc2V0QmFsYW5jZShudWxsKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzdGFsZSA9IHRydWVcbiAgICAgICAgICAgIHNldEJhbGFuY2UobnVsbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIFthY2NvdW50LCBsaWJyYXJ5LCBjaGFpbklkXSkgLy8gZW5zdXJlcyByZWZyZXNoIGlmIHJlZmVyZW50aWFsIGlkZW50aXR5IG9mIGxpYnJhcnkgZG9lc24ndCBjaGFuZ2UgYWNyb3NzIGNoYWluSWRzXG5cbiAgICByZXR1cm4gKFxuICAgICAgXG4gICAgPD48Zm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIG0tMSc+ICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vc291bmRjbG91ZC5jb20vc2lnaHRzb2Zzb3VuZHNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBtZDpidG4tbGcgYnRuLWNpcmNsZSBidG4tZ2hvc3QgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkZWxheS03NSBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpzY2FsZS0xMDAnPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFNdXNpY30vPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJhd2VyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcmF3ZXIgcGxhY2UtY29udGVudC1lbmQgaC1hdXRvJz5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZm9vdGVyLWRyYXdlclwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImRyYXdlci10b2dnbGVcIiAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZvb3Rlci1kcmF3ZXJcIiBjbGFzc05hbWU9XCJkcmF3ZXItYnV0dG9uIGJ0biBidG4tc20gYmctb3BhY2l0eS02MFwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFOYXZpY29ufS8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcmF3ZXItc2lkZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZm9vdGVyLWRyYXdlclwiIGNsYXNzTmFtZT1cImRyYXdlci1vdmVybGF5IHJvdW5kZWQtbGdcIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUgcC00IG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibGlua1wiIGFyaWEtbGFiZWw9J0hvbWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9HaGFzdGx5UGFyYWRveFwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9J0dpdGh1YicgY2xhc3NOYW1lPVwibGlua1wiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpdGh1YlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+ICAgXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcG9ydGFsL1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0nTWVzc2FnZScgY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBNZXNzZW5nZXJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGYtZW5kIHRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1tZWRpdW0gcC0xXCI+XG4gICAgICAgICAgICB7IGFjdGl2ZSAmJiBhY2NvdW50ID8gPGRpdj4ge2JhbGFuY2UgPT09IG51bGwgPyAnRXJyb3InIDogYmFsYW5jZSA/IGDOniR7Zm9ybWF0RXRoZXIoYmFsYW5jZSkuc3Vic3RyaW5nKDAsIDcpfWAgOiAnJ308L2Rpdj4gICAgIFxuICAgICAgICAgICAgOiBgzp4/Lj8/YCB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC8+XG4gICAgKTtcbn0gXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVdlYjNSZWFjdCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhTXVzaWMiLCJmYU5hdmljb24iLCJmb3JtYXRFdGhlciIsIkZvb3RlciIsImFjY291bnQiLCJsaWJyYXJ5IiwiY2hhaW5JZCIsImFjdGl2ZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwic3RhbGUiLCJnZXRCYWxhbmNlIiwidGhlbiIsImNhdGNoIiwiZm9vdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImFjdGlvbiIsInRhcmdldCIsImJ1dHRvbiIsImljb24iLCJpbnB1dCIsImlkIiwidHlwZSIsImxhYmVsIiwiaHRtbEZvciIsIm5hdiIsInVsIiwibGkiLCJhIiwiaHJlZiIsImFyaWEtbGFiZWwiLCJzdWJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layout/Footer/Footer.tsx\n");

/***/ })

});