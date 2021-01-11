exports.id = "main";
exports.modules = {

/***/ "./src/modules/search/search.view.tsx":
/*!********************************************!*\
  !*** ./src/modules/search/search.view.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @msdyn365-commerce-modules/utilities */ "./node_modules/@msdyn365-commerce-modules/utilities/dist/lib/index.js");
/* harmony import */ var _msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var SearchView = function SearchView(props) {
  var Search = props.Search,
      AutoSuggestAriaLabel = props.AutoSuggestAriaLabel,
      AutoSuggestAriaLabelText = props.AutoSuggestAriaLabelText,
      searchText = props.searchText,
      AutoSuggest = props.AutoSuggest,
      KeywordSuggest = props.KeywordSuggest,
      ProductSuggest = props.ProductSuggest,
      CategorySuggest = props.CategorySuggest,
      UlKeyword = props.UlKeyword,
      UlProduct = props.UlProduct,
      UlCategory = props.UlCategory,
      form = props.form,
      autosuggestCategory = props.autosuggestCategory,
      autosuggestKeyword = props.autosuggestKeyword,
      autosuggestProduct = props.autosuggestProduct,
      SearchForm = props.SearchForm,
      FormWrapper = props.FormWrapper,
      label = props.label;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Module"], Object.assign({}, Search), label, _renderForm(form, SearchForm, FormWrapper), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Node"], Object.assign({}, AutoSuggest), searchText && searchText.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Node"], Object.assign({}, AutoSuggestAriaLabel), AutoSuggestAriaLabelText) : '', _renderKeywordSuggestions(KeywordSuggest, UlKeyword, autosuggestKeyword), _renderProductSuggestions(ProductSuggest, UlProduct, autosuggestProduct), _renderCategorySuggestions(CategorySuggest, UlCategory, autosuggestCategory)));
};

var _renderForm = function _renderForm(form, SearchForm, FormWrapper) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Node"], Object.assign({}, SearchForm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Node"], Object.assign({}, FormWrapper), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "wkea-index-top-content-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: "https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Bx?pubver=1",
    width: "26",
    height: "26",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
    type: "text",
    placeholder: "\u641C\u7D22/\u54C1\u724C/\u578B\u53F7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", null, "\u641C\u7D22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", {
    className: "clear"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: ""
  }, "\u8F74\u627F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: ""
  }, "\u5F39\u7C27")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: ""
  }, "\u8054\u8F74\u5668")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: ""
  }, "\u6C14\u7F38")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    href: ""
  }, "\u540C\u6B65\u5E26"))))), form.submitBtn, form.input, form.cancelBtn));
};

var _renderKeywordSuggestions = function _renderKeywordSuggestions(KeywordSuggest, UlKeyword, keywordSuggestions) {
  return keywordSuggestions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Node"], Object.assign({}, KeywordSuggest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Node"], Object.assign({}, UlKeyword), keywordSuggestions.text.map(function (text) {
    return text;
  })));
};

var _renderProductSuggestions = function _renderProductSuggestions(ProductSuggest, UlProduct, productSuggestions) {
  return productSuggestions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Node"], Object.assign({}, ProductSuggest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Node"], Object.assign({}, UlProduct), productSuggestions.title, productSuggestions.items.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Node"], Object.assign({}, item.LiProduct, {
      key: item.id || index
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Node"], Object.assign({}, item.AProduct), item.thumbnail, item.text, item.price));
  })));
};

var _renderCategorySuggestions = function _renderCategorySuggestions(CategorySuggest, UlCategory, categorySuggestions) {
  return categorySuggestions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Node"], Object.assign({}, CategorySuggest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_0__["Node"], Object.assign({}, UlCategory), categorySuggestions.title, categorySuggestions.text.map(function (text) {
    return text;
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchView);

/***/ })

};
//# sourceMappingURL=main.d066ceb5c029d1a1a1b7.hot-update.js.map