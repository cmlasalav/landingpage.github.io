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

/***/ "./components/BlogComponents/Post.tsx":
/*!********************************************!*\
  !*** ./components/BlogComponents/Post.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PostVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostVisibility */ \"./components/BlogComponents/PostVisibility.tsx\");\n\n\n\n\nfunction Post(param) {\n    let { post, user, onReadMore, isVisible, onNewPost } = param;\n    const firstParagraph = (PostBody)=>{\n        for (const content of PostBody){\n            if (typeof content === \"string\") {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: content\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 16\n                }, this);\n            }\n            if (typeof content === \"object\" && content.contentType === \"text\") {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: content.contentBody\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 16\n                }, this);\n            }\n        }\n        return null;\n    };\n    const latestPosts = post.slice(0, 3);\n    const mainPosts = post.slice(3);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 lg:grid-cols-3 gap-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:col-span-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: \"bg-white rounded-lg overflow-hidden shadow-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"aspect-[16/9] relative\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: mainPosts.PostImage,\n                                alt: mainPosts.PostTitle,\n                                className: \"w-full h-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-3xl font-bold mb-4\",\n                                    children: mainPosts.PostTitle\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600 mb-4\",\n                                    children: firstParagraph(mainPosts.PostBody)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, {\n                                            value: mainPosts.PostDate,\n                                            year: \"numeric\",\n                                            month: \"short\",\n                                            day: \"numeric\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>onReadMore(mainPosts._id, user),\n                                            className: \"text-[#0d98e2] border border-[#0d98e2] px-4 py-2 rounded-full hover:bg-[#0d98e2] hover:text-white transition-colors\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {\n                                                id: \"blog.button\",\n                                                defaultMessage: \"Read more\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostVisibility__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    isVisible: mainPosts.PostStatus\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 27\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:col-span-1 space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-bold text-[#76829e] mb-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {\n                            id: \"blog.latest.post\",\n                            defaultMessage: \"Last posts\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    latestPosts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            className: \"flex gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"font-bold text-lg mb-2\",\n                                            children: post.PostTitle\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600 text-sm mb-2 line-clamp-2\",\n                                            children: firstParagraph(post.PostBody)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, {\n                                                    value: post.PostDate,\n                                                    year: \"numeric\",\n                                                    month: \"short\",\n                                                    day: \"numeric\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>onReadMore(post._id, user),\n                                                    className: \"text-[#0d98e2] text-sm hover:underline\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {\n                                                        id: \"blog.button\",\n                                                        defaultMessage: \"Read more\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-24 h-24 flex-shrink-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: post.PostImage,\n                                        alt: post.PostTitle,\n                                        className: \"w-full h-full object-cover rounded-lg\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\BlogComponents\\\\Post.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBS3FCLFNBQVM7d0NBQ25CTixXQUFVOzs7Ozs7Ozs7Ozs7MkJBOUJUb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NqQjtLQWpHd0JwQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jsb2dDb21wb25lbnRzL1Bvc3QudHN4P2E5ODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWF0dGVkRGF0ZSwgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBvc3RWaXNpYmlsaXR5IGZyb20gXCIuL1Bvc3RWaXNpYmlsaXR5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCwgdXNlciwgb25SZWFkTW9yZSwgaXNWaXNpYmxlLCBvbk5ld1Bvc3QgfSkge1xyXG4gIGNvbnN0IGZpcnN0UGFyYWdyYXBoID0gKFBvc3RCb2R5KSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGNvbnRlbnQgb2YgUG9zdEJvZHkpIHtcclxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIDxwPntjb250ZW50fTwvcD47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcIm9iamVjdFwiICYmIGNvbnRlbnQuY29udGVudFR5cGUgPT09IFwidGV4dFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIDxwPntjb250ZW50LmNvbnRlbnRCb2R5fTwvcD47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxhdGVzdFBvc3RzID0gcG9zdC5zbGljZSgwLCAzKTtcclxuICBjb25zdCBtYWluUG9zdHMgPSBwb3N0LnNsaWNlKDMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0zIGdhcC04XCI+XHJcbiAgICAgIHsvKiBNYWluIFBvc3QgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMlwiPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3QtWzE2LzldIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e21haW5Qb3N0cy5Qb3N0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgYWx0PXttYWluUG9zdHMuUG9zdFRpdGxlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTZcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+e21haW5Qb3N0cy5Qb3N0VGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00XCI+XHJcbiAgICAgICAgICAgICAge2ZpcnN0UGFyYWdyYXBoKG1haW5Qb3N0cy5Qb3N0Qm9keSl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkRGF0ZVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e21haW5Qb3N0cy5Qb3N0RGF0ZX1cclxuICAgICAgICAgICAgICAgIHllYXI9XCJudW1lcmljXCJcclxuICAgICAgICAgICAgICAgIG1vbnRoPVwic2hvcnRcIlxyXG4gICAgICAgICAgICAgICAgZGF5PVwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblJlYWRNb3JlKG1haW5Qb3N0cy5faWQsIHVzZXIpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bIzBkOThlMl0gYm9yZGVyIGJvcmRlci1bIzBkOThlMl0gcHgtNCBweS0yIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1bIzBkOThlMl0gaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJibG9nLmJ1dHRvblwiIGRlZmF1bHRNZXNzYWdlPVwiUmVhZCBtb3JlXCIgLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtpc1Zpc2libGUgJiYgPFBvc3RWaXNpYmlsaXR5IGlzVmlzaWJsZT17bWFpblBvc3RzLlBvc3RTdGF0dXN9IC8+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBTaWRlIFBvc3RzICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTEgc3BhY2UteS02XCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LVsjNzY4MjllXSBtYi02XCI+XHJcbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImJsb2cubGF0ZXN0LnBvc3RcIiBkZWZhdWx0TWVzc2FnZT1cIkxhc3QgcG9zdHNcIiAvPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAge2xhdGVzdFBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxhcnRpY2xlXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgYmctd2hpdGUgcm91bmRlZC1sZyBwLTQgc2hhZG93LW1kIGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLXNoYWRvd1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnIG1iLTJcIj57cG9zdC5Qb3N0VGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gbWItMiBsaW5lLWNsYW1wLTJcIj5cclxuICAgICAgICAgICAgICAgIHtmaXJzdFBhcmFncmFwaChwb3N0LlBvc3RCb2R5KX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWREYXRlXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwb3N0LlBvc3REYXRlfVxyXG4gICAgICAgICAgICAgICAgICB5ZWFyPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgICAgICAgIG1vbnRoPVwic2hvcnRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXk9XCJudW1lcmljXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUmVhZE1vcmUocG9zdC5faWQsIHVzZXIpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsjMGQ5OGUyXSB0ZXh0LXNtIGhvdmVyOnVuZGVybGluZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJibG9nLmJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9XCJSZWFkIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjQgaC0yNCBmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwb3N0LlBvc3RJbWFnZX1cclxuICAgICAgICAgICAgICAgIGFsdD17cG9zdC5Qb3N0VGl0bGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGb3JtYXR0ZWREYXRlIiwiRm9ybWF0dGVkTWVzc2FnZSIsIlJlYWN0IiwiUG9zdFZpc2liaWxpdHkiLCJQb3N0IiwicG9zdCIsInVzZXIiLCJvblJlYWRNb3JlIiwiaXNWaXNpYmxlIiwib25OZXdQb3N0IiwiZmlyc3RQYXJhZ3JhcGgiLCJQb3N0Qm9keSIsImNvbnRlbnQiLCJwIiwiY29udGVudFR5cGUiLCJjb250ZW50Qm9keSIsImxhdGVzdFBvc3RzIiwic2xpY2UiLCJtYWluUG9zdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJhcnRpY2xlIiwiaW1nIiwic3JjIiwiUG9zdEltYWdlIiwiYWx0IiwiUG9zdFRpdGxlIiwiaDIiLCJ2YWx1ZSIsIlBvc3REYXRlIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiYnV0dG9uIiwib25DbGljayIsIl9pZCIsImlkIiwiZGVmYXVsdE1lc3NhZ2UiLCJQb3N0U3RhdHVzIiwibWFwIiwiaW5kZXgiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BlogComponents/Post.tsx\n"));

/***/ })

});