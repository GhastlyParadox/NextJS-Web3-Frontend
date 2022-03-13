"use strict";
exports.id = 783;
exports.ids = [783];
exports.modules = {

/***/ 71:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ injected)
/* harmony export */ });
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(590);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);

const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__.InjectedConnector({
    supportedChainIds: [
        4
    ]
});


/***/ }),

/***/ 783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useEagerConnect),
/* harmony export */   "f": () => (/* binding */ useInactiveListener)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _connectors_connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);



function useEagerConnect() {
    const { activate , active  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();
    const { 0: tried , 1: setTried  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        _connectors_connectors__WEBPACK_IMPORTED_MODULE_2__/* .injected.isAuthorized */ .L.isAuthorized().then((isAuthorized)=>{
            if (isAuthorized) {
                activate(_connectors_connectors__WEBPACK_IMPORTED_MODULE_2__/* .injected */ .L, undefined, true).catch(()=>{
                    setTried(true);
                });
            } else {
                setTried(true);
            }
        });
    }, []) // intentionally only running on mount (make sure it's only mounted once :))
    ;
    // if the connection worked, wait until we get confirmation of that to flip the flag
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!tried && active) {
            setTried(true);
        }
    }, [
        tried,
        active
    ]);
    return tried;
}
function useInactiveListener(suppress = false) {
    const { active , error , activate  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const { ethereum  } = window;
        if (ethereum && ethereum.on && !active && !error && !suppress) {
            const handleConnect = ()=>{
                console.log("Handling 'connect' event");
                activate(_connectors_connectors__WEBPACK_IMPORTED_MODULE_2__/* .injected */ .L);
            };
            const handleChainChanged = (chainId)=>{
                console.log("Handling 'chainChanged' event with payload", chainId);
                activate(_connectors_connectors__WEBPACK_IMPORTED_MODULE_2__/* .injected */ .L);
            };
            const handleAccountsChanged = (accounts)=>{
                console.log("Handling 'accountsChanged' event with payload", accounts);
                if (accounts.length > 0) {
                    activate(_connectors_connectors__WEBPACK_IMPORTED_MODULE_2__/* .injected */ .L);
                }
            };
            const handleNetworkChanged = (networkId)=>{
                console.log("Handling 'networkChanged' event with payload", networkId);
                activate(_connectors_connectors__WEBPACK_IMPORTED_MODULE_2__/* .injected */ .L);
            };
            ethereum.on('connect', handleConnect);
            ethereum.on('chainChanged', handleChainChanged);
            ethereum.on('accountsChanged', handleAccountsChanged);
            ethereum.on('networkChanged', handleNetworkChanged);
            return ()=>{
                if (ethereum.removeListener) {
                    ethereum.removeListener('connect', handleConnect);
                    ethereum.removeListener('chainChanged', handleChainChanged);
                    ethereum.removeListener('accountsChanged', handleAccountsChanged);
                    ethereum.removeListener('networkChanged', handleNetworkChanged);
                }
            };
        }
    }, [
        active,
        error,
        suppress,
        activate
    ]);
}


/***/ })

};
;