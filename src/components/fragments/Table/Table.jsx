import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import "primereact/resources/themes/lara-light-blue/theme.css"

function Table({
  value,
  children,
  selectionMode,
  dataKey,
  selection,
  onSelectionChange,
  onRowSelect,
  onRowUnselect,
  filters,
  globalFilterFields,
  emptyMessage,
  header
}) {
  return (
    <DataTable
    header={header}
      value={value}
      selectionMode={selectionMode}
      onRowUnselect={onRowUnselect}
      selection={selection}
      onSelectionChange={onSelectionChange}
      dataKey={dataKey}
      onRowSelect={onRowSelect}
      paginator
      rows={5}
      emptyMessage={emptyMessage}
      filters={filters}
      globalFilterFields={globalFilterFields}
      rowsPerPageOptions={[5, 10, 25, 50]}
      tableStyle={{ minWidth: "50rem" }}
      className="table-customers"
    >
      {children}
    </DataTable>
  );
}

export default Table;

