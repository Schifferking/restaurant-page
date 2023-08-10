/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/Lobster-Regular.ttf */ "./src/fonts/Lobster-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/OpenSans-VariableFont_wdth,wght.ttf */ "./src/fonts/OpenSans-VariableFont_wdth,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf */ "./src/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Lobster';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
  font-size: normal;
}

@font-face {
  font-family: 'OpenSans';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}),
    url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  font-weight: 300;
  font-style: normal;
}

html, body {
  height: 100%;
}

body {
  margin: 0;
}

.full-height {
  height: 100%;
}

#content {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #7f762f;
}

header {
  margin: 0.5% 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 40px;
}

button,
h1,
h2,
h3,
p,
a {
  color: #ffffff;
}

button {
  font-size: 24px;
  font-family: 'OpenSans';
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid #ffffff;
  border-radius: 8px;
  transition-duration: 0.2s;
}

button:hover {
  color: #000000;
  background-color: #ffffff;
  border: 2px solid #000000;
  cursor: pointer;
}

main {
  flex: 1 0 auto;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ),
  url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: contain;
  background-repeat: repeat;
  background-position: center;
}

.home-container {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

h1,
h2,
h3 {
  font-family: 'Lobster';
}

h1 {
  font-size: 50px;
}

h2 {
  font-size: 40px;
}

h3 {
  font-size: 34px;
}

p,
footer {
  font-family: 'OpenSans';
}

p {
  font-size: 28px;
}

header,
footer {
  flex-shrink: 0;
}

footer {
  margin: 0.5% 0;
}

a {
  font-size: 24px;
  text-decoration: none;
  transition-duration: 0.2s;
}

a:hover {
  font-size: 25px;
}

.menu-container {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.menu-container > h1 {
  align-self: center;
}

.header-container {
  width: 50%;
  align-self: center;
  text-align: center;
  border: 2px solid #000000;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.6);
}

.header-container > h2 {
  color: #000000;
}

.product-container {
  border: 2px solid #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
}

.product-container > h3,
.product-container > p,
.product-container > img {
  align-self: center;
}

.product-container > img {
  border-radius: 8px;
  border: 2px solid #ffffff;
}

.price {
  font-size: 26px;
}

.full-width {
  width: 100%;
}

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.person-container {
  width: 25%;
  padding: 0 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid #ffffff;
  border-radius: 8px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4CAA4C;EAC5C,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB;2CACiE;EACjE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;;;;;;EAME,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,oCAAoC;EACpC,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd;;;;yCAI8B;EAC9B,wBAAwB;EACxB,yBAAyB;EACzB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,eAAe;EACf,uBAAuB;AACzB;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,0CAA0C;AAC5C;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,oCAAoC;EACpC,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,UAAU;EACV,eAAe;EACf,oCAAoC;EACpC,yBAAyB;EACzB,kBAAkB;AACpB","sourcesContent":["@font-face {\n  font-family: 'Lobster';\n  src: url('../src/fonts/Lobster-Regular.ttf');\n  font-weight: 400;\n  font-size: normal;\n}\n\n@font-face {\n  font-family: 'OpenSans';\n  src: url('../src/fonts/OpenSans-VariableFont_wdth\\,wght.ttf'),\n    url('../src/fonts/OpenSans-Italic-VariableFont_wdth\\,wght.ttf');\n  font-weight: 300;\n  font-style: normal;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\n.full-height {\n  height: 100%;\n}\n\n#content {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #7f762f;\n}\n\nheader {\n  margin: 0.5% 0;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n}\n\nbutton,\nh1,\nh2,\nh3,\np,\na {\n  color: #ffffff;\n}\n\nbutton {\n  font-size: 24px;\n  font-family: 'OpenSans';\n  background-color: rgba(0, 0, 0, 0.6);\n  border: 2px solid #ffffff;\n  border-radius: 8px;\n  transition-duration: 0.2s;\n}\n\nbutton:hover {\n  color: #000000;\n  background-color: #ffffff;\n  border: 2px solid #000000;\n  cursor: pointer;\n}\n\nmain {\n  flex: 1 0 auto;\n  background: linear-gradient(\n    rgba(0, 0, 0, 0.5),\n    rgba(0, 0, 0, 0.5)\n  ),\n  url('./images/background.jpg');\n  background-size: contain;\n  background-repeat: repeat;\n  background-position: center;\n}\n\n.home-container {\n  padding: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\nh1,\nh2,\nh3 {\n  font-family: 'Lobster';\n}\n\nh1 {\n  font-size: 50px;\n}\n\nh2 {\n  font-size: 40px;\n}\n\nh3 {\n  font-size: 34px;\n}\n\np,\nfooter {\n  font-family: 'OpenSans';\n}\n\np {\n  font-size: 28px;\n}\n\nheader,\nfooter {\n  flex-shrink: 0;\n}\n\nfooter {\n  margin: 0.5% 0;\n}\n\na {\n  font-size: 24px;\n  text-decoration: none;\n  transition-duration: 0.2s;\n}\n\na:hover {\n  font-size: 25px;\n}\n\n.menu-container {\n  width: 50%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.menu-container > h1 {\n  align-self: center;\n}\n\n.header-container {\n  width: 50%;\n  align-self: center;\n  text-align: center;\n  border: 2px solid #000000;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.header-container > h2 {\n  color: #000000;\n}\n\n.product-container {\n  border: 2px solid #ffffff;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 6px;\n  padding: 0 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.product-container > h3,\n.product-container > p,\n.product-container > img {\n  align-self: center;\n}\n\n.product-container > img {\n  border-radius: 8px;\n  border: 2px solid #ffffff;\n}\n\n.price {\n  font-size: 26px;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n\n.person-container {\n  width: 25%;\n  padding: 0 1rem;\n  background-color: rgba(0, 0, 0, 0.6);\n  border: 2px solid #ffffff;\n  border-radius: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
class Contact {
  static createH1() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact';
    return h1;
  }

  static createH2(content) {
    const h2 = document.createElement('h2');
    h2.textContent = content;
    return h2;
  }

  static createDiv() {
    return document.createElement('div');
  }

  static createMain() {
    return document.createElement('main');
  }

  static createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;
    return p;
  }

  static createPersonContact(name, position, phone, email) {
    const personDiv = Contact.createDiv();
    personDiv.classList.add('person-container');
    personDiv.appendChild(Contact.createH2(name));
    personDiv.appendChild(Contact.createParagraph(position));
    personDiv.appendChild(Contact.createParagraph(phone));
    personDiv.appendChild(Contact.createParagraph(email));
    return personDiv;
  }

  static createManager() {
    const name = 'John Doe';
    const position = 'Manager';
    const phone = '123-456-7890';
    const email = 'JohnDoe@RealNoFake.com';
    return Contact.createPersonContact(name, position, phone, email);
  }

  static createChef() {
    const name = 'Rick Oak';
    const position = 'Chef';
    const phone = '234-567-8901';
    const email = 'RickOak@RealNoFake.com';
    return Contact.createPersonContact(name, position, phone, email);
  }

  static createWaiter() {
    const name = 'Joe Steel';
    const position = 'Waiter';
    const phone = '345-678-9012';
    const email = 'JoeSteel@RealNoFake.com';
    return Contact.createPersonContact(name, position, phone, email);
  }

  static createCM() {
    const name = 'Tom Olive';
    const position = 'Community Manager';
    const phone = '456-789-0123';
    const email = 'TomOlive@RealNoFake.com';
    return Contact.createPersonContact(name, position, phone, email);
  }

  static loadPeople() {
    const people = [];
    people.push(Contact.createH1())
    people.push(Contact.createManager());
    people.push(Contact.createChef());
    people.push(Contact.createWaiter());
    people.push(Contact.createCM());
    return people;
  }

  static loadContact() {
    const main = document.querySelector('main');
    const contactContainer = Contact.createDiv();
    contactContainer.classList.add('contact-container');
    const people = Contact.loadPeople();
    people.map(person => {
      contactContainer.appendChild(person);
      main.appendChild(contactContainer);
      return main;
    });
    main.appendChild(contactContainer);
  }
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _images_menu_hamburgers_cheeseburger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu/hamburgers/cheeseburger.jpg */ "./src/images/menu/hamburgers/cheeseburger.jpg");
/* harmony import */ var _images_menu_hamburgers_onion_hamburger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu/hamburgers/onion-hamburger.jpg */ "./src/images/menu/hamburgers/onion-hamburger.jpg");
/* harmony import */ var _images_menu_hamburgers_chili_hamburger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu/hamburgers/chili-hamburger.jpg */ "./src/images/menu/hamburgers/chili-hamburger.jpg");
/* harmony import */ var _images_menu_beverages_coke_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu/beverages/coke.jpg */ "./src/images/menu/beverages/coke.jpg");
/* harmony import */ var _images_menu_beverages_beer_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/menu/beverages/beer.jpg */ "./src/images/menu/beverages/beer.jpg");
/* harmony import */ var _images_menu_beverages_milkshake_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/menu/beverages/milkshake.jpg */ "./src/images/menu/beverages/milkshake.jpg");
/* harmony import */ var _images_menu_beverages_water_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/menu/beverages/water.jpg */ "./src/images/menu/beverages/water.jpg");
/* harmony import */ var _images_menu_beverages_juice_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/menu/beverages/juice.jpg */ "./src/images/menu/beverages/juice.jpg");









