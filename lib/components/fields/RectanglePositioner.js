"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Field = _interopRequireDefault(require("./Field"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _reactResizableRotatableDraggable = _interopRequireDefault(require("react-resizable-rotatable-draggable"));

var _RadioBlocks = _interopRequireDefault(require("../widgets/RadioBlocks"));

var _DualNumeric = _interopRequireDefault(require("./DualNumeric"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var maxWidth = 276;
var gridRes = 8;

var UnconnectedRectanglePositioner = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedRectanglePositioner, _Component);

  var _super = _createSuper(UnconnectedRectanglePositioner);

  function UnconnectedRectanglePositioner(props, context) {
    var _this;

    _classCallCheck(this, UnconnectedRectanglePositioner);

    _this = _super.call(this, props, context);
    _this.sendUpdate = _this.sendUpdate.bind(_assertThisInitialized(_this));
    _this.attr = _this.props.cartesian ? {
      x: ['xaxis.domain[0]', 'xaxis.domain[1]'],
      y: ['yaxis.domain[0]', 'yaxis.domain[1]']
    } : {
      x: ['domain.x[0]', 'domain.x[1]'],
      y: ['domain.y[0]', 'domain.y[1]']
    };
    _this.state = {
      snap: true
    };
    return _this;
  }

  _createClass(UnconnectedRectanglePositioner, [{
    key: "sendUpdate",
    value: function sendUpdate(_ref) {
      var x = _ref.x,
          y = _ref.y,
          width = _ref.width,
          height = _ref.height,
          fieldWidthPx = _ref.fieldWidthPx,
          fieldHeightPx = _ref.fieldHeightPx;
      var x0 = x / fieldWidthPx;
      var x1 = (width + x) / fieldWidthPx;
      var y0 = (fieldHeightPx - (height + y)) / fieldHeightPx;
      var y1 = (fieldHeightPx - y) / fieldHeightPx;
      var snap = this.state.snap ? function (v) {
        return Math.round(v * gridRes) / gridRes;
      } : function (v) {
        return v;
      };
      var payload = {};

      if (x0 >= 0 && x1 <= 1) {
        payload[this.attr.x[0]] = snap(x0);
        payload[this.attr.x[1]] = snap(x1);
      }

      if (y0 >= 0 && y1 <= 1) {
        payload[this.attr.y[0]] = snap(y0);
        payload[this.attr.y[1]] = snap(y1);
      }

      this.context.updateContainer(payload);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          attr = _this$props.attr,
          cartesian = _this$props.cartesian;
      var _this$context = this.context,
          _ = _this$context.localize,
          fullContainer = _this$context.fullContainer,
          _this$context$fullLay = _this$context.fullLayout,
          plotWidthPx = _this$context$fullLay.width,
          plotHeightPx = _this$context$fullLay.height;
      var x = cartesian ? fullContainer.xaxis.domain : fullContainer.domain.x;
      var y = cartesian ? fullContainer.yaxis.domain : fullContainer.domain.y;
      var aspectRatio = plotHeightPx / plotWidthPx;
      var fieldWidthPx = Math.min(maxWidth, maxWidth / aspectRatio);
      var fieldHeightPx = Math.min(maxWidth, maxWidth * aspectRatio);
      var width = fieldWidthPx * (x[1] - x[0]);
      var height = fieldHeightPx * (y[1] - y[0]);
      var left = fieldWidthPx * x[0];
      var top = fieldHeightPx * (1 - y[1]);
      var zoomable = '';

      if (!fullContainer.xaxis || !fullContainer.yaxis || !fullContainer.xaxis.overlaying && !fullContainer.yaxis.overlaying) {
        zoomable = 'n, w, s, e, nw, ne, se, sw';
      } else if (!fullContainer.xaxis.overlaying) {
        zoomable = 'e, w';
      } else if (!fullContainer.yaxis.overlaying) {
        zoomable = 'n, s';
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          marginRight: 25
        }
      }, /*#__PURE__*/_react.default.createElement(_Field.default, _extends({}, this.props, {
        attr: attr
      }), /*#__PURE__*/_react.default.createElement(_Field.default, {
        label: _('Snap to Grid')
      }, /*#__PURE__*/_react.default.createElement(_RadioBlocks.default, {
        alignment: "center",
        onOptionChange: function onOptionChange(snap) {
          return _this2.setState({
            snap: snap
          });
        },
        activeOption: this.state.snap,
        options: [{
          label: _('On'),
          value: true
        }, {
          label: _('Off'),
          value: false
        }]
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "rect-container",
        style: {
          width: fieldWidthPx + 1,
          height: fieldHeightPx + 1
        }
      }, Array(gridRes * gridRes).fill(0).map(function (v, i) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: i,
          className: "rect-grid",
          style: {
            width: fieldWidthPx / gridRes - 1,
            height: fieldHeightPx / gridRes - 1,
            borderBottom: i < gridRes * (gridRes - 1) ? '0' : '1px solid ',
            borderRight: (i + 1) % gridRes ? '0' : '1px solid'
          }
        });
      }), /*#__PURE__*/_react.default.createElement(_reactResizableRotatableDraggable.default, {
        bounds: "parent",
        width: width,
        height: height,
        left: left,
        top: top,
        rotatable: false,
        draggable: !this.state.snap,
        zoomable: zoomable,
        onResize: function onResize(style) {
          _this2.sendUpdate({
            fieldWidthPx: fieldWidthPx,
            fieldHeightPx: fieldHeightPx,
            width: style.width,
            height: style.height,
            x: style.left,
            y: style.top
          });
        },
        onDrag: function onDrag(deltaX, deltaY) {
          _this2.sendUpdate({
            fieldWidthPx: fieldWidthPx,
            fieldHeightPx: fieldHeightPx,
            width: width,
            height: height,
            x: left + deltaX,
            y: top + deltaY
          });
        }
      })), fullContainer.xaxis && fullContainer.xaxis.overlaying ? '' : /*#__PURE__*/_react.default.createElement(_DualNumeric.default, {
        label: _('X'),
        attr: this.attr.x[0],
        attr2: this.attr.x[1],
        percentage: true,
        step: 1,
        min: 0,
        max: 100
      }), fullContainer.yaxis && fullContainer.yaxis.overlaying ? '' : /*#__PURE__*/_react.default.createElement(_DualNumeric.default, {
        label: _('Y'),
        attr: this.attr.y[0],
        attr2: this.attr.y[1],
        percentage: true,
        step: 1,
        min: 0,
        max: 100
      })));
    }
  }]);

  return UnconnectedRectanglePositioner;
}(_react.Component);

UnconnectedRectanglePositioner.propTypes = _objectSpread({
  fullValue: _propTypes.default.any,
  updatePlot: _propTypes.default.func,
  cartesian: _propTypes.default.bool
}, _Field.default.propTypes);
UnconnectedRectanglePositioner.contextTypes = {
  localize: _propTypes.default.func,
  updateContainer: _propTypes.default.func,
  fullContainer: _propTypes.default.object,
  fullLayout: _propTypes.default.object
};
UnconnectedRectanglePositioner.displayName = 'UnconnectedRectanglePositioner';

var _default = (0, _lib.connectToContainer)(UnconnectedRectanglePositioner);

exports.default = _default;
//# sourceMappingURL=RectanglePositioner.js.map