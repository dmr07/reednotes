module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/Html.js":
/*!****************************!*\
  !*** ./src/client/Html.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serializeJavascript = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Possible memory leak. See https://github.com/nfl/react-helmet
// DO NOT USE JSON.Stringify -- vulnerable to cors attacks. Use serialize!
// Src: https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
var helmet = _reactHelmet.Helmet.renderStatic();

// {title: String}
// {meta: Array[{name: String, content: String}]}
// {body: Object}
// Possible ConsoleWarning: https://github.com/nozzle/react-static/issues/144
var Html = function Html(body, initialData) {
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <script async src=\"/bundle.js\"></script>\n      " + helmet.title.toString() + "\n      " + helmet.meta.toString() + "\n      <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n      <link rel=\"stylesheet\" type=\"text/css\" charset=\"UTF-8\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\" />\n      <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css\" />\n      <link rel=\"stylesheet\" href=\"/css/main.css\">\n      <script>window.__initialData__ = " + (0, _serializeJavascript2.default)(initialData) + "</script>\n    </head>\n    <body>\n      <div id=\"root\">" + body + "</div>\n    </body>\n  </html>\n";
};

exports.default = Html;

/***/ }),

/***/ "./src/client/media/logo1.png":
/*!************************************!*\
  !*** ./src/client/media/logo1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/media/logo1.png";

/***/ }),

/***/ "./src/client/media/profile-cr.jpg":
/*!*****************************************!*\
  !*** ./src/client/media/profile-cr.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/media/profile-cr.jpg";

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsxFileName = "/Users/Dan/Projects/reednotes/src/server/index.js"; // import functions from "firebase-functions";

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(/*! cors */ "cors");

var _cors2 = _interopRequireDefault(_cors);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _routes = __webpack_require__(/*! ../shared/routes */ "./src/shared/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _App = __webpack_require__(/*! ../shared/App */ "./src/shared/App.js");

var _App2 = _interopRequireDefault(_App);

var _serveFavicon = __webpack_require__(/*! serve-favicon */ "serve-favicon");

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _Html = __webpack_require__(/*! ../client/Html */ "./src/client/Html.js");

var _Html2 = _interopRequireDefault(_Html);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _sourceMapSupport = __webpack_require__(/*! source-map-support */ "source-map-support");

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _api_properties = __webpack_require__(/*! ./routes/api_properties */ "./src/server/routes/api_properties.js");

var _nodeSchedule = __webpack_require__(/*! node-schedule */ "node-schedule");

var _nodeSchedule2 = _interopRequireDefault(_nodeSchedule);

var _methods_properties = __webpack_require__(/*! ./methods/methods_properties */ "./src/server/methods/methods_properties.js");

var _methods_properties2 = _interopRequireDefault(_methods_properties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env =  true ? "dev" : undefined;

if (env === "dev") {
  _sourceMapSupport2.default.install();
}

var app = (0, _express2.default)();
var helmet = _reactHelmet.Helmet.renderStatic();

app.use((0, _cors2.default)());
app.use(_express2.default.static("dist"));

// using __dirname doesn't work.
app.use((0, _serveFavicon2.default)("src/client/media/favicon.ico"));

// activating routes
(0, _api_properties.api_properties)(app);

app.get("*", function (req, res, next) {
  console.log("+++++++++++++++++++++++++++++++");
  console.log(req.url);

  // test each route in routes with match path
  var activeRoute = _routes2.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  });
  console.log("ACTIVE ROUTE:", activeRoute);

  var promise = activeRoute.fetchInitialData ? activeRoute.requestInitialData(req.path) : Promise.resolve();

  promise.then(function (initialData) {
    var context = { initialData: initialData };
    var markup = (0, _server.renderToString)(_react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: undefined
      },
      _react2.default.createElement(_App2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: undefined
      })
    ));

    if (env === "prod") {
      res.set('Cache-Control', 'public, max-age=3600'); // 1hr 
    }

    return res.send((0, _Html2.default)(markup, initialData));
  }).catch(next);
});

app.listen(process.env.port || 3000, function () {
  console.log("Server is listening");
});

// exports.app = functions.https.onRequest(app);

/***/ }),

/***/ "./src/server/methods/methods_properties.js":
/*!**************************************************!*\
  !*** ./src/server/methods/methods_properties.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = __webpack_require__(/*! fs */ "fs");

