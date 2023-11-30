import React, { useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import Label from "../../components/elements/Input/Label";
import Input from "../../components/elements/Input/Input";
import Reactquill from "../../components/elements/ReactQuill/Reactquill";
import "./tambahArtikel.style.css";
import InputSelect from "../../components/elements/Input/InputSelect";
import Checkbox from "../../components/elements/Input/Checkbox";
import Button from "../../components/elements/Button/Button";

const TambahArtikel = () => {
  const [showTambahKategori, setShowTambahKategori] = useState(false);
  const [listCheckbox, setListCheckbox] = useState([
    "Kesehatan Mental",
    "Anxiety",
    "Depresi",
  ]);
  const [kategoriBaru, setKategoriBaru] = useState("");

  const tambahKategori = () => {
    if (kategoriBaru.trim() !== "") {
      setListCheckbox([...listCheckbox, kategoriBaru]);
      setKategoriBaru("");
    }
  };

  return (
    <Layouts>
      <h2 className="py-3 fw-bold">Tambah Artikel</h2>
      <div className="container">
        <div className="row">
          <div className="col-9 px-3">
            <form action="">
              <Label htmlFor={"judul-artikel"}>
                <p className="fw-bold m-0">Judul Artikel</p>
              </Label>
              <Input
                id={"judul-artikel"}
                name={"judul-artikel"}
                type={"text"}
                className={"rounded-3 border-solid border-1 border-dark"}
              />
            </form>
            <div className="container bg-white my-3 px-0">
              <Reactquill />
            </div>
          </div>
          <div className="col-3">
            <div className="container bg-light rounded-2 py-4 my-4">
              <p className="fw-semibold pb-2 border-bottom border-2">
                Status & Visibilitas
              </p>
              <div>
                <div className="grid">
                  <div className="row justify-content-center align-items-center g-2 mb-2">
                    <div className="col text-status">Visibilitas</div>
                    <div className="col text-status text-end"><Button className={"border-0 bg-transparent button-status-artikel p-0"} text={"Publik"}/></div>
                  </div>
                  <div className="row justify-content-center align-items-center g-2 mb-2">
                    <div className="col text-status ">Waktu Terbit</div>
                    <div className="col text-status text-end pe-2">Segera</div>
                  </div>
                  <div className="row justify-content-center align-items-center g-2">
                    <div className="col text-status">Author</div>
                    <div className="col text-status text-end pe-2">Dr. Helen</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container bg-light rounded-2 py-4 ">
              <p className="fw-semibold pb-2 border-bottom border-2">
                Kategori
              </p>
              <div>
                {listCheckbox.map((id, index) => (
                  <Checkbox
                    index={index}
                    text={id}
                    id={"checkBox-artikel"}
                    value={id}
                    classNameLabel={"fw-semibold label-artikel-text"}
                  />
                ))}

                {showTambahKategori ? (
                  <form className="d-flex my-2">
                    <Input
                      type={"text"}
                      className={"border-solid border-1 py-0 px-1"}
                      value={kategoriBaru}
                      onChange={(e) => {
                        setKategoriBaru(e.target.value);
                      }}
                    />
                    <Button
                      text={"Tambah"}
                      className={
                        "border-0 bg-primary add-kategori mx-1 rounded-3 py-1"
                      }
                      onClick={tambahKategori}
                    />
                  </form>
                ) : (
                  <div></div>
                )}
                <Button
                  type={"button"}
                  className={
                    "border-0 bg-transparent button-tambah-kategori mt-4"
                  }
                  text={"Tambah Kategori Baru"}
                  onClick={() => {
                    setShowTambahKategori(!showTambahKategori);
                    console.log(showTambahKategori);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default TambahArtikel;
