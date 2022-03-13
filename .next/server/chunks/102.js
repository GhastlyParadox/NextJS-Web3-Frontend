"use strict";
exports.id = 102;
exports.ids = [102];
exports.modules = {

/***/ 518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ Main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/lib/utils/AppConfig.ts
var AppConfig = __webpack_require__(684);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(54);
// EXTERNAL MODULE: ./src/lib/hooks/web3hooks.ts
var web3hooks = __webpack_require__(783);
// EXTERNAL MODULE: external "@web3-react/injected-connector"
var injected_connector_ = __webpack_require__(590);
// EXTERNAL MODULE: ./src/lib/connectors/connectors.ts
var connectors = __webpack_require__(71);
;// CONCATENATED MODULE: ./src/lib/components/Spinner.tsx


// <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
function Spinner({ color , ...rest }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "38",
        height: "38",
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: color,
        ...rest,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            fill: "none",
            fillRule: "evenodd",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                transform: "translate(1 1)",
                strokeWidth: "2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        strokeOpacity: ".5",
                        cx: "18",
                        cy: "18",
                        r: "18"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M36 18c0-9.94-8.06-18-18-18",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("animateTransform", {
                            attributeName: "transform",
                            type: "rotate",
                            from: "0 18 18",
                            to: "360 18 18",
                            dur: "1s",
                            repeatCount: "indefinite"
                        })
                    })
                ]
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/lib/components/ConnectionList.tsx







var ConnectorNames;
(function(ConnectorNames) {
    ConnectorNames["Injected"] = 'Metamask';
})(ConnectorNames || (ConnectorNames = {}));
const connectorsByName = {
    [ConnectorNames.Injected]: connectors/* injected */.L
};
function getErrorMessage(error) {
    if (error instanceof injected_connector_.NoEthereumProviderError) {
        return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
    } else if (error instanceof core_.UnsupportedChainIdError) {
        return "You're connected to an unsupported network.";
    } else if (error instanceof injected_connector_.UserRejectedRequestError // ||
    ) {
        return 'Please authorize this website to access your Ethereum account.';
    } else {
        console.error(error);
        return 'An unknown error occurred. Check the console for more details.';
    }
}
function ConnectionList() {
    const context = (0,core_.useWeb3React)();
    const { connector , activate , deactivate , active , error  } = context;
    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = external_react_default().useState();
    external_react_default().useEffect(()=>{
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [
        activatingConnector,
        connector
    ]);
    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = (0,web3hooks/* useEagerConnect */.y)();
    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    (0,web3hooks/* useInactiveListener */.f)(!triedEager || !!activatingConnector);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    display: 'grid',
                    gridGap: '1rem',
                    gridTemplateColumns: '1fr 1fr',
                    maxWidth: '20rem',
                    margin: 'auto'
                },
                children: Object.keys(connectorsByName).map((name)=>{
                    const currentConnector = connectorsByName[name];
                    const activating = currentConnector === activatingConnector;
                    const connected = currentConnector === connector;
                    const disabled = !triedEager || !!activatingConnector || connected || !!error;
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        style: {
                            height: '3rem',
                            borderRadius: '1rem',
                            borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
                            cursor: disabled ? 'unset' : 'pointer',
                            position: 'relative'
                        },
                        disabled: disabled,
                        onClick: ()=>{
                            setActivatingConnector(currentConnector);
                            activate(connectorsByName[name]);
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'black',
                                    margin: '0 0 0 1rem'
                                },
                                children: [
                                    activating && /*#__PURE__*/ jsx_runtime_.jsx(Spinner, {
                                        color: 'black',
                                        style: {
                                            height: '25%',
                                            marginLeft: '-1rem'
                                        }
                                    }),
                                    connected && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        role: "img",
                                        "aria-label": "check",
                                        children: "✅"
                                    })
                                ]
                            }),
                            name
                        ]
                    }, name));
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                children: [
                    (active || error) && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        style: {
                            width: '10rem',
                            height: '3rem',
                            marginTop: '2rem',
                            borderRadius: '1rem',
                            cursor: 'pointer'
                        },
                        onClick: ()=>{
                            deactivate();
                        },
                        children: "Disconnect"
                    }),
                    !!error && /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        style: {
                            marginTop: '1rem',
                            marginBottom: '0'
                        },
                        children: getErrorMessage(error)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    display: 'grid',
                    gridGap: '1rem',
                    gridTemplateColumns: 'fit-content',
                    maxWidth: '20rem',
                    margin: 'auto'
                }
            })
        ]
    }));
}

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: ./src/layout/Header/Account.tsx





