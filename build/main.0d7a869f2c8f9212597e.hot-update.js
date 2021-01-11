exports.id = "main";
exports.modules = {

/***/ "./src/modules/search/components/search.label.tsx":
/*!********************************************************!*\
  !*** ./src/modules/search/components/search.label.tsx ***!
  \********************************************************/
/*! exports provided: LabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelComponent", function() { return LabelComponent; });
/* harmony import */ var _msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @msdyn365-commerce-modules/utilities */ "./node_modules/@msdyn365-commerce-modules/utilities/dist/lib/index.js");
/* harmony import */ var _msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var LabelComponent = function LabelComponent(props) {
  var searchLabelClass = props.searchLabelClass,
      searchLabelArialLabel = props.searchLabelArialLabel,
      isSearchFormExpanded = props.isSearchFormExpanded,
      searchtext = props.searchtext,
      searchCollapsedLabel = props.searchCollapsedLabel,
      hideSearchLabel = props.hideSearchLabel,
      handleCancelSearchChange = props.handleCancelSearchChange,
      telemetryContent = props.telemetryContent;
  var payLoad = Object(_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["getPayloadObject"])('click', telemetryContent, searchtext, '');
  var attributes = Object(_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["getTelemetryAttributes"])(telemetryContent, payLoad);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: searchLabelClass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Button"], Object.assign({
    className: 'ms-search__icon',
    "aria-expanded": isSearchFormExpanded,
    "aria-label": searchLabelArialLabel,
    onClick: handleCancelSearchChange,
    innerRef: searchCollapsedLabel
  }, attributes), !hideSearchLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: 'ms-search__icon-text',
    "aria-hidden": true
  }, searchtext)));
};

/***/ })

};
//# sourceMappingURL=main.0d7a869f2c8f9212597e.hot-update.js.map