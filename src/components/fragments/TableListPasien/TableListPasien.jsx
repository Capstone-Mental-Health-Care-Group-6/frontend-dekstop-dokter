import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Button from "../../elements/Button/Button";

const TableListPasien = ({ data }) => {
  const userBodyTemplate = (rowData) => {
    return (
      <div className="d-flex align-items-center">
        <span>{rowData.nama}</span>
      </div>
    );
  };

  return (
    <div className="mt-3">
      <DataTable
        value={data}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        className="p-datatable-sm"
        rowClassName="table-row-height"
      >
        <Column
          header="Nama"
          body={userBodyTemplate}
          headerClassName="table-header-border"
          style={{ fontSize: "14px" }}
        />

        <Column
          header="keluhan"
          field="keluhan"
          headerClassName="table-header-border"
          style={{ fontSize: "14px" }}
        />

        <Column
          header="Via Layanan"
          field="viaLayanan"
          headerClassName="table-header-border"
          style={{ fontSize: "14px" }}
        />

        <Column
          body={(rowData) => (
            <Button
              className="btn btn-primary px-2 py-1 text-white"
              text="Lihat Detail"
            />
          )}
          header="Tindakan"
          headerClassName="table-header-border"
        />
      </DataTable>
    </div>
  );
};

export default TableListPasien;
