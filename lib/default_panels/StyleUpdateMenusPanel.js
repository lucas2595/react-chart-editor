"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleUpdateMenusPanel = function StyleUpdateMenusPanel(props, _ref) {
  var _ = _ref.localize;
  return /*#__PURE__*/_react.default.createElement(_components.UpdateMenuAccordion, null, /*#__PURE__*/_react.default.createElement(_components.VisibilitySelect, {
    attr: "visible",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }],
    showOn: true
  }, /*#__PURE__*/_react.default.createElement(_components.PlotlySection, {
    name: _('Button Labels')
  }, /*#__PURE__*/_react.default.createElement(_components.UpdateMenuButtons, {
    attr: "buttons"
  })), /*#__PURE__*/_react.default.createElement(_components.PlotlySection, {
    name: _('Background')
  }, /*#__PURE__*/_react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "bgcolor"
  })), /*#__PURE__*/_react.default.createElement(_components.PlotlySection, {
    name: _('Font')
  }, /*#__PURE__*/_react.default.createElement(_components.FontSelector, {
    label: _('Typeface'),
    attr: "font.family"
  }), /*#__PURE__*/_react.default.createElement(_components.Numeric, {
    label: _('Size'),
    attr: "font.size"
  }), /*#__PURE__*/_react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "font.color"
  })), /*#__PURE__*/_react.default.createElement(_components.PlotlySection, {
    name: _('Border')
  }, /*#__PURE__*/_react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "borderwidth"
  }), /*#__PURE__*/_react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "bordercolor"
  })), /*#__PURE__*/_react.default.createElement(_components.PlotlySection, {
    name: _('Horizontal Positioning'),
    attr: 'x'
  }, /*#__PURE__*/_react.default.createElement(_components.Numeric, {
    label: _('Position'),
    attr: 'x',
    showSlider: true,
    step: 0.02
  }), /*#__PURE__*/_react.default.createElement(_components.Radio, {
    label: _('Anchor'),
    attr: 'xanchor',
    options: [{
      label: _('Left'),
      value: 'left'
    }, {
      label: _('Center'),
      value: 'center'
    }, {
      label: _('Right'),
      value: 'right'
    }]
  })), /*#__PURE__*/_react.default.createElement(_components.PlotlySection, {
    name: _('Vertical Positioning'),
    attr: 'y'
  }, /*#__PURE__*/_react.default.createElement(_components.Numeric, {
    label: _('Position'),
    attr: 'y',
    showSlider: true,
    step: 0.02
  }), /*#__PURE__*/_react.default.createElement(_components.Radio, {
    label: _('Anchor'),
    attr: 'yanchor',
    options: [{
      label: _('Top'),
      value: 'top'
    }, {
      label: _('Middle'),
      value: 'middle'
    }, {
      label: _('Bottom'),
      value: 'bottom'
    }]
  })), /*#__PURE__*/_react.default.createElement(_components.PlotlySection, {
    name: _('Padding')
  }, /*#__PURE__*/_react.default.createElement(_components.Numeric, {
    label: _('Top'),
    attr: "pad.t",
    units: "px"
  }), /*#__PURE__*/_react.default.createElement(_components.Numeric, {
    label: _('Bottom'),
    attr: "pad.b",
    units: "px"
  }), /*#__PURE__*/_react.default.createElement(_components.Numeric, {
    label: _('Left'),
    attr: "pad.l",
    units: "px"
  }), /*#__PURE__*/_react.default.createElement(_components.Numeric, {
    label: _('Right'),
    attr: "pad.r",
    units: "px"
  }))));
};

StyleUpdateMenusPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleUpdateMenusPanel;
exports.default = _default;
//# sourceMappingURL=StyleUpdateMenusPanel.js.map