class Menu {
  static createH1() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    return h1;
  }

  static createH2(content) {
    const h2 = document.createElement('h2');
    const div = Menu.createDiv();
    h2.textContent = content;
    div.appendChild(h2);
    div.classList.add('header-container');
    return div;
  }

  static createH3(content) {
    const h3 = document.createElement('h3');
    h3.textContent = content;
    return h3;
  }

  static createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;
    return p;
  }

  static createDiv() {
    return document.createElement('div');
  }

  static createImage(src) {
    const image = new Image();
    image.src = src;
    return image;
  }

  static createProduct(name, description, price, productSrc) {
    // price is a string
    const productDiv = Menu.createDiv();
    productDiv.classList.add('product-container');
    const productH3 = Menu.createH3(name);
    const image = Menu.createImage(productSrc);
    const productDescription = Menu.createParagraph(description);
    const productPrice = Menu.createParagraph(price);
    productPrice.classList.add('price');
    productDiv.appendChild(productH3);
    productDiv.appendChild(image);
    productDiv.appendChild(productDescription);
    productDiv.appendChild(productPrice);
    return productDiv;
  }

  static createCheeseburger() {
    const name = 'Cheeseburger';
    const description = 'A delicious burger with some cheese slices. Some of the toppings we offer are lettuce, tomato, onion, pickles, and bacon to name a few.';
    const price = '$2.5';
    const productSrc = _images_menu_hamburgers_cheeseburger_jpg__WEBPACK_IMPORTED_MODULE_0__;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createOnionBurger() {
    const name = 'Onion burger';
    const description = "From Oklahoma, like the name says, it's main ingredient is onion. The onion is caramelized and crispy. It also usually has beef patty, pickles and mustard or mayonnaise.";
    const price = '$3';
    const productSrc = _images_menu_hamburgers_onion_hamburger_jpg__WEBPACK_IMPORTED_MODULE_1__;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createchiliBurger() {
    const name = 'Chili burger';
    const description = 'This variant contains a not so spicy chili. It is topped with onions and cheese and usually served with fries.';
    const price = '$5';
    const productSrc = _images_menu_hamburgers_chili_hamburger_jpg__WEBPACK_IMPORTED_MODULE_2__;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createCoke() {
    const name = 'Coke';
    const description = 'A simple, yet popular choice.';
    const price = '$0.5';
    const productSrc = _images_menu_beverages_coke_jpg__WEBPACK_IMPORTED_MODULE_3__;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createBeer() {
    const name = 'Beer';
    const description = "For some, it's the best drink, for others, not really good.";
    const price = '$4';
    const productSrc = _images_menu_beverages_beer_jpg__WEBPACK_IMPORTED_MODULE_4__;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createMilkshake() {
    const name = 'Milkshake';
    const description = 'You know it, a mixture of some ingredients, where milk is the main one. Ask for the different flavours we offer.';
    const price = '$3';
    const productSrc = _images_menu_beverages_milkshake_jpg__WEBPACK_IMPORTED_MODULE_5__;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createWater() {
    const name = 'Water';
    const description = 'Just water.';
    const price = '$2';
    const productSrc = _images_menu_beverages_water_jpg__WEBPACK_IMPORTED_MODULE_6__;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static createJuice() {
    const name = 'Juice';
    const description = 'A single juice bottle. Ask for the options.';
    const price = '$2.5';
    const productSrc = _images_menu_beverages_juice_jpg__WEBPACK_IMPORTED_MODULE_7__;
    return Menu.createProduct(name, description, price, productSrc);
  }

  static loadBurgers() {
    const burgers = [];
    burgers.push(Menu.createH2('Burgers'));
    burgers.push(Menu.createCheeseburger());
    burgers.push(Menu.createOnionBurger());
    burgers.push(Menu.createchiliBurger());
    return burgers;
  }

  static loadBeverages() {
    const beverages = [];
    beverages.push(Menu.createH2('Beverages'));
    beverages.push(Menu.createCoke());
    beverages.push(Menu.createBeer());
    beverages.push(Menu.createMilkshake());
    beverages.push(Menu.createWater());
    beverages.push(Menu.createJuice());
    return beverages;
  }

  static loadMenu() {
    const main = document.querySelector('main');
    const menuContainer = Menu.createDiv();
    menuContainer.classList.add('menu-container');
    const h1 = Menu.createH1();
    const burgers = Menu.loadBurgers();
    const beverages = Menu.loadBeverages();
    // mix products in one array
    const products = burgers.concat(beverages);
    menuContainer.appendChild(h1);
    products.map(product => menuContainer.appendChild(product));
    main.appendChild(menuContainer);
  }
}


/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageLoader)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


class PageLoader {
  content = document.querySelector('#content');

  static createHeader() {
    return document.createElement('header');
  }

  static createNav() {
    return document.createElement('nav');
  }

  static createUl() {
    return document.createElement('ul');
  }

  createLi(element) {
    const li = document.createElement('li');
    this.addChildElementToElement(element, li);
    return li;
  }

  static createButton(content) {
    const button = document.createElement('button');
    button.textContent = content;
    return button;
  }

  static createButtons() {
    const buttons = [];
    const homeButton = PageLoader.createButton('Home');
    homeButton.classList.add('home');
    const menuButton = PageLoader.createButton('Menu');
    menuButton.classList.add('menu');
    const contactButton = PageLoader.createButton('Contact');
    contactButton.classList.add('contact');
    buttons.push(homeButton);
    buttons.push(menuButton);
    buttons.push(contactButton);
    return buttons;
  }

  createList() {
    const ul = PageLoader.createUl();
    const buttons = PageLoader.createButtons();
    buttons.map(button => this.addChildElementToElement(this.createLi(button), ul));
    return ul;
  }

  static createMain() {
    return document.createElement('main');
  }

  static createHeadline() {
    const h1 = document.createElement('h1');
    h1.textContent = "Have some hamburger!";
    return h1;
  }

  static createParagraph(content) {
    const p = document.createElement('p');
    p.textContent = content;
    return p;
  }

  static createLink(link, text) {
    const linkElement = document.createElement('a');
    linkElement.textContent = text;
    linkElement.href = link;
    return linkElement;
  }

  static createDiv() {
    return document.createElement('div');
  }

  static createFooter() {
    return document.createElement('footer');
  }

  createCreditsList() {
    const ul = PageLoader.createUl();
    const hamburgerLink = 'https://www.freepik.com/free-vector/cheese-burger-cartoon-icon-illustration_11787888.htm#query=hamburguer&position=1&from_view=search&track=sph';
    const hamburgerText = 'Hamburger background by catalyststuff on Freepik';
    const hamburgerIconLink = "https://www.flaticon.com/free-icons/burger";
    const hamburgerIconText = 'Hamburger icon by Pixel perfect on Flaticon';
    this.addChildElementToElement(this.createLi(PageLoader.createLink(hamburgerLink, hamburgerText)), ul);
    this.addChildElementToElement(this.createLi(PageLoader.createLink(hamburgerIconLink, hamburgerIconText)), ul);
    return ul;
  }

  addChildElementToElement(childElement, element) {
    if (element === undefined)
      this.content.appendChild(childElement);
    else
      element.appendChild(childElement);
  }

  loadNav() {
    const nav = PageLoader.createNav();
    this.addChildElementToElement(this.createList(), nav);
    return nav;
  }

  loadHeader() {
    const header = PageLoader.createHeader();
    this.addChildElementToElement(header);
    this.addChildElementToElement(this.loadNav(), header);
  }

  loadMain() {
    const main = PageLoader.createMain();
    const restaurantDescription = 'Hello, and welcome to our restaurant. We have a variety of burgers to choose from; every ingredient is clean and fresh. And the place is filled with a kind atmosphere.';
    const homeContainer = PageLoader.createDiv();
    homeContainer.classList.add('home-container');
    this.addChildElementToElement(main);
    this.addChildElementToElement(PageLoader.createHeadline(), homeContainer);
    this.addChildElementToElement(PageLoader.createParagraph(restaurantDescription), homeContainer);
    this.addChildElementToElement(homeContainer, main);
  }

  loadFooter() {
    const footer = PageLoader.createFooter();
    const creditsList = this.createCreditsList();
    this.addChildElementToElement(footer);
    this.addChildElementToElement(creditsList, footer);
  }

  loadPage() {
    this.content.classList.add('full-height');
    this.loadHeader();
    this.loadMain();
    this.loadFooter();
  }
}


/***/ }),

/***/ "./src/fonts/Lobster-Regular.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Lobster-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03c38496322925fec242.ttf";

/***/ }),

/***/ "./src/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf":
/*!**************************************************************!*\
  !*** ./src/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0e19c0bb999dca783c5.ttf";

/***/ }),