var _fs2 = _interopRequireDefault(_fs);

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// See: https://github.com/dmr07/realtorca
var opts = {
  ApplicationId: 1,
  LongitudeMin: -123.25360340576174 // Vancouver
  , LongitudeMax: -122.9878715942383,
  LatitudeMin: 49.20992482815422,
  LatitudeMax: 49.355497870106646,
  PriceMin: 1000000,
  PropertySearchTypeId: 1 // Residential
  , TransactionTypeId: 2 // For sale
  , SortBy: 6 // Date
  , SortOrder: "D" // Newest to Oldest
  , BuildingTypeId: 2 // House
  , ConstructionStyleId: 0 // Any
  , OwnershipTypeGroupId: 1 // Freehold
  , RecordsPerPage: 200
  // https://www.realtor.ca/Residential/Map.aspx#
  // CultureId=1
  // &ApplicationId=1
  // &RecordsPerPage=9
  // &MaximumResults=9
  // &PropertySearchTypeId=1
  // &PriceMin=1000000
  // &TransactionTypeId=2
  // &StoreyRange=0-0
  // &OwnershipTypeGroupId=1
  // &BuildingTypeId=1
  // &BedRange=0-0
  // &BathRange=0-0
  // &LongitudeMin=-123.2570366333008
  // &LongitudeMax=-122.99130482177736
  // &LatitudeMin=49.210149116784315
  // &LatitudeMax=49.35572149759593
  // &SortOrder=A
  // &SortBy=1
  // &viewState=m
  // &Longitude=-123.1207375
  // &Latitude=49.2827291
  // &CurrentPage=1
  // &ZoomLevel=12
  // &PropertyTypeGroupID=1

};var fetchMLS = function fetchMLS() {
  console.log('fetching');
  console.log(realtor.buildUrl(opts));
  realtor.post(opts).then(function (data) {

    if (data.ErrorCode.Id != 200) {
      throw new Error("RetrievalError");
    }

    function stringToNumberReplacer(key, val) {
      if (key === "Price") {
        val = val.replace(/\$|,/g, "");
      }
      var ret = isNaN(Number(val)) ? val : Number(val);
      return ret;
    }

    var json = JSON.stringify(data, stringToNumberReplacer);

    return _fs2.default.writeFile('myjsonfile.json', json, 'utf8');
  }).catch(function (err) {
    console.warn(err);
  });
};

// Format
// {
//    "Id": String,
//    "MlsNumber": String,
//    "PublicRemarks": String,
//    "Building":{  
//       "BathroomTotal": String,
//       "Bedrooms": String,
//       "SizeInterior": String,
//       "Type": String,
//       "Ammenities": String
//    },
//    "Individual":[  
//       {  
//          "IndividualID": Number,
//          "Name": String,
//          "Organization":{  
//             "OrganizationID": Number,
//             "Name": String,
//             "Address":{  
//                "AddressText": String
//             },
//             "Phones":[  
//                {  
//                   "PhoneType": String,
//                   "PhoneNumber": String,
//                   "AreaCode": String,
//                   "PhoneTypeId":String
//                }
//             ],
//             "Emails":[  
//                {  
//                   "ContactId":String
//                }
//             ],
//             "OrganizationType": String,
//             "HasEmail": Boolean,
//             "PermitFreetextEmail": Boolean,
//             "PermitShowListingLink": Boolean,
//             "RelativeDetailsURL": String 
//          },
//          "Phones":[  
//             {  
//                "PhoneType": String,
//                "PhoneNumber": String,
//                "AreaCode": String,
//                "PhoneTypeId": String
//             }
//          ],
//          "Emails":[  
//             {  
//                "ContactId": String
//             }
//          ],
//          "PermitFreetextEmail": Boolean,
//          "FirstName": String,
//          "LastName": String,
//          "CorporationDisplayTypeId": String,
//          "RelativeDetailsURL": String
//       }
//    ],
//    "Property":{  
//       "Price": String,
//       "Type": String,
//       "Address":{  
//          "AddressText": String,
//          "Longitude": String,
//          "Latitude": String
//       },
//       "TypeId": String,
//       "OwnershipType":String,
//       "AmmenitiesNearBy": String
//    },
//    "Land":{  
//       "SizeTotal": String,
//       "SizeFrontage": String
//    },
//    "PostalCode": String,
//    "RelativeDetailsURL": String,
//    "StatusId": String,
//    "Distance": String
// },
// const readFile = (filterBy, params) => {
//   let obj;
//   let propertyList;
//   fs.readFile('file', 'utf8', function (err, data) {
//     if (err) throw err;
//     obj = JSON.parse(data);
//     propertyList = (obj.Results) ? obj.Results : [];

