import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import "./TableTransaksi.style.css"
import { useState } from "react"
import { searchFailed } from "../../../../image"
import { Link } from "react-router-dom"

const TableTransaksi = ({ data, searchValue }) => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);

    const filteredData = data.filter((user) => {
        return (
            user.id.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.namaPasien.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.paketPelanggan.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.tanggal.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.harga.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.metodePembayaran.toLowerCase().includes(searchValue.toLowerCase())
        )
    })

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const userBodyTemplate = (rowData) => {
        return (
            <div className="d-flex align-item-center">
                <img src={rowData.avatar} alt={rowData.namaPasien} height="32px" />
                <span>{rowData.namaPasien}</span>

            </div>
        )
    }

    const redirectToDetailPage = (rowData) => {
        if (rowData.jenisTransaksi === "manual") {
            return `/dokter-transaksi/detail-transaksi-manual/${rowData.id}`;
        } else {
            return `/dokter-transaksi/detail-transaksi-otomatis/${rowData.id}`;
        }
    }
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
                    totalRecords={data.length}
                >
                    <Column
                        header="ID"
                        field="id"
                        headerClassName="table-header-border"
                    />
                    <Column
                        body={userBodyTemplate}
                        header="Nama Pasien"
                        headerClassName="table-header-border"
                    />
                    <Column
                        header="Tanggal"
                        field="tanggal"
                        headerClassName="table-header-border"
                    />
                    <Column
                        header="Paket Pelanggan"
                        field="paketPelanggan"
                        headerClassName="table-header-border"
                    />
                    <Column
                        header="Harga"
                        field="harga"
                        headerClassName="table-header-border"
                    />
                    <Column
                        header="Metode Pembayaran"
                        field="metodePembayaran"
                        headerClassName="table-header-border"
                        body={(rowData) => (
                            <Link to={redirectToDetailPage(rowData)} className="text-decoration-none text-dark">
                                {rowData.metodePembayaran}
                            </Link>
                        )}
                    />
                </DataTable>
            ) : (
                <div className="text-center mt-4">
                    <img src={searchFailed} className='img-search-failed' alt="No data found" />
                    <h2 className='h2-search-failed'>
                        Tidak dapat menemukan data
                    </h2>
                </div>
            )}

        </>
    );
};

export default TableTransaksi