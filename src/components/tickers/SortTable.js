import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./SortTable.css";
//import styles from "./sortTable-styles.js";

function columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
  return fieldValue < 0
    ? "td-column-price-down td-column-size"
    : "td-column-price-up td-column-size";
}

function openFormatter(cell, row) {
  // if( !cell ) {
  //   return `+${row.symbol}` + (parseFloat(row.last) + parseFloat(row.change)).toFixed(2);
  // }
  // return `+${row.symbol}` + cell;
  if (!cell) {
    return (parseFloat(row.last) + parseFloat(row.change)).toFixed(2);
  }
  return cell;
}

function priceChangeFormatter(cell, row) {
  var movement = (
    (parseFloat(row.change) / (parseFloat(row.last) + parseFloat(row.change))) *
    100
  ).toFixed(2);

  // return cell > 0
  //   ? `+${cell}<i class="material-icons vertical-align-middle">arrow_drop_up</i> (${movement}%)`
  //   : `${cell}<i class="material-icons vertical-align-middle">arrow_drop_down</i> (${movement}%)`;
  return (
    <div>
      <ul>
        <li className="name">{cell}</li>
        <li className="details">({movement}%)</li>
      </ul>
    </div>
  );
}

function nameFormatter(cell, row) {
  return (
    <div>
      <ul>
        <li className="name">{cell}</li>
        <li className="details">{row.name}</li>
      </ul>
    </div>
  );
}

// function onSelectRow(row, isSelected, e) {
//   if (isSelected) {
//     alert(`You just selected '${row["name"]}'`);
//   }
// }

class SortTable extends Component {
  removeItem = index => {
    this.props.onSubmit(index);
  };

  removeButton(cell) {
    return (
      <i
        className="mdc-icon-button material-icons md-12 orange600"
        onClick={() => this.removeItem(cell)}
      >
        {/* highlight_off */}
        delete
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
      <div>
        <BootstrapTable
          data={data}
          headerContainerClass="bstable"
          striped
          hover
          condensed
          size="sm"
          version="4"
          //selectRow={selectRowProp}
          options={options}
        >
          <TableHeaderColumn
            width="30%"
            dataField="_id"
            isKey={true}
            dataSort={true}
            //bordered={true}
            columnClassName="bstable"
            dataFormat={nameFormatter}
          >
            Name
          </TableHeaderColumn>
          {/* <TableHeaderColumn width='10%' dataField='sector'  dataSort={ true }  columnClassName= 'bstable'>Sector</TableHeaderColumn> */}
          <TableHeaderColumn
            width="16%"
            dataField="last"
            dataSort={true}
            columnClassName="bstable bstable-header-bold"
          >
            Price
          </TableHeaderColumn>
          <TableHeaderColumn
            width="16%"
            dataField="open"
            dataFormat={openFormatter}
            dataSort={true}
            columnClassName="bstable bstable-header-bold"
          >
            Open
          </TableHeaderColumn>
          <TableHeaderColumn
            width="17%"
            dataField="change"
            columnClassName={columnClassNameFormat}
            dataSort={true}
            dataFormat={priceChangeFormatter}
          >
            Change
          </TableHeaderColumn>
          <TableHeaderColumn
            width="7%"
            dataField="_id"
            columnClassName="bstable bstable-icon"
            dataAlign="center"
            dataFormat={this.removeButton.bind(this)}
          />
        </BootstrapTable>
      </div>
    );
  }
}
export default SortTable;