//     let result = _.filter(propertyList, function(o)
//       switch(filterBy) {
//         case "price":
//           return o.Property.Price > params.min && o.Property.Price < params.max;
//         break;
//         case "location":
//           return o.
//       }

//     });
//   });
// }


exports.default = fetchMLS;

/***/ }),

/***/ "./src/server/routes/api_properties.js":
/*!*********************************************!*\
  !*** ./src/server/routes/api_properties.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// import {methods_properties} from "../methods/methods_properties"

var api_properties = function api_properties(app) {
  app.get("/api/news", function (req, res) {
    console.log('API call');
    res.json([{
      id: 1,
      upvotes: 257,
      title: "Something",
      author: "Guy1"
    }, {
      id: 3,
      upvotes: 227,
      title: "Else",
      author: "Guy2"
    }, {
      id: 2,
      upvotes: 127,
      title: "Mo",
      author: "Guy3"
    }]);
  });
};

exports.api_properties = api_properties;

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Dan/Projects/reednotes/src/shared/App.js"; // shared folder. uses a switch from react-router-dom to iterate through all the routes.

// import logo from "./logo.svg";

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _Header = __webpack_require__(/*! ./_frame/Header */ "./src/shared/_frame/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Main = __webpack_require__(/*! ./_frame/Main */ "./src/shared/_frame/Main.js");

var _Main2 = _interopRequireDefault(_Main);

var _Footer = __webpack_require__(/*! ./_frame/Footer */ "./src/shared/_frame/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

__webpack_require__(/*! ./_frame/Main.styl */ "./src/shared/_frame/Main.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    },
    _react2.default.createElement(_Header2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }),
    _react2.default.createElement(_Main2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }),
    _react2.default.createElement(_Footer2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    })
  );
};

exports.default = App;

/***/ }),

/***/ "./src/shared/_frame/Footer.js":
/*!*************************************!*\
  !*** ./src/shared/_frame/Footer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Dan/Projects/reednotes/src/shared/_frame/Footer.js";

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

__webpack_require__(/*! ./Footer.styl */ "./src/shared/_frame/Footer.styl");

var _logo = __webpack_require__(/*! ../../client/media/logo1.png */ "./src/client/media/logo1.png");

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    "footer",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: undefined
    },
    _react2.default.createElement(
      "div",
      { "class": "footer", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: undefined
      },
      _react2.default.createElement(
        "div",
        { "class": "footer-msg", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: undefined
        },
        "\u2014",
        "\xA0 Designed and Built by \xA0",
        "\u2014"
      ),
      _react2.default.createElement(
        "div",
        { "class": "footer-sig", __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: undefined
        },
        "Daniel M. Reed"
      ),
      _react2.default.createElement(
        "span",
        { "class": "copyright", __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: undefined
        },
        "\xA9"
      ),
      _react2.default.createElement(
        "span",
        { "class": "copytype", __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: undefined
        },
        " 2019 Daniel Reed \xA0 | \xA0 All Rights Reserved"
      )
    )
  );
};

// <div class="copytype">All Rights Reserved</div>

exports.default = Footer;

/***/ }),

/***/ "./src/shared/_frame/Footer.styl":
/*!***************************************!*\
  !*** ./src/shared/_frame/Footer.styl ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/shared/_frame/Header.js":
/*!*************************************!*\
  !*** ./src/shared/_frame/Header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Dan/Projects/reednotes/src/shared/_frame/Header.js";

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

__webpack_require__(/*! ./Header.styl */ "./src/shared/_frame/Header.styl");

var _logo = __webpack_require__(/*! ../../client/media/logo1.png */ "./src/client/media/logo1.png");

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    "header",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: undefined
    },
    _react2.default.createElement(
      "nav",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: undefined
      },
      _react2.default.createElement(
        "ul",
        { "class": "navigation", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: undefined
        },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/", __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            },
            __self: undefined
          },
          _react2.default.createElement(
            "div",
            { "class": "nav-sig", __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              },
              __self: undefined
            },
            "ReedNotes"
          )
        ),
        _react2.default.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: undefined
          },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/notes", __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              },
              __self: undefined
            },
            "Notes"
          )
        ),
        _react2.default.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: undefined
          },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/design", __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: undefined
            },
            "Design"
          )
        ),
        _react2.default.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: undefined
          },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/thingsilove", __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: undefined
            },
            "Things I Love"
          )
        ),
        _react2.default.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: undefined
          },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/friends", __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: undefined
            },
            "Friends"
          )
        ),
        _react2.default.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: undefined
          },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/memoir", __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: undefined
            },
            "Memoir"
          )
        )
      )
    )
  );
};

