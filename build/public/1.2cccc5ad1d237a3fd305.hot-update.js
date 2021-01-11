webpackHotUpdate(1,{

/***/ "./src/modules/search/search.view.tsx":
/*!********************************************!*\
  !*** ./src/modules/search/search.view.tsx ***!
  \********************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./lib/view-registration.js (referenced with import() eager, require.resolve) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @msdyn365-commerce-modules/utilities */ "./node_modules/@msdyn365-commerce-modules/utilities/dist/lib/index.js");
/* harmony import */ var _msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



const SearchView = props => {
  const {
    Search,
    AutoSuggestAriaLabel,
    AutoSuggestAriaLabelText,
    searchText,
    AutoSuggest,
    KeywordSuggest,
    ProductSuggest,
    CategorySuggest,
    UlKeyword,
    UlProduct,
    UlCategory,
    form,
    autosuggestCategory,
    autosuggestKeyword,
    autosuggestProduct,
    SearchForm,
    FormWrapper,
    label
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Module"], Object.assign({}, Search), label, _renderForm(form, SearchForm, FormWrapper), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, AutoSuggest), searchText && searchText.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, AutoSuggestAriaLabel), AutoSuggestAriaLabelText) : '', _renderKeywordSuggestions(KeywordSuggest, UlKeyword, autosuggestKeyword), _renderProductSuggestions(ProductSuggest, UlProduct, autosuggestProduct), _renderCategorySuggestions(CategorySuggest, UlCategory, autosuggestCategory)));
};

const _renderForm = (form, SearchForm, FormWrapper) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, SearchForm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "wkea-index-top-content-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("img", {
    src: "https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Bx?pubver=1",
    width: "26",
    height: "26",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("input", {
    type: "text",
    placeholder: "\u641C\u7D22/\u54C1\u724C/\u578B\u53F7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("button", null, "\u641C\u7D22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("ul", {
    className: "clear"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("a", {
    href: ""
  }, "\u8F74\u627F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("a", {
    href: ""
  }, "\u5F39\u7C27")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("a", {
    href: ""
  }, "\u8054\u8F74\u5668")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("a", {
    href: ""
  }, "\u6C14\u7F38")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("a", {
    href: ""
  }, "\u540C\u6B65\u5E26"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, FormWrapper), form.submitBtn, form.input, form.cancelBtn));
};

const _renderKeywordSuggestions = (KeywordSuggest, UlKeyword, keywordSuggestions) => {
  return keywordSuggestions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, KeywordSuggest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, UlKeyword), keywordSuggestions.text.map(text => {
    return text;
  })));
};

const _renderProductSuggestions = (ProductSuggest, UlProduct, productSuggestions) => {
  return productSuggestions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, ProductSuggest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, UlProduct), productSuggestions.title, productSuggestions.items.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, item.LiProduct, {
      key: item.id || index
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, item.AProduct), item.thumbnail, item.text, item.price));
  })));
};

const _renderCategorySuggestions = (CategorySuggest, UlCategory, categorySuggestions) => {
  return categorySuggestions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, CategorySuggest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, UlCategory), categorySuggestions.title, categorySuggestions.text.map(text => {
    return text;
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchView);

/***/ })

})
//# sourceMappingURL=1.2cccc5ad1d237a3fd305.hot-update.js.map