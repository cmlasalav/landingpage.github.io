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

/***/ "./components/Sections/home.tsx":
/*!**************************************!*\
  !*** ./components/Sections/home.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GeneraHome; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var _context_langContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/langContext */ \"./context/langContext.js\");\n/* harmony import */ var _public_images_Logo_White_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/Logo-White.jpg */ \"./public/images/Logo-White.jpg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n//import Loading\nfunction GeneraHome() {\n    _s();\n    const [home, setHome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { locale } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_langContext__WEBPACK_IMPORTED_MODULE_4__.langContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getHome = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:5000/home\");\n                if (response.status === 201) {\n                    const homeData = response.data;\n                    setHome(homeData);\n                }\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        getHome();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"Home\",\n        className: \"mt-0 bg-white rounded-2xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full flex flex-col items-center justify-center bg-[#aab3ab] rounded-2xl relative min-h-200\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-60 bg-white pt-4 text-center absolute top-0 rounded-t-2xl z-10 \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\home.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-[75rem] bg-white text-center mb-24 relative z-20 px-4\",\n                    children: home.map((info, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _public_images_Logo_White_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                    alt: \"Example Group\",\n                                    className: \"max-w-[30rem] z-30 mx-auto\",\n                                    priority: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\home.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-16 text-5xl font-medium text-gray-800\",\n                                    id: \"genera-home-title\",\n                                    children: info.HomeTitle\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\home.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mx-16 text-lg text-gray-600 leading-relaxed\",\n                                    children: locale === \"es-MX\" ? info.HomeDescription_ES : info.HomeDescription_EN\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\home.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\home.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\home.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-24 bg-white p-4 text-center absolute bottom-0 left-0 right-0 rounded-b-2xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                        to: \"GeneraContact\",\n                        smooth: true,\n                        duration: 500,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-[#0d98e2] text-white border-none rounded-2xl px-6 py-3 mt-6 cursor-pointer hover:bg-[#0b86c9] transition-colors\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {\n                                id: \"message.button\",\n                                defaultMessage: \"Send Message\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\home.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\home.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\home.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\home.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\home.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\home.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(GeneraHome, \"ZResbwQbgVpdx7wc1XcbKZ3mhSQ=\");\n_c = GeneraHome;\nvar _c;\n$RefreshReg$(_c, \"GeneraHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL2hvbWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStEO0FBQ2hDO0FBQ0w7QUFDb0I7QUFDSTtBQUNNO0FBQ0Y7QUFDdEQsZ0JBQWdCO0FBRUQsU0FBU1c7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU0sRUFBRVksTUFBTSxFQUFFLEdBQUdiLGlEQUFVQSxDQUFDUSw2REFBV0E7SUFFekNOLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVksVUFBVTtZQUNkLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNWCxpREFBUyxDQUFDO2dCQUNqQyxJQUFJVyxTQUFTRSxNQUFNLEtBQUssS0FBSztvQkFDM0IsTUFBTUMsV0FBV0gsU0FBU0ksSUFBSTtvQkFDOUJQLFFBQVFNO2dCQUNWO1lBQ0YsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2Q7UUFDRjtRQUNBTjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUztRQUFRQyxJQUFHO1FBQU9DLFdBQVU7a0JBQzNCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ1pkLEtBQUtnQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUNIOzs4Q0FDQyw4REFBQ3ZCLG1EQUFLQTtvQ0FDSjJCLEtBQUtyQixxRUFBSUE7b0NBQ1RzQixLQUFJO29DQUNKTixXQUFVO29DQUNWTyxRQUFROzs7Ozs7OENBR1YsOERBQUNDO29DQUNDUixXQUFVO29DQUNWRCxJQUFHOzhDQUVGSSxLQUFLTSxTQUFTOzs7Ozs7OENBRWpCLDhEQUFDRDtvQ0FBRVIsV0FBVTs4Q0FDVlosV0FBVyxVQUNSZSxLQUFLTyxrQkFBa0IsR0FDdkJQLEtBQUtRLGtCQUFrQjs7Ozs7OzsyQkFqQnJCUDs7Ozs7Ozs7Ozs4QkFzQmQsOERBQUNIO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDbEIsOENBQVVBO3dCQUFDOEIsSUFBRzt3QkFBZ0JDLFFBQVE7d0JBQU1DLFVBQVU7a0NBQ3JELDRFQUFDQzs0QkFBT2YsV0FBVTtzQ0FDaEIsNEVBQUNwQix3REFBZ0JBO2dDQUNmbUIsSUFBRztnQ0FDSGlCLGdCQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEvQjtHQTVEd0IvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlY3Rpb25zL2hvbWUudHN4P2Y3MmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSBcInJlYWN0LWludGxcIjtcclxuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgeyBsYW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2xhbmdDb250ZXh0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL0xvZ28tV2hpdGUuanBnXCI7XHJcbi8vaW1wb3J0IExvYWRpbmdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYUhvbWUoKSB7XHJcbiAgY29uc3QgW2hvbWUsIHNldEhvbWVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHsgbG9jYWxlIH0gPSB1c2VDb250ZXh0KGxhbmdDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldEhvbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvaG9tZVwiKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgIGNvbnN0IGhvbWVEYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIHNldEhvbWUoaG9tZURhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBnZXRIb21lKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJIb21lXCIgY2xhc3NOYW1lPVwibXQtMCBiZy13aGl0ZSByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1bI2FhYjNhYl0gcm91bmRlZC0yeGwgcmVsYXRpdmUgbWluLWgtMjAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC02MCBiZy13aGl0ZSBwdC00IHRleHQtY2VudGVyIGFic29sdXRlIHRvcC0wIHJvdW5kZWQtdC0yeGwgei0xMCBcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVs3NXJlbV0gYmctd2hpdGUgdGV4dC1jZW50ZXIgbWItMjQgcmVsYXRpdmUgei0yMCBweC00XCI+XHJcbiAgICAgICAgICB7aG9tZS5tYXAoKGluZm8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e0xvZ299XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJFeGFtcGxlIEdyb3VwXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LVszMHJlbV0gei0zMCBteC1hdXRvXCJcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTE2IHRleHQtNXhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJnZW5lcmEtaG9tZS10aXRsZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2luZm8uSG9tZVRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0xNiB0ZXh0LWxnIHRleHQtZ3JheS02MDAgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICAgICAgICB7bG9jYWxlID09PSBcImVzLU1YXCJcclxuICAgICAgICAgICAgICAgICAgPyBpbmZvLkhvbWVEZXNjcmlwdGlvbl9FU1xyXG4gICAgICAgICAgICAgICAgICA6IGluZm8uSG9tZURlc2NyaXB0aW9uX0VOfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTI0IGJnLXdoaXRlIHAtNCB0ZXh0LWNlbnRlciBhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCByb3VuZGVkLWItMnhsXCI+XHJcbiAgICAgICAgICA8U2Nyb2xsTGluayB0bz1cIkdlbmVyYUNvbnRhY3RcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs1MDB9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLVsjMGQ5OGUyXSB0ZXh0LXdoaXRlIGJvcmRlci1ub25lIHJvdW5kZWQtMnhsIHB4LTYgcHktMyBtdC02IGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLVsjMGI4NmM5XSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2UuYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPVwiU2VuZCBNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvU2Nyb2xsTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsImF4aW9zIiwiRm9ybWF0dGVkTWVzc2FnZSIsIkxpbmsiLCJTY3JvbGxMaW5rIiwibGFuZ0NvbnRleHQiLCJMb2dvIiwiR2VuZXJhSG9tZSIsImhvbWUiLCJzZXRIb21lIiwibG9jYWxlIiwiZ2V0SG9tZSIsInJlc3BvbnNlIiwiZ2V0Iiwic3RhdHVzIiwiaG9tZURhdGEiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwiaW5mbyIsImluZGV4Iiwic3JjIiwiYWx0IiwicHJpb3JpdHkiLCJwIiwiSG9tZVRpdGxlIiwiSG9tZURlc2NyaXB0aW9uX0VTIiwiSG9tZURlc2NyaXB0aW9uX0VOIiwidG8iLCJzbW9vdGgiLCJkdXJhdGlvbiIsImJ1dHRvbiIsImRlZmF1bHRNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/home.tsx\n"));

/***/ })

});