exports.default = Header;

/***/ }),

/***/ "./src/shared/_frame/Header.styl":
/*!***************************************!*\
  !*** ./src/shared/_frame/Header.styl ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/shared/_frame/Main.js":
/*!***********************************!*\
  !*** ./src/shared/_frame/Main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Dan/Projects/reednotes/src/shared/_frame/Main.js";

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _routes = __webpack_require__(/*! ./../routes */ "./src/shared/routes.js");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main() {
  return _react2.default.createElement(
    "main",
    { "class": "content", __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: undefined
    },
    _react2.default.createElement(
      _reactRouterDom.Switch,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: undefined
      },
      _routes2.default.map(function (route, i) {
        return _react2.default.createElement(_reactRouterDom.Route, Object.assign({ key: i }, route, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: undefined
        }));
      })
    )
  );
};

exports.default = Main;

/***/ }),

/***/ "./src/shared/_frame/Main.styl":
/*!*************************************!*\
  !*** ./src/shared/_frame/Main.styl ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(/*! ./views/home/Home */ "./src/shared/views/home/Home.js");

var _Home2 = _interopRequireDefault(_Home);

var _Notes = __webpack_require__(/*! ./views/notes/Notes */ "./src/shared/views/notes/Notes.js");

var _Notes2 = _interopRequireDefault(_Notes);

var _Memoir = __webpack_require__(/*! ./views/memoir/Memoir */ "./src/shared/views/memoir/Memoir.js");

var _Memoir2 = _interopRequireDefault(_Memoir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ThingsILove from "./views/thingsilove/ThingsILove";

var routes = [{
  path: "/",
  component: _Home2.default,
  exact: true
}, {
  path: "/notes",
  component: _Notes2.default,
  exact: true
},
// {
//   path: "/thingsilove",
//   component: ThingsILove,
//   exact: true
// },
{
  path: "/memoir",
  component: _Memoir2.default,
  exact: true
}];

exports.default = routes;

/***/ }),

/***/ "./src/shared/views/home/Home.js":
/*!***************************************!*\
  !*** ./src/shared/views/home/Home.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Dan/Projects/reednotes/src/shared/views/home/Home.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _HomePosterSlider = __webpack_require__(/*! ./HomePosterSlider */ "./src/shared/views/home/HomePosterSlider.js");

var _HomePosterSlider2 = _interopRequireDefault(_HomePosterSlider);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

var _profileCr = __webpack_require__(/*! ../../../client/media/profile-cr.jpg */ "./src/client/media/profile-cr.jpg");

var _profileCr2 = _interopRequireDefault(_profileCr);

__webpack_require__(/*! ./Home.styl */ "./src/shared/views/home/Home.styl");

var _InvestorFeatures = __webpack_require__(/*! ./InvestorFeatures.js */ "./src/shared/views/home/InvestorFeatures.js");

var _reactSlick = __webpack_require__(/*! react-slick */ "react-slick");

