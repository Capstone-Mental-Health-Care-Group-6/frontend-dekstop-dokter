import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { withdrawDoctor } from "../../../service/transaction";
import { searchFailed } from "../../../../image";

const TablePencairanSaldo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    withdrawDoctor((responseData) => {
      setData(responseData);
    });
  }, []);

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString("id-ID", options);
    return formattedDate.replace(".", ""); // Menghapus titik setelah singkatan bulan
  };

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

    if (rowData.status === "DONE") {
      statusClassName = "success-status";
    } else {
      statusClassName = "process-status";
    }

    return <span className={statusClassName}>{rowData.status}</span>;
  };

  return (
    <div className="mt-4 bg-white wrapper__table__saldo rounded-1">
      {data.length > 0 ? (
        <DataTable
          value={data}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          className="p-datatable-sm"
          rowClassName="table-row-height"
        >
          <Column
            header="ID Transaksi"
            field="id"
            headerClassName="table-header-border"
          />
          <Column
            header="Nomor Rekening"
            field="payment_number"
            headerClassName="table-header-border"
          />
          <Column
            header="Tanggal"
            field="date_confirmed"
            headerClassName="table-header-border"
            body={(rowData) => (
              <span>{formatDate(rowData.date_confirmed)}</span>
            )}
          />
          <Column
            header="Metode Pembayaran"
            field="payment_method"
            headerClassName="table-header-border"
          />
          <Column
            header="Nominal"
            field="balance_req"
            headerClassName="table-header-border"
          />
          <Column
            header="Status"
            field="status"
            body={statusBodyTemplate}
            headerClassName="table-header-border"
          />
        </DataTable>
      ) : (
        <div className="text-center mt-4">
          <img
            src={searchFailed}
            className="img-search-failed"
            alt="No data found"
          />
          <h2 className="h2-search-failed">Belum Ada Data Pencairan Saldo</h2>
        </div>
      )}
    </div>
  );
};

export default TablePencairanSaldo;
