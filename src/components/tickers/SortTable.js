
import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//import {Button} from 'react-bootstrap';
import  './SortTable.css';


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

function nameFormatter(cell, row) {
 return <div>
            <ul>
              <li className="name">{cell}</li>
              <li className="role">{row.name}</li>
            </ul>
        </div>
}


class SortTable extends Component {
  removeItem = (index) => {
    this.props.onSubmit(index)
  };

  removeButton(cell) {
      return (
          //<Button variant="danger" size="sm" className="mdc-icon-button material-icons md-12" onClick={() => this.removeItem(cell)}>highlight_off</Button>
          <i className="mdc-icon-button material-icons md-12 orange600" onClick={() => this.removeItem(cell)}>highlight_off</i>
      )};

  render() {
   
    const { data } = this.props;
    return (
      <div>
        <BootstrapTable ref='table' data={ data }  headerContainerClass='bstable' responsive striped bordered hover size="sm" version='4' options={ { noDataText: 'Loading...' } }>  
            {/* <TableHeaderColumn width='10%' dataField='_id' isKey={ true } dataSort={ true } columnClassName= 'bstable'>Symbol</TableHeaderColumn>     */}
            <TableHeaderColumn width='30%' dataField='_id'  isKey={ true } dataSort={ true }  columnClassName= 'bstable'  dataFormat={ nameFormatter }>Name</TableHeaderColumn>
            {/* <TableHeaderColumn width='10%' dataField='sector'  dataSort={ true }  columnClassName= 'bstable'>Sector</TableHeaderColumn> */}
            <TableHeaderColumn width='16%' dataField='last' dataSort={ true } columnClassName= 'bstable bstable-header-bold' >Price</TableHeaderColumn>            
            <TableHeaderColumn width='16%' dataField='open' dataFormat={ openFormatter } dataSort={ true } columnClassName= 'bstable bstable-header-bold' >Open</TableHeaderColumn>            
            <TableHeaderColumn width='25%' dataField='change' columnClassName={ columnClassNameFormat }  dataSort={ true } dataFormat={ priceChangeFormatter }>Change</TableHeaderColumn>            
            <TableHeaderColumn width='4%' dataField='_id' dataFormat={this.removeButton.bind(this)}></TableHeaderColumn>  
        </BootstrapTable>
      </div>
    );
  }
}
export default SortTable;