"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SketchFields = _interopRequireDefault(require("react-color/lib/components/sketch/SketchFields"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _common = require("react-color/lib/components/common");

var _reactColor = require("react-color");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

// Utility functions for converting ColorPicker color objects or raw strings
// into TinyColor objects.
var extractRGB = function extractRGB(c) {
  return c.rgb || c;
};

var getColorSource = function getColorSource(c) {
  return c.source === 'hex' ? c.hex : extractRGB(c);
};

var toTinyColor = function toTinyColor(c) {
  return (0, _tinycolor.default)(getColorSource(c));
};

var Custom = /*#__PURE__*/function (_Component) {
  _inherits(Custom, _Component);

  var _super = _createSuper(Custom);

  function Custom() {
    _classCallCheck(this, Custom);

    return _super.apply(this, arguments);
  }

  _createClass(Custom, [{
    key: "render",
    value: function render() {
      var onChangeComplete = this.props.onChangeComplete;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "colorpicker__outer"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "colorpicker__controls +flex"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "colorpicker__sliders"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "colorpicker__slider"
      }, /*#__PURE__*/_react.default.createElement(_common.Hue, this.props)))), /*#__PURE__*/_react.default.createElement("div", {
        className: "colorpicker__saturation"
      }, /*#__PURE__*/_react.default.createElement(_common.Saturation, this.props)), /*#__PURE__*/_react.default.createElement("div", {
        className: "colorpicker__custom-input"
      }, /*#__PURE__*/_react.default.createElement(_SketchFields.default, _extends({}, this.props, {
        onChange: onChangeComplete
      }))));
    }
  }]);

  return Custom;
}(_react.Component);

Custom.propTypes = {
  rgb: _propTypes.default.object,
  onChangeComplete: _propTypes.default.func
};
var CustomColorPicker = (0, _reactColor.CustomPicker)(Custom);

var ColorPicker = /*#__PURE__*/function (_Component2) {
  _inherits(ColorPicker, _Component2);

  var _super2 = _createSuper(ColorPicker);

  function ColorPicker(props) {
    var _this;

    _classCallCheck(this, ColorPicker);

    _this = _super2.call(this, props);
    _this.state = {
      isVisible: false
    };
    _this.onSelectedColorChange = _this.onSelectedColorChange.bind(_assertThisInitialized(_this));
    _this.toggleVisible = _this.toggleVisible.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ColorPicker, [{
    key: "onSelectedColorChange",
    value: function onSelectedColorChange(newColor) {
      // We use our own toTinyColor because this value is a ColorPicker
      // color value which is an object that needs unpacking. We also handle
      // the case where a color string is passed in (just in case).
      var color = toTinyColor(newColor); // relayout call only wants a RGB String

      this.props.onColorChange(color.toRgbString());
    }
  }, {
    key: "toggleVisible",
    value: function toggleVisible() {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      // We use tinycolor here instead of our own toTinyColor as
      // tinycolor handles `null` values and other weirdness we may
      // expect from user data.
      var selectedColor = (0, _tinycolor.default)(this.props.selectedColor);
      var colorText = selectedColor.toHexString(); // Convert rgba to rgb if necessary

      var rgbString = selectedColor._a !== 0 ? selectedColor.toRgbString() : "rgb(".concat(selectedColor._r, ",").concat(selectedColor._g, ",").concat(selectedColor._b, ")"); // We need inline style here to assign the background color
      // dynamically.

      var swatchStyle = {
        backgroundColor: rgbString
      };
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "colorpicker__container"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "colorpicker"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "colorpicker__swatch +cursor-clickable",
        style: swatchStyle,
        onClick: this.toggleVisible
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "colorpicker__selected-color +hover-grey",
        onClick: this.toggleVisible
      }, colorText)), this.state.isVisible && /*#__PURE__*/_react.default.createElement(CustomColorPicker, {
        color: rgbString,
        onChangeComplete: this.onSelectedColorChange
      }));
    }
  }]);

  return ColorPicker;
}(_react.Component);

ColorPicker.propTypes = {
  onColorChange: _propTypes.default.func.isRequired,
  selectedColor: _propTypes.default.string
};
var _default = ColorPicker;
exports.default = _default;
//# sourceMappingURL=ColorPicker.js.map