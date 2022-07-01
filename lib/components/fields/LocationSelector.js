"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lib = require("../../lib");

var _Field = _interopRequireDefault(require("./Field"));

var _Radio = _interopRequireDefault(require("./Radio"));

var _Dropdown = require("./Dropdown");

var _DataSelector = _interopRequireDefault(require("./DataSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LocationmodeVisible = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    if (!plotProps.fullValue) {
      plotProps.isVisible = true;
      plotProps.fullValue = plotProps.container.locationmode;
      return;
    }
  }
});

var UnconnectedLocation = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedLocation, _Component);

  var _super = _createSuper(UnconnectedLocation);

  function UnconnectedLocation() {
    _classCallCheck(this, UnconnectedLocation);

    return _super.apply(this, arguments);
  }

  _createClass(UnconnectedLocation, [{
    key: "render",
    value: function render() {
      var _ = this.context.localize;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DataSelector.default, {
        label: _('Locations'),
        attr: "locations"
      }), /*#__PURE__*/_react.default.createElement(LocationmodeVisible, {
        label: _('Location Format'),
        attr: "locationmode",
        clearable: false,
        options: [{
          label: _('GeoJSON feature'),
          value: 'geojson-id'
        }, {
          label: _('Country Names'),
          value: 'country names'
        }, {
          label: _('Country Abbreviations (ISO-3)'),
          value: 'ISO-3'
        }, {
          label: _('USA State Abbreviations (e.g. NY)'),
          value: 'USA-states'
        }]
      }));
    }
  }]);

  return UnconnectedLocation;
}(_react.Component);

UnconnectedLocation.propTypes = _objectSpread({
  attr: _propTypes.default.string
}, _Field.default.propTypes);
UnconnectedLocation.contextTypes = {
  localize: _propTypes.default.func,
  updateContainer: _propTypes.default.func
};
var Location = (0, _lib.connectToContainer)(UnconnectedLocation);

var UnconnectedLocationSelector = /*#__PURE__*/function (_Component2) {
  _inherits(UnconnectedLocationSelector, _Component2);

  var _super2 = _createSuper(UnconnectedLocationSelector);

  function UnconnectedLocationSelector(props, context) {
    var _this;

    _classCallCheck(this, UnconnectedLocationSelector);

    _this = _super2.call(this, props, context);
    _this.state = {
      mode: props.container.locations ? 'location' : 'latlon'
    };
    _this.setMode = _this.setMode.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UnconnectedLocationSelector, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.setState({
        mode: this.props.container.locations ? 'location' : 'latlon'
      });
    }
  }, {
    key: "setMode",
    value: function setMode(mode) {
      this.setState({
        mode: mode
      });
      this.props.updateContainer(mode === 'latlon' ? {
        locations: null,
        locationmode: null,
        locationssrc: null,
        locationmodesrc: null
      } : {
        lat: null,
        lon: null,
        latsrc: null,
        lonsrc: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      var mode = this.state.mode;
      var _this$context = this.context,
          _ = _this$context.localize,
          type = _this$context.container.type;

      if (type === 'scattergeo') {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Field.default, _extends({}, this.props, {
          attr: this.props.attr
        }), /*#__PURE__*/_react.default.createElement(_Radio.default, {
          options: [{
            value: 'latlon',
            label: _('Lat/Lon')
          }, {
            value: 'location',
            label: _('Location')
          }],
          fullValue: mode,
          updatePlot: this.setMode,
          attr: this.props.attr
        })), mode === 'latlon' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DataSelector.default, {
          label: _('Latitude'),
          attr: "lat"
        }), /*#__PURE__*/_react.default.createElement(_DataSelector.default, {
          label: _('Longitude'),
          attr: "lon"
        })) : /*#__PURE__*/_react.default.createElement(Location, {
          attr: "type"
        }));
      } else if (type === 'choropleth') {
        return /*#__PURE__*/_react.default.createElement(Location, {
          attr: "type"
        });
      } else if (type === 'choroplethmapbox') {
        return /*#__PURE__*/_react.default.createElement(_DataSelector.default, {
          label: _('Locations'),
          attr: "locations"
        });
      }

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DataSelector.default, {
        label: _('Latitude'),
        attr: "lat"
      }), /*#__PURE__*/_react.default.createElement(_DataSelector.default, {
        label: _('Longitude'),
        attr: "lon"
      }));
    }
  }]);

  return UnconnectedLocationSelector;
}(_react.Component);

UnconnectedLocationSelector.propTypes = _objectSpread({
  fullValue: _propTypes.default.any,
  updatePlot: _propTypes.default.func,
  attr: _propTypes.default.string
}, _Field.default.propTypes);
UnconnectedLocationSelector.contextTypes = {
  container: _propTypes.default.object,
  localize: _propTypes.default.func,
  updateContainer: _propTypes.default.func
};

var _default = (0, _lib.connectToContainer)(UnconnectedLocationSelector);

exports.default = _default;
//# sourceMappingURL=LocationSelector.js.map