var _reactSlick2 = _interopRequireDefault(_reactSlick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TO ADD: Hire me for design.
// Please note that I accept clients very sparingly, with the same process of evaluation. My primary criteria is whether I can meaningfully contribute to a vivid and compelling brand that aligns with the service or product. If you wish to engage me, my process is as follows:
// You will send me a prospectus, no more than page, containing the name and what you wish to convey in the logo and a brief description of the product written for the consumer. You will be asked to pay $795 retainer fee (deducted from the price if we decide to move forward). If I cannot examine your project within the specified time frame, I will refund the fee. Within a week I will respond with whether I wish to move forward. If I do, I will contact you in person or over the phone. Pricing will be determined once the specifications have been made clear.
// My fees range between $21,999 - $79,999. You will receive one final design, guidelines of use, all original digital copies for modification. I will also confer copyright of the work onto you or your organisation, but retain recognition of authorship. Through out the term of project, only in exceptional cases will work-in-progress be shown. If the above is acceptable, email me here.


// Design philosophy
// I love insignias that can be rendered in black and one, and still be beautiful. I don't believe beauty is subjective. There is a band of optimal visual complexity in patterns -- it's why the work of Jackson Pollock is so prized.
// I measure the success of design to be one that reaches an within range of the optimal visual complexity without the use of colors. It should be distinguishable as a shape -- as is all the great brands. 
// Ultimately I ask myself, is this a symbol I would be proud to have it were my company. If I can honestly say yes, than I will have achieved my highest aspiration as a designer.

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    console.log("constructing home");
    _this.state = {
      activeInfoSlide: "Investor",
      infolist: _InvestorFeatures.investorPerks
    };

    _this.handleChangePerks = _this.handleChangePerks.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('mounted');
    }
  }, {
    key: "handleChangePerks",
    value: function handleChangePerks() {
      console.log("click heard");
      if (this.state.activeInfoSlide === "Investor") {
        // this.state.infolist = homebuyerPerks;
        // this.state.activeInfoSlide = "Homebuyer";
        this.setState({
          activeInfoSlide: "Resident",
          infolist: _InvestorFeatures.residentPerks
        });
      } else {
        // this.state.infolist = investorPerks;
        // this.state.activeInfoSlide = "Investor";
        this.setState({
          activeInfoSlide: "Investor",
          infolist: _InvestorFeatures.investorPerks
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplaySpeed: 3000,
        autoplay: true,
        pauseOnHover: false,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1
      };

      return _react2.default.createElement(
        "div",
        { "class": "home-wrapper", __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          },
          _react2.default.createElement("meta", { charSet: "utf-8", __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }),
          _react2.default.createElement(
            "title",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              },
              __self: this
            },
            "ReedNotes | Home"
          ),
          _react2.default.createElement("link", { rel: "canonical", href: "https://reednotes.com", __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          "div",
          { "class": "intro", __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          },
          "R"
        ),
        _react2.default.createElement(
          "div",
          { "class": "paragraph-intro", __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          },
          "Hi I'm Dan,",
          _react2.default.createElement("div", { "class": "pbreak", __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }),
          _react2.default.createElement("div", { "class": "pbreak", __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }),
          "This is my personal blog. I write about things on my mind, most of which pertain to technology.",
          _react2.default.createElement("div", { "class": "pbreak", __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          }),
          "I'm a software executive, developer, and designer. I co-founded a computer-vision company and served from 2013-2016; I did some contracting after. I studied Mathematics & Physics at the University of British Columbia. I like to run and play music on my spare time. Currently I reside in Vancouver.",
          _react2.default.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }),
          _react2.default.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }),
          _react2.default.createElement(
            "a",
            { "class": "more-link", href: "#", __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              },
              __self: this
            },
            "More About Me"
          ),
          _react2.default.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }),
          _react2.default.createElement(
            "span",
            { "class": "bar", __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              },
              __self: this
            },
            "_______"
          ),
          _react2.default.createElement(
            "div",
            { "class": "sub-info", __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              },
              __self: this
            },
            _react2.default.createElement(
              "span",
              { "class": "about-site", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93
                },
                __self: this
              },
              "About This Website"
            ),
            " Hand-built using React and Node. WordPress, the more sensible choice, came to mind after after much had been built. I apologize if the UX is not where it should be, but it's unlikely new features will be added as I will be busy with other engagements."
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

// <div class="profile-wrapper">
//             <img className="profile-photo" src={pic} />
//         </div>

// <Slider {...settings} class="home-info">
//   {this.state.infolist && this.state.infolist.map((item,i) => 
//     <div className="info-col" key={i}>
//       <h3>{item.title}</h3>
//       <p>{item.descr}</p>
//     </div>
//   )}
// </Slider>

exports.default = Home;

/***/ }),

/***/ "./src/shared/views/home/Home.styl":
/*!*****************************************!*\
  !*** ./src/shared/views/home/Home.styl ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/shared/views/home/HomePosterSlider.js":
/*!***************************************************!*\
  !*** ./src/shared/views/home/HomePosterSlider.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Dan/Projects/reednotes/src/shared/views/home/HomePosterSlider.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(/*! react-slick */ "react-slick");

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");

