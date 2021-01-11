webpackHotUpdate(1,{

/***/ "./src/modules/search/search.tsx":
/*!***************************************************!*\
  !*** ./src/modules/search/search.tsx + 7 modules ***!
  \***************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@msdyn365-commerce-modules/retail-actions/dist/lib/index.js (<- Module is referenced from these modules with unsupported syntax: ./node_modules/@msdyn365-commerce-modules/utilities/dist/lib/popup/Popup.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@msdyn365-commerce-modules/search-utilities/dist/lib/index.js because of ./node_modules/@msdyn365-commerce-modules/search/dist/lib/modules/search/search.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@msdyn365-commerce-modules/utilities/dist/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@msdyn365-commerce/components/dist/lib/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@msdyn365-commerce/core/dist/lib/index.js (<- Module is referenced from these modules with unsupported syntax: ./node_modules/@msdyn365-commerce-modules/utilities/dist/lib/back-to-top/BackToTop.js (referenced with cjs require), ./node_modules/@msdyn365-commerce-modules/utilities/dist/lib/common/telemetryHelper.js (referenced with cjs require), ./node_modules/@msdyn365-commerce-modules/utilities/dist/lib/drawer/ControlledDrawer.js (referenced with cjs require), ./node_modules/@msdyn365-commerce-modules/utilities/dist/lib/popup/Popup.js (referenced with cjs require), ./node_modules/@msdyn365-commerce-modules/utilities/dist/lib/slider/Slider.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@msdyn365-commerce/retail-proxy/dist/DataActions/ProductsDataActions.g.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@msdyn365-commerce/retail-proxy/dist/DataActions/StoreOperationsDataActions.g.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash/debounce.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "React" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/es.promise.js");

// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/web.dom-collections.for-each.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__("./node_modules/lodash/debounce.js");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce-modules/search-utilities/dist/lib/index.js + 1 modules
var lib = __webpack_require__("./node_modules/@msdyn365-commerce-modules/search-utilities/dist/lib/index.js");

// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce-modules/utilities/dist/lib/index.js
var dist_lib = __webpack_require__("./node_modules/@msdyn365-commerce-modules/utilities/dist/lib/index.js");

// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce/core/dist/lib/index.js
var core_dist_lib = __webpack_require__("./node_modules/@msdyn365-commerce/core/dist/lib/index.js");

// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce/retail-proxy/dist/DataActions/ProductsDataActions.g.js
var ProductsDataActions_g = __webpack_require__("./node_modules/@msdyn365-commerce/retail-proxy/dist/DataActions/ProductsDataActions.g.js");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("./node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__("react");

// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/web.dom-collections.iterator.js");

// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce-modules/retail-actions/dist/lib/index.js + 38 modules
var retail_actions_dist_lib = __webpack_require__("./node_modules/@msdyn365-commerce-modules/retail-actions/dist/lib/index.js");

// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce/retail-proxy/dist/DataActions/StoreOperationsDataActions.g.js
var StoreOperationsDataActions_g = __webpack_require__("./node_modules/@msdyn365-commerce/retail-proxy/dist/DataActions/StoreOperationsDataActions.g.js");

// CONCATENATED MODULE: ./src/modules/search/actions/get-auto-suggest-suggestions.ts




 // @ts-ignore

var SuggestionType;

(function (SuggestionType) {
  SuggestionType["Category"] = "ScopedCategory";
  SuggestionType["Keyword"] = "Keyword";
  SuggestionType["Product"] = "Product";
  SuggestionType["None"] = "None";
})(SuggestionType || (SuggestionType = {}));
/**
 * Input class for auto suggest search input
 */


class AutoSuggestInput {
  constructor(searchText, top, suggestionType, hitPrefix, hitSuffix) {
    this.getCacheKey = () => "AutoSuggestSearchSuggestions";

    this.getCacheObjectType = () => 'AutoSuggestSearchSuggestions';

    this.dataCacheType = () => 'none';

    this.searchQuery = searchText;
    this.topResultsCount = top;
    this.suggestionType = suggestionType;
    this.hitPrefix = hitPrefix;
    this.hitSuffix = hitSuffix;
  }

}

const createInput = inputData => {
  return new AutoSuggestInput();
};
/**
 * Calls the Retail API and returns a auto-suggest suggestions
 */


async function getSearchSuggestionsAction(input, ctx) {
  // If no input is provided fail out
  if (!input || !input.searchQuery) {
    throw new Error('[getSearchSuggestionsAction]No valid Input was provided, failing');
  }

  const autosuggest = {};
  const autoSuggestPromises = [_getAutoSuggest(input, autosuggest, ctx)];
  return Promise.all(autoSuggestPromises).then(() => {
    return autosuggest;
  });
}

async function _getAutoSuggest(input, autosuggest, ctx) {
  const searchCriteria = {
    ProductSearchCriteria: {
      SearchCondition: input.searchQuery && input.searchQuery.length > 0 ? input.searchQuery : '',
      Context: {
        ChannelId: +ctx.requestContext.apiSettings.channelId,
        CatalogId: +ctx.requestContext.apiSettings.catalogId
      }
    },
    HitPrefix: input.hitPrefix,
    HitSuffix: input.hitSuffix,
    SuggestionType: input.suggestionType
  };
  const searchSuggestions = await Object(StoreOperationsDataActions_g["getSearchSuggestionsAsync"])({
    callerContext: ctx,
    queryResultSettings: {
      Paging: {
        Top: input.topResultsCount
      }
    }
  }, searchCriteria);

  if (searchSuggestions && searchSuggestions.length > 0) {
    // Generate image url
    searchSuggestions.map(item => item.ImageUrl = item.ImageUrl ? Object(retail_actions_dist_lib["generateImageUrl"])(item.ImageUrl, ctx.requestContext.apiSettings) : '');
    autosuggest.AllSearchResults = searchSuggestions;
  } else {
    ctx.telemetry.error("[getSearchSuggestionsAction] unable to get availabilites for search with suggestion type ".concat(searchCriteria.SuggestionType));
  }
}

/* harmony default export */ var get_auto_suggest_suggestions = (Object(core_dist_lib["createObservableDataAction"])({
  id: '@msdyn365-commerce-modules/search/get-auto-suggest-suggestions',
  action: getSearchSuggestionsAction,
  input: createInput
}));
// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/es.object.assign.js");

// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/es.regexp.constructor.js");

// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/es.regexp.to-string.js");

// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/es.string.replace.js");

// CONCATENATED MODULE: ./src/modules/search/components/search.keywordsuggest.tsx





/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



let search_keywordsuggest_payLoad;
/**
 *
 * KeywordSuggestionsComponent
 */

const KeywordSuggestionsComponent = props => {
  const {
    suggestions,
    hitPrefix,
    hitSuffix
  } = props;

  if (!suggestions) {
    return undefined;
  }

  search_keywordsuggest_payLoad = Object(dist_lib["getPayloadObject"])('click', props.telemetryContent, '');
  const reactNodes = [];
  suggestions.map(item => {
    reactNodes.push(_assembleNode(item, hitPrefix, hitSuffix, props));
  });
  return {
    text: reactNodes
  };
};

const _assembleNode = (item, hitPrefix, hitSuffix, props) => {
  const ariaLabel = item.Value && item.Value.replace(new RegExp("[".concat(hitPrefix, "]"), 'gi'), '').replace(new RegExp("[".concat(hitSuffix, "]"), 'gi'), '');
  search_keywordsuggest_payLoad.contentAction.etext = ariaLabel;
  const attribute = Object(dist_lib["getTelemetryAttributes"])(props.telemetryContent, search_keywordsuggest_payLoad);
  return /*#__PURE__*/external_React_["createElement"]("li", {
    className: 'msc-autoSuggest__keywordResults-item',
    key: item.Id
  }, /*#__PURE__*/external_React_["createElement"]("a", Object.assign({
    "aria-label": ariaLabel,
    href: _generateLink(item, hitPrefix, hitSuffix, props)
  }, attribute), _generateLink(item, hitPrefix, hitSuffix, props) && _getHighlightedText(item.Value ? item.Value : '', hitPrefix, hitSuffix)));
};

const _generateLink = (suggestion, hitPrefix, hitSuffix, props) => {
  const {
    searchPageURL,
    searchQsp
  } = props;
  const formattedLink = suggestion.Value.replace(new RegExp("[".concat(hitPrefix, "]"), 'gi'), '').replace(new RegExp("[".concat(hitSuffix, "]"), 'gi'), '');
  const route = searchPageURL || '';
  return formattedLink && formattedLink.length > 0 ? "".concat(route).concat(route.indexOf('?') === -1 ? '?' : '&').concat(searchQsp, "=").concat(formattedLink) : route;
};

const _getHighlightedText = (suggestion, hitPrefix, hitSuffix) => {
  const formattedText = suggestion.replace(new RegExp("[".concat(hitPrefix, "]"), 'gi'), '<strong>').replace(new RegExp("[".concat(hitSuffix, "]"), 'gi'), '</strong>'); // tslint:disable:react-no-dangerous-html

  return /*#__PURE__*/external_React_["createElement"]("span", {
    dangerouslySetInnerHTML: Object(core_dist_lib["getRichTextHtml"])(formattedText)
  });
};
// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce/components/dist/lib/index.js + 48 modules
var components_dist_lib = __webpack_require__("./node_modules/@msdyn365-commerce/components/dist/lib/index.js");

// CONCATENATED MODULE: ./src/modules/search/components/search.productsuggest.tsx





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





let search_productsuggest_payLoad;
let search_productsuggest_telemetryContent;
/**
 *
 * ProductSuggestionsComponent
 */

const ProductSuggestionsComponent = props => {
  const {
    suggestions,
    hitSuffix,
    hitPrefix,
    autoSuggestProps: {
      context: {
        actionContext
      },
      resources: {
        productSuggestionHeading
      }
    },
    moduleType,
    moduleId
  } = props;
  const reactNodes = [];
  search_productsuggest_telemetryContent = props.telemetryContent;
  search_productsuggest_payLoad = Object(dist_lib["getPayloadObject"])('click', props.telemetryContent, '');

  if (!suggestions) {
    return undefined;
  }

  suggestions.map(item => {
    reactNodes.push(search_productsuggest_assembleNode(item, hitPrefix, hitSuffix, actionContext, props, moduleType, moduleId));
  });

  const titleNode = _renderTitle(productSuggestionHeading);

  return {
    title: titleNode,
    items: reactNodes
  };
};

const _renderTitle = productSuggestionHeading => {
  const productAutoSuggestionHeading = productSuggestionHeading ? productSuggestionHeading : 'Go to products';
  return /*#__PURE__*/external_React_["createElement"]("li", {
    className: 'msc-autoSuggest__productResults-title'
  }, productAutoSuggestionHeading);
};

const search_productsuggest_assembleNode = (item, hitPrefix, hitSuffix, actionContext, props, moduleType, moduleId) => {
  const altText = item.Value && item.Value.replace(new RegExp("[".concat(hitPrefix, "]"), 'gi'), '').replace(new RegExp("[".concat(hitSuffix, "]"), 'gi'), '');
  return {
    text: search_productsuggest_getHighlightedText(item.Value ? item.Value : '', hitPrefix, hitSuffix),
    thumbnail: _renderThumbnail(item, altText ? altText : '', props),
    price: item.Id && item.Value3 && item.Value3.Value && item.Value3.Value.DecimalValue && _renderPrice(item.Value3.Value.DecimalValue, item.Value3.Value.DecimalValue, moduleId, moduleType, props),
    LiProduct: _getLiWrapper(),
    AProduct: _getAWrapper(item, hitPrefix, hitSuffix, actionContext),
    id: item.Id
  };
};

const _getLiWrapper = () => {
  return {
    className: 'msc-autoSuggest__productResults-item',
    tag: 'li'
  };
};

const _getAWrapper = (item, hitPrefix, hitSuffix, actionContext) => {
  const ariaLabel = item.Value && item.Value.replace(new RegExp("[".concat(hitPrefix, "]"), 'gi'), '').replace(new RegExp("[".concat(hitSuffix, "]"), 'gi'), '');
  search_productsuggest_payLoad.contentAction.recid = item.Id;
  const attribute = Object(dist_lib["getTelemetryAttributes"])(search_productsuggest_telemetryContent, search_productsuggest_payLoad);
  return _objectSpread({
    className: 'msc-autoSuggest__productResults-item',
    tag: 'a',
    'aria-label': ariaLabel,
    href: search_productsuggest_generateLink(item, hitPrefix, hitSuffix, actionContext)
  }, attribute);
};

const search_productsuggest_generateLink = (suggestion, hitPrefix, hitSuffix, actionContext) => {
  const formattedLink = suggestion.Value.replace(new RegExp("[".concat(hitPrefix, "]"), 'gi'), '').replace(new RegExp("[".concat(hitSuffix, "]"), 'gi'), '');
  return suggestion.Value && suggestion.Id ? Object(retail_actions_dist_lib["getProductPageUrlSync"])(formattedLink, suggestion.Id, actionContext, undefined) : '';
};

const search_productsuggest_getHighlightedText = (suggestion, hitPrefix, hitSuffix) => {
  const formattedText = suggestion.replace(new RegExp("[".concat(hitPrefix, "]"), 'gi'), '<strong>').replace(new RegExp("[".concat(hitSuffix, "]"), 'gi'), '</strong>'); // tslint:disable:react-no-dangerous-html

  return /*#__PURE__*/external_React_["createElement"]("span", {
    className: 'msc-price msc-autoSuggest__productResults-item-text',
    dangerouslySetInnerHTML: Object(core_dist_lib["getRichTextHtml"])(formattedText)
  });
};

const _renderPrice = (adjustedPrice, basePrice, moduleId, moduleType, props) => {
  const {
    autoSuggestProps: {
      context
    }
  } = props;
  return /*#__PURE__*/external_React_["createElement"](components_dist_lib["PriceComponent"], {
    id: moduleId,
    typeName: moduleType,
    context: context,
    data: {
      price: {
        CustomerContextualPrice: adjustedPrice,
        BasePrice: basePrice
      }
    },
    className: 'msc-autoSuggest__productResults-item-price'
  });
};

const _renderThumbnail = (suggestion, altText, props) => {
  const {
    autoSuggestProps: {
      context: {
        request: {
          gridSettings
        }
      },
      config: {
        imageSettings
      }
    }
  } = props;

  if (!suggestion || !suggestion.ImageUrl) {
    props.telemetry.error('Search suggestion content is empty, module wont render.');
    return null;
  }

  const defaultImageSettings = {
    viewports: {
      xs: {
        q: "w=40&h=40&m=6",
        w: 0,
        h: 0
      },
      lg: {
        q: "w=40&h=40&m=6",
        w: 0,
        h: 0
      },
      xl: {
        q: "w=40&h=40&m=6",
        w: 0,
        h: 0
      }
    },
    lazyload: true
  };
  return /*#__PURE__*/external_React_["createElement"](core_dist_lib["Image"], {
    altText: altText,
    className: 'msc-autoSuggest__productResults-item-img',
    src: suggestion.ImageUrl,
    gridSettings: gridSettings,
    imageSettings: imageSettings ? imageSettings : defaultImageSettings,
    loadFailureBehavior: 'hide'
  });
};
// EXTERNAL MODULE: ./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("./node_modules/@msdyn365-commerce/bootloader/node_modules/core-js/modules/es.string.split.js");

// CONCATENATED MODULE: ./src/modules/search/components/search.categorysuggest.tsx







/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



let search_categorysuggest_payLoad;
/**
 *
 * CategorySuggestionsComponent
 */

const CategorySuggestionsComponent = props => {
  const {
    suggestions,
    searchText,
    autoSuggestProps: {
      resources: {
        categorySuggestionHeading
      }
    }
  } = props;

  if (!suggestions) {
    return undefined;
  }

  const reactNodes = [];
  search_categorysuggest_payLoad = Object(dist_lib["getPayloadObject"])('click', props.telemetryContent, '');
  suggestions.map(item => {
    reactNodes.push(search_categorysuggest_assembleNode(item, props));
  });

  const titleNode = search_categorysuggest_renderTitle(categorySuggestionHeading, searchText);

  return {
    title: titleNode,
    text: reactNodes
  };
};

const search_categorysuggest_renderTitle = (categorySuggestionHeading, searchText) => {
  const categoryAutoSuggestionHeading = categorySuggestionHeading ? Object(dist_lib["format"])(categorySuggestionHeading, searchText) : "Search \"".concat(searchText, "\" in categories");
  return /*#__PURE__*/external_React_["createElement"]("li", {
    className: 'msc-autoSuggest__categoryResults-title'
  }, categoryAutoSuggestionHeading);
};

const search_categorysuggest_assembleNode = (item, props) => {
  const {
    searchText,
    hitPrefix,
    hitSuffix
  } = props;
  const splitValue = item.Value && item.Value.split('|').pop();
  const ariaLabel = splitValue ? splitValue.replace(new RegExp("[".concat(hitPrefix, "]"), 'gi'), '').replace(new RegExp("[".concat(hitSuffix, "]"), 'gi'), '') : item.Value && item.Value.replace(new RegExp("[".concat(hitPrefix, "]"), 'gi'), '').replace(new RegExp("[".concat(hitSuffix, "]"), 'gi'), '');
  search_categorysuggest_payLoad.contentAction.etext = item.Value;
  const attribute = Object(dist_lib["getTelemetryAttributes"])(props.telemetryContent, search_categorysuggest_payLoad);
  return /*#__PURE__*/external_React_["createElement"]("li", {
    className: 'msc-autoSuggest__categoryResults-item',
    key: item.Id
  }, /*#__PURE__*/external_React_["createElement"]("a", Object.assign({
    "aria-label": ariaLabel,
    href: search_categorysuggest_generateLink(item, searchText, props)
  }, attribute), search_categorysuggest_generateLink(item, searchText, props) && search_categorysuggest_getHighlightedText(item.Value ? item.Value : '', hitPrefix, hitSuffix)));
};

const search_categorysuggest_generateLink = (suggestion, searchText, props) => {
  return suggestion && suggestion.Id ? _getCategoryLink(suggestion.Id, searchText, props) : '';
};

const _getCategoryLink = (id, searchText, props) => {
  const {
    searchPageURL,
    searchQsp,
    searchRefiners
  } = props;
  const route = searchPageURL || '';
  const urlPath = "".concat(route).concat(route.indexOf('?') === -1 ? '?' : '&').concat(searchQsp, "=").concat(searchText);
  const categoryRefiners = searchRefiners && searchRefiners.find(refiners => {
    return refiners.KeyName === 'Category';
  });
  const refiner = categoryRefiners && categoryRefiners.Values && categoryRefiners.Values.find(item => {
    return item.RefinerRecordId === parseInt(id, 10);
  });
  const encodedRefiner = refiner && encodeURIComponent(JSON.stringify(compressRefiners([refiner])));
  return encodedRefiner ? "".concat(urlPath, "&refiners=").concat(encodedRefiner) : urlPath;
};

const search_categorysuggest_getHighlightedText = (suggestion, hitPrefix, hitSuffix) => {
  let formattedText = suggestion.replace(new RegExp("[".concat(hitPrefix, "]"), 'gi'), '<strong>').replace(new RegExp("[".concat(hitSuffix, "]"), 'gi'), '</strong>');
  formattedText = formattedText.split('|').pop() || ''; // tslint:disable:react-no-dangerous-html

  return /*#__PURE__*/external_React_["createElement"]("span", {
    dangerouslySetInnerHTML: Object(core_dist_lib["getRichTextHtml"])(formattedText)
  });
}; // TODO: This code is currently duplicated in categoryautosuggest need to either remove one of these files
// or move this code to a common place


const compressedRefinerKeys = ['DataTypeValue', 'LeftValueBoundString', 'RefinerRecordId', 'RefinerSourceValue', 'RightValueBoundString', 'UnitText'];
/**
 * Compressed a list of refiners for use in URLs
 * @param refiners The uncompressed refiners
 */

const compressRefiners = refiners => {
  const compressedRefiners = [];
  refiners.forEach(refiner => {
    const compressedRefiner = [];
    compressedRefinerKeys.forEach(refinerKey => {
      // @ts-ignore: This line is intentionally not typesafe
      compressedRefiner.push(refiner[refinerKey]);
    });
    compressedRefiners.push(compressedRefiner);
  });
  return compressedRefiners;
};
// CONCATENATED MODULE: ./src/modules/search/components/search.form.tsx
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


const FormComponent = props => {
  const {
    searchQsp,
    searchPlaceholder,
    hideSearchLabel,
    isSearchFormExpanded,
    searchTextInput,
    handleInputChange,
    maxChars,
    disableSubmitSearch,
    handleCancelSearchChange,
    query,
    ariaLabelCancel,
    ariaLabelSearch,
    ariaLabelSubmit
  } = props;

  const onInputChange = e => {
    handleInputChange(e.target.value || '');
  };

  const inputNode = !hideSearchLabel ? /*#__PURE__*/external_React_["createElement"]("input", {
    className: 'ms-search__form-control',
    type: 'text',
    "aria-label": isSearchFormExpanded ? 'Search expanded' : 'Search collapsed',
    name: searchQsp,
    placeholder: searchPlaceholder,
    ref: searchTextInput,
    onChange: onInputChange,
    maxLength: maxChars,
    value: query
  }) : /*#__PURE__*/external_React_["createElement"]("input", {
    className: 'ms-search__form-control',
    type: 'text',
    "aria-label": ariaLabelSearch,
    name: searchQsp,
    placeholder: searchPlaceholder,
    ref: searchTextInput,
    onChange: onInputChange,
    value: query
  });
  const submitBtnNode = !disableSubmitSearch && /*#__PURE__*/external_React_["createElement"](dist_lib["Button"], {
    className: 'ms-search__form-submitSearch',
    "aria-label": ariaLabelSubmit
  });
  const cancelBtNoden = /*#__PURE__*/external_React_["createElement"](dist_lib["Button"], {
    className: !disableSubmitSearch ? 'ms-search__form-cancelSearch' : 'ms-search__form-cancelSearchNoSumbit',
    "aria-label": ariaLabelCancel,
    onClick: handleCancelSearchChange,
    type: 'button'
  });
  return {
    input: inputNode,
    cancelBtn: cancelBtNoden,
    submitBtn: submitBtnNode
  };
};
// CONCATENATED MODULE: ./src/modules/search/components/search.label.tsx


/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


const LabelComponent = props => {
  const {
    searchLabelClass,
    searchLabelArialLabel,
    isSearchFormExpanded,
    searchtext,
    searchCollapsedLabel,
    hideSearchLabel,
    handleCancelSearchChange,
    telemetryContent
  } = props;
  const payLoad = Object(dist_lib["getPayloadObject"])('click', telemetryContent, searchtext, '');
  const attributes = Object(dist_lib["getTelemetryAttributes"])(telemetryContent, payLoad);
  return /*#__PURE__*/external_React_["createElement"]("div", {
    className: searchLabelClass
  }, /*#__PURE__*/external_React_["createElement"](dist_lib["Button"], Object.assign({
    className: 'ms-search__icon',
    "aria-expanded": isSearchFormExpanded,
    "aria-label": searchLabelArialLabel,
    onClick: handleCancelSearchChange,
    innerRef: searchCollapsedLabel
  }, attributes), !hideSearchLabel && /*#__PURE__*/external_React_["createElement"]("span", {
    className: 'ms-search__icon-text',
    "aria-hidden": true
  }, searchtext)));
};
// CONCATENATED MODULE: ./src/modules/search/components/index.ts





// CONCATENATED MODULE: ./src/modules/search/search.tsx





function search_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function search_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { search_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { search_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/








/**
 *
 * Search module
 * @extends {React.Component<ISearchProps<ISearchData>, ISearchState>}
 */

class search_Search extends external_React_["Component"] {
  constructor(props) {
    super(props);
    this.hitPrefix = '{';
    this.hitSuffix = '}';
    this.waitTime = 500; // tslint:disable-next-line:no-any

    this._focusOutTarget = e => {
      const {
        suggestions
      } = this.state;

      if (suggestions && suggestions.AllSearchResults && e.target.closest('.ms-search') === null) {
        this._clearAutoSuggestState();
      }
    };

    this._keyup = e => {
      const {
        suggestions
      } = this.state;

      if (suggestions && suggestions.AllSearchResults && e.keyCode === dist_lib["KeyCodes"].Escape) {
        this._clearAutoSuggestState();
      } else if (this.state.isSearchFormExpanded && e.keyCode === dist_lib["KeyCodes"].Escape) {
        if (this.state.isSearchFormExpanded) {
          this.setState({
            isSearchFormExpanded: false
          });
        }
      }

      if (!(this.formReference.current && this.formReference.current.contains(e.target) || this.autoSuggestResultDiv.current && this.autoSuggestResultDiv.current.contains(e.target))) {
        if (suggestions && suggestions.AllSearchResults) {
          this._clearAutoSuggestState();
        }

        if (this.state.isSearchFormExpanded) {
          this.setState({
            isSearchFormExpanded: false
          });
        }
      }
    };

    this._clearAutoSuggestState = () => {
      const {
        context: {
          actionContext
        },
        data: {
          searchState
        }
      } = this.props;

      if (this.searchTextInput.current && this.searchTextInput.current.value.length > 0) {
        searchState.searchText = '';
        searchState.defaultBasicSearchUrl = '';
        searchState.searchQueryStringParameter = '';
        actionContext ? actionContext.update(Object(lib["createSearchStateInput"])(searchState), searchState) : null;
        this.searchTextInput.current.value = '';
      }

      this.setState({
        searchText: '',
        suggestions: undefined,
        searchRefiners: undefined
      });
    };

    this._handleInputChange = query => {
      if (!query || query.length < this.maxChars) {
        this.setState({
          searchText: query
        });
      }

      if (this.cancellabelDebounce) {
        this.cancellabelDebounce.cancel();
      }

      const {
        telemetry,
        context,
        data: {
          searchState
        }
      } = this.props;

      if (context) {
        if (query && query.length > 0) {
          if (query.length > this.maxChars) {
            return;
          }

          this.cancellabelDebounce = debounce_default()(() => {
            get_auto_suggest_suggestions(new AutoSuggestInput(query, this.topResultsCount, this._getSuggestionType(this.inputSuggestionType), this.hitPrefix, this.hitSuffix), context.actionContext).then(results => {
              this._getSearchRefiners(query).then(refiners => {
                this.setState({
                  suggestions: results,
                  searchRefiners: refiners,
                  autoSuggestAriaLabel: this._setAutoSuggestResultCount(results)
                });
              }).catch(error => {
                this.setState({
                  suggestions: results,
                  searchRefiners: undefined,
                  autoSuggestAriaLabel: this._setAutoSuggestResultCount(results)
                });
                telemetry.exception(error);
                telemetry.debug('Unable to get refiners results');
              });
            }).catch(error => {
              this.setState({
                suggestions: undefined,
                searchRefiners: undefined,
                autoSuggestAriaLabel: this._setAutoSuggestResultCount()
              });
              telemetry.exception(error);
              telemetry.debug('Unable to get auto suggest results');
            });
          }, this.waitTime);
          setTimeout(() => {
            this.cancellabelDebounce();
          }, 0);
          searchState.searchText = query;
        } else {
          this.setState({
            suggestions: undefined,
            searchRefiners: undefined
          });
          searchState.searchText = '';
        }

        context.actionContext.update(Object(lib["createSearchStateInput"])(searchState), searchState);
      }
    };

    this._getSuggestionType = suggestionTypes => {
      if (suggestionTypes && suggestionTypes.length > 0) {
        const distinctSuggestionTypes = [];
        suggestionTypes && suggestionTypes.forEach((suggestionTypeItem, index) => {
          suggestionTypeItem.SuggestionType && distinctSuggestionTypes.push(suggestionTypeItem.SuggestionType.charAt(0).toUpperCase() + suggestionTypeItem.SuggestionType.slice(1));
        });
        return distinctSuggestionTypes.join(',');
      }

      return 'Keyword, Product, ScopedCategory';
    };

    this._handleSubmit = e => {
      const {
        config: {
          disableSubmitSearch
        },
        context: {
          actionContext,
          app: {
            config: {
              searchQueryStringParameter
            }
          }
        }
      } = this.props;
      const query = this.searchTextInput.current && this.searchTextInput.current.value;
      e.preventDefault();

      if (!query || query && query.length === 0 || disableSubmitSearch) {
        this.searchTextInput && this.searchTextInput.current && this.searchTextInput.current.focus();
      } else {
        const searchQsp = searchQueryStringParameter || 'q';

        const searchURL = this._appendQueryParams(Object(core_dist_lib["getUrlSync"])('search', actionContext) || '', query, searchQsp);

        document.location.href = searchURL;
      }
    };

    this._handleCancelSearchChange = () => {
      const {
        isSearchFormExpanded,
        suggestions
      } = this.state;

      if (!isSearchFormExpanded) {
        this.setState({
          isSearchFormExpanded: true,
          searchText: '',
          isInitialState: false
        });
      } else {
        if (suggestions && suggestions.AllSearchResults) {
          this._clearAutoSuggestState();
        }

        this.setState({
          isSearchFormExpanded: false
        });
      }
    };

    this._appendQueryParams = (route, query, qsp) => {
      if (route && route.length > 0) {
        return query && query.length > 0 ? "".concat(route).concat(route.indexOf('?') === -1 ? '?' : '&').concat(qsp, "=").concat(query) : route;
      }

      return '';
    };

    this._setAutoSuggestResultCount = result => {
      if (this.autoSuggestResultScreenReaderDiv.current !== null) {
        const ariaLiveRegion = this.autoSuggestResultScreenReaderDiv.current;
        const suggestResultString = this.props.resources.autoSuggestFoundMessage;
        const emptyResultString = this.props.resources.noAutoSuggestionMessage;
        ariaLiveRegion.innerText = result && result.AllSearchResults && result.AllSearchResults.length > 0 ? suggestResultString : emptyResultString;
        ariaLiveRegion.setAttribute('aria-live', 'assertive');
        return ariaLiveRegion.innerText;
      } else {
        return '';
      }
    };

    this.searchTextInput = /*#__PURE__*/external_React_["createRef"]();
    this.searchCollapsedLabel = /*#__PURE__*/external_React_["createRef"]();
    this.autoSuggestResultScreenReaderDiv = /*#__PURE__*/external_React_["createRef"]();
    this.autoSuggestResultDiv = /*#__PURE__*/external_React_["createRef"]();
    this.formReference = /*#__PURE__*/external_React_["createRef"]();
    this.state = {
      isSearchFormExpanded: false,
      searchText: '',
      searchKeywordSuggestClass: 'ms-search__autoSuggest__keyword',
      searchProductSuggestClass: 'ms-search__autoSuggest__product',
      searchCategorySuggestClass: 'ms-search__autoSuggest__category',
      suggestions: undefined,
      searchRefiners: undefined,
      autoSuggestAriaLabel: '',
      isInitialState: true
    };
    this.maxChars = this.props.context && this.props.context.app && this.props.context.app.config && this.props.context.app.config.searchInputMaxLength || 50;
    this.inputSuggestionType = this.props.config && this.props.config.suggestionTypeCriterion;
    this.topResultsCount = this.props.config && this.props.config.topResultsCount ? this.props.config.topResultsCount : 5;
    this.searchFormClass = 'ms-search__form';
    this.searchLabelClass = 'ms-search__label';
    this.telemetryContent = Object(dist_lib["getTelemetryObject"])(this.props.context.request.telemetryPageName, this.props.friendlyName, this.props.telemetry);
  }

  async componentDidMount() {
    document.body && document.body.addEventListener('mousedown', this._focusOutTarget);
    window && window.addEventListener('keyup', this._keyup);
  }

  componentWillUnmount() {
    document.body && document.body.removeEventListener('mousedown', this._focusOutTarget, false);
    window && window.removeEventListener('keyup', this._keyup, false);
  }

  componentDidUpdate() {
    const {
      config: {
        hideSearchLabel
      }
    } = this.props;
    const {
      isSearchFormExpanded,
      isInitialState
    } = this.state;

    if (!this.props.context.request.params.isEditor) {
      if (!hideSearchLabel && isSearchFormExpanded) {
        this.searchTextInput && this.searchTextInput.current && this.searchTextInput.current.focus();
      } else if (!isInitialState) {
        this.searchCollapsedLabel && this.searchCollapsedLabel.current && this.searchCollapsedLabel.current.focus();
      }
    }
  } // tslint:disable-next-line: cyclomatic-complexity max-func-body-length


  render() {
    const {
      context,
      resources: {
        searchtext,
        searchLabelArialLabel,
        cancelBtnAriaLabel,
        searchBtnAriaLabel,
        submitBtnAriaLabel
      },
      config: {
        hideSearchLabel,
        disableSubmitSearch,
        searchplaceholderText,
        className = ''
      }
    } = this.props;
    const {
      isSearchFormExpanded,
      searchText,
      searchKeywordSuggestClass,
      searchProductSuggestClass,
      searchCategorySuggestClass,
      suggestions,
      searchRefiners
    } = this.state;
    const searchQsp = context && context.app && context.app.config && context.app.config.searchQueryStringParameter || 'q';
    const searchPageURL = Object(core_dist_lib["getUrlSync"])('search', context && context.actionContext) || '';

    const searchURL = this._appendQueryParams(searchPageURL, searchText, searchQsp);

    const searchPlaceholder = searchplaceholderText && searchplaceholderText.length > 0 ? searchplaceholderText : 'Search in Fabrikam';
    const keywordSuggestions = suggestions && suggestions.AllSearchResults && suggestions.AllSearchResults.filter(i => i.SuggestionType === SuggestionType.Keyword || i.SuggestionType === SuggestionType.None);
    const productSuggestions = suggestions && suggestions.AllSearchResults && suggestions.AllSearchResults.filter(i => i.SuggestionType === SuggestionType.Product);
    const categorySuggestions = suggestions && suggestions.AllSearchResults && suggestions.AllSearchResults.filter(i => i.SuggestionType === SuggestionType.Category);

    const viewProps = search_objectSpread(search_objectSpread({}, this.props), {}, {
      Search: {
        moduleProps: this.props,
        className: "".concat(classnames_default()('ms-search', className), " ").concat(disableSubmitSearch ? 'no-submit' : 'with-submit')
      },
      AutoSuggestAriaLabel: {
        tag: 'div',
        className: 'msc-autoSuggest__screen-reader',
        'aria-live': 'assertive',
        ref: this.autoSuggestResultScreenReaderDiv
      },
      AutoSuggestAriaLabelText: this.state.autoSuggestAriaLabel,
      searchText: this.state.searchText,
      AutoSuggest: {
        ref: this.autoSuggestResultDiv,
        className: 'ms-search__autoSuggest'
      },
      KeywordSuggest: {
        className: searchKeywordSuggestClass
      },
      ProductSuggest: {
        className: searchProductSuggestClass
      },
      CategorySuggest: {
        className: searchCategorySuggestClass
      },
      SearchForm: {
        className: "".concat(this.searchFormClass, " ").concat(isSearchFormExpanded ? 'bx-show' : 'bx-hide')
      },
      FormWrapper: {
        tag: 'form',
        ref: this.formReference,
        className: 'ms-search__searchForm',
        'aria-label': 'Search',
        name: 'searchForm',
        role: 'Search',
        action: searchURL,
        autoComplete: 'off',
        onSubmit: this._handleSubmit
      },
      UlKeyword: {
        tag: 'ul',
        className: classnames_default()('msc-autoSuggest__keywordResults-items', className)
      },
      UlProduct: {
        tag: 'ul',
        className: classnames_default()('msc-autoSuggest__productResults-items', className)
      },
      UlCategory: {
        tag: 'ul',
        className: classnames_default()('msc-autoSuggest__categoryResults-items', className)
      },
      label: LabelComponent({
        isSearchFormExpanded: isSearchFormExpanded,
        searchLabelClass: "".concat(this.searchLabelClass, " ").concat(isSearchFormExpanded ? 'bx-hide' : 'bx-show'),
        searchtext: searchtext,
        searchLabelArialLabel: searchLabelArialLabel,
        searchCollapsedLabel: this.searchCollapsedLabel,
        hideSearchLabel: hideSearchLabel,
        handleCancelSearchChange: this._handleCancelSearchChange,
        telemetryContent: this.telemetryContent
      }),
      form: FormComponent({
        ariaLabelCancel: cancelBtnAriaLabel,
        ariaLabelSearch: searchBtnAriaLabel,
        ariaLabelSubmit: submitBtnAriaLabel,
        hideSearchLabel: hideSearchLabel,
        searchTextInput: this.searchTextInput,
        isSearchFormExpanded: isSearchFormExpanded,
        disableSubmitSearch: disableSubmitSearch,
        handleInputChange: this._handleInputChange,
        handleCancelSearchChange: this._handleCancelSearchChange,
        maxChars: this.maxChars,
        searchQsp: searchQsp,
        searchPlaceholder: searchPlaceholder,
        query: searchText
      }),
      autosuggestKeyword: searchText && searchText.length > 0 && keywordSuggestions && keywordSuggestions.length > 0 ? KeywordSuggestionsComponent({
        searchKeywordSuggestClass: searchKeywordSuggestClass,
        searchPageURL: searchPageURL,
        searchQsp: searchQsp,
        hitPrefix: this.hitPrefix,
        hitSuffix: this.hitSuffix,
        autoSuggestProps: this.props,
        searchText: searchText,
        suggestions: keywordSuggestions,
        telemetryContent: this.telemetryContent
      }) : undefined,
      autosuggestProduct: searchText && searchText.length > 0 && productSuggestions && productSuggestions.length > 0 ? ProductSuggestionsComponent({
        searchProductSuggestClass: searchProductSuggestClass,
        searchPageURL: searchPageURL,
        searchQsp: searchQsp,
        hitPrefix: this.hitPrefix,
        hitSuffix: this.hitSuffix,
        autoSuggestProps: this.props,
        searchText: searchText,
        suggestions: productSuggestions,
        telemetry: this.props.telemetry,
        moduleType: this.props.typeName,
        moduleId: this.props.id,
        telemetryContent: this.telemetryContent
      }) : undefined,
      autosuggestCategory: searchText && searchText.length > 0 && categorySuggestions && categorySuggestions.length > 0 ? CategorySuggestionsComponent({
        searchCategorySuggestClass: searchCategorySuggestClass,
        searchPageURL: searchPageURL,
        searchQsp: searchQsp,
        hitPrefix: this.hitPrefix,
        hitSuffix: this.hitSuffix,
        autoSuggestProps: this.props,
        searchText: searchText,
        suggestions: categorySuggestions,
        searchRefiners: searchRefiners,
        telemetryContent: this.telemetryContent
      }) : undefined,
      callbacks: {
        handleCancelSearchChange: this._handleCancelSearchChange
      },
      isSearchFormExpanded: this.state.isSearchFormExpanded
    });

    return this.props.renderView(viewProps);
  }

  async _getSearchRefiners(searchText) {
    const {
      actionContext: ctx
    } = this.props.context;
    return Object(ProductsDataActions_g["getProductSearchRefinersAsync"])({
      callerContext: ctx
    }, {
      SearchCondition: searchText,
      Context: {
        ChannelId: +ctx.requestContext.apiSettings.channelId,
        CatalogId: +ctx.requestContext.apiSettings.catalogId
      }
    });
  }

}

/* harmony default export */ var search = __webpack_exports__["default"] = (search_Search);

/***/ })

})
//# sourceMappingURL=1.bddba93014c34c455f08.hot-update.js.map