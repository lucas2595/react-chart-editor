"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactColorscales = _interopRequireWildcard(require("react-colorscales"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _Info = _interopRequireDefault(require("../fields/Info"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

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

// CAREFUL: needs to be the same value as $colorscalepicker-width in _colorscalepicker.scss
var colorscalepickerContainerWidth = 240;

var Scale = /*#__PURE__*/function (_Component) {
  _inherits(Scale, _Component);

  var _super = _createSuper(Scale);

  function Scale(props) {
    var _this;

    _classCallCheck(this, Scale);

    _this = _super.call(this, props);
    _this.state = {
      selectedColorscaleType: props.initialCategory || 'sequential',
      showColorscalePicker: false
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Scale, [{
    key: "onClick",
    value: function onClick() {
      this.setState({
        showColorscalePicker: !this.state.showColorscalePicker
      });
    }
  }, {
    key: "onChange",
    value: function onChange(selectedColorscaleType) {
      this.setState({
        selectedColorscaleType: selectedColorscaleType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onColorscaleChange = _this$props.onColorscaleChange,
          selected = _this$props.selected,
          disableCategorySwitch = _this$props.disableCategorySwitch;
      var _this$state = this.state,
          selectedColorscaleType = _this$state.selectedColorscaleType,
          showColorscalePicker = _this$state.showColorscalePicker;
      var description = _reactColorscales.COLOR_PICKER_CONSTANTS.COLORSCALE_DESCRIPTIONS[selectedColorscaleType];

      var colorscaleOptions = _reactColorscales.COLOR_PICKER_CONSTANTS.COLORSCALE_TYPES.filter(function (type) {
        return type !== 'custom';
      }).map(function (type) {
        return {
          label: type + ' scales',
          value: type
        };
      });

      var _ = this.context.localize;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "customPickerContainer"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "customPickerContainer__clickable"
      }, /*#__PURE__*/_react.default.createElement(_reactColorscales.Colorscale, {
        colorscale: selected,
        onClick: this.onClick
      })), showColorscalePicker ? /*#__PURE__*/_react.default.createElement("div", {
        className: "customPickerContainer__expanded-content"
      }, disableCategorySwitch ? null : /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
        options: colorscaleOptions,
        value: selectedColorscaleType,
        onChange: this.onChange,
        clearable: false,
        searchable: false,
        placeholder: _('Select a Colorscale Type'),
        className: "customPickerContainer__category-dropdown"
      }), description ? /*#__PURE__*/_react.default.createElement("div", {
        className: "customPickerContainer__palettes"
      }, /*#__PURE__*/_react.default.createElement(_reactColorscales.default, {
        onChange: onColorscaleChange,
        colorscale: selected,
        width: colorscalepickerContainerWidth,
        colorscaleType: this.state.selectedColorscaleType,
        onColorscaleTypeChange: this.onColorscaleTypeChange,
        disableSwatchControls: true,
        scaleLength: 7
      }), /*#__PURE__*/_react.default.createElement(_Info.default, {
        className: "customPickerContainer__info"
      }, description)) : null) : null);
    }
  }]);

  return Scale;
}(_react.Component);

Scale.propTypes = {
  onColorscaleChange: _propTypes.default.func,
  selected: _propTypes.default.array,
  label: _propTypes.default.string,
  initialCategory: _propTypes.default.string,
  disableCategorySwitch: _propTypes.default.bool
};
Scale.contextTypes = {
  localize: _propTypes.default.func
};
var _default = Scale;
exports.default = _default;
//# sourceMappingURL=ColorscalePicker.js.map