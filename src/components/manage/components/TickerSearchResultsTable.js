import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class TickerSearchResultsTable extends Component {
  addItem(index) {
    console.log(index);
    this.props.onSubmit(index);
  }
  addButton(cell) {
    return (
      <i
        className="mdc-icon-button material-icons md-12 orange600"
        onClick={() => this.addItem(cell)}
      >
        add_circle
      </i>
    );
  }
  render() {
    const { data } = this.props;
    const options = {
      onRowClick: function(row) {
        // alert(`You click row id: ${row._id}`);
        console.log(`You click row id: ${row._id}`);
      },
      noDataText: "Loading..."
    };

    return (
      <div className="searchtable">
        <BootstrapTable
          // ref="table"
          data={data}
          headerContainerClass="bstable bstable-header-bold"
          responsive
          striped
          bordered
          hover
          search
          pagination
          size="sm"
          version="4"
          options={options}
        >
          <TableHeaderColumn
            width="30%"
            dataField="ticker"
            isKey={true}
            dataSort={true}
            columnClassName="bstable"
          >
            Symbol
          </TableHeaderColumn>
          <TableHeaderColumn
            width="60%"
            dataField="name"
            dataSort={true}
            columnClassName="bstable"
          >
            Name
          </TableHeaderColumn>
          {/* <TableHeaderColumn width='20%' dataField='ticker' dataFormat={this.cellButton.bind(this)}>Add</TableHeaderColumn>                            */}
          <TableHeaderColumn
            width="10%"
            dataField="ticker"
            columnClassName="bstable bstable-icon"
            dataAlign="center"
            dataFormat={this.addButton.bind(this)}
          />
        </BootstrapTable>
      </div>
    );
  }
}

export default TickerSearchResultsTable;
