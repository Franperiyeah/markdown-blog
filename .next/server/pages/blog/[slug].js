"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/[slug]";
exports.ids = ["pages/blog/[slug]"];
exports.modules = {

/***/ "./lib/data.js":
/*!*********************!*\
  !*** ./lib/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blogPosts\": () => (/* binding */ blogPosts)\n/* harmony export */ });\nconst blogPosts = [\n    {\n        title: 'One',\n        date: new Date().toString(),\n        slug: 'my-first',\n        content: 'loremipsumaosidjaoi sdoiajsd oaisd\\xf1j'\n    },\n    {\n        title: 'Two',\n        date: new Date().toString(),\n        slug: 'my-second',\n        content: 'Prueba 2'\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sS0FBSyxDQUFDQSxTQUFTLEdBQUcsQ0FBQztJQUN0QixDQUFDO1FBQ0dDLEtBQUssRUFBRSxDQUFLO1FBQ1pDLElBQUksRUFBRSxHQUFHLENBQUNDLElBQUksR0FBR0MsUUFBUTtRQUN6QkMsSUFBSSxFQUFFLENBQVU7UUFDaEJDLE9BQU8sRUFBRSxDQUFzQztJQUNuRCxDQUFDO0lBQ0QsQ0FBQztRQUNHTCxLQUFLLEVBQUUsQ0FBSztRQUNaQyxJQUFJLEVBQUUsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLFFBQVE7UUFDekJDLElBQUksRUFBRSxDQUFXO1FBQ2pCQyxPQUFPLEVBQUUsQ0FBVTtJQUN2QixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtkb3duLWphbXN0YWNrLy4vbGliL2RhdGEuanM/YjExZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYmxvZ1Bvc3RzID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdPbmUnLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksIFxuICAgICAgICBzbHVnOiAnbXktZmlyc3QnLFxuICAgICAgICBjb250ZW50OiAnbG9yZW1pcHN1bWFvc2lkamFvaSBzZG9pYWpzZCBvYWlzZMOxaidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdUd28nLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksIFxuICAgICAgICBzbHVnOiAnbXktc2Vjb25kJyxcbiAgICAgICAgY29udGVudDogJ1BydWViYSAyJ1xuICAgIH1cbl07XG5cbiJdLCJuYW1lcyI6WyJibG9nUG9zdHMiLCJ0aXRsZSIsImRhdGUiLCJEYXRlIiwidG9TdHJpbmciLCJzbHVnIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/data.js\n");

/***/ }),

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlogPage),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/data */ \"./lib/data.js\");\n\n\n\nfunction BlogPage({ title , date , content  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/Fran/markdown-blog-1/pages/blog/[slug].js\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/Users/Fran/markdown-blog-1/pages/blog/[slug].js\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/Fran/markdown-blog-1/pages/blog/[slug].js\",\n                            lineNumber: 8,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: title\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/Fran/markdown-blog-1/pages/blog/[slug].js\",\n                            lineNumber: 9,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                __source: {\n                    fileName: \"/Users/Fran/markdown-blog-1/pages/blog/[slug].js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"/Users/Fran/markdown-blog-1/pages/blog/[slug].js\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: title\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"/Users/Fran/markdown-blog-1/pages/blog/[slug].js\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: content\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"/Users/Fran/markdown-blog-1/pages/blog/[slug].js\",\n                            lineNumber: 17,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: date\n                    })\n                ]\n            })\n        ]\n    }));\n};\nasync function getStaticProps(context) {\n    console.log(context);\n    const { params  } = context;\n    return {\n        props: _lib_data__WEBPACK_IMPORTED_MODULE_2__.blogPosts.find((item)=>item.slug === params.slug\n        )\n    };\n}\nasync function getStaticPaths() {\n    return {\n        paths: _lib_data__WEBPACK_IMPORTED_MODULE_2__.blogPosts.map((item)=>({\n                params: {\n                    slug: item.slug\n                }\n            })\n        ),\n        fallback: false\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEI7QUFDYztBQUUzQixRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDQyxDQUFBQSxLQUFLLEdBQUVDLElBQUksR0FBRUMsT0FBTyxHQUFDLEVBQUUsQ0FBQztJQUN4RCxNQUFNLHVFQUNIQyxDQUFHOzs7Ozs7OztrRkFDRE4sa0RBQUk7Ozs7Ozs7O3lGQUNGRyxDQUFLOzs7Ozs7O2tDQUFFQSxLQUFLOzt5RkFDWkksQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7O2tGQUdyQ0MsQ0FBSTs7Ozs7Ozs7eUZBQ0ZDLENBQUU7Ozs7Ozs7a0NBQ0RSLEtBQUs7O3lGQUVORyxDQUFHOzs7Ozs7O2tDQUFFRCxPQUFPOzt5RkFDWkMsQ0FBRzs7Ozs7OztrQ0FBRUYsSUFBSTs7Ozs7O0FBS2xCLENBQUM7QUFFTSxlQUFlUSxjQUFjLENBQUNDLE9BQU8sRUFBRSxDQUFDO0lBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTztJQUNuQixLQUFLLENBQUMsQ0FBQ0csQ0FBQUEsTUFBTSxHQUFDLEdBQUdILE9BQU87SUFDeEIsTUFBTSxDQUFDLENBQUM7UUFDSkksS0FBSyxFQUFFaEIscURBQWMsRUFBRWtCLElBQUksR0FBS0EsSUFBSSxDQUFDQyxJQUFJLEtBQUtKLE1BQU0sQ0FBQ0ksSUFBSTs7SUFDN0QsQ0FBQztBQUNMLENBQUM7QUFFTSxlQUFlQyxjQUFjLEdBQUcsQ0FBQztJQUVwQyxNQUFNLENBQUMsQ0FBQztRQUNKQyxLQUFLLEVBQUVyQixvREFBYSxFQUFFa0IsSUFBSSxJQUFNLENBQUM7Z0JBQzdCSCxNQUFNLEVBQUcsQ0FBQztvQkFDTkksSUFBSSxFQUFFRCxJQUFJLENBQUNDLElBQUk7Z0JBQ25CLENBQUM7WUFDTCxDQUFDOztRQUNESSxRQUFRLEVBQUUsS0FBSztJQUNuQixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtkb3duLWphbXN0YWNrLy4vcGFnZXMvYmxvZy9bc2x1Z10uanM/ZmE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBibG9nUG9zdHMgfSBmcm9tICcuLi8uLi9saWIvZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1BhZ2Uoe3RpdGxlLCBkYXRlLCBjb250ZW50fSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiA+XG4gICAgICAgIDxoMSA+XG4gICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXY+e2NvbnRlbnR9PC9kaXY+XG4gICAgICAgIDxkaXY+e2RhdGV9PC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpXG4gICAgY29uc3Qge3BhcmFtc30gPSBjb250ZXh0O1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiBibG9nUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5zbHVnID09PSBwYXJhbXMuc2x1ZylcbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHM6IGJsb2dQb3N0cy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAgICAgICBwYXJhbXMgOiB7XG4gICAgICAgICAgICAgICAgc2x1ZzogaXRlbS5zbHVnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpLFxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgfTtcbn0iXSwibmFtZXMiOlsiSGVhZCIsImJsb2dQb3N0cyIsIkJsb2dQYWdlIiwidGl0bGUiLCJkYXRlIiwiY29udGVudCIsImRpdiIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsInByb3BzIiwiZmluZCIsIml0ZW0iLCJzbHVnIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsIm1hcCIsImZhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[slug].js"));
module.exports = __webpack_exports__;

})();