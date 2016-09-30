import React from 'react'
import Panel, {PanelHeader} from './../../components/Panel'
import Table, {TableHeader, TableBody} from './../../components/Table'
import * as constants from './../../routes/Visualize/constants'
class ClimateIndicators extends React.Component {
  static propTypes = {
    fetchClimateIndicators: React.PropTypes.func.isRequired,
    climateIndicators: React.PropTypes.object.isRequired,
    clickTogglePanel: React.PropTypes.func.isRequired,
    panelControls: React.PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.props.fetchClimateIndicators()
    this._togglePanel = this._togglePanel.bind(this)
  }

  _formatRows () {
    if (this.props.climateIndicators.items.length === 0) {
      return []
    } else {
      return this.props.climateIndicators.items.map(x => [x.value])
    }
  }

  _togglePanel () {
    let newState = !this.props.panelControls[constants.PANEL_CLIMATE_INDICATORS].show
    this.props.clickTogglePanel(constants.PANEL_CLIMATE_INDICATORS, newState)
  }

  render () {
    return (
      <Panel>
        <PanelHeader
          onClick={this._togglePanel}
          icon="glyphicon-list"
          panelIsActive={this.props.panelControls[constants.PANEL_CLIMATE_INDICATORS].show}>
          Climate Indicators
        </PanelHeader>
        {
          this.props.panelControls[constants.PANEL_CLIMATE_INDICATORS].show
            ? (
            <Table>
              <TableHeader fields={['Header']} />
              <TableBody rows={this._formatRows()} selectedIndex={-1} />
            </Table>
          )
            : null
        }

      </Panel>
    )
  }
}
export default ClimateIndicators
