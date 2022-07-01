"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnconnectedDataSelector = void 0;
exports.attributeIsData = attributeIsData;
exports.default = void 0;

var _Dropdown = _interopRequireDefault(require("../widgets/Dropdown"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Field = _interopRequireDefault(require("./Field"));

var _nested_property = _interopRequireDefault(require("plotly.js/src/lib/nested_property"));

var _lib = require("../../lib");

var _constants = require("../../lib/constants");

var _dereference = require("../../lib/dereference");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function attributeIsData() {
  var meta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return meta.valType === 'data_array' || meta.arrayOk;
}

var UnconnectedDataSelector = /*#__PURE__*/function (_Component) {
  _inherits(UnconnectedDataSelector, _Component);

  var _super = _createSuper(UnconnectedDataSelector);

  function UnconnectedDataSelector(props, context) {
    var _this;

    _classCallCheck(this, UnconnectedDataSelector);

    _this = _super.call(this, props, context);
    _this.updatePlot = _this.updatePlot.bind(_assertThisInitialized(_this));

    _this.setLocals(props, context);

    return _this;
  }

  _createClass(UnconnectedDataSelector, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
      this.setLocals(nextProps, nextContext);
    }
  }, {
    key: "setLocals",
    value: function setLocals(props, context) {
      this.dataSources = context.dataSources || {};
      this.dataSourceOptions = context.dataSourceOptions || [];
      this.srcAttr = props.attr + 'src';
      this.srcProperty = (0, _nested_property.default)(props.container, this.srcAttr).get();
      this.fullValue = this.context.srcConverters ? this.context.srcConverters.toSrc(this.srcProperty, props.container.type) : this.srcProperty;
      this.is2D = false;

      if (props.container) {
        this.is2D = (props.attr === 'x' || props.attr === 'y') && ['scatter', 'scattergl', 'bar', 'funnel', 'heatmap', 'heatmapgl', 'violin', 'waterfall', 'box', 'contour', 'contourgl'].includes(props.container.type) || props.attr === 'z' && ['contour', 'contourgl', 'heatmap', 'heatmapgl', 'surface', 'carpet', 'contourcarpet'].includes(props.container.type) || props.container.type === 'table' && props.attr !== 'columnorder' || Array.isArray(this.fullValue);
      }

      this.hasData = props.container ? props.attr in props.container : false;
    }
  }, {
    key: "updatePlot",
    value: function updatePlot(value) {
      var _this2 = this;

      if (!this.props.updateContainer) {
        return;
      }

      var update = {};
      var data;
      var adjustedValue = Array.isArray(value) && value.length === 1 && (this.props.attr === 'x' || this.props.attr === 'y') ? value[0] : value;

      if (Array.isArray(adjustedValue)) {
        data = adjustedValue.filter(function (v) {
          return Array.isArray(_this2.dataSources[v]);
        }).map(function (v) {
          return _this2.dataSources[v];
        });
      } else {
        data = this.dataSources[adjustedValue] || null;
      }

      update[this.props.attr] = (0, _lib.maybeTransposeData)(data, this.srcAttr, this.props.container.type);
      update[this.srcAttr] = (0, _lib.maybeAdjustSrc)(adjustedValue, this.srcAttr, this.props.container.type, {
        fromSrc: this.context.srcConverters ? this.context.srcConverters.fromSrc : null
      });

      if (this.props.container.type) {
        // this means we're at the top level of the trace
        update['meta.columnNames.' + this.props.attr] = (0, _dereference.getColumnNames)(Array.isArray(adjustedValue) ? adjustedValue : [adjustedValue], this.dataSourceOptions);
      }

      this.props.updateContainer(update);
    }
  }, {
    key: "render",
    value: function render() {
      var label = this.props.label;
      var newLabel;

      if (_typeof(label) === 'object') {
        var traceType = this.props.container.type;

        if (label[traceType]) {
          newLabel = label[traceType];
        } else {
          newLabel = label['*'];
        }
      } else {
        newLabel = label;
      }

      return /*#__PURE__*/_react.default.createElement(_Field.default, _objectSpread(_objectSpread({}, this.props), {}, {
        label: newLabel
      }), /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
        options: this.dataSourceOptions,
        value: this.fullValue,
        onChange: this.updatePlot,
        multi: this.is2D,
        searchable: true,
        clearable: true,
        placeholder: this.hasData ? 'Data inlined in figure' : 'Choose data...',
        disabled: this.dataSourceOptions.length === 0,
        components: this.props.dataSourceComponents
      }));
    }
  }]);

  return UnconnectedDataSelector;
}(_react.Component);

exports.UnconnectedDataSelector = UnconnectedDataSelector;
UnconnectedDataSelector.propTypes = _objectSpread({
  fullValue: _propTypes.default.any,
  updatePlot: _propTypes.default.func,
  container: _propTypes.default.object
}, _Field.default.propTypes);
UnconnectedDataSelector.contextTypes = {
  dataSources: _propTypes.default.object,
  dataSourceComponents: _propTypes.default.object,
  dataSourceOptions: _propTypes.default.array,
  srcConverters: _propTypes.default.shape({
    toSrc: _propTypes.default.func.isRequired,
    fromSrc: _propTypes.default.func.isRequired
  }),
  container: _propTypes.default.object
};
UnconnectedDataSelector.displayName = 'UnconnectedDataSelector';

function modifyPlotProps(props, context, plotProps) {
  if (attributeIsData(plotProps.attrMeta) && context.container && _constants.TRANSFORMS_LIST.indexOf(context.container.type) === -1) {
    plotProps.isVisible = true;
  }
}

var _default = (0, _lib.connectToContainer)(UnconnectedDataSelector, {
  modifyPlotProps: modifyPlotProps
});

exports.default = _default;
//# sourceMappingURL=DataSelector.js.map