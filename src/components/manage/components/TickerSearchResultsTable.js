import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import  './TickerSearchResultsTable.css';
import { Button } from 'react-bootstrap';


class TickerSearchResultsTable extends Component {
    addItem = (index) => {
        this.props.onSubmit(index)
    };
    cellButton(cell) {
        return (
           <Button 
              type="button" 
              onClick={() => 
              this.addItem(cell)  
            }
           >
           Add
           </Button>
        )}
    render() {
        
     
      const { data } = this.props;
      return (
        <div className="searchtable">
          <BootstrapTable ref='table' data={ data } headerContainerClass='bstable bstable-header-bold' responsive striped bordered hover search size="sm" version='4' options={ { noDataText: 'Loading...' } }>
              <TableHeaderColumn width='20%' dataField='symbol' isKey={ true } dataSort={ true } columnClassName= 'bstable'>Symbol</TableHeaderColumn>              
              <TableHeaderColumn width='40%' dataField='name'  dataSort={ true }  columnClassName= 'bstable'>Company Name</TableHeaderColumn> 
              <TableHeaderColumn width='20%' dataField='symbol' dataFormat={this.cellButton.bind(this)}>Add</TableHeaderColumn>                           
          </BootstrapTable>
        </div>
      );
    }
  }
  
  export default TickerSearchResultsTable;