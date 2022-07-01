"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _factory = _interopRequireDefault(require("react-plotly.js/factory"));

var _EditorControls = _interopRequireDefault(require("./EditorControls"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./lib/constants");

var _dereference = _interopRequireDefault(require("./lib/dereference"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PlotlyEditor = /*#__PURE__*/function (_Component) {
  _inherits(PlotlyEditor, _Component);

  var _super = _createSuper(PlotlyEditor);

  function PlotlyEditor(props) {
    var _this;

    _classCallCheck(this, PlotlyEditor);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "getChartingData", function (columnName) {
      if (!_this.state.fetchedColumns.includes(columnName)) {
        setTimeout(function () {
          return _this.setChartingData({
            columnName: columnName,
            data: [10 * Math.random(), 10 * (Math.random() + 1), 10 * (Math.random() + 2), 10 * (Math.random() + 3)]
          });
        }, 2000);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditorUpdateTraces", function (update) {
      for (var key in update) {
        if (key.includes('src') || key === 'x' || key === 'y') {
          var columnId = update[key];
          var data = _this.state.dataSources[columnId];

          if (!Array.isArray(data).length || !data.length) {
            _this.getChartingData(columnId);
          }
        }
      }
    });

    _this.state = {
      graphDiv: {},
      editorRevision: 0,
      plotRevision: 0,
      dataSources: {},
      fetchedColumns: [],
      loading: false
    };
    _this.PlotComponent = (0, _factory.default)(props.plotly);
    _this.handleRender = _this.handleRender.bind(_assertThisInitialized(_this));
    _this.setChartingData = _this.setChartingData.bind(_assertThisInitialized(_this));
    _this.setChartingDataOptions = _this.setChartingDataOptions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PlotlyEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setChartingDataOptions(['col1', 'col2', 'col3', 'col4', 'col5', 'col6', 'headers', 'columns', 'fillcolor', 'headerColor']); // add the options

      setTimeout(function () {
        return _this2.setChartingData({
          columnName: 'headers',
          data: ['']
        });
      }, 3000);
      setTimeout(function () {
        return _this2.setChartingData({
          columnName: 'headerColor',
          data: ['#eecccc']
        });
      }, 3100);
      setTimeout(function () {
        return _this2.setChartingData({
          columnName: 'columns',
          data: [[10.3]]
        });
      }, 3500);
      setTimeout(function () {
        return _this2.setChartingData({
          columnName: 'fillcolor',
          data: 'rgba(0,255,0,0)'
        });
      }, 3600);
      setTimeout(function () {
        return _this2.setChartingData({
          columnName: 'parent',
          data: ['', 'Eve', 'Eve', 'Seth', 'Seth', 'Eve', 'Eve', 'Awan', 'Eve']
        });
      }, 4000);
      setTimeout(function () {
        return _this2.setChartingData({
          columnName: 'value',
          data: [10, 14, 12, 10, 2, 6, 6, 4, 4]
        });
      }, 5000);
    }
  }, {
    key: "setChartingDataOptions",
    value: function setChartingDataOptions(columnNames) {
      this.setState({
        dataSourceOptions: columnNames.map(function (name) {
          return {
            value: name,
            label: name
          };
        })
      });
    }
  }, {
    key: "setChartingData",
    value: function setChartingData(_ref) {
      var columnName = _ref.columnName,
          data = _ref.data;

      if (Array.isArray(data) && data.length) {
        this.setState(function (_ref2) {
          var dataSources = _ref2.dataSources,
              graphDiv = _ref2.graphDiv,
              plotRevision = _ref2.plotRevision,
              fetchedColumns = _ref2.fetchedColumns;

          var newDataSources = _objectSpread(_objectSpread({}, dataSources), {}, _defineProperty({}, columnName, data));

          (0, _dereference.default)(graphDiv.data, newDataSources);
          (0, _dereference.default)(graphDiv.layout, newDataSources);
          return {
            dataSources: newDataSources,
            graphDiv: graphDiv,
            plotRevision: plotRevision + 1,
            fetchedColumns: [].concat(_toConsumableArray(fetchedColumns), [columnName])
          };
        });
      }
    }
  }, {
    key: "handleEditorUpdate",
    value: function handleEditorUpdate(update) {
      var response;

      if (this.props.onUpdate) {
        var _this$props;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        response = (_this$props = this.props).onUpdate.apply(_this$props, [update].concat(args));
      }

      this.setState(function (_ref3) {
        var x = _ref3.plotRevision;
        return {
          plotRevision: x + 1
        };
      });

      if (update) {
        var _iterator = _createForOfIteratorHelper(update),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var trace = _step.value;
            this.handleEditorUpdateTraces(trace);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return response;
    }
  }, {
    key: "handleRender",
    value: function handleRender(fig, graphDiv) {
      this.setState({
        graphDiv: graphDiv
      });

      if (this.props.onRender) {
        this.props.onRender(graphDiv.data, graphDiv.layout, graphDiv._transitionData._frames);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "plotly_editor"
      }, !this.props.hideControls && /*#__PURE__*/_react.default.createElement(_EditorControls.default, {
        graphDiv: this.state.graphDiv,
        dataSources: this.state.dataSources,
        dataSourceOptions: this.state.dataSourceOptions // dataSources={this.props.dataSources}
        // dataSourceOptions={this.props.dataSourceOptions}
        ,
        plotly: this.props.plotly // onUpdate={this.props.onUpdate}
        ,
        onUpdate: this.handleEditorUpdate.bind(this),
        onUpdateTraces: this.handleEditorUpdateTraces,
        revision: this.state.editorRevision,
        advancedTraceTypeSelector: this.props.advancedTraceTypeSelector,
        locale: this.props.locale,
        traceTypesConfig: this.props.traceTypesConfig,
        dictionaries: this.props.dictionaries,
        showFieldTooltips: this.props.showFieldTooltips,
        srcConverters: this.props.srcConverters,
        makeDefaultTrace: this.props.makeDefaultTrace,
        glByDefault: this.props.glByDefault,
        mapBoxAccess: Boolean(this.props.config && this.props.config.mapboxAccessToken),
        fontOptions: this.props.fontOptions,
        chartHelp: this.props.chartHelp,
        customConfig: this.props.customConfig
      }, this.props.children), /*#__PURE__*/_react.default.createElement("div", {
        className: "plotly_editor_plot",
        style: {
          width: '100%',
          height: '100%'
        }
      }, this.state.loading ? /*#__PURE__*/_react.default.createElement("p", null, "Loading") : null, /*#__PURE__*/_react.default.createElement(this.PlotComponent, {
        // data={this.props.data}
        // layout={this.props.layout}
        // frames={this.props.frames}
        data: this.state.graphDiv.data,
        layout: this.state.graphDiv.layout,
        frames: this.state.graphDiv.frames,
        config: this.props.config,
        useResizeHandler: this.props.useResizeHandler,
        debug: this.props.debug,
        onInitialized: this.handleRender,
        onUpdate: this.handleRender,
        style: {
          width: '100%',
          height: '100%'
        },
        divId: this.props.divId,
        revision: this.state.plotRevision
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref4, prevState) {
      var data = _ref4.data,
          layout = _ref4.layout,
          frames = _ref4.frames,
          dataSources = _ref4.dataSources,
          dataSourceOptions = _ref4.dataSourceOptions;

      if (JSON.stringify(data) !== JSON.stringify(prevState.graphDiv.data) || JSON.stringify(layout) !== JSON.stringify(prevState.graphDiv.layout) || JSON.stringify(frames) !== JSON.stringify(prevState.graphDiv.frames) || JSON.stringify(dataSources) !== JSON.stringify(prevState.dataSources) || JSON.stringify(dataSourceOptions) !== JSON.stringify(prevState.dataSourceOptions)) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          dataSources: dataSources,
          dataSourceOptions: dataSourceOptions,
          graphDiv: _objectSpread(_objectSpread({}, prevState.graphDiv), {}, {
            data: data,
            layout: layout,
            frames: frames
          })
        });
      }

      return null;
    }
  }]);

  return PlotlyEditor;
}(_react.Component);

PlotlyEditor.propTypes = {
  children: _propTypes.default.any,
  layout: _propTypes.default.object,
  data: _propTypes.default.array,
  config: _propTypes.default.object,
  dataSourceOptions: _propTypes.default.array,
  dataSources: _propTypes.default.object,
  frames: _propTypes.default.array,
  onUpdate: _propTypes.default.func,
  onRender: _propTypes.default.func,
  plotly: _propTypes.default.object,
  useResizeHandler: _propTypes.default.bool,
  debug: _propTypes.default.bool,
  advancedTraceTypeSelector: _propTypes.default.bool,
  locale: _propTypes.default.string,
  traceTypesConfig: _propTypes.default.object,
  dictionaries: _propTypes.default.object,
  divId: _propTypes.default.string,
  hideControls: _propTypes.default.bool,
  showFieldTooltips: _propTypes.default.bool,
  srcConverters: _propTypes.default.shape({
    toSrc: _propTypes.default.func.isRequired,
    fromSrc: _propTypes.default.func.isRequired
  }),
  makeDefaultTrace: _propTypes.default.func,
  glByDefault: _propTypes.default.bool,
  fontOptions: _propTypes.default.array,
  chartHelp: _propTypes.default.object,
  customConfig: _propTypes.default.object
};
PlotlyEditor.defaultProps = {
  hideControls: false,
  showFieldTooltips: false,
  fontOptions: _constants.DEFAULT_FONTS
};
var _default = PlotlyEditor;
exports.default = _default;
//# sourceMappingURL=PlotlyEditor.js.map