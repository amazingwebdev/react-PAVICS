import React from 'react'
import {connect} from 'react-redux'
import classes from './DatasetWMSLayers.scss'
import TogglingPanel, {OpenedPanel} from '../../components/TogglingPanel'
import DatasetWMSLayersList from '../../components/DatasetWMSLayersList'
import DatasetWMSLayer from '../../components/DatasetWMSLayer'
export class DatasetWMSLayers extends React.Component {
  static propTypes = {
    clickTogglePanel: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this._onCloseDatasetWMSLayersPanel = this._onCloseDatasetWMSLayersPanel.bind(this);
    this._onSelectDatasetWMSLayer = this._onSelectDatasetWMSLayer.bind(this);
    this._onLoadWMSLayer = this._onLoadWMSLayer.bind(this);
    this._onOpenPanel = this._onOpenPanel.bind(this);
    this._opened = this._opened.bind(this);
    this._mainComponent = this._mainComponent.bind(this);
  }

  _onCloseDatasetWMSLayersPanel() {
    this.props.clickTogglePanel("DatasetWMSLayers", false);
  }

  _onOpenPanel() {
    this.props.clickTogglePanel("DatasetWMSLayers", true);
  }

  _onSelectDatasetWMSLayer(url, layer) {
    this.props.openWmsLayer(layer);
    this.props.fetchWMSLayerDetails(url, layer)
  }

  _onLoadWMSLayer(start, end, style, opacity) {
    let url = "http://132.217.140.31:8080/ncWMS2/wms";
    let layer = this.props.currentOpenedWMSLayer;
    this.props.selectLoadWms(url, layer, start, end, opacity, style);
  }

  _mainComponent() {
    let MainComponent = null;
    if (this.props.currentOpenedDatasetWMSFile.length) {
      MainComponent =
        <div>
          <DatasetWMSLayersList
            isFetching={ this.props.selectedWMSLayers.isFetching }
            layers={ this.props.selectedWMSLayers.items }
            onSelectLayer={this._onSelectDatasetWMSLayer }
            currentLayer={this.props.currentOpenedWMSLayer}/>
          {
            (this.props.currentOpenedWMSLayer.length) ?
              <DatasetWMSLayer
                onLoadWMSLayer={this._onLoadWMSLayer}
              /> : null
          }
        </div>
    } else {
      MainComponent =
        <span className="NotAvailable">You must first select a dataset then "Open" chosen WMS file.</span>;
    }
    return MainComponent;
  }

  _opened() {
    return (
      <OpenedPanel
        onClosePanelCb={this._onCloseDatasetWMSLayersPanel}
        icon='glyphicon-globe'
        panelTitle='WMS Layers'
        panelContentCb={this._mainComponent}/>
    );
  }

  render() {
    return (
      <TogglingPanel
        onOpenPanelCb={this._onOpenPanel}
        icon='glyphicon-globe'
        classes={ classes }
        active={ this.props.panelControls.DatasetWMSLayers.show }
        makeOpenedViewCb={ this._opened }
        widgetName='DatasetWMSLayers'
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {}
};
const mapDispatchToProps = (dispatch) => {
  return {}
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatasetWMSLayers)