__webpack_require__(/*! ./HomePosterSlider.styl */ "./src/shared/views/home/HomePosterSlider.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePosterSlider = function (_Component) {
  _inherits(HomePosterSlider, _Component);

  function HomePosterSlider(props, context) {
    _classCallCheck(this, HomePosterSlider);

    return _possibleConstructorReturn(this, (HomePosterSlider.__proto__ || Object.getPrototypeOf(HomePosterSlider)).call(this, props, context));
  }
  // Real Estate, Commoditised.
  // <h1 className="poster-header">Rethink Real Estate.</h1>
  // <h1 className="poster-header">Smarter way to invest.</h1>
  // <h1 className="poster-header">A Richer Way to Live.</h1>

  _createClass(HomePosterSlider, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        _react2.default.createElement(
          _reactBootstrap.Carousel,
          {
            interval: 3000,
            pauseOnHover: false,
            controls: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          _react2.default.createElement(
            _reactBootstrap.Carousel.Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            _react2.default.createElement(
              "div",
              { className: "poster-label", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              "Sydication"
            ),
            _react2.default.createElement(
              "h2",
              { className: "poster-descr", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              "Invest in Vancouver real estate for as little as $50. Lease long-term with your deposit repaid in full."
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: "poster-readmore", to: "/how-it-works", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                },
                __self: this
              },
              "How it works ",
              _react2.default.createElement(
                "span",
                { className: "readmore-arrow", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  },
                  __self: this
                },
                "\u25E5"
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Carousel.Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            _react2.default.createElement(
              "div",
              { className: "poster-label", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                },
                __self: this
              },
              "Investors"
            ),
            _react2.default.createElement(
              "h2",
              { className: "poster-descr", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                },
                __self: this
              },
              "Diversify your risk by investing choosing how much and where you wish to invest."
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: "poster-readmore", to: "/how-it-works", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                },
                __self: this
              },
              "How it works ",
              _react2.default.createElement(
                "span",
                { className: "readmore-arrow", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: this
                },
                "\u25E5"
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Carousel.Item,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            },
            _react2.default.createElement(
              "div",
              { className: "poster-label", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                },
                __self: this
              },
              "Residents"
            ),
            _react2.default.createElement(
              "h2",
              { className: "poster-descr", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                },
                __self: this
              },
              "Long-term leases with fully-refundable deposity. Pay only land-tax and maintenance fees."
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: "poster-readmore", to: "/how-it-works", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                },
                __self: this
              },
              "How it works ",
              _react2.default.createElement(
                "span",
                { className: "readmore-arrow", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  },
                  __self: this
                },
                "\u25E5"
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "poster-calltoaction", __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/learn/investor", __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: "poster-btn main", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              },
              "Become an Investor"
            )
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/homebuyer", __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: "poster-btn", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                },
                __self: this
              },
              "Become a Homebuyer"
            )
          )
        )
      );
    }
  }]);

  return HomePosterSlider;
}(_react.Component);

exports.default = HomePosterSlider;

/***/ }),

/***/ "./src/shared/views/home/HomePosterSlider.styl":
/*!*****************************************************!*\
  !*** ./src/shared/views/home/HomePosterSlider.styl ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/shared/views/home/InvestorFeatures.js":
/*!***************************************************!*\
  !*** ./src/shared/views/home/InvestorFeatures.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var investorPerks = [{
  title: "Zero Carrying-Cost",
  descr: "Land-tax among other costs are passed onto the homeowner while investor retains capital gain."
}, {
  title: "Benchmarked against S&P500",
  descr: "Average annualized return is aimed to that of S&P500 to create similar and risk profiles."
}, {
  title: "Secondary Liquidity",
  descr: "Shares become tradable on Odessa's private exchange after a property is acquired."
}, {
  title: "Exempt from 15% Foreign Buyers Tax",
  descr: "Shares become tradable after the property is acquired."
}, {
  title: "Zero Management Fees",
  descr: "No asset manager will charge you a fee irrespective of his fund's performance. "
}, {
  title: "Liability Protection",
  descr: "Odessa provides legal separation between you and the resident so you don't have to worry."
}];

var residentPerks = [{
  title: "Fully-Refundable Deposit",
  descr: "At the end of your lease, your deposit is repaid to you in full."
}, {
  title: "Minimal Monthly Payments",
  descr: "Pay only land-tax and property upkeep fees."
}, {
  title: "Automated Grants for Land Tax Exemption",
  descr: "Pay only land-tax and property upkeep fees."
}, {
  title: "Mortgagable Deposit",
  descr: "Take a mortgage on your deposit as you would any other lease."
}, {
  title: "Pay Less, Live Better",
  descr: "This new way of financing enables you to live in places you would not otherwise afford."
}, {
  title: "Avoid Transfer Fees",
  descr: "Transfer fees only apply to property sales. Leasing avoids this."
}, {
  title: "Legal Protection",
  descr: "Odessa acts as a legal barrier from investors. No rights of ownership are passed through."
}];

exports.investorPerks = investorPerks;
exports.residentPerks = residentPerks;

/***/ }),

/***/ "./src/shared/views/memoir/Memoir.js":
/*!*******************************************!*\
  !*** ./src/shared/views/memoir/Memoir.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Dan/Projects/reednotes/src/shared/views/memoir/Memoir.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactScroll = __webpack_require__(/*! react-scroll */ "react-scroll");

