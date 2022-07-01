"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Aggregations = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

var _lib = require("../lib");

var _constants = require("../lib/constants");

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

var AggregationSection = (0, _lib.connectAggregationToTransform)(_components.PlotlySection);

var Aggregations = /*#__PURE__*/function (_Component) {
  _inherits(Aggregations, _Component);

  var _super = _createSuper(Aggregations);

  function Aggregations() {
    _classCallCheck(this, Aggregations);

    return _super.apply(this, arguments);
  }

  _createClass(Aggregations, [{
    key: "render",
    value: function render() {
      var _this$context$fullCon = this.context.fullContainer.aggregations,
          aggregations = _this$context$fullCon === void 0 ? [] : _this$context$fullCon;
      var _ = this.context.localize;

      if (aggregations.length === 0) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement(_components.PlotlySection, {
        name: _('Aggregations'),
        attr: "aggregations"
      }, aggregations.filter(function (aggr) {
        return aggr.target && aggr.target.match(/transforms\[\d*\]\./gi) === null;
      }).map(function (_ref, i) {
        var target = _ref.target;
        return /*#__PURE__*/_react.default.createElement(AggregationSection, {
          show: true,
          key: i,
          aggregationIndex: i
        }, /*#__PURE__*/_react.default.createElement(_components.Dropdown, {
          attr: "func",
          label: target,
          options: [{
            label: _('Count'),
            value: 'count'
          }, {
            label: _('Sum'),
            value: 'sum'
          }, {
            label: _('Average'),
            value: 'avg'
          }, {
            label: _('Median'),
            value: 'median'
          }, {
            label: _('Mode'),
            value: 'mode'
          }, {
            label: _('RMS'),
            value: 'rms'
          }, {
            label: _('Standard Deviation'),
            value: 'stddev'
          }, {
            label: _('Min'),
            value: 'min'
          }, {
            label: _('Max'),
            value: 'max'
          }, {
            label: _('First'),
            value: 'first'
          }, {
            label: _('Last'),
            value: 'last'
          }, {
            label: _('Change'),
            value: 'change'
          }, {
            label: _('Range'),
            value: 'range'
          }],
          clearable: false
        }));
      }));
    }
  }]);

  return Aggregations;
}(_react.Component);

exports.Aggregations = Aggregations;
Aggregations.plotly_editor_traits = {
  no_visibility_forcing: true
};
Aggregations.contextTypes = {
  fullContainer: _propTypes.default.object,
  localize: _propTypes.default.func
};

var GraphTransformsPanel = function GraphTransformsPanel(props, _ref2) {
  var _ = _ref2.localize;
  return /*#__PURE__*/_react.default.createElement(_components.TraceAccordion, {
    traceFilterCondition: function traceFilterCondition(t) {
      return _constants.TRANSFORMABLE_TRACES.includes(t.type);
    }
  }, /*#__PURE__*/_react.default.createElement(_components.TransformAccordion, null, /*#__PURE__*/_react.default.createElement(_components.Radio, {
    attr: "enabled",
    options: [{
      label: _('Enabled'),
      value: true
    }, {
      label: _('Disabled'),
      value: false
    }]
  }), /*#__PURE__*/_react.default.createElement(_components.DataSelector, {
    label: _('By'),
    attr: "groups"
  }), /*#__PURE__*/_react.default.createElement(_components.DataSelector, {
    label: _('Target'),
    attr: "target"
  }), /*#__PURE__*/_react.default.createElement(_components.FilterOperation, {
    label: _('Operator'),
    attr: "operation"
  }), /*#__PURE__*/_react.default.createElement(_components.FilterValue, {
    label: _('Value'),
    attr: "value"
  }), /*#__PURE__*/_react.default.createElement(_components.Radio, {
    attr: "order",
    options: [{
      label: _('Ascending'),
      value: 'ascending'
    }, {
      label: _('Descending'),
      value: 'descending'
    }]
  }), /*#__PURE__*/_react.default.createElement(Aggregations, null)));
};

GraphTransformsPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = GraphTransformsPanel;
exports.default = _default;
//# sourceMappingURL=GraphTransformsPanel.js.map