
import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import  './SortTable.css';


function columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
    return fieldValue < 0 ?  'td-column-price-down' :'td-column-price-up';
  }


class SortTable extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <BootstrapTable ref='table' data={ data } responsive striped bordered hover size="sm" version='4'>
            <TableHeaderColumn dataField='symbol' isKey={ true } dataSort={ true }>Symbol</TableHeaderColumn>
            <TableHeaderColumn dataField='companyName' dataSort={ true } filter={ { type: 'TextFilter', delay: 500 } }>Company Name</TableHeaderColumn>
            <TableHeaderColumn dataField='latestPrice'  dataSort={ true }>Price</TableHeaderColumn>
            <TableHeaderColumn dataField='change' columnClassName={ columnClassNameFormat }  dataSort={ true }>Change</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
export default SortTable;