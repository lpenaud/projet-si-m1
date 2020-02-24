import React from "react";
import Table from "./table";

export default class TableContainer extends Table {
  render() {
    return (
      <div className="table-container">
        {super.render()}
      </div>
    );
  }
}
