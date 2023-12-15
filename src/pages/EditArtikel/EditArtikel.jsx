import './EditArtikel.style.css'
import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import Label from "../../components/elements/Input/Label";
import Input from "../../components/elements/Input/Input";
import Reactquill from "../../components/elements/ReactQuill/Reactquill";
import InputSelect from "../../components/elements/Input/InputSelect";
import Checkbox from "../../components/elements/Input/Checkbox";
import Button from "../../components/elements/Button/Button";
import toast, { Toaster } from "react-hot-toast";
import { createArticle, getAllArticle, getAllArticleCategories } from "../../service/article";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';


const EditArtikel = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [statusChecked, setStatusChecked] = useState("Publik");
  const [categories, setCategories] = useState([]);

  const [artikel, setArtikel] = useState({
    category_id: "",
    user_name: "",
    title: "",
    content: "",
    thumbnail: "",
    status: "pending",
  });

  const [errorMsg, setErrorMsg] = useState({
    form: "",
    title: "",
    content: "",
    thumbnail: "",
  });

  const [thumbnail, setThumbnail] = useState({
    gambar: "",
  });

  useEffect(() => {
    setLoading(true);
    getAllArticleCategories((res) => {
      setCategories(res.data);
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    getAllArticle((res) => {
      setData(res.data);
    });
    setLoading(false);
  }, []);

  const params = useParams();
  const id = params.id;

  const selectArtikel = (id) => {
    return data.filter((item) => item.id == id);
  };

  console.log(selectArtikel(id)[0])

  // setData(selectArtikel(id))

  return (
    <Layouts>
    <h2 className="py-3 fw-bold">Edit Artikel</h2>
    <div className="container">
      <div className="row">
        <div className="col-9 px-3">
          {selectArtikel(id).length !== 0 ?  <div>
            <form action="" id="form" className="needs-validation">
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
                value={selectArtikel(id)[0].title}
                className={"rounded-3 border-solid border-1"}
                // onChange={(e) => {
                //   if (e.target.value == null || e.target.value === "") {
                //     setErrorMsg((old) => {
                //       return {
                //         ...old,
                //         title: "Isi konten tidak boleh kosong!",
                //       };
                //     });
                //   } else {
                //     setErrorMsg((old) => {
                //       return {
                //         ...old,
                //         title: "",
                //       };
                //     });
                //   }
                //   setArtikel((old) => {
                //     return {
                //       ...old,
                //       title: e.target.value,
                //     };
                //   });
                //   // console.log(artikel)
                // }}
              />
              <div className="text-danger mb-0 my-2">
                <p>{errorMsg.title}</p>
              </div>

              <Label htmlFor={"deskripsi-artikel"}>
                <p className="fw-bold mt-4 mb-0">Deskripsi Artikel</p>
              </Label>
              <div className="container bg-white mb-3 px-0">
                <Reactquill
                  // value={artikel}
                  id={"deksripsi-artikel"}
                  value={selectArtikel(id)[0].content}
                  // onChange={(value) => {
                  //   if (value == "<p><br></p>" || value === "") {
                  //     setErrorMsg((old) => {
                  //       return {
                  //         ...old,
                  //         content: "Isi konten tidak boleh kosong!",
                  //       };
                  //     });
                  //   } else {
                  //     setErrorMsg((old) => {
                  //       return {
                  //         ...old,
                  //         content: "",
                  //       };
                  //     });
                  //   }
                  //   setArtikel((old) => {
                  //     return {
                  //       ...old,
                  //       content: value,
                  //     };
                  //   });
                  //   // console.log(artikel)
                  // }}
                />
              </div>
              <div>
                <p className="text-danger mb-0 my-1">{errorMsg.content}</p>
              </div>
              <Label htmlFor={"link-video-artikel"}>
                <p className="fw-bold mt-3 mb-0">Link Video Youtube</p>
              </Label>
              <Input
                id={"link-video-artikel"}
                name={"link-video-artikel"}
                type={"text"}
                value={artikel.linkVideo}
                className={"rounded-3 border-solid border-1"}
                // onChange={(e) => {
                //   setArtikel((old) => {
                //     return {
                //       ...old,
                //       linkVideo: e.target.value,
                //     };
                //   });
                // }}
              />
              <Label htmlFor={"thumbnail-artikel"}>
                <p className="fw-bold mt-4 mb-0">Thumbnail Artikel</p>
              </Label>
              <img src={selectArtikel(id)[0].thumbnail} width={100} className="mt-4 d-block" />
              <Input
                id={"thumbnail-artikel"}
                name={"thumbnail-artikel"}
                type={"file"}
                accept={".jpg, .jpeg, .png"}
                className={"rounded-3 border-solid border-1 mt-3  "}
                // onChange={(e) => {
                //   const allowedFormats = ["jpg", "jpeg", "png"];
                //   const selectedFile = e.target.files[0];

                //   // Mendapatkan ekstensi file
                //   const fileExtension = selectedFile.name
                //     .split(".")
                //     .pop()
                //     .toLowerCase();

                //   if (allowedFormats.includes(fileExtension)) {
                //     setErrorMsg((old) => {
                //       return {
                //         ...old,
                //         thumbnail: "",
                //       };
                //     });
                //     setArtikel((old) => {
                //       console.log(selectedFile)
                //       return {
                //         ...old,
                //         thumbnail:selectedFile,
                //       };
                //     });
                //     setThumbnail((old) => {
                //       return {
                //         ...old,
                //         gambar: URL.createObjectURL(selectedFile),
                //       };
                //     });
                //   } else {
                //     setErrorMsg((old) => {
                //       return {
                //         ...old,
                //         thumbnail:
                //           "Format file tidak diizinkan. Pilih file dengan format jpg, jpeg, atau png",
                //       };
                //     });
                //     // Menampilkan pesan kesalahan jika format tidak diizinkan
                //     console.error(
                //       "Format file tidak diizinkan. Pilih file dengan format jpg, jpeg, atau png"
                //     );
                //   }
                // }}
              />
              <p className="text-deskripsi-thumbnail">
                Rekomendasi ukuran gambar: 300 x 450. Format gambar: jpg, png,
                jpeg
              </p>
              <p className="text-danger">{errorMsg.thumbnail}</p>
            </div>
            <div className="d-flex m-3 button-form-artikel">
              <div>
                <Button
                  type={"button"}
                  // onClick={(e) => {
                  //   handleNull();
                  //   setArtikel((old) => {
                  //     return {
                  //       ...old,
                  //       user_name: storedDataLogin,
                  //       status: "pending",
                  //     };
                  //   });
                  //   if (errorMsg.form == "") {
                  //     dataArtikel.push(artikel);
                  //     handleCreateArtikel(e)
                  //   }
                  // }}
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
                  // onClick={(e) => {
                  //   setArtikel((old) => {
                  //     return {
                  //       ...old,
                  //       user_name: storedDataLogin,
                  //       status: "draft",
                  //     };
                  //   });
                  // }}
                />
              </div>
            </div>
          </form>
          </div> : <div>
            <p>lagi loading</p>
          </div> }
        
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
                            className="btn-close"
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
                              // onChange={(e) => {
                              //   setStatusChecked(e.target.value);
                              //   setArtikel((old) => {
                              //     return {
                              //       ...old,
                              //       visibilitas: "Publik",
                              //     };
                              //   });
                              // }}
                            />
                            <label
                              className="form-check-label fw-bold"
                              htmlFor="visibilitas-publik"
                            >
                              Publik
                            </label>
                            <p
                              style={{ fontSize: "12px" }}
                              className="text-wrap"
                            >
                              Dapat dilihat oleh semua orang
                            </p>
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
                              // onChange={(e) => {
                              //   setStatusChecked(e.target.value);
                              //   setArtikel((old) => {
                              //     return {
                              //       ...old,
                              //       visibilitas: "Privat",
                              //     };
                              //   });
                              // }}
                            />
                            <label
                              className="form-check-label fw-bold"
                              htmlFor="visibilitas-privat"
                            >
                              Privat
                            </label>
                            <p
                              style={{ fontSize: "12px" }}
                              className="text-wrap"
                            >
                              Hanya dapat dilihat oleh admin dan editor situs
                            </p>
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
              {!loading ? (
                categories.length > 0 ? (
                  <div>
                     {/* {categories.map((item) => (
                <Checkbox
                key={item.id}
                  index={item.id}
                  text={item.name}
                  id={"checkBox-artikel"}
                  checked={item.id == checkedIndex}
                  onChange={() => handleCheckboxChange(item.id)}
                  // index + 1 karena index ini dimulai dari 0. jadi supaya sesuai sama erd kategori di erd, harus ditambah 1
                  value={item.id}
                  classNameLabel={"fw-semibold label-artikel-text"}
                  disabled={checkedIndex !== null && (item.id) !== checkedIndex}
                />
              ))} */}
                  </div>
                ) : (
                  <div>
                    <p>Kategori kosong</p>
                  </div>
                )
              ) : (
                <div>spinner</div>
              )}
             
            </div>
            <p style={{ fontSize: "10px" }} className="text-muted">
              <span className="text-danger">*</span>Kategori hanya dapat
              dipilih salah satu
            </p>
          </div>
        </div>
      </div>
    </div>
    <Toaster />
  </Layouts>
  )
}

export default EditArtikel