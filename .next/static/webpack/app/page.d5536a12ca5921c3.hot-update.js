"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/MetricsBoxSmall/page.tsx":
/*!*************************************************!*\
  !*** ./src/components/MetricsBoxSmall/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_metricsbox_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/metricsbox.module.css */ \"(app-pages-browser)/./src/components/MetricsBoxSmall/styles/metricsbox.module.css\");\n/* harmony import */ var _styles_metricsbox_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_metricsbox_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst MetricsBoxSmall = (param)=>{\n    let { name, Logo, bg } = param;\n    _s();\n    const [logoBackground, setLogoBackground] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        switch(bg){\n            case 1:\n                setLogoBackground(\"rgb(240, 68, 56);\");\n                break;\n        }\n    }, [\n        bg\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_metricsbox_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_metricsbox_module_css__WEBPACK_IMPORTED_MODULE_2___default().headline),\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/michaelbraun/Documents/phonePal/phonepal-dashboard/src/components/MetricsBoxSmall/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: bg\n                },\n                className: (_styles_metricsbox_module_css__WEBPACK_IMPORTED_MODULE_2___default().logoContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {\n                    fileName: \"/Users/michaelbraun/Documents/phonePal/phonepal-dashboard/src/components/MetricsBoxSmall/page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/michaelbraun/Documents/phonePal/phonepal-dashboard/src/components/MetricsBoxSmall/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michaelbraun/Documents/phonePal/phonepal-dashboard/src/components/MetricsBoxSmall/page.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MetricsBoxSmall, \"l0M+CfsR/wQd/z6jwKQHF5rC4P0=\");\n_c = MetricsBoxSmall;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MetricsBoxSmall);\nvar _c;\n$RefreshReg$(_c, \"MetricsBoxSmall\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01ldHJpY3NCb3hTbWFsbC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUVPO0FBUWhELE1BQU1HLGtCQUF5QztRQUFDLEVBQUNDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxFQUFFLEVBQUM7O0lBQzVELE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1IscURBQWM7SUFFMURDLGdEQUFTQSxDQUFDO1FBRU4sT0FBT0s7WUFDSCxLQUFLO2dCQUNERSxrQkFBa0I7Z0JBQ2xCO1FBQ1I7SUFFSixHQUFHO1FBQUNGO0tBQUc7SUFHUCxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBV1QsOEVBQVc7OzBCQUN2Qiw4REFBQ1c7Z0JBQUVGLFdBQVdULCtFQUFZOzBCQUFHRTs7Ozs7OzBCQUM3Qiw4REFBQ007Z0JBQUlLLE9BQU87b0JBQUNDLGlCQUFpQlY7Z0JBQUU7Z0JBQUdLLFdBQVdULG9GQUFpQjswQkFDM0QsNEVBQUNHOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWpCO0dBdEJNRjtLQUFBQTtBQXdCTiwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NZXRyaWNzQm94U21hbGwvcGFnZS50c3g/Y2FiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvblR5cGUgfSBmcm9tICdyZWFjdC1pY29ucyc7XG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGVzL21ldHJpY3Nib3gubW9kdWxlLmNzcydcblxuaW50ZXJmYWNlIE1ldHJpY3NJbnB1dCB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIExvZ286IEljb25UeXBlXG59XG5cblxuY29uc3QgTWV0cmljc0JveFNtYWxsOlJlYWN0LkZDPE1ldHJpY3NJbnB1dD4gPSAoe25hbWUsIExvZ28sIGJnfSk9PiB7XG4gICAgY29uc3QgW2xvZ29CYWNrZ3JvdW5kLCBzZXRMb2dvQmFja2dyb3VuZF0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBzd2l0Y2goYmcpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBzZXRMb2dvQmFja2dyb3VuZChcInJnYigyNDAsIDY4LCA1Nik7XCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH0sIFtiZ10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Mud3JhcHBlcn0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Nzcy5oZWFkbGluZX0+e25hbWV9PC9wPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogYmd9fSBjbGFzc05hbWU9e2Nzcy5sb2dvQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWV0cmljc0JveFNtYWxsIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiY3NzIiwiTWV0cmljc0JveFNtYWxsIiwibmFtZSIsIkxvZ28iLCJiZyIsImxvZ29CYWNrZ3JvdW5kIiwic2V0TG9nb0JhY2tncm91bmQiLCJ1c2VTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJwIiwiaGVhZGxpbmUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxvZ29Db250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MetricsBoxSmall/page.tsx\n"));

/***/ })

});