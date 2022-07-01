"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _plotlyIcons = require("plotly-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var SymbolSelector = /*#__PURE__*/function (_Component) {
  _inherits(SymbolSelector, _Component);

  var _super = _createSuper(SymbolSelector);

  function SymbolSelector(props) {
    var _this;

    _classCallCheck(this, SymbolSelector);

    _this = _super.call(this, props);
    _this.state = {
      isOpen: false
    };
    _this.togglePanel = _this.togglePanel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SymbolSelector, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$props = this.props,
          markerColor = _this$props.markerColor,
          borderColor = _this$props.borderColor;
      var nextMarkerColor = nextProps.markerColor,
          nextBorderColor = nextProps.borderColor;
      return this.props.value !== nextProps.value || this.state.isOpen !== nextState.isOpen || markerColor !== nextMarkerColor || borderColor !== nextBorderColor;
    }
  }, {
    key: "togglePanel",
    value: function togglePanel() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "renderActiveOption",
    value: function renderActiveOption() {
      var _this$props2 = this.props,
          markerColor = _this$props2.markerColor,
          borderColor = _this$props2.borderColor,
          symbolOptions = _this$props2.symbolOptions,
          value = _this$props2.value;
      var currentSymbol = symbolOptions.find(function (symbol) {
        return symbol.value === value;
      });

      if (!currentSymbol) {
        return /*#__PURE__*/_react.default.createElement("span", {
          style: {
            paddingTop: '5px',
            paddingLeft: '15px'
          }
        }, '-');
      }

      var symbolStyle = {
        stroke: currentSymbol.fill === 'none' ? markerColor : borderColor,
        strokeOpacity: '1',
        strokeWidth: '2px',
        fill: currentSymbol.fill === 'none' ? 'none' : markerColor
      };
      return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("svg", {
        width: "18",
        height: "18"
      }, /*#__PURE__*/_react.default.createElement("g", {
        transform: "translate(8,8)"
      }, /*#__PURE__*/_react.default.createElement("path", {
        d: currentSymbol.label,
        style: symbolStyle
      }))));
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      var _this2 = this;

      var _this$props3 = this.props,
          markerColor = _this$props3.markerColor,
          borderColor = _this$props3.borderColor,
          symbolOptions = _this$props3.symbolOptions;
      return symbolOptions.map(function (option) {
        var fill = option.fill,
            value = option.value,
            label = option.label;
        var symbolStyle = {
          stroke: fill === 'none' ? markerColor : borderColor,
          strokeOpacity: '1',
          strokeWidth: '2px',
          fill: fill === 'none' ? 'none' : markerColor
        };
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "symbol-selector__item",
          key: value,
          onClick: function onClick() {
            return _this2.props.onChange(value);
          }
        }, /*#__PURE__*/_react.default.createElement("svg", {
          width: "28",
          height: "28",
          className: "symbol-selector__symbol",
          "data-value": value
        }, /*#__PURE__*/_react.default.createElement("g", {
          transform: "translate(14,14)"
        }, /*#__PURE__*/_react.default.createElement("path", {
          d: label,
          style: symbolStyle
        }))));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      var toggleClass = (0, _classnames.default)('symbol-selector__toggle', {
        'symbol-selector__toggle--dark': this.props.backgroundDark
      });
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: toggleClass,
        onClick: this.togglePanel
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "symbol-selector__toggle_option"
      }, this.renderActiveOption()), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_plotlyIcons.CarretDownIcon, {
        className: "symbol-selector__toggle__caret"
      }))), isOpen && this.renderOptions());
    }
  }]);

  return SymbolSelector;
}(_react.Component);

exports.default = SymbolSelector;
SymbolSelector.propTypes = {
  backgroundDark: _propTypes.default.bool,
  markerColor: _propTypes.default.string,
  borderColor: _propTypes.default.string,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  symbolOptions: _propTypes.default.array
};
//# sourceMappingURL=SymbolSelector.js.map