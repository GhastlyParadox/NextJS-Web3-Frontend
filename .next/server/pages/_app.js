"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(54);
;// CONCATENATED MODULE: external "@ethersproject/providers"
const providers_namespaceObject = require("@ethersproject/providers");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/lib/hooks/web3hooks.ts
var web3hooks = __webpack_require__(783);
;// CONCATENATED MODULE: ./src/lib/components/Web3ReactManager/index.tsx



function Web3ReactManager({ children  }) {
    const context = (0,core_.useWeb3React)();
    const { connector  } = context;
    // try to eagerly connect to an injected provider, if it exists and has granted access already
    const triedEager = (0,web3hooks/* useEagerConnect */.y)();
    const [activatingConnector, setActivatingConnector] = external_react_default().useState();
    // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate it
    (0,external_react_.useEffect)(()=>{
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [
        activatingConnector,
        connector
    ]);
    // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists
    (0,web3hooks/* useInactiveListener */.f)(!triedEager || !!activatingConnector);
    // handle delayed loader state
    const { 0: showLoader , 1: setShowLoader  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const timeout = setTimeout(()=>{
            setShowLoader(true);
        }, 600);
        return ()=>{
            clearTimeout(timeout);
            showLoader ? setShowLoader(false) : null;
        };
    }, []);
    // on page load, do nothing until we've tried to connect to the injected connector
    if (!triedEager) {
        return null;
    }
    return children;
};

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
// EXTERNAL MODULE: ./src/lib/theme/theme.ts + 3 modules
var theme = __webpack_require__(194);
;// CONCATENATED MODULE: external "@fortawesome/fontawesome-svg-core"
const fontawesome_svg_core_namespaceObject = require("@fortawesome/fontawesome-svg-core");
;// CONCATENATED MODULE: ./src/pages/_app.tsx

// import { useRouter } from 'next/router';








fontawesome_svg_core_namespaceObject.config.autoAddCss = false;
/*
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
*/ function getLibrary(provider) {
    const library = new providers_namespaceObject.Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
}
const App = ({ Component , pageProps  })=>/*#__PURE__*/ jsx_runtime_.jsx(core_.Web3ReactProvider, {
        getLibrary: getLibrary,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Web3ReactManager, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
                theme: theme/* default */.Z,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    })
;
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 54:
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ 590:
/***/ ((module) => {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [783,194], () => (__webpack_exec__(639)));
module.exports = __webpack_exports__;

})();