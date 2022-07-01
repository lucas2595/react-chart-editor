"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnconnectedAxisRangeValue = void 0;

var _Field = _interopRequireDefault(require("./Field"));

var _Numeric = require("./Numeric");

var _DateTimePicker = require("./DateTimePicker");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Info = _interopRequireDefault(require("./Info"));

var _constants = require("../../lib/constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var UnconnectedAxisRangeValue = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedAxisRangeValue, _Component);

  var _super = _createSuper(UnconnectedAxisRangeValue);

  function UnconnectedAxisRangeValue() {
    _classCallCheck(this, UnconnectedAxisRangeValue);

    return _super.apply(this, arguments);
  }

  _createClass(UnconnectedAxisRangeValue, [{
    key: "render",
    value: function render() {
      // only when all axes have the type date, can we output an UnconnectedDateTimePicker
      if (this.props.fullContainer && this.props.fullContainer.type === 'date') {
        return /*#__PURE__*/_react.default.createElement(_DateTimePicker.UnconnectedDateTimePicker, this.props);
      } // If its multivalued, it can be multivalued for different reasons:
      // - the range is different, but same type
      // - the type is different (i.e. date + number axes)
      // If we're in the case of a mixed axis type (i.e. date + number) case,
      // There's going to be a this.props.fullContainer.type, but it's going to be MULTIVALUED


      if (this.props.multiValued && this.props.fullContainer.type === _constants.MULTI_VALUED) {
        return /*#__PURE__*/_react.default.createElement(_Info.default, this.props);
      } // For cases that the range is numeric, but does not have the same number
      // Or numeric and has the same number


      return /*#__PURE__*/_react.default.createElement(_Numeric.UnconnectedNumeric, this.props);
    }
  }]);

  return UnconnectedAxisRangeValue;
}(_react.Component);

exports.UnconnectedAxisRangeValue = UnconnectedAxisRangeValue;
UnconnectedAxisRangeValue.propTypes = _objectSpread({
  defaultValue: _propTypes.default.any,
  fullValue: _propTypes.default.any,
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  multiValued: _propTypes.default.bool,
  hideArrows: _propTypes.default.bool,
  showSlider: _propTypes.default.bool,
  step: _propTypes.default.number,
  fullContainer: _propTypes.default.object,
  updatePlot: _propTypes.default.func
}, _Field.default.propTypes);

var _default = (0, _lib.connectToContainer)(UnconnectedAxisRangeValue);

exports.default = _default;
//# sourceMappingURL=AxisRangeValue.js.map