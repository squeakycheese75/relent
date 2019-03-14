
import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import  './SortTable.css';

//const FIXED_DP = '2'


function columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
    return fieldValue < 0 ?  'td-column-price-down td-column-size' :'td-column-price-up td-column-size';
  }

function openFormatter(cell, row){
  // if( !cell ) {
  //   return `+${row.symbol}` + (parseFloat(row.last) + parseFloat(row.change)).toFixed(2);
  // }
  // return `+${row.symbol}` + cell;
    if( !cell ) {
    return (parseFloat(row.last) + parseFloat(row.change)).toFixed(2);
  }
  return cell;
}

function priceChangeFormatter(cell, row) {
  var movement = ((parseFloat(row.change) / (parseFloat(row.last) + parseFloat(row.change))) * 100).toFixed(2);
  return cell > 0 ? `+${cell}<i class="material-icons vertical-align-middle">arrow_drop_up</i> (${movement}%)`  : `${cell}<i class="material-icons vertical-align-middle">arrow_drop_down</i> (${movement}%)`;
}

//dataFormat={ priceFormatter }
class SortTable extends Component {
  render() {
   
    const { data } = this.props;
    return (
      <div>
        <BootstrapTable ref='table' data={ data }  headerContainerClass='bstable bstable-header-bold' responsive striped bordered hover size="sm" version='4' options={ { noDataText: 'Loading...' } }>
            <TableHeaderColumn width='10%' dataField='_id' isKey={ true } dataSort={ true } columnClassName= 'bstable'>Symbol</TableHeaderColumn>    
            <TableHeaderColumn width='30%' dataField='name'  dataSort={ true }  columnClassName= 'bstable'>Company Name</TableHeaderColumn>
            {/* <TableHeaderColumn width='10%' dataField='sector'  dataSort={ true }  columnClassName= 'bstable'>Sector</TableHeaderColumn> */}
            <TableHeaderColumn width='20%' dataField='last' dataSort={ true } columnClassName= 'bstable bstable-header-bold' >Price</TableHeaderColumn>            
            <TableHeaderColumn width='20%' dataField='open' dataFormat={ openFormatter } dataSort={ true } columnClassName= 'bstable bstable-header-bold' >Open</TableHeaderColumn>            
            <TableHeaderColumn width='20%' dataField='change' columnClassName={ columnClassNameFormat }  dataSort={ true } dataFormat={ priceChangeFormatter }>Change</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
export default SortTable;