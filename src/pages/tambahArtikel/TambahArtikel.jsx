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
  const [statusChecked, setStatusChecked] = useState("Publik");
  const [listCheckbox, setListCheckbox] = useState([
    "Anxiety",
    "Depresi",
    "Emosi",
    "Kecemasan",
    "Stress",
    "Tips",
    "Umum",
  ]);
  const [artikel, setArtikel] = useState({
    judul: "",
    deskripsi: "",
    linkVideo: "",
    thumbnail: ""
  });
  const [thumbnail, setThumbnail] = useState({
    gambar: "",
  });

  const [checkedIndex, setCheckedIndex] = useState(null);

  const handleCheckboxChange = (index) => {
    setCheckedIndex(index === checkedIndex ? null : index);
  };



  return (
    <Layouts>
      <h2 className="py-3 fw-bold">Tambah Artikel</h2>
      <div className="container">
        <div className="row">
          <div className="col-9 px-3">
            <form action="">
              <div
                className="container-fluid py-5 rounded-2"
                style={{ backgroundColor: "white" }}
              >
                <Label htmlFor={"judul-artikel"}>
                  <p className="fw-bold m-0">Judul Artikel</p>
                </Label>
                <Input
                  id={"judul-artikel"}
                  name={"judul-artikel"}
                  type={"text"}
                  className={"rounded-3 border-solid border-1"}
                />

                <Label htmlFor={"deskripsi-artikel"}>
                  <p className="fw-bold mt-4 mb-0">Deskripsi Artikel</p>
                </Label>
                <div className="container bg-white mb-3 px-0">
                  <Reactquill
                    // value={artikel}
                    id={"deksripsi-artikel"}
                    onChange={(value) => {
                      console.log(value);
                    }}
                  />
                </div>
                <Label htmlFor={"link-video-artikel"}>
                  <p className="fw-bold mt-3 mb-0">Link Video Youtube</p>
                </Label>
                <Input
                  id={"link-video-artikel"}
                  name={"link-video-artikel"}
                  type={"text"}
                  className={"rounded-3 border-solid border-1"}
                />
                <img src={thumbnail.gambar} width={100} className="mt-4" />
                <Label htmlFor={"thumbnail-artikel"}>
                  <p className="fw-bold mt-4 mb-0">Thumbnail Artikel</p>
                </Label>
                <Input
                  id={"thumbnail-artikel"}
                  name={"thumbnail-artikel"}
                  type={"file"}
                  className={"rounded-3 border-solid border-1"}
                  onChange={(e) => {
                    console.log(e.currentTarget.files);
                    setThumbnail((old) => {
                      return {
                        ...old,
                        gambar: URL.createObjectURL(e.target.files[0]),
                      };
                    });
                    console.log(thumbnail.gambar);
                  }}
                />
                <p className="text-deskripsi-thumbnail">
                  Rekomendasi ukuran gambar: 300 x 450. Format gambar: jpg, png,
                  jpeg
                </p>
              </div>
              <div className="d-flex m-3 button-form-artikel">
                <div>
                  <Button
                    type={"submit"}
                    className={
                      "btn btn-primary me-3 btn-upload-artikel fw-semibold"
                    }
                    id={"button-upload-artikel"}
                    text={"Unggah Artikel"}
                  />
                </div>
                <div>
                  <Button
                    type={"button"}
                    style={{ backgroundColor: "white" }}
                    className={"btn me-3 btn-draft-artikel fw-semibold"}
                    text={"Simpan sebagai Draft"}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-3">
            <div
              className="container  rounded-2 py-4 my-4"
              style={{ backgroundColor: "white" }}
            >
              <p className="fw-semibold pb-2 border-bottom border-2">
                Status & Visibilitas
              </p>
              <div>
                <div className="grid">
                  <div className="row justify-content-center align-items-center g-2 mb-2">
                    <div className="col text-status">Visibilitas</div>
                    <div className="col text-status text-end text-end pe-2">
                      <div className="btn m-0 p-0">
                        <button
                          className="nav-link "
                          data-bs-toggle="dropdown"
                          role="button"
                          aria-expanded="false"
                        >
                          <span
                            className="m-0 text-primary"
                            style={{ fontSize: "12px" }}
                          >
                            {statusChecked}
                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end px-3 menu-aksi-artikel">
                          <div className="d-flex justify-content-between">
                            <p className="fw-semibold">Visibilitas</p>
                            <button
                              type="button"
                              class="btn-close"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div>
                            <p className="text-status">
                              Kontrol bagaimana postingan ini dilihat.
                            </p>
                          </div>
                          <div className=" rounded-3 my-2  dropdown-item div-lihat-artikel ">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="visibilitas-artikel"
                                id="visibilitas-publik"
                                value="Publik"
                                onChange={(e)=> {
                                  setStatusChecked(e.target.value)
                                }}
                              />
                              <label
                                className="form-check-label fw-bold"
                                for="visibilitas-publik"
                              >
                               Publik
                              </label>
                              <p style={{fontSize: "12px"}} className="text-wrap">Dapat dilihat oleh semua orang</p>
                            </div>
                          </div>
                          <div className=" rounded-3 my-2  dropdown-item div-lihat-artikel ">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="visibilitas-artikel"
                                id="visibilitas-privat"
                                value="Privat"
                                onChange={(e)=> {
                                  setStatusChecked(e.target.value)
                                }}
                              />
                              <label
                                className="form-check-label fw-bold"
                                for="visibilitas-privat"
                              >
                               Privat
                              </label>
                              <p style={{fontSize: "12px"}} className="text-wrap">Hanya dapat dilihat oleh admin dan editor situs</p>
                            </div>
                          </div>
                      
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center align-items-center g-2 mb-2">
                    <div className="col text-status ">Waktu Terbit</div>
                    <div className="col text-status text-end pe-2">Segera</div>
                  </div>
                  <div className="row justify-content-center align-items-center g-2">
                    <div className="col text-status">Author</div>
                    <div className="col text-status text-end pe-2">
                      Dr. Helen
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="container rounded-2 py-4 "
              style={{ backgroundColor: "white" }}
            >
              <p className="fw-semibold pb-2 border-bottom border-2">
                Kategori
              </p>
              <div>
                {listCheckbox.map((id, index) => (
                  <Checkbox
                    index={index}
                    text={id}
                    id={"checkBox-artikel"}
                    checked={index == checkedIndex}
                    onChange={() => handleCheckboxChange(index)}
                    value={id}
                    classNameLabel={"fw-semibold label-artikel-text"}
                    disabled={checkedIndex !== null && index !== checkedIndex}
                  />
                ))}
              </div>
              <p style={{fontSize: "10px"}} className="text-muted" ><span className="text-danger">*</span>Kategori hanya dapat dipilih salah satu</p>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default TambahArtikel;