/***/ "./src/fonts/OpenSans-VariableFont_wdth,wght.ttf":
/*!*******************************************************!*\
  !*** ./src/fonts/OpenSans-VariableFont_wdth,wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "071a1becc7f00e33cc5b.ttf";

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea1fab74fe8ab752a3fb.jpg";

/***/ }),

/***/ "./src/images/menu/beverages/beer.jpg":
/*!********************************************!*\
  !*** ./src/images/menu/beverages/beer.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bd761c5c569eba8355b.jpg";

/***/ }),

/***/ "./src/images/menu/beverages/coke.jpg":
/*!********************************************!*\
  !*** ./src/images/menu/beverages/coke.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c519292e448dd522960b.jpg";

/***/ }),

/***/ "./src/images/menu/beverages/juice.jpg":
/*!*********************************************!*\
  !*** ./src/images/menu/beverages/juice.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9969e960afb45b5a5f34.jpg";

/***/ }),

/***/ "./src/images/menu/beverages/milkshake.jpg":
/*!*************************************************!*\
  !*** ./src/images/menu/beverages/milkshake.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f366153c5dd4dfca043.jpg";

/***/ }),

/***/ "./src/images/menu/beverages/water.jpg":
/*!*********************************************!*\
  !*** ./src/images/menu/beverages/water.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a89417948b1b6a9c6684.jpg";

/***/ }),

/***/ "./src/images/menu/hamburgers/cheeseburger.jpg":
/*!*****************************************************!*\
  !*** ./src/images/menu/hamburgers/cheeseburger.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "026c23169f9ed676c0c9.jpg";

/***/ }),

/***/ "./src/images/menu/hamburgers/chili-hamburger.jpg":
/*!********************************************************!*\
  !*** ./src/images/menu/hamburgers/chili-hamburger.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "314a5397927abc23d71f.jpg";

/***/ }),

