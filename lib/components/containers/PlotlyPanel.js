"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Panel = void 0;

var _PanelHeader = _interopRequireDefault(require("./PanelHeader"));

var _PanelEmpty = _interopRequireDefault(require("./PanelEmpty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

var _lib = require("../../lib");

var _plotlyIcons = require("plotly-icons");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var PanelErrorImpl = /*#__PURE__*/function (_Component) {
  _inherits(PanelErrorImpl, _Component);

  var _super = _createSuper(PanelErrorImpl);

  function PanelErrorImpl() {
    _classCallCheck(this, PanelErrorImpl);

    return _super.apply(this, arguments);
  }

  _createClass(PanelErrorImpl, [{
    key: "render",
    value: function render() {
      var _ = this.context.localize;
      return /*#__PURE__*/_react.default.createElement(_PanelEmpty.default, {
        icon: _plotlyIcons.EmbedIconIcon,
        heading: _('Well this is embarrassing.')
      }, /*#__PURE__*/_react.default.createElement("p", null, _('This panel could not be displayed due to an error.')));
    }
  }]);

  return PanelErrorImpl;
}(_react.Component);

PanelErrorImpl.contextTypes = {
  localize: _propTypes.default.func
};
var PanelError = PanelErrorImpl;

var Panel = /*#__PURE__*/function (_Component2) {
  _inherits(Panel, _Component2);

  var _super2 = _createSuper(Panel);

  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _super2.call(this, props);
    _this.state = {
      individualFoldStates: [],
      hasError: false
    };
    _this.toggleFolds = _this.toggleFolds.bind(_assertThisInitialized(_this));
    _this.toggleFold = _this.toggleFold.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Panel, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        deleteContainer: this.props.deleteAction ? this.props.deleteAction : null
      };
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch() {
      this.setState({
        hasError: true
      });
    }
  }, {
    key: "toggleFolds",
    value: function toggleFolds() {
      var individualFoldStates = this.state.individualFoldStates;
      var hasOpen = individualFoldStates.length > 0 && individualFoldStates.some(function (s) {
        return s !== true;
      });
      this.setState({
        individualFoldStates: individualFoldStates.map(function () {
          return hasOpen;
        })
      });
    }
  }, {
    key: "toggleFold",
    value: function toggleFold(index) {
      this.setState((0, _immutabilityHelper.default)(this.state, {
        individualFoldStates: {
          $toggle: [index]
        }
      }));
    }
  }, {
    key: "calculateFolds",
    value: function calculateFolds() {
      // to get proper number of child folds and initialize component state
      var numFolds = 0;

      _react.default.Children.forEach(this.props.children, function (child) {
        if ((child && child.type && child.type.plotly_editor_traits || {}).foldable) {
          numFolds++;
        }
      });

      if (this.state.individualFoldStates.length !== numFolds) {
        var newFoldStates = new Array(numFolds).fill(false);
        this.setState({
          individualFoldStates: this.props.addAction ? newFoldStates.map(function (e, i) {
            return i !== numFolds - 1;
          }) : newFoldStates
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.calculateFolds();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.calculateFolds();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          individualFoldStates = _this$state.individualFoldStates,
          hasError = _this$state.hasError;
      var canReorder = this.props.canReorder;

      if (hasError) {
        return /*#__PURE__*/_react.default.createElement(PanelError, null);
      }

      var newChildren = _react.default.Children.map(this.props.children, function (child, index) {
        if ((child && child.type && child.type.plotly_editor_traits || {}).foldable) {
          return /*#__PURE__*/(0, _react.cloneElement)(child, {
            key: index,
            folded: individualFoldStates[index] || false,
            toggleFold: function toggleFold() {
              return _this2.toggleFold(index);
            },
            canMoveUp: canReorder && individualFoldStates.length > 1 && index > 0,
            canMoveDown: canReorder && individualFoldStates.length > 1 && index !== individualFoldStates.length - 1
          });
        }

        return child;
      });

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "panel".concat(this.props.noPadding ? ' panel--no-padding' : '')
      }, /*#__PURE__*/_react.default.createElement(_PanelHeader.default, {
        addAction: this.props.addAction,
        allowCollapse: this.props.showExpandCollapse && individualFoldStates.length > 1,
        toggleFolds: this.toggleFolds,
        hasOpen: individualFoldStates.some(function (s) {
          return s === false;
        })
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _lib.bem)('panel', 'content')
      }, newChildren));
    }
  }]);

  return Panel;
}(_react.Component);

exports.Panel = Panel;
Panel.propTypes = {
  addAction: _propTypes.default.object,
  children: _propTypes.default.node,
  deleteAction: _propTypes.default.func,
  noPadding: _propTypes.default.bool,
  showExpandCollapse: _propTypes.default.bool,
  canReorder: _propTypes.default.bool
};
Panel.defaultProps = {
  showExpandCollapse: true
};
Panel.contextTypes = {
  localize: _propTypes.default.func
};
Panel.childContextTypes = {
  deleteContainer: _propTypes.default.func
};

var PlotlyPanel = /*#__PURE__*/function (_Panel) {
  _inherits(PlotlyPanel, _Panel);

  var _super3 = _createSuper(PlotlyPanel);

  function PlotlyPanel() {
    _classCallCheck(this, PlotlyPanel);

    return _super3.apply(this, arguments);
  }

  return _createClass(PlotlyPanel);
}(Panel);

PlotlyPanel.plotly_editor_traits = {
  no_visibility_forcing: true
};
var _default = PlotlyPanel;
exports.default = _default;
//# sourceMappingURL=PlotlyPanel.js.map