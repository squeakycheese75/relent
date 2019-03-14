
import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import  './SortTable.css';


function columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
    return fieldValue < 0 ?  'td-column-price-down td-column-size' :'td-column-price-up td-column-size';
  }


function priceFormatter(cell, row) {
  var movement = ((row.change / (row.latestPrice + row.change)) * 100).toFixed(2);
  return cell > 0 ? `+${cell}<i class="material-icons vertical-align-middle">arrow_drop_up</i> (${movement}%)`  : `${cell}<i class="material-icons vertical-align-middle">arrow_drop_down</i> (${movement}%)`;
}


class SortTable extends Component {
  render() {
   
    const { data } = this.props;
    return (
      <div>
        <BootstrapTable ref='table' data={ data }  headerContainerClass='bstable bstable-header-bold' responsive striped bordered hover size="sm" version='4' options={ { noDataText: 'Loading...' } }>
            <TableHeaderColumn width='20%' dataField='symbol' isKey={ true } dataSort={ true } columnClassName= 'bstable'>Symbol</TableHeaderColumn>    
            <TableHeaderColumn width='40%' dataField='companyName'  dataSort={ true }  columnClassName= 'bstable'>Company Name</TableHeaderColumn>
            <TableHeaderColumn width='20%' dataField='latestPrice' dataSort={ true } columnClassName= 'bstable bstable-header-bold' >Price</TableHeaderColumn>            
            <TableHeaderColumn width='20%' dataField='change' columnClassName={ columnClassNameFormat }  dataSort={ true } dataFormat={ priceFormatter }>Change</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
export default SortTable;