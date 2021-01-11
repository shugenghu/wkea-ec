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
  {
    /* <div className="wkea-header-top">
    <div className="wkea-header-top-top centre">
      <div className="clearfix">
          <div className="float-left wkea-header-top-top-left">
              <ul className="list-inline">
                  <li className="list-inline-item">欢迎来到维嘉</li>
                  <li className="list-inline-item"><a href="">请登录</a></li>
                  <li className="list-inline-item"><a href="">免费注册</a></li>
              </ul>
          </div>
          <div className="float-right wkea-header-top-top-right">
              <ul className="clear">
                  <li><a href="">消息 <span className="wkea-header-top-top-right-number">0</span></a><hr /></li>
                  <li><a href="">我的订单</a><hr /></li>
                  <li><a href="">个人中心</a><hr /></li>
                  <li><img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2BA?pubver=1" width="15" height="15" alt="" /><span className="wkea-header-top-top-right-welcome">欢迎致电</span><span>&nbsp;021-63721599</span><hr /></li>
              </ul>
          </div>
      </div>
    </div>
    <hr />
    <div className="wkea-header-top-content centre">
      <div className="wkea-header-top-content-logo">
          <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Bo?pubver=1" width="250px" alt="" />
          <p>一站式工业品购买平台</p>
      </div>
      <div className="wkea-header-top-content-input">
          <div className="ms-search">
              {_renderReactFragment(props.search)}
          </div>
          <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Bx?pubver=1" width="26" height="26" alt="" /><input type="text" placeholder="搜索/品牌/型号" /><button>搜索</button>
          <div>
              <ul className="clear">
                  <li>
                      <a href="">轴承</a>
                  </li>
                  <li>
                      <a href="">弹簧</a>
                  </li>
                  <li>
                      <a href="">联轴器</a>
                  </li>
                  <li>
                      <a href="">气缸</a>
                  </li>
                  <li>
                      <a href="">同步带</a>
                  </li>
              </ul>
          </div>
      </div>
      <div className="wkea-header-top-content-cart">
          <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Bu?pubver=1" width="16" height="16" alt="" />
          <span className="wkea-header-top-content-cart-cart">&nbsp;购物车</span><span className="wkea-header-numberCircle">0</span>
      </div>
      <div className="wkea-header-top-nav centre">
          <ul className="clear">
              <li><a href="wkea-header.html">全部商品分类</a></li>
              <li><a href="">供应商合作</a></li>
              <li><a href="wkea-sale.html">售后服务</a></li>
          </ul>
      </div>
    </div>
    </div> */
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Module"], Object.assign({}, HeaderTag), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, HeaderContainer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_msdyn365_commerce_modules_utilities__WEBPACK_IMPORTED_MODULE_1__["Node"], Object.assign({}, HeaderTopBarContainer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-state-left"
  }, props.logo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-state-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-state-item wkea-header-state-wkea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "iconfont icon-ziyuan204"
  }), _renderDesktopAccountBlock(props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-state-item wkea-header-state-tel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "iconfont icon-dianhua"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "wkea-header-state-text",
    href: "tel:021-63721599"
  }, "\u81F4\u7535\xA0\xA0021-63721599")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-state-item wkea-header-state-email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "iconfont icon-email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "wkea-header-state-text",
    href: "mailto:wkea@wkea.cn"
  }, "\u90AE\u7BB1\xA0\xA0wkea@wkea.cn"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-container-bg",
    style: {
      position: "".concat(scrollTop > 38 ? 'fixed' : 'static')
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-logo-font"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "cn"
  }, "\u8BA9\u5929\u4E0B\u6CA1\u6709\u96BE\u4E70\u7684\u5DE5\u4E1A\u54C1"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "ms-search"
  }, _renderReactFragment(props.search)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-cart"
  }, props.cartIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-user",
    onClick: function onClick() {
      return _userClickHandle(props);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "iconfont icon-gerenzhongxin"
  }), "\u4E2A\u4EBA\u4E2D\u5FC3", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-user-infos"
  }, _renderUserInfoListBlock(props)))))), scrollTop > 38 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wkea-header-container-placeholder"
  }), _renderReactFragment(props.menuBar)));
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
//# sourceMappingURL=main.36f35a1179ace8a80a77.hot-update.js.map