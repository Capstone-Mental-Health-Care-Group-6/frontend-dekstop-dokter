import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";

const TablePencairanSaldo = ({ data }) => {
  const userBodyTemplate = (rowData) => {
    return (
      <div className="d-flex align-items-center">
        <img
          src={rowData.avatar}
          alt={rowData.userName}
          height="32px"
          className="me-2"
        />
        <span>{rowData.namaPasien}</span>
      </div>
    );
  };

  const statusBodyTemplate = (rowData) => {
    let statusClassName;

    if (rowData.status === "Sukses") {
      statusClassName = "success-status";
    } else if (rowData.status === "Proses") {
      statusClassName = "process-status";
    } else {
      statusClassName = "insuccess-status";
    }

    return <span className={statusClassName}>{rowData.status}</span>;
  };
  return (
    <div className="mt-4 bg-white wrapper__table__saldo rounded-1">
      <DataTable
        value={data}
        className="p-datatable-sm"
        rowClassName="table-row-height"
      >
        <Column
          header="ID Transaksi"
          field="idTransaksi"
          headerClassName="table-header-border"
        />
        <Column
          header="Nama Pasien"
          body={userBodyTemplate}
          headerClassName="table-header-border"
        />

        <Column
          header="Tanggal"
          field="tanggal"
          headerClassName="table-header-border"
        />
        <Column
          header="Paket Langganan"
          field="paketLangganan"
          headerClassName="table-header-border"
        />
        <Column
          header="Harga"
          field="harga"
          headerClassName="table-header-border"
        />
        <Column
          header="Status"
          field="status"
          body={statusBodyTemplate}
          headerClassName="table-header-border"
        />
      </DataTable>
    </div>
  );
};

export default TablePencairanSaldo;
