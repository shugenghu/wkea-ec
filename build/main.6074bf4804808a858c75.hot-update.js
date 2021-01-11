exports.id = "main";
exports.modules = {

/***/ "./src/modules/header/header.view.tsx":
/*!********************************************!*\
  !*** ./src/modules/header/header.view.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @msdyn365-commerce-modules/utilities */ "./node_modules/@msdyn365-commerce-modules/utilities/dist/lib/index.js");
/* harmony import */ var _msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var headerView = function headerView(props) {
  var HeaderTag = props.HeaderTag,
      HeaderContainer = props.HeaderContainer,
      HeaderTopBarContainer = props.HeaderTopBarContainer;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      scrollTop = _useState2[0],
      setScrollTop = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.addEventListener('scroll', function () {
      setScrollTop(window.scrollY || 0);
    });
  }, [1]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Module"], Object.assign({}, HeaderTag), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, HeaderContainer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, HeaderTopBarContainer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-top-top centre"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "clearfix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "float-left wkea-header-top-top-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "list-inline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "list-inline-item"
  }, "\u6B22\u8FCE\u6765\u5230\u7EF4\u5609"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "list-inline-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: ""
  }, "\u8BF7\u767B\u5F55")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "list-inline-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: ""
  }, "\u514D\u8D39\u6CE8\u518C")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "float-right wkea-header-top-top-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "clear"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: ""
  }, "\u6D88\u606F ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "wkea-header-top-top-right-number"
  }, "0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: ""
  }, "\u6211\u7684\u8BA2\u5355"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: ""
  }, "\u4E2A\u4EBA\u4E2D\u5FC3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2BA?pubver=1",
    width: "15",
    height: "15",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "wkea-header-top-top-right-welcome"
  }, "\u6B22\u8FCE\u81F4\u7535"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "\xA0021-63721599"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-top-content centre"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-top-content-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Bo?pubver=1",
    width: "250px",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "\u4E00\u7AD9\u5F0F\u5DE5\u4E1A\u54C1\u8D2D\u4E70\u5E73\u53F0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-top-content-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "ms-search"
  }, _renderReactFragment(props.search)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Bx?pubver=1",
    width: "26",
    height: "26",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    placeholder: "\u641C\u7D22/\u54C1\u724C/\u578B\u53F7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", null, "\u641C\u7D22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "clear"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: ""
  }, "\u8F74\u627F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: ""
  }, "\u5F39\u7C27")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: ""
  }, "\u8054\u8F74\u5668")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: ""
  }, "\u6C14\u7F38")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: ""
  }, "\u540C\u6B65\u5E26"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-top-content-cart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Bu?pubver=1",
    width: "16",
    height: "16",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "wkea-header-top-content-cart-cart"
  }, "\xA0\u8D2D\u7269\u8F66"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "wkea-header-numberCircle"
  }, "0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-top-nav centre"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "clear"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "wkea-header.html"
  }, "\u5168\u90E8\u5546\u54C1\u5206\u7C7B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: ""
  }, "\u4F9B\u5E94\u5546\u5408\u4F5C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "wkea-sale.html"
  }, "\u552E\u540E\u670D\u52A1"))))))));
};

function _renderDesktopAccountBlock(props) {
  var _props$data$accountIn;

  var signInLink = props.signInLink;
  var name = (_props$data$accountIn = props.data.accountInformation.result) === null || _props$data$accountIn === void 0 ? void 0 : _props$data$accountIn.Name;

  if (signInLink) {
    return signInLink;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "\u6B22\u8FCE\u60A8\uFF0C", name);
  }
}

function _renderUserInfoListBlock(props) {
  var _props$data$accountIn2;

  var signOutLink = props.signOutLink,
      signInLink = props.signInLink;
  var name = (_props$data$accountIn2 = props.data.accountInformation.result) === null || _props$data$accountIn2 === void 0 ? void 0 : _props$data$accountIn2.Name;

  if (signInLink) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "wkea-header-user-infos-login"
    }, "\u8BF7 ", signInLink);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "wkea-header-user-infos-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "/myaccount",
      className: "wkea-header-user-infos-list-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "iconfont icon-ziyuan204"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "\u6B22\u8FCE\u60A8\uFF0C", name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "wkea-header-user-info-list-links"
    }, props.accountLinks.map(function (link) {
      return link;
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "wkea-header-user-info-list-logout"
    }, signOutLink));
  }
}

function _userClickHandle(props) {
  var signInLink = props.signInLink;

  if (signInLink) {
    window.location.href = props.context.request.user.signInUrl;
  } else {
    window.location.href = '/myaccount';
  }
}

function _renderReactFragment(items) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, items && items.length ? items.map(function (slot, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: index
    }, slot);
  }) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (headerView);

/***/ })

};
//# sourceMappingURL=main.6074bf4804808a858c75.hot-update.js.map