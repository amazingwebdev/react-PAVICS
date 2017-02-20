import React from 'react';
import * as classes from './LayerSwitcher.scss';
import {List, ListItem} from 'material-ui/List';
import {Tabs, Tab} from 'material-ui/Tabs';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
export default class LayerSwitcher extends React.Component {
  static propTypes = {
    fetchShapefiles: React.PropTypes.func.isRequired,
    selectDatasetLayer: React.PropTypes.func.isRequired,
    selectShapefile: React.PropTypes.func.isRequired,
    selectBasemap: React.PropTypes.func.isRequired,
    currentVisualizedDatasetLayers: React.PropTypes.array.isRequired,
    selectedDatasetLayer: React.PropTypes.object.isRequired,
    selectedShapefile: React.PropTypes.object.isRequired,
    selectedBasemap: React.PropTypes.string.isRequired,
    publicShapeFiles: React.PropTypes.array.isRequired,
    baseMaps: React.PropTypes.array.isRequired
  };

  constructor () {
    super();
    this.setSelectedShapefile = this.setSelectedShapefile.bind(this);
    this.setSelectedBaseMap = this.setSelectedBaseMap.bind(this);
    this.setSelectedDatasetLayer = this.setSelectedDatasetLayer.bind(this);
  }

  componentDidMount() {
    this.props.fetchShapefiles();
    this.setSelectedBaseMap(null, 'Aerial');
  }

  setSelectedShapefile (event, value) {
    this.props.selectShapefile(value);
  }

  setSelectedBaseMap (event, value) {
    this.props.selectBasemap(value);
  }

  setSelectedDatasetLayer (event, value) {
    this.props.selectDatasetLayer(value);
  }

  resetShapefile () {
    this.props.selectShapefile({});
  }

  resetDatasetLayer () {
    this.props.selectDatasetLayer({});
  }

  makeShapefileList () {
    return (
      <List
        style={{minHeight: '250px', maxHeight: '250px', overflowY: 'auto'}}
        className={classes['layers']}>
        <ListItem
          initiallyOpen
          primaryTogglesNestedList
          primaryText="Public"
          nestedItems={
            this.props.publicShapeFiles.map((shapeFile, i) => {
              return (
                <ListItem
                  primaryText={shapeFile.title}
                  key={i}
                  leftCheckbox={
                    <RadioButtonGroup
                      name="selectedShapeFile"
                      valueSelected={this.props.selectedShapefile}
                      onChange={this.setSelectedShapefile}>
                      <RadioButton value={shapeFile} />
                    </RadioButtonGroup>
                  }
                />
              );
            })
          } />
        <ListItem
          primaryTogglesNestedList
          primaryText="Private (TODO)" />
      </List>
    );
  }

  makeBaseMapsList () {
    return (
      <List
        style={{minHeight: '250px', maxHeight: '250px', overflowY: 'auto'}}
        className={classes['layers']}>
        <ListItem
          initiallyOpen
          primaryTogglesNestedList
          primaryText="Bing"
          nestedItems={
            this.props.baseMaps.map((map, i) => {
              return (
                <ListItem
                  primaryText={map}
                  key={i}
                  leftCheckbox={
                    <RadioButtonGroup
                      name="selectedBaseMap"
                      valueSelected={this.props.selectedBasemap}
                      onChange={this.setSelectedBaseMap}>
                      <RadioButton value={map} />
                    </RadioButtonGroup>
                  }
                />
              );
            })
          } />
      </List>
    );
  }

  makeDatasetsList () {
    return (
      <List
        style={{minHeight: '250px', maxHeight: '250px', overflowY: 'auto'}}
        className={classes['layers']}>
        {
          this.props.currentVisualizedDatasetLayers.map((dataset, i) => {
            return (
              <ListItem
                key={i}
                primaryText={dataset.dataset_id}
                leftCheckbox={
                  <RadioButtonGroup
                    name="selectedDatasetLayer"
                    valueSelected={this.props.selectedDatasetLayer}
                    onChange={this.setSelectedDatasetLayer}>
                    <RadioButton value={dataset} />
                  </RadioButtonGroup>
                } />
            );
          })
        }
      </List>
    );
  }

  render () {
    return (
      <div className={classes['LayerSwitcher']}>
        <div className={classes['Tabs']}>
          <Tabs>
            <Tab
              style={{height: '100%'}}
              icon={<FontIcon className="material-icons">satellite</FontIcon>}
              label="Datasets">
              <Paper zDepth={2}>
                <div style={{width: '75%', display: 'inline-block'}}>
                  <h2>Datasets</h2>
                </div>
                <div style={{width: '25%', display: 'inline-block'}}>
                  <RaisedButton
                    onClick={this.resetDatasetLayer.bind(this)}
                    label="Reset" />
                </div>
                {this.makeDatasetsList()}
              </Paper>
            </Tab>
            <Tab
              icon={<FontIcon className="material-icons">local_library</FontIcon>}
              label="Shape Files">
              <Paper zDepth={2}>
                <div style={{width: '75%', display: 'inline-block'}}>
                  <h2>Shape Files</h2>
                </div>
                <div style={{width: '25%', display: 'inline-block'}}>
                  <RaisedButton
                    onClick={this.resetShapefile.bind(this)}
                    label="Reset" />
                </div>
                {this.makeShapefileList()}
              </Paper>
            </Tab>
            <Tab
              icon={<FontIcon className="material-icons">map</FontIcon>}
              label="Base Maps">
              <Paper zDepth={2}>
                <h2>Base Maps</h2>
                {this.makeBaseMapsList()}
              </Paper>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