var _reactScroll2 = _interopRequireDefault(_reactScroll);

__webpack_require__(/*! ./Memoir.styl */ "./src/shared/views/memoir/Memoir.styl");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Memoir = function (_Component) {
  _inherits(Memoir, _Component);

  function Memoir() {
    _classCallCheck(this, Memoir);

    return _possibleConstructorReturn(this, (Memoir.__proto__ || Object.getPrototypeOf(Memoir)).apply(this, arguments));
  }

  _createClass(Memoir, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          },
          _react2.default.createElement("meta", { charSet: "utf-8", __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          }),
          _react2.default.createElement(
            "title",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              },
              __self: this
            },
            "ReedNotes | Memoir"
          ),
          _react2.default.createElement("link", { rel: "canonical", href: "http://reednotes.com/memoir", __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          "div",
          { "class": "body-content", __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          _react2.default.createElement(
            "div",
            { "class": "timestamp", __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            "June 2018"
          ),
          _react2.default.createElement(
            "div",
            { "class": "header", __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            "A Memoir of Sorts"
          ),
          _react2.default.createElement(
            "div",
            { "class": "author", __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            _react2.default.createElement(
              "span",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                },
                __self: this
              },
              "by"
            ),
            " Daniel M. Reed"
          ),
          _react2.default.createElement(
            "p",
            { "class": "paragraphs", __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            "My family lived near near an oil refinery at one point; mother wasn't fond of that location, though it didn't bother me so much; I kind of liked it rather. This was at the outskirts of San Francisco, the small town of twenty-six thousand people where people knew each other by first names, a town where everyday felt like a sunny afternoon. Mom and dad worked in the wine business, and every so often I got to tag along to Napa Valley or wherever ",
            "\u2014",
            " I loved it. Our little two story town house overlooked golden hills that rolled on for miles across the Carquinez Strait ",
            "\u2014",
            " the dry warm breeze, the dusty trails, the train that would encircle. At nights by the town dock bespeckled by palm trees, I would sit and quietly gaze at the stars. To this day, these are still among the happinest times in recent memory.",
            _react2.default.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            }),
            _react2.default.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            }),
            "During summers I took every opportunity to slink off to Berkeley. I loved auditing lectures, and this drove the attendance person crazy. It was at Berkeley that I caught a sense of excitement about science and technology that has been with me ever since. By the time I matriculated to university, I had my eye so dead set on Silicon Valley that I didn't end up staying in school for very long. Around junior year, I got antsy, got on a plane to Boston and started software company.",
            _react2.default.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            }),
            _react2.default.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            }),
            "This company I started in my early twenties with my dear friend Will and Sergei has been the center-fold of my life thus far. The advent of HTML5 video in 2011 presented an opportunity to link powerful object tracking and identification technology with in-video interaction. We scrambled to get working prototypes and to secure initial interest. Will was at Harvard at the time and got us funded; he was a big source of our early momentum. Admittedly I was very lucky to have had such wonderful partners and to have been in that area. During my stint, I served as Partner, President of Product, and when Will went to Shanghai to set up a distribution arm, CEO. I oversaw the relocation of the head office to Los Angeles, where I served my remaining days. The people with whom I embarked on this journey and have met along the way are much the same people for whom I hold my deerest and warmest affection.",
            _react2.default.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            }),
            _react2.default.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            }),
            "At any rate, these are the notes in my melody, the formative years thus far if you will. There have been more follies and missteps along the way than I care to admit, but if given a chance to relive, none I would differently."
          )
        )
      );
    }
  }]);

  return Memoir;
}(_react.Component);

exports.default = Memoir;

/***/ }),

/***/ "./src/shared/views/memoir/Memoir.styl":
/*!*********************************************!*\
  !*** ./src/shared/views/memoir/Memoir.styl ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/shared/views/notes/Notes.js":
/*!*****************************************!*\
  !*** ./src/shared/views/notes/Notes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Dan/Projects/reednotes/src/shared/views/notes/Notes.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _NotesList = __webpack_require__(/*! ./NotesList */ "./src/shared/views/notes/NotesList.js");

