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

/***/ "./components/Sections/testimonials.tsx":
/*!**********************************************!*\
  !*** ./components/Sections/testimonials.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Testimonials; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst TestimonialsURL = \"http://localhost:5000/testimonials\";\nfunction Testimonials(param) {\n    let { setModalMessage, setErrorModal, rol, setConfirm } = param;\n    _s();\n    const [testimonials, setTestimonials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getTestimonials = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(TestimonialsURL);\n                const testimonials = response.data;\n                setTestimonials(testimonials);\n            } catch (error) {\n                console.error(\"Error\", error);\n            //setErrorModal(true);\n            //setModalMessage(\"modal.general.error\");\n            }\n        };\n        getTestimonials();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"Testimonials\",\n        className: \"py-12 px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold flex-start mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-[#76829e]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {\n                            id: \"section.testimonials.title1\",\n                            defaultMessage: \"Client\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\testimonials.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\testimonials.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {\n                            id: \"section.testimonials.title2\",\n                            defaultMessage: \"Testimonials\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\testimonials.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\testimonials.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\testimonials.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4\",\n                children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white rounded-2xl shadow-md p-8 m-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-2\",\n                                children: testimonial.TestimonialBody\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\testimonials.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: \"userTestimonial\",\n                                className: \"font-semibold\",\n                                children: testimonial.Author\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\testimonials.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-600 mt-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, {\n                                    value: testimonial.TestimonialDate,\n                                    year: \"numeric\",\n                                    month: \"long\",\n                                    day: \"numeric\",\n                                    weekday: \"long\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\testimonials.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\testimonials.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\testimonials.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\testimonials.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\CMLV\\\\Documents\\\\GitHub\\\\landingpage.github.io\\\\components\\\\Sections\\\\testimonials.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Testimonials, \"UYLtUlzB1jaIo2tZmHWKjo4pYJY=\");\n_c = Testimonials;\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL3Rlc3RpbW9uaWFscy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ21DO0FBQ2pCO0FBRTVDLE1BQU1LLGtCQUFrQjtBQUVULFNBQVNDLGFBQWEsS0FLcEM7UUFMb0MsRUFDbkNDLGVBQWUsRUFDZkMsYUFBYSxFQUNiQyxHQUFHLEVBQ0hDLFVBQVUsRUFDWCxHQUxvQzs7SUFNbkMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUVuREMsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxrQkFBa0I7WUFDdEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1kLGlEQUFTLENBQUNLO2dCQUNqQyxNQUFNTSxlQUFlRyxTQUFTRSxJQUFJO2dCQUNsQ0osZ0JBQWdCRDtZQUNsQixFQUFFLE9BQU9NLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyxTQUFTQTtZQUN2QixzQkFBc0I7WUFDdEIseUNBQXlDO1lBQzNDO1FBQ0Y7UUFDQUo7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ007UUFBUUMsSUFBRztRQUFlQyxXQUFVOzswQkFDbkMsOERBQUNDO2dCQUFHRCxXQUFVOztrQ0FDWiw4REFBQ0U7d0JBQUtGLFdBQVU7a0NBQ2QsNEVBQUNwQix3REFBZ0JBOzRCQUNmbUIsSUFBRzs0QkFDSEksZ0JBQWU7Ozs7Ozs7Ozs7O29CQUVYO2tDQUNSLDhEQUFDRDtrQ0FDQyw0RUFBQ3RCLHdEQUFnQkE7NEJBQ2ZtQixJQUFHOzRCQUNISSxnQkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXJCLDhEQUFDQztnQkFBSUosV0FBVTswQkFDWlYsYUFBYWUsR0FBRyxDQUFDLENBQUNDLGFBQWFDLHNCQUM5Qiw4REFBQ0g7d0JBQWdCSixXQUFVOzswQ0FDekIsOERBQUNRO2dDQUFFUixXQUFVOzBDQUFRTSxZQUFZRyxlQUFlOzs7Ozs7MENBQ2hELDhEQUFDRDtnQ0FBRVQsSUFBRztnQ0FBa0JDLFdBQVU7MENBQy9CTSxZQUFZSSxNQUFNOzs7Ozs7MENBRXJCLDhEQUFDRjtnQ0FBRVIsV0FBVTswQ0FDWCw0RUFBQ25CLHFEQUFhQTtvQ0FDWjhCLE9BQU9MLFlBQVlNLGVBQWU7b0NBQ2xDQyxNQUFLO29DQUNMQyxPQUFNO29DQUNOQyxLQUFJO29DQUNKQyxTQUFROzs7Ozs7Ozs7Ozs7dUJBWEpUOzs7Ozs7Ozs7Ozs7Ozs7O0FBbUJwQjtHQTVEd0J0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlY3Rpb25zL3Rlc3RpbW9uaWFscy50c3g/Y2EwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIEZvcm1hdHRlZERhdGUgfSBmcm9tIFwicmVhY3QtaW50bFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUZXN0aW1vbmlhbHNVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90ZXN0aW1vbmlhbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFscyh7XHJcbiAgc2V0TW9kYWxNZXNzYWdlLFxyXG4gIHNldEVycm9yTW9kYWwsXHJcbiAgcm9sLFxyXG4gIHNldENvbmZpcm0sXHJcbn0pIHtcclxuICBjb25zdCBbdGVzdGltb25pYWxzLCBzZXRUZXN0aW1vbmlhbHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VGVzdGltb25pYWxzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFRlc3RpbW9uaWFsc1VSTCk7XHJcbiAgICAgICAgY29uc3QgdGVzdGltb25pYWxzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBzZXRUZXN0aW1vbmlhbHModGVzdGltb25pYWxzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgIC8vc2V0RXJyb3JNb2RhbCh0cnVlKTtcclxuICAgICAgICAvL3NldE1vZGFsTWVzc2FnZShcIm1vZGFsLmdlbmVyYWwuZXJyb3JcIik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBnZXRUZXN0aW1vbmlhbHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cIlRlc3RpbW9uaWFsc1wiIGNsYXNzTmFtZT1cInB5LTEyIHB4LTRcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBmbGV4LXN0YXJ0IG1iLThcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjNzY4MjllXVwiPlxyXG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcclxuICAgICAgICAgICAgaWQ9XCJzZWN0aW9uLnRlc3RpbW9uaWFscy50aXRsZTFcIlxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT1cIkNsaWVudFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxyXG4gICAgICAgICAgICBpZD1cInNlY3Rpb24udGVzdGltb25pYWxzLnRpdGxlMlwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPVwiVGVzdGltb25pYWxzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cclxuICAgICAgICB7dGVzdGltb25pYWxzLm1hcCgodGVzdGltb25pYWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBwLTggbS0yXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj57dGVzdGltb25pYWwuVGVzdGltb25pYWxCb2R5fTwvcD5cclxuICAgICAgICAgICAgPHAgaWQ9XCJ1c2VyVGVzdGltb25pYWxcIiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAge3Rlc3RpbW9uaWFsLkF1dGhvcn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDAgbXQtMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWREYXRlXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGVzdGltb25pYWwuVGVzdGltb25pYWxEYXRlfVxyXG4gICAgICAgICAgICAgICAgeWVhcj1cIm51bWVyaWNcIlxyXG4gICAgICAgICAgICAgICAgbW9udGg9XCJsb25nXCJcclxuICAgICAgICAgICAgICAgIGRheT1cIm51bWVyaWNcIlxyXG4gICAgICAgICAgICAgICAgd2Vla2RheT1cImxvbmdcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkZvcm1hdHRlZE1lc3NhZ2UiLCJGb3JtYXR0ZWREYXRlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUZXN0aW1vbmlhbHNVUkwiLCJUZXN0aW1vbmlhbHMiLCJzZXRNb2RhbE1lc3NhZ2UiLCJzZXRFcnJvck1vZGFsIiwicm9sIiwic2V0Q29uZmlybSIsInRlc3RpbW9uaWFscyIsInNldFRlc3RpbW9uaWFscyIsImdldFRlc3RpbW9uaWFscyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsImRlZmF1bHRNZXNzYWdlIiwiZGl2IiwibWFwIiwidGVzdGltb25pYWwiLCJpbmRleCIsInAiLCJUZXN0aW1vbmlhbEJvZHkiLCJBdXRob3IiLCJ2YWx1ZSIsIlRlc3RpbW9uaWFsRGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsIndlZWtkYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/testimonials.tsx\n"));

/***/ })

});