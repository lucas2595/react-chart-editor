import React, {Component} from 'react';
import createPlotComponent from 'react-plotly.js/factory';
import EditorControls from './EditorControls';
import PropTypes from 'prop-types';
import {DEFAULT_FONTS} from 'lib/constants';
import dereference from 'lib/dereference';

class PlotlyEditor extends Component {
  constructor(props) {
    super();
    this.state = {
      graphDiv: {},
      editorRevision: 0,
      plotRevision: 0,
      dataSources: {},
      loading: false
    };
    this.PlotComponent = createPlotComponent(props.plotly);
    this.handleRender = this.handleRender.bind(this);
    this.setChartingData = this.setChartingData.bind(this);
    this.setChartingDataOptions = this.setChartingDataOptions.bind(this);
  }

  componentDidMount() {
    this.setChartingDataOptions(['batata', 'col1']); // add the options
    setTimeout(() => {
      this.setChartingData({columnName: 'batata', data: [1, 2, 3]});
      console.log(this.state);
    }, 2000); // add the batata data
    setTimeout(() => {
      this.setState({loading: true});
    }, 7000); // add set as loading
    setTimeout(() => {
      this.setChartingData({columnName: 'col1', data: [45, 55, 50]});
      this.setState({loading: false});
      console.log(this.state);
    }, 10000); // add the col1 data
    setTimeout(() => {
      this.setChartingData({columnName: 'col1', data: [99, 88, 77]});
      this.setState({loading: false});
      console.log(this.state);
    }, 20000); // refresh the col1 data
  }

  setChartingDataOptions(columnNames) {
    this.setState({
      dataSourceOptions: columnNames.map((name) => ({
        value: name,
        label: name
      }))
    });
  }

  setChartingData({columnName, data}) {
    if (Array.isArray(data) && data.length) {
      this.setState(({dataSources, graphDiv, plotRevision}) => {
        const newDataSources = {...dataSources, [columnName]: data};
        dereference(graphDiv.data, newDataSources);
        return {dataSources: newDataSources, graphDiv, plotRevision: plotRevision + 1};
      });
    }
  }

  handleEditorUpdateTraces({update}) {
    if (update) {
      for (const key in update) {
        if (key.substr(key.length - 3) === 'src') {
          const columnId = update[key];
          const data = this.state.dataSources[columnId];
          if (!Array.isArray(data).length || !data.length) {
            this.getChartingData(columnId);
          }
        }
      }
    }
  }

  // handlePlotUpdate(fig, graphDiv) { // now called handleRender
  //   this.setState(({editorRevision: x}) => ({editorRevision: x + 1, graphDiv}));
  // }

  handleEditorUpdate() {
    this.setState(({plotRevision: x}) => ({plotRevision: x + 1}));
  }

  handleRender(fig, graphDiv) {
    this.setState({graphDiv});
    if (this.props.onRender) {
      this.props.onRender(graphDiv.data, graphDiv.layout, graphDiv._transitionData._frames);
    }
  }

  render() {
    return (
      <div className="plotly_editor">
        {!this.props.hideControls && (
          <EditorControls
            graphDiv={this.state.graphDiv}
            dataSources={this.state.dataSources}
            dataSourceOptions={this.state.dataSourceOptions}
            // dataSources={this.props.dataSources}
            // dataSourceOptions={this.props.dataSourceOptions}
            plotly={this.props.plotly}
            // onUpdate={this.props.onUpdate}
            onUpdate={this.handleEditorUpdate.bind(this)}
            onUpdateTraces={this.handleEditorUpdateTraces.bind(this)}
            revision={this.state.editorRevision}
            advancedTraceTypeSelector={this.props.advancedTraceTypeSelector}
            locale={this.props.locale}
            traceTypesConfig={this.props.traceTypesConfig}
            dictionaries={this.props.dictionaries}
            showFieldTooltips={this.props.showFieldTooltips}
            srcConverters={this.props.srcConverters}
            makeDefaultTrace={this.props.makeDefaultTrace}
            glByDefault={this.props.glByDefault}
            mapBoxAccess={Boolean(this.props.config && this.props.config.mapboxAccessToken)}
            fontOptions={this.props.fontOptions}
            chartHelp={this.props.chartHelp}
            customConfig={this.props.customConfig}
          >
            {this.props.children}
          </EditorControls>
        )}
        <div className="plotly_editor_plot" style={{width: '100%', height: '100%'}}>
          {this.state.loading ? <p>Loading</p> : null}
          <this.PlotComponent
            // data={this.props.data}
            // layout={this.props.layout}
            // frames={this.props.frames}
            data={this.state.graphDiv.data}
            layout={this.state.graphDiv.layout}
            frames={this.state.graphDiv.frames}
            config={this.props.config}
            useResizeHandler={this.props.useResizeHandler}
            debug={this.props.debug}
            onInitialized={this.handleRender}
            onUpdate={this.handleRender}
            style={{width: '100%', height: '100%'}}
            divId={this.props.divId}
            revision={this.state.plotRevision}
          />
        </div>
      </div>
    );
  }
}

PlotlyEditor.propTypes = {
  children: PropTypes.any,
  layout: PropTypes.object,
  data: PropTypes.array,
  config: PropTypes.object,
  dataSourceOptions: PropTypes.array,
  dataSources: PropTypes.object,
  frames: PropTypes.array,
  onUpdate: PropTypes.func,
  onRender: PropTypes.func,
  plotly: PropTypes.object,
  useResizeHandler: PropTypes.bool,
  debug: PropTypes.bool,
  advancedTraceTypeSelector: PropTypes.bool,
  locale: PropTypes.string,
  traceTypesConfig: PropTypes.object,
  dictionaries: PropTypes.object,
  divId: PropTypes.string,
  hideControls: PropTypes.bool,
  showFieldTooltips: PropTypes.bool,
  srcConverters: PropTypes.shape({
    toSrc: PropTypes.func.isRequired,
    fromSrc: PropTypes.func.isRequired
  }),
  makeDefaultTrace: PropTypes.func,
  glByDefault: PropTypes.bool,
  fontOptions: PropTypes.array,
  chartHelp: PropTypes.object,
  customConfig: PropTypes.object
};

PlotlyEditor.defaultProps = {
  hideControls: false,
  showFieldTooltips: false,
  fontOptions: DEFAULT_FONTS
};

export default PlotlyEditor;
