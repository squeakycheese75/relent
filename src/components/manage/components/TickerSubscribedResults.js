import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button} from 'react-bootstrap';
import  './TickerSearchResultsTable.css';


class TickerSubscribedResults extends Component {
    removeItem = (index) => {

        this.props.onSubmit(index)
    };
    cellButton(cell) {
        return (
           <Button   size="sm"
              type="button" 
              onClick={() => 
              this.removeItem(cell)  
            }
           >
           Remove
           </Button>
        )}
    render() {
        
     
      const { data } = this.props;
      
      var jList = [];
      for(var i in data){
        jList.push({ "ticker" : data[i]});
        }
        
      return (
        
        <div className="searchtable">
        
          <BootstrapTable ref='table' data={ jList } headerContainerClass='bstable bstable-header-bold' responsive striped bordered hover search size="sm" version='4' options={ { noDataText: 'Loading...' } }>
              <TableHeaderColumn width='20%' dataField='ticker' isKey={ true } dataSort={ true } columnClassName= 'bstable'>Symbol</TableHeaderColumn>              
              <TableHeaderColumn width='20%' dataField='ticker' dataFormat={this.cellButton.bind(this)}>Remove</TableHeaderColumn>                           
          </BootstrapTable>
        </div>
      );
    }
  }
  
  export default TickerSubscribedResults;