function Account() {
    const { account  } = (0,core_.useWeb3React)();
    const { active  } = (0,core_.useWeb3React)();
    const { onOpen , isOpen , onClose  } = (0,react_.useDisclosure)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                mt: "4",
                mr: "1",
                order: [
                    -1,
                    null,
                    null,
                    2
                ],
                textAlign: [
                    'left',
                    null,
                    null,
                    'right'
                ],
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                    colorScheme: "gray",
                    variant: "outline",
                    onClick: onOpen,
                    children: active && account ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            account.substring(0, 6),
                            "...",
                            account.substring(account.length - 4)
                        ]
                    }) : 'Connect Wallet'
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Modal, {
                isOpen: isOpen,
                onClose: onClose,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalOverlay, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalContent, {
                        title: "Connect Wallet",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalHeader, {
                                children: "Connect a wallet"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalCloseButton, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalBody, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ConnectionList, {})
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(466);
;// CONCATENATED MODULE: ./src/layout/Header/Header.tsx






function Header() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            width: "100%",
            justifyContent: "space-between",
            bgColor: "transparent",
            height: "20",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            ml: "1vw",
                            children: AppConfig/* AppConfig.description */.X.description
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Breadcrumb, {
                        mr: "2vw",
                        spacing: "8px",
                        separator: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                            icon: free_solid_svg_icons_.faChevronRight
                        }),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.BreadcrumbItem, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.BreadcrumbLink, {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                                        size: "lg",
                                        "aria-label": "Home",
                                        variant: "ghost",
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                            icon: free_solid_svg_icons_.faHomeAlt
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.BreadcrumbItem, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.BreadcrumbLink, {
                                    href: "https://github.com/GhastlyParadox",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                                        size: "lg",
                                        "aria-label": "Github",
                                        variant: "ghost",
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                            maxWidth: "20px",
                                            src: "/images/logo-github-dark.png",
                                            alt: "Github"
                                        }),
                                        children: " "
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.BreadcrumbItem, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.BreadcrumbLink, {
                                    href: "/portal/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                                        variant: "ghost",
                                        "aria-label": "Message",
                                        size: "lg",
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                            icon: free_solid_svg_icons_.faMessage
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.BreadcrumbItem, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Account, {})
                            })
                        ]
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: external "@ethersproject/units"
var units_ = __webpack_require__(138);
;// CONCATENATED MODULE: ./src/layout/Footer/Balance.tsx





function Balance() {
    const { account , library , chainId  } = (0,core_.useWeb3React)();
    const { active  } = (0,core_.useWeb3React)();
    const { 0: balance1 , 1: setBalance  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        if (!!account && !!library) {
            let stale = false;
            library.getBalance(account).then((balance)=>{
                if (!stale) {
                    setBalance(balance);
                }
            }).catch(()=>{
                if (!stale) {
                    setBalance(null);
                }
            });
            return ()=>{
                stale = true;
                setBalance(null);
            };
        }
    }, [
        account,
        library,
        chainId
    ]) // ensures refresh if referential identity of library doesn't change across chainIds
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: active && account ? /*#__PURE__*/ jsx_runtime_.jsx(react_.StatNumber, {
            children: balance1 === null ? 'Error' : balance1 ? `Ξ${(0,units_.formatEther)(balance1).substring(0, 7)}` : ''
        }) : null
    }));
}

;// CONCATENATED MODULE: ./src/layout/Footer/Footer.tsx





function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            width: "100%",
            justifyContent: "space-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                    ml: "2",
                    mb: "2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                            icon: free_solid_svg_icons_.faMusic
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            href: "https://soundcloud.com/sightsofsounds",
                            isExternal: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "small",
                                children: "My other muse."
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                    mr: "2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Stat, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.StatNumber, {
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(Balance, {}),
                                " "
                            ]
                        })
                    })
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/layout/Main.tsx

// import { useRouter } from 'next/router';



const Main = (props)=>{
    // const router = useRouter();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        w: "100%",
        height: "100vh",
        children: [
            props.meta,
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                align: "center",
                justify: "center",
                mt: "18vh",
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                bottom: "0",
                position: "absolute",
                width: "100%",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            })
        ]
    }));
};



/***/ }),

/***/ 775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Meta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils_AppConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(684);




const Meta = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "UTF-8"
                    }, "charset"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width,initial-scale=1"
                    }, "viewport")
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
                title: props.title,
                description: props.description,
                canonical: props.canonical,
                openGraph: {
                    title: props.title,
                    description: props.description,
                    url: props.canonical,
                    locale: _lib_utils_AppConfig__WEBPACK_IMPORTED_MODULE_3__/* .AppConfig.locale */ .X.locale,
                    site_name: _lib_utils_AppConfig__WEBPACK_IMPORTED_MODULE_3__/* .AppConfig.site_name */ .X.site_name
                }
            })
        ]
    }));
};



/***/ }),

/***/ 684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ AppConfig)
/* harmony export */ });
const AppConfig = {
    site_name: 'Wave Portal',
    title: 'holla!',
    description: 'A lil web3 playground.',
    buildspace_url: 'https://buildspace.so/',
    locale: 'en'
};


/***/ })

};
;