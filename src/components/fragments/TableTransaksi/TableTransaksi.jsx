import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import "./TableTransaksi.style.css";
import { useState } from "react";
import { searchFailed } from "../../../../image";
import { Link } from "react-router-dom";

const TableTransaksi = ({ data, searchValue }) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);

  const filteredData = data.filter((item) => {
    return (
      item.transaction_id.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.patient_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.method_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.created_at.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.price_result.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
      item.payment_type.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const userBodyTemplate = (rowData) => {
    return (
      <div className="d-flex align-item-center">
        <img src={rowData.patient_avatar} alt={rowData.namaPasien} height="32px" className="rounded-circle" />
        <span>{rowData.patient_name}</span>
      </div>
    );
  };

  const redirectToDetailPage = (rowData) => {
    if (rowData.payment_type === "manual") {
      return `/dokter/transaksi/manual/${rowData.user_id}`;
    } else {
      return `/dokter/transaksi/otomatis/${rowData.user_id}`;
    }
  };

  const renderCounselingType = (rowData) => {
    if (rowData.counseling_type === "A") {
      return "Paket Premium";
    } else {
      return "Paket Instan";
    }
  };

  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('id-ID', options);
    return formattedDate.replace('.', ''); // Menghapus titik setelah singkatan bulan
  };


  return (
    <>
      {filteredData.length > 0 ? (
        <DataTable
          value={filteredData}
          className="p-datatable-sm"
          rowClassName="table-row-height"
          first={first}
          rows={rows}
          paginator
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          onPage={onPageChange}
          rowsPerPageOptions={[5, 10, 15]}
          totalRecords={filteredData.length}
        >
          <Column
            header="ID"
            field="transaction_id"
            headerClassName="table-header-border"
          />
          <Column
            body={userBodyTemplate}
            header="Nama Pasien"
            headerClassName="table-header-border"
          />
          <Column
            header="Tanggal"
            field="created_at"
            headerClassName="table-header-border"
            body={(rowData) =>
              <span>{formatDate(rowData.created_at)}</span>}
          />
          <Column
            header="Paket Langganan"
            field="counseling_type"
            headerClassName="table-header-border"
            body={(rowData) => (
              <span>{renderCounselingType(rowData)}</span>
            )}
          />
          <Column
            header="Harga"
            field="price_result"
            headerClassName="table-header-border"
          />
          <Column
            header="Metode Pembayaran"
            field="payment_type"
            headerClassName="table-header-border"
            body={(rowData) => (
              <Link
                to={redirectToDetailPage(rowData)}
                className="text-decoration-none text-dark"
              >
                {rowData.payment_type}
              </Link>
            )}
          />
        </DataTable>
      ) : (
        <div className="text-center mt-4">
          <img
            src={searchFailed}
            className="img-search-failed"
            alt="No data found"
          />
          <h2 className="h2-search-failed">Tidak dapat menemukan data</h2>
        </div>
      )}
    </>
  );
};

export default TableTransaksi;
