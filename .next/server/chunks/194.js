"use strict";
exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ theme)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: ./src/lib/theme/colors.ts
/** extend additional color here */ const extendedColors = {
    brand: {
        100: "#181B22",
        200: "#328da8",
        300: "#364787",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: ""
    }
};
/** override chakra colors here */ const overridenChakraColors = {};
const colors = {
    ...overridenChakraColors,
    ...extendedColors
};
/* harmony default export */ const theme_colors = (colors);

;// CONCATENATED MODULE: ./src/lib/theme/components/button.ts
const Button = {
    baseStyle: {
        borderRadius: "full"
    }
};
/* harmony default export */ const components_button = (Button);

;// CONCATENATED MODULE: ./src/lib/theme/fonts.ts
const fonts = {
    body: "Lexend, sans-serif",
    heading: "Lexend, serif"
};
/* harmony default export */ const theme_fonts = (fonts);

;// CONCATENATED MODULE: ./src/lib/theme/theme.ts




const customTheme = (0,react_.extendTheme)({
    fonts: theme_fonts,
    colors: theme_colors,
    components: {
        Button: components_button
    },
    config: {
        ThemeConfig: {
            initialColorMode: 'dark',
            useSystemColorMode: false
        }
    }
});
/* harmony default export */ const theme = (customTheme);


/***/ })

};
;