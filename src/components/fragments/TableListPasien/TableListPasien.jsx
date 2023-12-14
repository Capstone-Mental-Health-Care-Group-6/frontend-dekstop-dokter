import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Button from "../../elements/Button/Button";
import ModalDetailPasien from "../Modal/ModalDetailPasien";
import { profilDetailPasien } from "../../../../image";
import { dataPasien } from "../../DataComponents/dataComponents";

const TableListPasien = ({ data, onDataChanged }) => {
  const [selectedPasienId, setSelectedPasienId] = useState(null);

  const handleLihatDetail = (rowData) => {
    setSelectedPasienId(rowData.id);
  };

  const userBodyTemplate = (rowData) => {
    return (
      <div className="d-flex align-items-center">
        <span>{rowData.name_patient}</span>
      </div>
    );
  };

  // useEffect(() => {
  //   // Pemicu re-render ketika data berubah
  //   onDataChanged();
  // }, [data]);

  return (
    <>
      <ModalDetailPasien
        id={"modal-lihat-detail"}
        size={"modal-lg"}
        selectedPasienId={selectedPasienId}
      ></ModalDetailPasien>

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
            header="Keluhan"
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
                bsTogle={"modal"}
                bsTarget={"#modal-lihat-detail"}
                onClick={() => handleLihatDetail(rowData)}
              />
            )}
            header="Tindakan"
            headerClassName="table-header-border"
          />
        </DataTable>
      </div>
    </>
  );
};

export default TableListPasien;