/***/ "./src/images/menu/hamburgers/onion-hamburger.jpg":
/*!********************************************************!*\
  !*** ./src/images/menu/hamburgers/onion-hamburger.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91e66e3a60287ecb760c.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const myPageLoader = new _page_load__WEBPACK_IMPORTED_MODULE_0__["default"]();
myPageLoader.loadPage();
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');
const content = document.querySelector('#content');

homeButton.addEventListener('click', () => {
  const homeContainer = document.querySelector('.home-container');
  if (homeContainer === null)
  {
    content.classList.add('full-height');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    main.classList.remove('full-width');
    main.remove();
    footer.remove();
    myPageLoader.loadMain();
    myPageLoader.loadFooter();
  }
});

menuButton.addEventListener('click', () => {
  const menuContainer = document.querySelector('.menu-container');
  if (menuContainer === null)
  {
    const main = document.querySelector('main');
    main.classList.remove('full-width');
    const pageContent = document.querySelector('#content > main > div');
    content.classList.remove('full-height');
    pageContent.remove();
    _menu__WEBPACK_IMPORTED_MODULE_1__["default"].loadMenu();
  }
});

contactButton.addEventListener('click', () => {
  const contactContainer = document.querySelector('.contact-container');
  if (contactContainer === null)
  {
    const pageContent = document.querySelector('#content > main > div');
    const main = document.querySelector('main');
    main.classList.add('full-width');
    content.classList.remove('full-height');
    pageContent.remove();
    _contact__WEBPACK_IMPORTED_MODULE_2__["default"].loadContact();
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHdJQUFtRDtBQUMvRiw0Q0FBNEMsd0tBQW1FO0FBQy9HLDRDQUE0QyxzTEFBMEU7QUFDdEgsNENBQTRDLDJIQUEwQztBQUN0Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRCxVQUFVLG1DQUFtQztBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUNBQW1DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxRQUFRLE9BQU8sYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxL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QUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZxRTtBQUNFO0FBQ0E7QUFDbkI7QUFDQTtBQUNVO0FBQ1I7QUFDQTs7QUFFdkM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxRUFBWTtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUFXO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0VBQVc7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0REFBSTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDREQUFJO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUVBQVM7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2REFBSztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZEQUFLO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEtxQjs7QUFFTjtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzSEFBc0g7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdklBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ1g7QUFDTTs7QUFFaEMseUJBQXlCLGtEQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQUk7QUFDUjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBTztBQUNYO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9mb250cy9Mb2JzdGVyLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ZvbnRzL09wZW5TYW5zLVZhcmlhYmxlRm9udF93ZHRoLHdnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ZvbnRzL09wZW5TYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2R0aCx3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZnVsbC1oZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNjb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmNzYyZjtcbn1cblxuaGVhZGVyIHtcbiAgbWFyZ2luOiAwLjUlIDA7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDQwcHg7XG59XG5cbmJ1dHRvbixcbmgxLFxuaDIsXG5oMyxcbnAsXG5hIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYWluIHtcbiAgZmxleDogMSAwIGF1dG87XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICByZ2JhKDAsIDAsIDAsIDAuNSksXG4gICAgcmdiYSgwLCAwLCAwLCAwLjUpXG4gICksXG4gIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5ob21lLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmgxLFxuaDIsXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDM0cHg7XG59XG5cbnAsXG5mb290ZXIge1xuICBmb250LWZhbWlseTogJ09wZW5TYW5zJztcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuaGVhZGVyLFxuZm9vdGVyIHtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbmZvb3RlciB7XG4gIG1hcmdpbjogMC41JSAwO1xufVxuXG5hIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5cbmE6aG92ZXIge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDUwcHg7XG59XG5cbi5tZW51LWNvbnRhaW5lciA+IGgxIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuLmhlYWRlci1jb250YWluZXIgPiBoMiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ucHJvZHVjdC1jb250YWluZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMCAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvZHVjdC1jb250YWluZXIgPiBoMyxcbi5wcm9kdWN0LWNvbnRhaW5lciA+IHAsXG4ucHJvZHVjdC1jb250YWluZXIgPiBpbWcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5wcm9kdWN0LWNvbnRhaW5lciA+IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbn1cblxuLnByaWNlIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDUwcHg7XG59XG5cbi5wZXJzb24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QjsyQ0FDaUU7RUFDakUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBOzs7Ozs7RUFNRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkOzs7O3lDQUk4QjtFQUM5Qix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XFxuICBzcmM6IHVybCgnLi4vc3JjL2ZvbnRzL0xvYnN0ZXItUmVndWxhci50dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ09wZW5TYW5zJztcXG4gIHNyYzogdXJsKCcuLi9zcmMvZm9udHMvT3BlblNhbnMtVmFyaWFibGVGb250X3dkdGhcXFxcLHdnaHQudHRmJyksXFxuICAgIHVybCgnLi4vc3JjL2ZvbnRzL09wZW5TYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2R0aFxcXFwsd2dodC50dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmZ1bGwtaGVpZ2h0IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y3NjJmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgbWFyZ2luOiAwLjUlIDA7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbmJ1dHRvbixcXG5oMSxcXG5oMixcXG5oMyxcXG5wLFxcbmEge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LWZhbWlseTogJ09wZW5TYW5zJztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjUpLFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuNSlcXG4gICksXFxuICB1cmwoJy4vaW1hZ2VzL2JhY2tncm91bmQuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1jb250YWluZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG59XFxuXFxucCxcXG5mb290ZXIge1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWFyZ2luOiAwLjUlIDA7XFxufVxcblxcbmEge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG59XFxuXFxuYTpob3ZlciB7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyID4gaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIgPiBoMiB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLnByb2R1Y3QtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2R1Y3QtY29udGFpbmVyID4gaDMsXFxuLnByb2R1Y3QtY29udGFpbmVyID4gcCxcXG4ucHJvZHVjdC1jb250YWluZXIgPiBpbWcge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJvZHVjdC1jb250YWluZXIgPiBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcXG59XFxuXFxuLnByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuLmZ1bGwtd2lkdGgge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5wZXJzb24tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3Qge1xuICBzdGF0aWMgY3JlYXRlSDEoKSB7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIHJldHVybiBoMTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVIMihjb250ZW50KSB7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICByZXR1cm4gaDI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRGl2KCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVNYWluKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlUGFyYWdyYXBoKGNvbnRlbnQpIHtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBwO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVBlcnNvbkNvbnRhY3QobmFtZSwgcG9zaXRpb24sIHBob25lLCBlbWFpbCkge1xuICAgIGNvbnN0IHBlcnNvbkRpdiA9IENvbnRhY3QuY3JlYXRlRGl2KCk7XG4gICAgcGVyc29uRGl2LmNsYXNzTGlzdC5hZGQoJ3BlcnNvbi1jb250YWluZXInKTtcbiAgICBwZXJzb25EaXYuYXBwZW5kQ2hpbGQoQ29udGFjdC5jcmVhdGVIMihuYW1lKSk7XG4gICAgcGVyc29uRGl2LmFwcGVuZENoaWxkKENvbnRhY3QuY3JlYXRlUGFyYWdyYXBoKHBvc2l0aW9uKSk7XG4gICAgcGVyc29uRGl2LmFwcGVuZENoaWxkKENvbnRhY3QuY3JlYXRlUGFyYWdyYXBoKHBob25lKSk7XG4gICAgcGVyc29uRGl2LmFwcGVuZENoaWxkKENvbnRhY3QuY3JlYXRlUGFyYWdyYXBoKGVtYWlsKSk7XG4gICAgcmV0dXJuIHBlcnNvbkRpdjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVNYW5hZ2VyKCkge1xuICAgIGNvbnN0IG5hbWUgPSAnSm9obiBEb2UnO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gJ01hbmFnZXInO1xuICAgIGNvbnN0IHBob25lID0gJzEyMy00NTYtNzg5MCc7XG4gICAgY29uc3QgZW1haWwgPSAnSm9obkRvZUBSZWFsTm9GYWtlLmNvbSc7XG4gICAgcmV0dXJuIENvbnRhY3QuY3JlYXRlUGVyc29uQ29udGFjdChuYW1lLCBwb3NpdGlvbiwgcGhvbmUsIGVtYWlsKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVDaGVmKCkge1xuICAgIGNvbnN0IG5hbWUgPSAnUmljayBPYWsnO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gJ0NoZWYnO1xuICAgIGNvbnN0IHBob25lID0gJzIzNC01NjctODkwMSc7XG4gICAgY29uc3QgZW1haWwgPSAnUmlja09ha0BSZWFsTm9GYWtlLmNvbSc7XG4gICAgcmV0dXJuIENvbnRhY3QuY3JlYXRlUGVyc29uQ29udGFjdChuYW1lLCBwb3NpdGlvbiwgcGhvbmUsIGVtYWlsKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVXYWl0ZXIoKSB7XG4gICAgY29uc3QgbmFtZSA9ICdKb2UgU3RlZWwnO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gJ1dhaXRlcic7XG4gICAgY29uc3QgcGhvbmUgPSAnMzQ1LTY3OC05MDEyJztcbiAgICBjb25zdCBlbWFpbCA9ICdKb2VTdGVlbEBSZWFsTm9GYWtlLmNvbSc7XG4gICAgcmV0dXJuIENvbnRhY3QuY3JlYXRlUGVyc29uQ29udGFjdChuYW1lLCBwb3NpdGlvbiwgcGhvbmUsIGVtYWlsKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVDTSgpIHtcbiAgICBjb25zdCBuYW1lID0gJ1RvbSBPbGl2ZSc7XG4gICAgY29uc3QgcG9zaXRpb24gPSAnQ29tbXVuaXR5IE1hbmFnZXInO1xuICAgIGNvbnN0IHBob25lID0gJzQ1Ni03ODktMDEyMyc7XG4gICAgY29uc3QgZW1haWwgPSAnVG9tT2xpdmVAUmVhbE5vRmFrZS5jb20nO1xuICAgIHJldHVybiBDb250YWN0LmNyZWF0ZVBlcnNvbkNvbnRhY3QobmFtZSwgcG9zaXRpb24sIHBob25lLCBlbWFpbCk7XG4gIH1cblxuICBzdGF0aWMgbG9hZFBlb3BsZSgpIHtcbiAgICBjb25zdCBwZW9wbGUgPSBbXTtcbiAgICBwZW9wbGUucHVzaChDb250YWN0LmNyZWF0ZUgxKCkpXG4gICAgcGVvcGxlLnB1c2goQ29udGFjdC5jcmVhdGVNYW5hZ2VyKCkpO1xuICAgIHBlb3BsZS5wdXNoKENvbnRhY3QuY3JlYXRlQ2hlZigpKTtcbiAgICBwZW9wbGUucHVzaChDb250YWN0LmNyZWF0ZVdhaXRlcigpKTtcbiAgICBwZW9wbGUucHVzaChDb250YWN0LmNyZWF0ZUNNKCkpO1xuICAgIHJldHVybiBwZW9wbGU7XG4gIH1cblxuICBzdGF0aWMgbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gQ29udGFjdC5jcmVhdGVEaXYoKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcGVvcGxlID0gQ29udGFjdC5sb2FkUGVvcGxlKCk7XG4gICAgcGVvcGxlLm1hcChwZXJzb24gPT4ge1xuICAgICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJzb24pO1xuICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcbiAgICAgIHJldHVybiBtYWluO1xuICAgIH0pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG4gIH1cbn1cbiIsImltcG9ydCBDaGVlc2VidXJnZXIgZnJvbSAnLi9pbWFnZXMvbWVudS9oYW1idXJnZXJzL2NoZWVzZWJ1cmdlci5qcGcnO1xuaW1wb3J0IE9uaW9uQnVyZ2VyIGZyb20gJy4vaW1hZ2VzL21lbnUvaGFtYnVyZ2Vycy9vbmlvbi1oYW1idXJnZXIuanBnJztcbmltcG9ydCBDaGlsaUJ1cmdlciBmcm9tICcuL2ltYWdlcy9tZW51L2hhbWJ1cmdlcnMvY2hpbGktaGFtYnVyZ2VyLmpwZyc7XG5pbXBvcnQgQ29rZSBmcm9tICcuL2ltYWdlcy9tZW51L2JldmVyYWdlcy9jb2tlLmpwZyc7XG5pbXBvcnQgQmVlciBmcm9tICcuL2ltYWdlcy9tZW51L2JldmVyYWdlcy9iZWVyLmpwZyc7XG5pbXBvcnQgTWlsa3NoYWtlIGZyb20gJy4vaW1hZ2VzL21lbnUvYmV2ZXJhZ2VzL21pbGtzaGFrZS5qcGcnO1xuaW1wb3J0IFdhdGVyIGZyb20gJy4vaW1hZ2VzL21lbnUvYmV2ZXJhZ2VzL3dhdGVyLmpwZyc7XG5pbXBvcnQgSnVpY2UgZnJvbSAnLi9pbWFnZXMvbWVudS9iZXZlcmFnZXMvanVpY2UuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSB7XG4gIHN0YXRpYyBjcmVhdGVIMSgpIHtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgcmV0dXJuIGgxO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUgyKGNvbnRlbnQpIHtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgZGl2ID0gTWVudS5jcmVhdGVEaXYoKTtcbiAgICBoMi50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgZGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbnRhaW5lcicpO1xuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlSDMoY29udGVudCkge1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGgzO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVBhcmFncmFwaChjb250ZW50KSB7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICByZXR1cm4gcDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVEaXYoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUltYWdlKHNyYykge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgIHJldHVybiBpbWFnZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVQcm9kdWN0KG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgcHJvZHVjdFNyYykge1xuICAgIC8vIHByaWNlIGlzIGEgc3RyaW5nXG4gICAgY29uc3QgcHJvZHVjdERpdiA9IE1lbnUuY3JlYXRlRGl2KCk7XG4gICAgcHJvZHVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2R1Y3RIMyA9IE1lbnUuY3JlYXRlSDMobmFtZSk7XG4gICAgY29uc3QgaW1hZ2UgPSBNZW51LmNyZWF0ZUltYWdlKHByb2R1Y3RTcmMpO1xuICAgIGNvbnN0IHByb2R1Y3REZXNjcmlwdGlvbiA9IE1lbnUuY3JlYXRlUGFyYWdyYXBoKGRlc2NyaXB0aW9uKTtcbiAgICBjb25zdCBwcm9kdWN0UHJpY2UgPSBNZW51LmNyZWF0ZVBhcmFncmFwaChwcmljZSk7XG4gICAgcHJvZHVjdFByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG4gICAgcHJvZHVjdERpdi5hcHBlbmRDaGlsZChwcm9kdWN0SDMpO1xuICAgIHByb2R1Y3REaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIHByb2R1Y3REaXYuYXBwZW5kQ2hpbGQocHJvZHVjdERlc2NyaXB0aW9uKTtcbiAgICBwcm9kdWN0RGl2LmFwcGVuZENoaWxkKHByb2R1Y3RQcmljZSk7XG4gICAgcmV0dXJuIHByb2R1Y3REaXY7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ2hlZXNlYnVyZ2VyKCkge1xuICAgIGNvbnN0IG5hbWUgPSAnQ2hlZXNlYnVyZ2VyJztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICdBIGRlbGljaW91cyBidXJnZXIgd2l0aCBzb21lIGNoZWVzZSBzbGljZXMuIFNvbWUgb2YgdGhlIHRvcHBpbmdzIHdlIG9mZmVyIGFyZSBsZXR0dWNlLCB0b21hdG8sIG9uaW9uLCBwaWNrbGVzLCBhbmQgYmFjb24gdG8gbmFtZSBhIGZldy4nO1xuICAgIGNvbnN0IHByaWNlID0gJyQyLjUnO1xuICAgIGNvbnN0IHByb2R1Y3RTcmMgPSBDaGVlc2VidXJnZXI7XG4gICAgcmV0dXJuIE1lbnUuY3JlYXRlUHJvZHVjdChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIHByb2R1Y3RTcmMpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU9uaW9uQnVyZ2VyKCkge1xuICAgIGNvbnN0IG5hbWUgPSAnT25pb24gYnVyZ2VyJztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IFwiRnJvbSBPa2xhaG9tYSwgbGlrZSB0aGUgbmFtZSBzYXlzLCBpdCdzIG1haW4gaW5ncmVkaWVudCBpcyBvbmlvbi4gVGhlIG9uaW9uIGlzIGNhcmFtZWxpemVkIGFuZCBjcmlzcHkuIEl0IGFsc28gdXN1YWxseSBoYXMgYmVlZiBwYXR0eSwgcGlja2xlcyBhbmQgbXVzdGFyZCBvciBtYXlvbm5haXNlLlwiO1xuICAgIGNvbnN0IHByaWNlID0gJyQzJztcbiAgICBjb25zdCBwcm9kdWN0U3JjID0gT25pb25CdXJnZXI7XG4gICAgcmV0dXJuIE1lbnUuY3JlYXRlUHJvZHVjdChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIHByb2R1Y3RTcmMpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZWNoaWxpQnVyZ2VyKCkge1xuICAgIGNvbnN0IG5hbWUgPSAnQ2hpbGkgYnVyZ2VyJztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICdUaGlzIHZhcmlhbnQgY29udGFpbnMgYSBub3Qgc28gc3BpY3kgY2hpbGkuIEl0IGlzIHRvcHBlZCB3aXRoIG9uaW9ucyBhbmQgY2hlZXNlIGFuZCB1c3VhbGx5IHNlcnZlZCB3aXRoIGZyaWVzLic7XG4gICAgY29uc3QgcHJpY2UgPSAnJDUnO1xuICAgIGNvbnN0IHByb2R1Y3RTcmMgPSBDaGlsaUJ1cmdlcjtcbiAgICByZXR1cm4gTWVudS5jcmVhdGVQcm9kdWN0KG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgcHJvZHVjdFNyYyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ29rZSgpIHtcbiAgICBjb25zdCBuYW1lID0gJ0Nva2UnO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gJ0Egc2ltcGxlLCB5ZXQgcG9wdWxhciBjaG9pY2UuJztcbiAgICBjb25zdCBwcmljZSA9ICckMC41JztcbiAgICBjb25zdCBwcm9kdWN0U3JjID0gQ29rZTtcbiAgICByZXR1cm4gTWVudS5jcmVhdGVQcm9kdWN0KG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgcHJvZHVjdFNyYyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQmVlcigpIHtcbiAgICBjb25zdCBuYW1lID0gJ0JlZXInO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gXCJGb3Igc29tZSwgaXQncyB0aGUgYmVzdCBkcmluaywgZm9yIG90aGVycywgbm90IHJlYWxseSBnb29kLlwiO1xuICAgIGNvbnN0IHByaWNlID0gJyQ0JztcbiAgICBjb25zdCBwcm9kdWN0U3JjID0gQmVlcjtcbiAgICByZXR1cm4gTWVudS5jcmVhdGVQcm9kdWN0KG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgcHJvZHVjdFNyYyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTWlsa3NoYWtlKCkge1xuICAgIGNvbnN0IG5hbWUgPSAnTWlsa3NoYWtlJztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICdZb3Uga25vdyBpdCwgYSBtaXh0dXJlIG9mIHNvbWUgaW5ncmVkaWVudHMsIHdoZXJlIG1pbGsgaXMgdGhlIG1haW4gb25lLiBBc2sgZm9yIHRoZSBkaWZmZXJlbnQgZmxhdm91cnMgd2Ugb2ZmZXIuJztcbiAgICBjb25zdCBwcmljZSA9ICckMyc7XG4gICAgY29uc3QgcHJvZHVjdFNyYyA9IE1pbGtzaGFrZTtcbiAgICByZXR1cm4gTWVudS5jcmVhdGVQcm9kdWN0KG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgcHJvZHVjdFNyYyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlV2F0ZXIoKSB7XG4gICAgY29uc3QgbmFtZSA9ICdXYXRlcic7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAnSnVzdCB3YXRlci4nO1xuICAgIGNvbnN0IHByaWNlID0gJyQyJztcbiAgICBjb25zdCBwcm9kdWN0U3JjID0gV2F0ZXI7XG4gICAgcmV0dXJuIE1lbnUuY3JlYXRlUHJvZHVjdChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIHByb2R1Y3RTcmMpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUp1aWNlKCkge1xuICAgIGNvbnN0IG5hbWUgPSAnSnVpY2UnO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gJ0Egc2luZ2xlIGp1aWNlIGJvdHRsZS4gQXNrIGZvciB0aGUgb3B0aW9ucy4nO1xuICAgIGNvbnN0IHByaWNlID0gJyQyLjUnO1xuICAgIGNvbnN0IHByb2R1Y3RTcmMgPSBKdWljZTtcbiAgICByZXR1cm4gTWVudS5jcmVhdGVQcm9kdWN0KG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgcHJvZHVjdFNyYyk7XG4gIH1cblxuICBzdGF0aWMgbG9hZEJ1cmdlcnMoKSB7XG4gICAgY29uc3QgYnVyZ2VycyA9IFtdO1xuICAgIGJ1cmdlcnMucHVzaChNZW51LmNyZWF0ZUgyKCdCdXJnZXJzJykpO1xuICAgIGJ1cmdlcnMucHVzaChNZW51LmNyZWF0ZUNoZWVzZWJ1cmdlcigpKTtcbiAgICBidXJnZXJzLnB1c2goTWVudS5jcmVhdGVPbmlvbkJ1cmdlcigpKTtcbiAgICBidXJnZXJzLnB1c2goTWVudS5jcmVhdGVjaGlsaUJ1cmdlcigpKTtcbiAgICByZXR1cm4gYnVyZ2VycztcbiAgfVxuXG4gIHN0YXRpYyBsb2FkQmV2ZXJhZ2VzKCkge1xuICAgIGNvbnN0IGJldmVyYWdlcyA9IFtdO1xuICAgIGJldmVyYWdlcy5wdXNoKE1lbnUuY3JlYXRlSDIoJ0JldmVyYWdlcycpKTtcbiAgICBiZXZlcmFnZXMucHVzaChNZW51LmNyZWF0ZUNva2UoKSk7XG4gICAgYmV2ZXJhZ2VzLnB1c2goTWVudS5jcmVhdGVCZWVyKCkpO1xuICAgIGJldmVyYWdlcy5wdXNoKE1lbnUuY3JlYXRlTWlsa3NoYWtlKCkpO1xuICAgIGJldmVyYWdlcy5wdXNoKE1lbnUuY3JlYXRlV2F0ZXIoKSk7XG4gICAgYmV2ZXJhZ2VzLnB1c2goTWVudS5jcmVhdGVKdWljZSgpKTtcbiAgICByZXR1cm4gYmV2ZXJhZ2VzO1xuICB9XG5cbiAgc3RhdGljIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IE1lbnUuY3JlYXRlRGl2KCk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGgxID0gTWVudS5jcmVhdGVIMSgpO1xuICAgIGNvbnN0IGJ1cmdlcnMgPSBNZW51LmxvYWRCdXJnZXJzKCk7XG4gICAgY29uc3QgYmV2ZXJhZ2VzID0gTWVudS5sb2FkQmV2ZXJhZ2VzKCk7XG4gICAgLy8gbWl4IHByb2R1Y3RzIGluIG9uZSBhcnJheVxuICAgIGNvbnN0IHByb2R1Y3RzID0gYnVyZ2Vycy5jb25jYXQoYmV2ZXJhZ2VzKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3QpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZUxvYWRlciB7XG4gIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIHN0YXRpYyBjcmVhdGVIZWFkZXIoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5hdigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVWwoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIH1cblxuICBjcmVhdGVMaShlbGVtZW50KSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRoaXMuYWRkQ2hpbGRFbGVtZW50VG9FbGVtZW50KGVsZW1lbnQsIGxpKTtcbiAgICByZXR1cm4gbGk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQnV0dG9uKGNvbnRlbnQpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQnV0dG9ucygpIHtcbiAgICBjb25zdCBidXR0b25zID0gW107XG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IFBhZ2VMb2FkZXIuY3JlYXRlQnV0dG9uKCdIb21lJyk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IFBhZ2VMb2FkZXIuY3JlYXRlQnV0dG9uKCdNZW51Jyk7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IFBhZ2VMb2FkZXIuY3JlYXRlQnV0dG9uKCdDb250YWN0Jyk7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgYnV0dG9ucy5wdXNoKGhvbWVCdXR0b24pO1xuICAgIGJ1dHRvbnMucHVzaChtZW51QnV0dG9uKTtcbiAgICBidXR0b25zLnB1c2goY29udGFjdEJ1dHRvbik7XG4gICAgcmV0dXJuIGJ1dHRvbnM7XG4gIH1cblxuICBjcmVhdGVMaXN0KCkge1xuICAgIGNvbnN0IHVsID0gUGFnZUxvYWRlci5jcmVhdGVVbCgpO1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBQYWdlTG9hZGVyLmNyZWF0ZUJ1dHRvbnMoKTtcbiAgICBidXR0b25zLm1hcChidXR0b24gPT4gdGhpcy5hZGRDaGlsZEVsZW1lbnRUb0VsZW1lbnQodGhpcy5jcmVhdGVMaShidXR0b24pLCB1bCkpO1xuICAgIHJldHVybiB1bDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVNYWluKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlSGVhZGxpbmUoKSB7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJIYXZlIHNvbWUgaGFtYnVyZ2VyIVwiO1xuICAgIHJldHVybiBoMTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVQYXJhZ3JhcGgoY29udGVudCkge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIHA7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTGluayhsaW5rLCB0ZXh0KSB7XG4gICAgY29uc3QgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGlua0VsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGxpbmtFbGVtZW50LmhyZWYgPSBsaW5rO1xuICAgIHJldHVybiBsaW5rRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVEaXYoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUZvb3RlcigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIH1cblxuICBjcmVhdGVDcmVkaXRzTGlzdCgpIHtcbiAgICBjb25zdCB1bCA9IFBhZ2VMb2FkZXIuY3JlYXRlVWwoKTtcbiAgICBjb25zdCBoYW1idXJnZXJMaW5rID0gJ2h0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2NoZWVzZS1idXJnZXItY2FydG9vbi1pY29uLWlsbHVzdHJhdGlvbl8xMTc4Nzg4OC5odG0jcXVlcnk9aGFtYnVyZ3VlciZwb3NpdGlvbj0xJmZyb21fdmlldz1zZWFyY2gmdHJhY2s9c3BoJztcbiAgICBjb25zdCBoYW1idXJnZXJUZXh0ID0gJ0hhbWJ1cmdlciBiYWNrZ3JvdW5kIGJ5IGNhdGFseXN0c3R1ZmYgb24gRnJlZXBpayc7XG4gICAgY29uc3QgaGFtYnVyZ2VySWNvbkxpbmsgPSBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2J1cmdlclwiO1xuICAgIGNvbnN0IGhhbWJ1cmdlckljb25UZXh0ID0gJ0hhbWJ1cmdlciBpY29uIGJ5IFBpeGVsIHBlcmZlY3Qgb24gRmxhdGljb24nO1xuICAgIHRoaXMuYWRkQ2hpbGRFbGVtZW50VG9FbGVtZW50KHRoaXMuY3JlYXRlTGkoUGFnZUxvYWRlci5jcmVhdGVMaW5rKGhhbWJ1cmdlckxpbmssIGhhbWJ1cmdlclRleHQpKSwgdWwpO1xuICAgIHRoaXMuYWRkQ2hpbGRFbGVtZW50VG9FbGVtZW50KHRoaXMuY3JlYXRlTGkoUGFnZUxvYWRlci5jcmVhdGVMaW5rKGhhbWJ1cmdlckljb25MaW5rLCBoYW1idXJnZXJJY29uVGV4dCkpLCB1bCk7XG4gICAgcmV0dXJuIHVsO1xuICB9XG5cbiAgYWRkQ2hpbGRFbGVtZW50VG9FbGVtZW50KGNoaWxkRWxlbWVudCwgZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ID09PSB1bmRlZmluZWQpXG4gICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGRFbGVtZW50KTtcbiAgICBlbHNlXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkRWxlbWVudCk7XG4gIH1cblxuICBsb2FkTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IFBhZ2VMb2FkZXIuY3JlYXRlTmF2KCk7XG4gICAgdGhpcy5hZGRDaGlsZEVsZW1lbnRUb0VsZW1lbnQodGhpcy5jcmVhdGVMaXN0KCksIG5hdik7XG4gICAgcmV0dXJuIG5hdjtcbiAgfVxuXG4gIGxvYWRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gUGFnZUxvYWRlci5jcmVhdGVIZWFkZXIoKTtcbiAgICB0aGlzLmFkZENoaWxkRWxlbWVudFRvRWxlbWVudChoZWFkZXIpO1xuICAgIHRoaXMuYWRkQ2hpbGRFbGVtZW50VG9FbGVtZW50KHRoaXMubG9hZE5hdigpLCBoZWFkZXIpO1xuICB9XG5cbiAgbG9hZE1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IFBhZ2VMb2FkZXIuY3JlYXRlTWFpbigpO1xuICAgIGNvbnN0IHJlc3RhdXJhbnREZXNjcmlwdGlvbiA9ICdIZWxsbywgYW5kIHdlbGNvbWUgdG8gb3VyIHJlc3RhdXJhbnQuIFdlIGhhdmUgYSB2YXJpZXR5IG9mIGJ1cmdlcnMgdG8gY2hvb3NlIGZyb207IGV2ZXJ5IGluZ3JlZGllbnQgaXMgY2xlYW4gYW5kIGZyZXNoLiBBbmQgdGhlIHBsYWNlIGlzIGZpbGxlZCB3aXRoIGEga2luZCBhdG1vc3BoZXJlLic7XG4gICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IFBhZ2VMb2FkZXIuY3JlYXRlRGl2KCk7XG4gICAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRhaW5lcicpO1xuICAgIHRoaXMuYWRkQ2hpbGRFbGVtZW50VG9FbGVtZW50KG1haW4pO1xuICAgIHRoaXMuYWRkQ2hpbGRFbGVtZW50VG9FbGVtZW50KFBhZ2VMb2FkZXIuY3JlYXRlSGVhZGxpbmUoKSwgaG9tZUNvbnRhaW5lcik7XG4gICAgdGhpcy5hZGRDaGlsZEVsZW1lbnRUb0VsZW1lbnQoUGFnZUxvYWRlci5jcmVhdGVQYXJhZ3JhcGgocmVzdGF1cmFudERlc2NyaXB0aW9uKSwgaG9tZUNvbnRhaW5lcik7XG4gICAgdGhpcy5hZGRDaGlsZEVsZW1lbnRUb0VsZW1lbnQoaG9tZUNvbnRhaW5lciwgbWFpbik7XG4gIH1cblxuICBsb2FkRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IFBhZ2VMb2FkZXIuY3JlYXRlRm9vdGVyKCk7XG4gICAgY29uc3QgY3JlZGl0c0xpc3QgPSB0aGlzLmNyZWF0ZUNyZWRpdHNMaXN0KCk7XG4gICAgdGhpcy5hZGRDaGlsZEVsZW1lbnRUb0VsZW1lbnQoZm9vdGVyKTtcbiAgICB0aGlzLmFkZENoaWxkRWxlbWVudFRvRWxlbWVudChjcmVkaXRzTGlzdCwgZm9vdGVyKTtcbiAgfVxuXG4gIGxvYWRQYWdlKCkge1xuICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKCdmdWxsLWhlaWdodCcpO1xuICAgIHRoaXMubG9hZEhlYWRlcigpO1xuICAgIHRoaXMubG9hZE1haW4oKTtcbiAgICB0aGlzLmxvYWRGb290ZXIoKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgUGFnZUxvYWRlciBmcm9tICcuL3BhZ2UtbG9hZCc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuY29uc3QgbXlQYWdlTG9hZGVyID0gbmV3IFBhZ2VMb2FkZXIoKTtcbm15UGFnZUxvYWRlci5sb2FkUGFnZSgpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1jb250YWluZXInKTtcbiAgaWYgKGhvbWVDb250YWluZXIgPT09IG51bGwpXG4gIHtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Z1bGwtaGVpZ2h0Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwtd2lkdGgnKTtcbiAgICBtYWluLnJlbW92ZSgpO1xuICAgIGZvb3Rlci5yZW1vdmUoKTtcbiAgICBteVBhZ2VMb2FkZXIubG9hZE1haW4oKTtcbiAgICBteVBhZ2VMb2FkZXIubG9hZEZvb3RlcigpO1xuICB9XG59KTtcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lcicpO1xuICBpZiAobWVudUNvbnRhaW5lciA9PT0gbnVsbClcbiAge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsLXdpZHRoJyk7XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCA+IG1haW4gPiBkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwtaGVpZ2h0Jyk7XG4gICAgcGFnZUNvbnRlbnQucmVtb3ZlKCk7XG4gICAgTWVudS5sb2FkTWVudSgpO1xuICB9XG59KTtcblxuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWNvbnRhaW5lcicpO1xuICBpZiAoY29udGFjdENvbnRhaW5lciA9PT0gbnVsbClcbiAge1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQgPiBtYWluID4gZGl2Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2Z1bGwtd2lkdGgnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwtaGVpZ2h0Jyk7XG4gICAgcGFnZUNvbnRlbnQucmVtb3ZlKCk7XG4gICAgQ29udGFjdC5sb2FkQ29udGFjdCgpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==