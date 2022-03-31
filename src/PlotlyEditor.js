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
      fetchedColumns: [],
      loading: false
    };
    this.PlotComponent = createPlotComponent(props.plotly);
    this.handleRender = this.handleRender.bind(this);
    this.setChartingData = this.setChartingData.bind(this);
    this.setChartingDataOptions = this.setChartingDataOptions.bind(this);
  }

  componentDidMount() {
    this.setChartingDataOptions([
      'col1',
      'col2',
      'col3',
      'col4',
      'col5',
      'headers',
      'columns',
      'fillcolor',
      'headerColor'
    ]); // add the options

    setTimeout(
      () =>
        this.setChartingData({
          columnName: 'headers',
          data: ['']
        }),
      3000
    );
    setTimeout(
      () =>
        this.setChartingData({
          columnName: 'headerColor',
          data: ['#eecccc']
        }),
      3100
    );
    setTimeout(
      () =>
        this.setChartingData({
          columnName: 'columns',
          data: [[10.3]]
        }),
      3500
    );
    setTimeout(
      () =>
        this.setChartingData({
          columnName: 'fillcolor',
          data: 'rgba(0,255,0,0)'
        }),
      3600
    );
    setTimeout(
      () =>
        this.setChartingData({
          columnName: 'parent',
          data: ['', 'Eve', 'Eve', 'Seth', 'Seth', 'Eve', 'Eve', 'Awan', 'Eve']
        }),
      4000
    );
    setTimeout(
      () => this.setChartingData({columnName: 'value', data: [10, 14, 12, 10, 2, 6, 6, 4, 4]}),
      5000
    );
  }

  static getDerivedStateFromProps(
    {data, layout, frames, dataSources, dataSourceOptions},
    prevState
  ) {
    if (
      JSON.stringify(data) !== JSON.stringify(prevState.graphDiv.data) ||
      JSON.stringify(layout) !== JSON.stringify(prevState.graphDiv.layout) ||
      JSON.stringify(frames) !== JSON.stringify(prevState.graphDiv.frames) ||
      JSON.stringify(dataSources) !== JSON.stringify(prevState.dataSources) ||
      JSON.stringify(dataSourceOptions) !== JSON.stringify(prevState.dataSourceOptions)
    ) {
      return {
        ...prevState,
        dataSources,
        dataSourceOptions,
        graphDiv: {
          ...prevState.graphDiv,
          data,
          layout,
          frames
        }
      };
    }
    return null;
  }

  getChartingData = (columnName) => {
    if (!this.state.fetchedColumns.includes(columnName)) {
      setTimeout(
        () =>
          this.setChartingData({
            columnName,
            data: [
              10 * Math.random(),
              10 * (Math.random() + 1),
              10 * (Math.random() + 2),
              10 * (Math.random() + 3)
            ]
          }),
        2000
      );
    }
  };

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
      this.setState(({dataSources, graphDiv, plotRevision, fetchedColumns}) => {
        const newDataSources = {...dataSources, [columnName]: data};
        dereference(graphDiv.data, newDataSources);
        return {
          dataSources: newDataSources,
          graphDiv,
          plotRevision: plotRevision + 1,
          fetchedColumns: [...fetchedColumns, columnName]
        };
      });
    }
  }

  handleEditorUpdateTraces = (update) => {
    for (const key in update) {
      if (key.includes('src') || key === 'x' || key === 'y') {
        const columnId = update[key];
        const data = this.state.dataSources[columnId];
        if (!Array.isArray(data).length || !data.length) {
          this.getChartingData(columnId);
        }
      }
    }
  };

  handleEditorUpdate(update, ...args) {
    if (this.props.onUpdate) {
      return this.props.onUpdate(update, ...args);
    }
    this.setState(({plotRevision: x}) => ({plotRevision: x + 1}));
    if (update) {
      for (const trace of update) {
        this.handleEditorUpdateTraces(trace);
      }
    }
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
            onUpdateTraces={this.handleEditorUpdateTraces}
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
