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
    "Anxiety",
    "Depresi",
    "Emosi",
    "Kecemasan",
    "Stress",
    "Tips",
    "Umum",
  ]);
  const [artikel, setArtikel] = useState("");
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
              <div className="container-fluid bg-light py-5 rounded-2">
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
                    value={artikel}
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
                    className={
                      "btn btn-light me-3 btn-draft-artikel fw-semibold"
                    }
                    text={"Simpan sebagai Draft"}
                  />
                </div>
              </div>
            </form>
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
                    <div className="col text-status text-end">
                      <Button
                        className={
                          "border-0 bg-transparent button-status-artikel p-0"
                        }
                        text={"Publik"}
                      />
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
                    checked={index == checkedIndex}
                    onChange={() => handleCheckboxChange(index)}
                    value={id}
                    classNameLabel={"fw-semibold label-artikel-text"}
                    disabled={checkedIndex !== null && index !== checkedIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default TambahArtikel;
