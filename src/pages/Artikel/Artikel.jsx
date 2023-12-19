import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import Button from "../../components/elements/Button/Button";
import "./Artikel.style.css";
import { FaPlus } from "react-icons/fa6";
import { dataArtikel } from "./dataArtikel";
import { artikelEmpty } from "../../../image";
import { NavLink, useNavigate } from "react-router-dom";
import Table from "../../components/fragments/Table/Table";
import ColumnTable from "../../components/ColumnTable/ColumnTable";
import { FilterMatchMode } from "primereact/api";
import { IoEllipsisVertical } from "react-icons/io5";
import ButtonSvg from "../../components/elements/Button/ButtonSvg";
import { getAllArticle } from "../../service/article";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import { useLogin } from "../../hooks/useLogin";

const Artikel = () => {
  useLogin();

  const navigate = useNavigate();

  const [artikel, setArtikel] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const storedDataLogin = JSON.parse(localStorage.getItem("dataLogin"));

    getAllArticle((res) => {
      const filteredArticles = res.data.filter(
        (item) => item.user_name === storedDataLogin
      );
      setArtikel(filteredArticles);
      setLoading(false);
    });
  }, []);

  const idNullToast = () =>
    toast.error("Id tidak ditemukan. Harap klik baris artikel dahulu", {
      duration: 4000,
      position: "bottom-center",
      style: {
        maxWidth: "700px",
        marginBottom: "5%",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  const tanggalBodyTemplate = (rowData) => {
    return (
      <div className="d-flex flex-column">
        <div className="fw-semibold mb-1">{rowData.status}</div>
        <div style={{ fontSize: "12px" }}>{rowData.tanggal}</div>
      </div>
    );
  };

  const aksiBodyTemplate = () => {
    return (
      <div className="btn">
        <button
          className="nav-link "
          data-bs-toggle="dropdown"
          role="button"
          aria-expanded="false"
        >
          <IoEllipsisVertical />
        </button>
        <div className="dropdown-menu dropdown-menu-end px-3 menu-aksi-artikel">
          <div className="bg-light rounded-3 my-2  dropdown-item div-lihat-artikel ">
            <Button
              text={"Lihat Artikel"}
              className={
                "bg-transparent border-0 fw-semibold btn-lihat-artikel"
              }
              onClick={() => {
                try {
                  navigate(`/dokter/artikel/detail/${selected.id}`);
                } catch {
                  idNullToast();
                }
              }}
            />
          </div>
          <div className="bg-light rounded-3 my-2  dropdown-item">
            <Button
              onClick={() => {
                try {
                  navigate(`/dokter/artikel/edit/${selected.id}`);
                } catch {
                  idNullToast();
                }
              }}
              // disabled={}
              // disabled={selected !== null && selected.status === 'Pending'}
              text={"Edit Artikel"}
              className={"bg-transparent border-0 fw-semibold btn-edit-artikel"}
            />
          </div>
          <div className="bg-light rounded-3 my-2  dropdown-item">
            <Button
              text={"Hapus Artikel"}
              disabled={selected !== null}
              className={
                "bg-transparent border-0 fw-semibold btn-hapus-artikel"
              }
              onClick={() => {
                try {
                  // console.log("error")
                } catch {
                  idNullToast();
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layouts>
      <h2 className="py-3 fw-bold">Daftar Artikel</h2>
      <div className="container rounded-2 py-3 artikel-background">
        <div className="d-flex align-items-center justify-content-between px-4 fw-semibold ">
          <div className=" d-flex align-items-center">
            <p className="m-0 data-artikel-text">Data Artikel</p>
          </div>
          <div>
            <NavLink to={"/dokter/artikel/tambah"}>
              <ButtonSvg
                type={"button"}
                id={"create-artikel-btn"}
                text={"Tambah Artikel"}
                className={
                  "button-create border-primary artikel-background py-2 px-3 rounded-2 border-1 fw-bold"
                }
                svg={<FaPlus />}
                svgClassName={
                  "d-flex flex-row align-items-center svg-button-create"
                }
              />
            </NavLink>
          </div>
        </div>
        <hr />
        {!loading ? (
          artikel.length > 0 ? (
            <Table
              value={artikel}
              selectionMode="single"
              dataKey="id"
              selection={selected}
              onSelectionChange={(e) => setSelected(e.value)}
            >
              <ColumnTable
                field="id"
                header="No"
                headerClassName="table-header-border-id"
              />
              <ColumnTable
                field="title"
                header="Judul"
                headerClassName="table-header-border-judul"
              />
              <ColumnTable
                field="user_name"
                header="Author"
                headerClassName="table-header-border-author"
              />
              <ColumnTable
                body={tanggalBodyTemplate}
                header="Status"
                headerClassName="table-header-border-status"
              />
              <ColumnTable
                body={aksiBodyTemplate}
                headerClassName="table-header-border-aksi"
              />
            </Table>
          ) : (
            <div className="h-100 d-flex flex-column justify-content-center align-items-center ">
              <img src={artikelEmpty} alt="artikel Empty Image" />
              <p className="my-3 fw-bold w-50 justify-content-center">
                Bagikan pengetahuan Anda untuk membantu orang lain melewati masa
                sulit.
              </p>
            </div>
          )
        ) : (
          <Skeleton height={60} count={6} />
        )}
      </div>
    </Layouts>
  );
};

export default Artikel;
