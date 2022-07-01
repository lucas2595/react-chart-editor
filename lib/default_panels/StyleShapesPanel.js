"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleShapesPanel = function StyleShapesPanel(props, _ref) {
  var _ = _ref.localize;
  return /*#__PURE__*/_react.default.createElement(_components.ShapeAccordion, {
    canAdd: true,
    canReorder: true
  }, /*#__PURE__*/_react.default.createElement(_components.Radio, {
    attr: "visible",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), /*#__PURE__*/_react.default.createElement(_components.Radio, {
    attr: "type",
    options: [{
      label: _('Line'),
      value: 'line'
    }, {
      label: _('Rectangle'),
      value: 'rect'
    }, {
      label: _('Ellipse'),
      value: 'circle'
    }]
  }), /*#__PURE__*/_react.default.createElement(_components.PlotlySection, {
    name: _('Horizontal Boundaries')
  }, /*#__PURE__*/_react.default.createElement(_components.PositioningRef, {
    label: _('Relative to'),
    attr: "xref"
  }), /*#__PURE__*/_react.default.createElement(_components.PositioningNumeric, {
    label: _('Start Point'),
    attr: "x0"
  }), /*#__PURE__*/_react.default.createElement(_components.PositioningNumeric, {
    label: _('End Point'),
    attr: "x1"
  })), /*#__PURE__*/_react.default.createElement(_components.PlotlySection, {
    name: _('Vertical Boundaries')
  }, /*#__PURE__*/_react.default.createElement(_components.PositioningRef, {
    label: _('Relative to'),
    attr: "yref"
  }), /*#__PURE__*/_react.default.createElement(_components.PositioningNumeric, {
    label: _('Start Point'),
    attr: "y0"
  }), /*#__PURE__*/_react.default.createElement(_components.PositioningNumeric, {
    label: _('End Point'),
    attr: "y1"
  })), /*#__PURE__*/_react.default.createElement(_components.PlotlySection, {
    name: _('Lines')
  }, /*#__PURE__*/_react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "line.width"
  }), /*#__PURE__*/_react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "line.color"
  }), /*#__PURE__*/_react.default.createElement(_components.LineDashSelector, {
    label: _('Type'),
    attr: "line.dash"
  })), /*#__PURE__*/_react.default.createElement(_components.PlotlySection, {
    name: _('Fill')
  }, /*#__PURE__*/_react.default.createElement(_components.DataSelector, {
    label: _('Color'),
    attr: "fillcolor"
  }), /*#__PURE__*/_react.default.createElement(_components.NumericFraction, {
    label: _('Opacity'),
    attr: "opacity"
  })));
};

StyleShapesPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleShapesPanel;
exports.default = _default;
//# sourceMappingURL=StyleShapesPanel.js.map