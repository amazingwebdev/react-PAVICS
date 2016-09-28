import React from 'react'
import Table, {TableHeader, SelectableTableRow} from '../../components/Table'
import classes from './../../components/Table/Table.scss'
class CriteriaSelection extends React.Component {
  static propTypes = {
    criteriaName: React.PropTypes.string.isRequired,
    variables: React.PropTypes.object.isRequired,
    selectedFacets: React.PropTypes.array.isRequired,
    addFacetKeyValue: React.PropTypes.func.isRequired,
    removeFacetKeyValue: React.PropTypes.func.isRequired,
    fetchCatalogDatasets: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._onSelectRow = this._onSelectRow.bind(this);
  }

  _onSelectRow(event) {
    if (event.target.checked) {
      this.props.addFacetKeyValue(this.props.criteriaName, event.target.value);
    }
    else {
      this.props.removeFacetKeyValue(this.props.criteriaName, event.target.value);
    }
    this.props.fetchCatalogDatasets();
  }

  _formatRows() {
    return this.props.variables.values.map((value) => {
      return [
        value
      ];
    });
  }

  render() {
    let headers = [
      "",
      this.props.criteriaName,
    ];
    return (
      <div>
        <Table>
          <TableHeader fields={headers}/>
          <tbody className={classes['overflowable']}>
          {
            this._formatRows().map((row, i) => {
              let checked = false;
              this.props.selectedFacets.map(x => {
                if (x.value === row[0]) {
                  checked = true;
                }
              });
              return (
                <SelectableTableRow
                  key={i}
                  checked={checked}
                  value={row[0]}
                  onChangeCb={this._onSelectRow}
                  fields={row}/>
              );
            })
          }
          </tbody>
        </Table>
      </div>

    );
  }
}
export default CriteriaSelection
