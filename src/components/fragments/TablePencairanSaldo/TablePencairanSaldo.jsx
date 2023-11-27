import { DataTable } from "primereact/datatable";
import React from "react";

const TablePencairanSaldo = ({ data }) => {
  return (
    <div>
      <DataTable value={data}></DataTable>
    </div>
  );
};

export default TablePencairanSaldo;
