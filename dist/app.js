/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(16);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('app', __webpack_require__(7));

var App = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    el: "#app"
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/donkfather/projects/tumaedo/node_modules/vue/dist/vue.common.js'");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(8)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(14)
/* template */
var __vue_template__ = __webpack_require__(15)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-617ab0be"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-617ab0be", Component.options)
  } else {
    hotAPI.reload("data-v-617ab0be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("7747c427", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-617ab0be\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-617ab0be\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/donkfather/projects/tumaedo/node_modules/css-loader/lib/css-base.js'");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/donkfather/projects/tumaedo/node_modules/vue-style-loader/lib/addStylesClient.js'");

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/donkfather/projects/tumaedo/node_modules/vue-loader/lib/component-normalizer.js'");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "app",
    data: function data() {
        return {
            title: 'Cluedo notebook',
            characters: [{
                id: 1,
                name: "Scarlet",
                img: "https://lorempixel.com/160/100/people"
            }, {
                id: 2,
                name: "Peacock",
                img: "https://lorempixel.com/160/100/people"
            }, {
                id: 3,
                name: "Mustard",
                img: "https://lorempixel.com/160/100/people"
            }, {
                id: 4,
                name: "Plum",
                img: "https://lorempixel.com/160/100/people"
            }, {
                id: 5,
                name: "White",
                img: "https://lorempixel.com/160/100/people"
            }, {
                id: 6,
                name: "Green",
                img: "https://lorempixel.com/160/100/people"
            }],
            selected: []
        };
    }
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "md:container md:m-auto flex flex-col" }, [
    _c(
      "div",
      { staticClass: "bg-peacock-lighter text-center py-4 font-sans mb-4" },
      [
        _c("h1", { staticClass: "uppercase text-lg" }, [
          _vm._v("\n            " + _vm._s(_vm.title) + "\n        ")
        ])
      ]
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "flex justify-around  pt-8 flex-wrap content-around flex-1 md:w-1/2 mx-auto"
      },
      _vm._l(_vm.characters, function(item, index) {
        return _c(
          "div",
          {
            staticClass: "flex flex-col text-center mb-4 cursor-pointer sm:px-4"
          },
          [
            _c("img", {
              staticClass: "mb-3 rounded-full shadow shadow-md ",
              attrs: { src: item.img, alt: "Item" }
            }),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "font-bold uppercase text-sm tracking-wide" },
              [
                _vm._v(
                  "\n                " + _vm._s(item.name) + "\n            "
                )
              ]
            )
          ]
        )
      })
    ),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center text-sm px-4" }, [
      _c("h1", { staticClass: "mb-2" }, [_vm._v("Player order")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-grey text-base" }, [
        _vm._v(
          "\n            Pick your character first and then the next one in the order you play.\n        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-3 text-right md:w-1/2 md:mx-auto" }, [
      _c(
        "button",
        {
          staticClass:
            "bg-peacock p-3 rounded border-b-2 border-peacock-dark hover:border-transparent"
        },
        [_vm._v("\n            Next →\n        ")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-617ab0be", module.exports)
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/home/donkfather/projects/tumaedo/node_modules/tailwindcss/lib/lib/../../css/preflight.css'\n    at Object.fs.openSync (fs.js:646:18)\n    at Object.fs.readFileSync (fs.js:551:33)\n    at css.walkAtRules.atRule (/home/donkfather/projects/tumaedo/node_modules/tailwindcss/lib/lib/substituteTailwindPreflightAtRule.js:14:58)\n    at /home/donkfather/projects/tumaedo/node_modules/postcss-loader/node_modules/postcss/lib/container.js:304:28\n    at /home/donkfather/projects/tumaedo/node_modules/postcss-loader/node_modules/postcss/lib/container.js:144:26\n    at Root.each (/home/donkfather/projects/tumaedo/node_modules/postcss-loader/node_modules/postcss/lib/container.js:110:22)\n    at Root.walk (/home/donkfather/projects/tumaedo/node_modules/postcss-loader/node_modules/postcss/lib/container.js:143:21)\n    at Root.walkAtRules (/home/donkfather/projects/tumaedo/node_modules/postcss-loader/node_modules/postcss/lib/container.js:302:25)\n    at /home/donkfather/projects/tumaedo/node_modules/tailwindcss/lib/lib/substituteTailwindPreflightAtRule.js:9:9\n    at LazyResult.run (/home/donkfather/projects/tumaedo/node_modules/postcss-loader/node_modules/postcss/lib/lazy-result.js:277:20)\n    at LazyResult.asyncTick (/home/donkfather/projects/tumaedo/node_modules/postcss-loader/node_modules/postcss/lib/lazy-result.js:192:32)\n    at LazyResult.asyncTick (/home/donkfather/projects/tumaedo/node_modules/postcss-loader/node_modules/postcss/lib/lazy-result.js:204:22)\n    at processing.Promise.then._this2.processed (/home/donkfather/projects/tumaedo/node_modules/postcss-loader/node_modules/postcss/lib/lazy-result.js:231:20)\n    at new Promise (<anonymous>)\n    at LazyResult.async (/home/donkfather/projects/tumaedo/node_modules/postcss-loader/node_modules/postcss/lib/lazy-result.js:228:27)\n    at LazyResult.then (/home/donkfather/projects/tumaedo/node_modules/postcss-loader/node_modules/postcss/lib/lazy-result.js:134:21)\n    at Promise.resolve.then.then (/home/donkfather/projects/tumaedo/node_modules/postcss-loader/lib/index.js:148:8)\n    at <anonymous>\n    at runLoaders (/home/donkfather/projects/tumaedo/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /home/donkfather/projects/tumaedo/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /home/donkfather/projects/tumaedo/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/home/donkfather/projects/tumaedo/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Promise.resolve.then.then.catch (/home/donkfather/projects/tumaedo/node_modules/postcss-loader/lib/index.js:197:71)\n    at <anonymous>");

/***/ })
/******/ ]);