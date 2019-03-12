import React, {Component} from 'react';
import {BootstrapTable} from 'react-bootstrap-table-next';
import  './SortTable.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


  

class SortTableNext extends Component {
    render() {
        const columns = [{
            dataField: 'symbol',
            text: 'Symbol'
          }];

        const { data } = this.props;
        return (
            <div>
                <BootstrapTable
                    keyField="symbol"
                    data={ data }
                    columns={ columns }  striped
  hover
  condensed/>
            </div>
      );
    }
  }
  export default SortTableNext;