var _NotesList2 = _interopRequireDefault(_NotesList);

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notes = function (_Component) {
  _inherits(Notes, _Component);

  function Notes(props) {
    _classCallCheck(this, Notes);

    var _this = _possibleConstructorReturn(this, (Notes.__proto__ || Object.getPrototypeOf(Notes)).call(this, props));

    var initialData = void 0;
    if (props.staticContext) {
      initialData = props.staticContext.initialData;
    } else {
      initialData = window.__initialData__;
      delete window.__initialData__;
    }

    _this.state = { news: initialData };
    return _this;
  }

  _createClass(Notes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.state.news) {
        News.requestInitialData().then(function (data) {
          return _this2.setState({ news: data });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var news = this.state.news;

      return _react2.default.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          },
          _react2.default.createElement("meta", { charSet: "utf-8", __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }),
          _react2.default.createElement(
            "title",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            },
            "News"
          ),
          _react2.default.createElement("link", { rel: "canonical", href: "http://mysite.com/example", __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          "h2",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          "This is the news page"
        ),
        _react2.default.createElement(_NotesList2.default, { news: news, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        })
      );
    }
  }], [{
    key: "requestInitialData",
    value: function requestInitialData() {
      return fetch("http://127.0.0.1:3000/api/news").then(function (response) {
        return response.json();
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }]);

  return Notes;
}(_react.Component);

exports.default = Notes;

/***/ }),

/***/ "./src/shared/views/notes/NotesList.css":
/*!**********************************************!*\
  !*** ./src/shared/views/notes/NotesList.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/shared/views/notes/NotesList.js":
/*!*********************************************!*\
  !*** ./src/shared/views/notes/NotesList.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Dan/Projects/reednotes/src/shared/views/notes/NotesList.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeTimeAgo = __webpack_require__(/*! node-time-ago */ "node-time-ago");

var _nodeTimeAgo2 = _interopRequireDefault(_nodeTimeAgo);

var _orderBy = __webpack_require__(/*! lodash/orderBy */ "lodash/orderBy");

var _orderBy2 = _interopRequireDefault(_orderBy);

__webpack_require__(/*! ./NotesList.css */ "./src/shared/views/notes/NotesList.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import w18 from "./w18.png";


var NotesList = function (_Component) {
  _inherits(NotesList, _Component);

  function NotesList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NotesList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotesList.__proto__ || Object.getPrototypeOf(NotesList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sortOrder: "upvotes"
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NotesList, [{
    key: "setOrder",
    value: function setOrder(order, event) {
      event.preventDefault();
      this.setState({ sortOrder: order });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var news = (0, _orderBy2.default)(this.props.news, this.state.sortOrder, "desc");

      return _react2.default.createElement(
        "div",
        { className: "newslist", __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        _react2.default.createElement(
          "div",
          { className: "header", __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          _react2.default.createElement(
            "div",
            { className: "header-title", __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            _react2.default.createElement(
              "strong",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              "Wizard News"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "sort", __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            "Sort By:",
            " ",
            _react2.default.createElement(
              "a",
              {
                href: "#",
                className: this.state.sortOrder === "upvotes" && "sort-selected" ? "woo" : "fud",
                onClick: this.setOrder.bind(this, "upvotes"), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                },
                __self: this
              },
              "Upvotes"
            ),
            "|",
            _react2.default.createElement(
              "a",
              {
                href: "#",
                className: this.state.sortOrder === "date" && "sort-selected" ? "woo" : "fud",
                onClick: this.setOrder.bind(this, "date"), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                },
                __self: this
              },
              "Date"
            )
          )
        ),
        news && news.map(function (post) {
          return _react2.default.createElement(
            "div",
            { key: post.id, className: "news-item", __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: _this2
            },
            _react2.default.createElement(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: _this2
              },
              _react2.default.createElement(
                "span",
                { className: "news-position", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  },
                  __self: _this2
                },
                post.id,
                ". \u25B2"
              ),
              " ",
              post.title,
              " ",
              _react2.default.createElement(
                "small",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  },
                  __self: _this2
                },
                "(by ",
                post.author,
                ")"
              )
            ),
            _react2.default.createElement(
              "small",
              { className: "news-details", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: _this2
              },
              post.upvotes,
              " upvotes | ",
              (0, _nodeTimeAgo2.default)(post.date)
            )
          );
        })
      );
    }
  }]);

  return NotesList;
}(_react.Component);

exports.default = NotesList;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/orderBy":
/*!*********************************!*\
  !*** external "lodash/orderBy" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ "node-schedule":
/*!********************************!*\
  !*** external "node-schedule" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-schedule");

/***/ }),

/***/ "node-time-ago":
/*!********************************!*\
  !*** external "node-time-ago" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-time-ago");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),

/***/ "source-map-support":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map