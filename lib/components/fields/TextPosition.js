"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnconnectedTextPosition = void 0;

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _RadioBlocks = _interopRequireDefault(require("../widgets/RadioBlocks"));

var _Field = _interopRequireDefault(require("./Field"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Info = _interopRequireDefault(require("./Info"));

var _DataSelector = _interopRequireDefault(require("./DataSelector"));

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

var UnconnectedTextPosition = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedTextPosition, _Component);

  var _super = _createSuper(UnconnectedTextPosition);

  function UnconnectedTextPosition(props) {
    var _this;

    _classCallCheck(this, UnconnectedTextPosition);

    _this = _super.call(this, props);
    _this.state = {
      posType: typeof props.fullValue === 'string' ? 'simple' : 'custom'
    };
    return _this;
  }

  _createClass(UnconnectedTextPosition, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _ = this.context.localize;
      var radioOptions = [{
        label: _('All'),
        value: 'simple'
      }, {
        label: _('Custom'),
        value: 'custom'
      }];
      var control = this.state.posType === 'simple' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Info.default, null, _('This will position all text values on the plot according to the selected position.')), /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
        options: this.props.options,
        attr: "textposition",
        clearable: false
      })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Info.default, null, /*#__PURE__*/_react.default.createElement("div", null, _('This will position text values individually, according to the provided data positions array. '))), /*#__PURE__*/_react.default.createElement(_DataSelector.default, {
        attr: "textposition"
      }), /*#__PURE__*/_react.default.createElement(_Info.default, null, /*#__PURE__*/_react.default.createElement("div", null, _('("Top", "Middle", "Bottom") + ("Left", "Center", "Right")'))));
      return /*#__PURE__*/_react.default.createElement(_Field.default, this.props, /*#__PURE__*/_react.default.createElement(_RadioBlocks.default, {
        options: radioOptions,
        activeOption: this.state.posType,
        onOptionChange: function onOptionChange(value) {
          _this2.setState({
            posType: value
          });

          if (value === 'simple') {
            _this2.props.updatePlot('middle center');
          } else {
            _this2.props.updateContainer({
              textpositionsrc: null
            });
          }
        }
      }), control);
    }
  }]);

  return UnconnectedTextPosition;
}(_react.Component);

exports.UnconnectedTextPosition = UnconnectedTextPosition;
UnconnectedTextPosition.propTypes = _objectSpread(_objectSpread({}, _Field.default.propTypes), {}, {
  options: _propTypes.default.array,
  fullValue: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string])
});
UnconnectedTextPosition.contextTypes = {
  localize: _propTypes.default.func
};
UnconnectedTextPosition.displayName = 'UnconnectedTextPosition';

var _default = (0, _lib.connectToContainer)(UnconnectedTextPosition, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize;
    var options = [{
      label: _('Top Left'),
      value: 'top left'
    }, {
      label: _('Top Center'),
      value: 'top center'
    }, {
      label: _('Top Right'),
      value: 'top right'
    }, {
      label: _('Middle Left'),
      value: 'middle left'
    }, {
      label: _('Middle Center'),
      value: 'middle center'
    }, {
      label: _('Middle Right'),
      value: 'middle right'
    }, {
      label: _('Bottom Left'),
      value: 'bottom left'
    }, {
      label: _('Bottom Center'),
      value: 'bottom center'
    }, {
      label: _('Bottom Right'),
      value: 'bottom right'
    }];

    if (['pie', 'bar', 'funnel', 'waterfall'].includes(context.container.type)) {
      options = [{
        label: _('Inside'),
        value: 'inside'
      }, {
        label: _('Outside'),
        value: 'outside'
      }, {
        label: _('Auto'),
        value: 'auto'
      }, {
        label: _('None'),
        value: 'none'
      }];
    }

    if (['funnelarea'].includes(context.container.type)) {
      options = [{
        label: _('Inside'),
        value: 'inside'
      }, {
        label: _('None'),
        value: 'none'
      }];
    }

    plotProps.options = options;
    plotProps.clearable = false;
  }
});

exports.default = _default;
//# sourceMappingURL=TextPosition.js.map