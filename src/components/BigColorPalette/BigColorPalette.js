import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import * as classes from './BigColorPalette.scss';
import * as constants from '../../constants';
import {NotificationManager} from 'react-notifications';

const ARBITRARY_MAX_DECIMAL_QUANTITY = 15;

/*
this component show the current preferences for the selected dataset's variable
it should allow the user to update the preferences for the variable

we should validate that the min is lower than the max before propagating the new values

we must allow for user to write the number they wish, then change the state with the value once they press enter
on input
  update local value state
on enter
  validate value (valid number?, min is lower than max)
  compare local value state to props values
  if they differ
    fire store update
on external changes
  if external values differ from local values
    update inputs values

 */
export default class BigColorPalette extends React.Component {
  static propTypes = {
    variablePreference: React.PropTypes.object,
    setVariablePreferenceBoundaries: React.PropTypes.func.isRequired
  };
  constructor (props) {
    super(props);
    this.changeMin = this.changeMin.bind(this);
    this.changeMax = this.changeMax.bind(this);
    this.catchReturn = this.catchReturn.bind(this);
    this.persistBoundaries = this.persistBoundaries.bind(this);
    this.state = {
      localMin: '',
      localMax: ''
    };
  }

  /*
  the local min and max values are used for filling the text fields
  as such, they always will be strings, however they can arrive as integers from the backends
  here, we will cast them to strings so that the validations do not fail horribly later on
   */
  componentWillReceiveProps (nextProps) {
    if (nextProps.variablePreference) {
      if (this.props.variablePreference !== nextProps.variablePreference) {
        this.setState({
          ...this.state,
          localMin: (nextProps.variablePreference.min)? nextProps.variablePreference.min.toString(): '',
          localMax: (nextProps.variablePreference.max)? nextProps.variablePreference.max.toString(): ''
        });
      }
    }
  }

  changeMin (event) {
    this.setState({
      ...this.state,
      localMin: event.target.value
    });
  }

  changeMax (event) {
    this.setState({
      ...this.state,
      localMax: event.target.value
    });
  }

  persistBoundaries () {
    // javascript does not handle very small numbers well which is problematic for comparison
    // we'd expect parseFloat(1e-7) to return 0.0000001 but we get 1e-7 back
    // whereas parseFloat(1e-6) returns the expected 0.000001
    let min = (this.state.localMin.indexOf('e') !== -1) ? parseFloat(this.state.localMin).toFixed(ARBITRARY_MAX_DECIMAL_QUANTITY) : this.state.localMin;
    let max = (this.state.localMax.indexOf('e') !== -1) ? parseFloat(this.state.localMax).toFixed(ARBITRARY_MAX_DECIMAL_QUANTITY) : this.state.localMax;
    if (min < max) {
      this.props.setVariablePreferenceBoundaries(this.state.localMin, this.state.localMax);
    } else {
      NotificationManager.warning('Please input valid min max values (min should be smaller than max).', 'Warning', 10000);
    }
  }

  catchReturn (event) {
    if (event.key === constants.KEY_ENTER) {
      this.persistBoundaries();
    }
  }

  render () {
    if (this.props.variablePreference && this.props.variablePreference.colorPalette) {
      return (
        <Grid className={classes.BigColorPalette}>
          <Row>
            <Col xs={2} md={1} mdOffset={2}>
              <div className={classes.BoundaryInput}>
                <TextField
                  fullWidth
                  id="variable-min"
                  onKeyPress={this.catchReturn}
                  onBlur={this.persistBoundaries}
                  onChange={this.changeMin}
                  value={this.state.localMin} />
              </div>
            </Col>
            <Col xs={8} md={6}>
              <div
                className={classes.ImageContainer}
                style={{backgroundImage: `url(${__PAVICS_NCWMS_PATH__}?REQUEST=GetLegendGraphic&PALETTE=${this.props.variablePreference.colorPalette}&COLORBARONLY=true&WIDTH=600&HEIGHT=60&VERTICAL=false)`}}>
                {this.props.variablePreference.colorPalette}
              </div>
            </Col>
            <Col xs={2} md={1}>
              <div className={classes.BoundaryInput}>
                <TextField
                  fullWidth
                  id="variable-max"
                  onKeyPress={this.catchReturn}
                  onBlur={this.persistBoundaries}
                  onChange={this.changeMax}
                  value={this.state.localMax} />
              </div>
            </Col>
          </Row>
        </Grid>
      );
    }
    return null;
  }
}
