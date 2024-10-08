import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import Label from "../../components/elements/Input/Label";
import Input from "../../components/elements/Input/Input";
import Reactquill from "../../components/elements/ReactQuill/Reactquill";
import "./tambahArtikel.style.css";
import InputSelect from "../../components/elements/Input/InputSelect";
import Checkbox from "../../components/elements/Input/Checkbox";
import Button from "../../components/elements/Button/Button";
import toast, { Toaster } from "react-hot-toast";
import { createArticle, getAllArticleCategories } from "../../service/article";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import ModalAlertEditArtikel from "../../components/fragments/ModalAlert/ModalAlertEditArtikel";

const TambahArtikel = () => {
  useLogin();
  const dataArtikel = [];
  const [categories, setCategories] = useState([]);
  const [statusChecked, setStatusChecked] = useState("Publik");
  const [loading, setLoading] = useState(false);
  const [checkedIndex, setCheckedIndex] = useState(null);
  const [errorMsg, setErrorMsg] = useState({
    form: "",
    title: "",
    content: "",
    thumbnail: "",
  });
  const [artikel, setArtikel] = useState({
    category_id: "",
    user_name: "",
    title: "",
    content: "",
    thumbnail: "",
    status: "pending",
  });

  const [thumbnail, setThumbnail] = useState({
    gambar: "",
  });


  // ini buat narik data dari redux
  // const dataLogin = useSelector((state) => state.user.dataLogin);

  const storedDataLogin = JSON.parse(localStorage.getItem("dataLogin"));
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getAllArticleCategories((res) => {
      setCategories(res.data);
    });
    setLoading(false);
  }, []);


  const handleCheckboxChange = (id) => {
    setCheckedIndex(id === checkedIndex ? null : id);
    setArtikel((old) => {
      return {
        ...old,
        category_id: id,
      };
    });
  };


  const handleNull = () => {
    if (
      artikel.title === "" ||
      artikel.content === "" ||
      artikel.thumbnail === "" ||
      artikel.category_id === ""
    ) {
      nullToast();
      setErrorMsg((old) => {
        return {
          ...old,
          form: "Form tidak boleh ada yang kosong",
        };
      });
    } else {
      setErrorMsg((old) => {
        return {
          ...old,
          form: "",
        };
      });
    }
  };

  const formDataKeys = [
    "category_id",
    "title",
    "content",
    "thumbnail",
    "status",
  ];
  const apiData = new FormData();
  formDataKeys.forEach((key) => {
    apiData.append(key, artikel[key]);
  });

  const handleCreateArtikel = async (e) => {
    e.preventDefault();
    setLoading(true);
    await createArticle(apiData, (status, res) => {
      if (status) {
        setLoading(false);
        sendArtikelToast();
        navigate("/dokter/artikel");
      } else {
        // console.log(res);
      }
    });
  };

  const nullToast = () =>
    toast.error("Form tidak boleh ada yang kosong!", {
      duration: 4000,
      position: "top-center",
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

  const errorToast = () =>
    toast.error("Tambah artikel gagal! Silakan coba lagi atau login ulang", {
      duration: 4000,
      position: "top-center",
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

  const sendArtikelToast = () =>
    toast.success(
      "Artikel berhasil diupload! Silakan tunggu admin untuk memverifikasi artikel",
      {
        duration: 4000,
        position: "top-center",
        style: {
          maxWidth: "700px",
          marginBottom: "5%",
        },

        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      }
    );

  return (
    <Layouts>
      <h2 className="py-3 fw-bold">Tambah Artikel</h2>
      <ModalAlertEditArtikel id={"button-upload-artikel-modal"}>
        <div className="modal-content p-3">
          <div className="modal-body ">
            <div className="d-block">
              <button
                type="button"
                className="btn-close float-end"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <p className="fw-bold">
              Apakah anda yakin untuk upload artikel ini?
            </p>
            <div className="d-flex mb-3 mt-4">
              <Button
                text={
                  !loading ? (
                    "Unggah"
                  ) : (
                    <div class="d-flex justify-content-center">
                      <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )
                }
                type={"button"}
                className={"btn btn-primary fw-semibold"}
                bsDismiss={"modal"}
                onClick={(e) => {
                  try {
                    handleNull();
                    setArtikel((old) => {
                      return {
                        ...old,
                        user_name: storedDataLogin,
                        status: "Pending",
                      };
                    });
                    if (errorMsg.form == "") {
                      dataArtikel.push(artikel);
                      handleCreateArtikel(e);
                    }
                  } catch {
                    errorToast();
                  }
                }}
              />
              <Button
                text={"Batal"}
                className={"btn btn-danger mx-3 fw-semibold"}
                bsDismiss={"modal"}
                ariaLabel={"Close"}
              />
            </div>
          </div>
        </div>
      </ModalAlertEditArtikel>
      <div className="container">
        <div className="row">
          <div className="col-9 px-3">
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
                  className={"rounded-3 border-solid border-1"}
                  onChange={(e) => {
                    if (e.target.value == null || e.target.value === "") {
                      setErrorMsg((old) => {
                        return {
                          ...old,
                          title: "Isi konten tidak boleh kosong!",
                        };
                      });
                    } else {
                      setErrorMsg((old) => {
                        return {
                          ...old,
                          title: "",
                        };
                      });
                    }
                    setArtikel((old) => {
                      return {
                        ...old,
                        title: e.target.value,
                      };
                    });
                  }}
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
                    value={artikel.content}
                    onChange={(value) => {
                      if (value == "<p><br></p>" || value === "") {
                        setErrorMsg((old) => {
                          return {
                            ...old,
                            content: "Isi konten tidak boleh kosong!",
                          };
                        });
                      } else {
                        setErrorMsg((old) => {
                          return {
                            ...old,
                            content: "",
                          };
                        });
                      }
                      setArtikel((old) => {
                        return {
                          ...old,
                          content: value,
                        };
                      });
                    }}
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
                  onChange={(e) => {
                    setArtikel((old) => {
                      return {
                        ...old,
                        linkVideo: e.target.value,
                      };
                    });
                  }}
                />
                <img
                  src={thumbnail.gambar}
                  width={100}
                  className="mt-4 d-block"
                />
                <Label htmlFor={"thumbnail-artikel"}>
                  <p className="fw-bold mt-4 mb-0">Thumbnail Artikel</p>
                </Label>
                <Input
                  id={"thumbnail-artikel"}
                  name={"thumbnail-artikel"}
                  type={"file"}
                  accept={".jpg, .jpeg, .png"}
                  className={"rounded-3 border-solid border-1 mt-3  "}
                  onChange={(e) => {
                    const allowedFormats = ["jpg", "jpeg", "png"];
                    const selectedFile = e.target.files[0];

                    // Mendapatkan ekstensi file
                    const fileExtension = selectedFile.name
                      .split(".")
                      .pop()
                      .toLowerCase();

                    if (allowedFormats.includes(fileExtension)) {
                      setErrorMsg((old) => {
                        return {
                          ...old,
                          thumbnail: "",
                        };
                      });
                      setArtikel((old) => {
                        return {
                          ...old,
                          thumbnail: selectedFile,
                        };
                      });
                      setThumbnail((old) => {
                        return {
                          ...old,
                          gambar: URL.createObjectURL(selectedFile),
                        };
                      });
                    } else {
                      setErrorMsg((old) => {
                        return {
                          ...old,
                          thumbnail:
                            "Format file tidak diizinkan. Pilih file dengan format jpg, jpeg, atau png",
                        };
                      });
                      // Menampilkan pesan kesalahan jika format tidak diizinkan
                      // console.error(
                      //   "Format file tidak diizinkan. Pilih file dengan format jpg, jpeg, atau png"
                      // );
                    }
                  }}
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
                    onClick={(e) => {
                      try {
                        // handleNull();
                        setArtikel((old) => {
                          return {
                            ...old,
                            user_name: storedDataLogin,
                            status: "Pending",
                          };
                        });
                        if (errorMsg.form == "") {
                          dataArtikel.push(artikel);
                          // handleCreateArtikel(e);
                        }
                      } catch {
                        errorToast();
                      }
                    }}
                    className={
                      "btn btn-primary me-3 btn-upload-artikel fw-semibold"
                    }
                    id={"button-upload-artikel"}
                    text={"Unggah Artikel"}
                    bsTogle={"modal"}
                    bsTarget={"#button-upload-artikel-modal"}
                  />
                </div>
                <div>
                  {/* <Button
                    type={"button"}
                    style={{ backgroundColor: "white" }}
                    className={"btn me-3 btn-draft-artikel fw-semibold"}
                    text={"Simpan sebagai Draft"}
                    onClick={(e) => {
                      try {
                        setArtikel((old) => {
                          return {
                            ...old,
                            user_name: storedDataLogin,
                            status: "Draft",
                          };
                        });
                        if (errorMsg.form == "") {
                          dataArtikel.push(artikel);
                          handleCreateArtikel(e);
                        }
                      } catch {
                        errorToast();
                      }
                    }}
                  /> */}
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
                                onChange={(e) => {
                                  setStatusChecked(e.target.value);
                                  setArtikel((old) => {
                                    return {
                                      ...old,
                                      visibilitas: "Publik",
                                    };
                                  });
                                }}
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
                                onChange={(e) => {
                                  setStatusChecked(e.target.value);
                                  setArtikel((old) => {
                                    return {
                                      ...old,
                                      visibilitas: "Privat",
                                    };
                                  });
                                }}
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
                      {storedDataLogin}
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
                      {categories.map((item) => (
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
                          disabled={
                            checkedIndex !== null && item.id !== checkedIndex
                          }
                        />
                      ))}
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
  );
};

export default TambahArtikel;
