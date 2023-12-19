import "./EditArtikel.style.css";
import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import Label from "../../components/elements/Input/Label";
import Input from "../../components/elements/Input/Input";
import Reactquill from "../../components/elements/ReactQuill/Reactquill";
import InputSelect from "../../components/elements/Input/InputSelect";
import Checkbox from "../../components/elements/Input/Checkbox";
import Button from "../../components/elements/Button/Button";
import toast, { Toaster } from "react-hot-toast";
import {
  createArticle,
  getAllArticle,
  getAllArticleCategories,
  updateArticle,
} from "../../service/article";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ModalAlert from "../../components/fragments/ModalAlert/ModalAlert";
import { useLogin } from "../../hooks/useLogin";
import ModalAlertEditArtikel from "../../components/fragments/ModalAlert/ModalAlertEditArtikel";

const EditArtikel = () => {
  useLogin();

  const navigate = useNavigate();
  const dataArtikel = [];
  const [loading, setLoading] = useState(false);
  const [statusChecked, setStatusChecked] = useState("Publik");
  const [checkedIndex, setCheckedIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);

  const [artikel, setArtikel] = useState(null);
  const [filterCategories, setFilterCategories] = useState(null);
  const storedDataLogin = JSON.parse(localStorage.getItem("dataLogin"));

  const [errorMsg, setErrorMsg] = useState({
    form: "",
    title: "",
    content: "",
    thumbnail: "",
  });

  const [thumbnail, setThumbnail] = useState({
    gambar: null,
  });

  useEffect(() => {
    setLoading(true);
    getAllArticleCategories((res) => {
      // const filterCategories = res.data.filter((category) => category.name === artikel.category_name);
      // setFilterCategories(filterCategories)
      // setCheckedIndex(filterCategories.length > 0 ? filterCategories[0].id : null)
      setCategories(res.data);
    });
    setLoading(false);
  }, [artikel]);

  useEffect(() => {
    setLoading(true);
    getAllArticle((res) => {
      const filter = res.data.filter((item) => item.id == id);
      const firstFilteredItem = filter.length > 0 ? filter[0] : null;
      setArtikel(firstFilteredItem);
      setImage(firstFilteredItem.thumbnail);
    });
    setLoading(false);
  }, []);

  const params = useParams();
  const id = params.id;

  const handleCheckboxChange = (id, name) => {
    // Jika checkbox sudah checked dan diklik lagi, set checkedIndex menjadi null
    if (id === checkedIndex) {
      setCheckedIndex(null);
      setArtikel((old) => ({
        ...old,
        category_id: null,
        category_name: "null", // Reset category_id menjadi null saat checkbox di-uncheck
      }));
    } else {
      // Jika checkbox di-check, set checkedIndex ke nilai yang baru
      setCheckedIndex(id);
      setArtikel((old) => ({
        ...old,
        category_id: id,
        category_name: name,
        // Set category_id sesuai dengan checkbox yang di-check
      }));
    }
  };

  function takeFileImage(imageUrl) {}

  async function convertThumbnailUrlToFile(thumbnailUrl) {
    try {
      // Ambil konten gambar dari URL menggunakan fetch
      const response = await fetch(thumbnailUrl);

      if (!response.ok) {
        throw new Error("Gagal mengambil gambar thumbnail");
      }

      // Konversi respons menjadi blob
      const blob = await response.blob();

      // Buat objek File dari blob
      const file = new File([blob], `${thumbnailUrl}`, { type: "image/jpeg" });

      return file;
    } catch (error) {
      console.error("Error converting thumbnail URL to File:", error);
      throw error;
    }
  }

  // Gunakan fungsi ini dengan URL thumbnail

  const handleUpdateArtikel = async (id) => {
    try {
      if (!artikel || !artikel.id) {
        console.error(
          "Invalid Artikel Data. Artikel or Artikel ID is missing."
        );
        return;
      }

      const formDataKeys = [
        "category_name",
        "user_name",
        "title",
        "thumbnail",
        "content",
        "status",
      ];
      const apiData = new FormData();

      formDataKeys.forEach((key) => {
        if (key in artikel) {
          console.log(artikel[key]);
          apiData.append(key, artikel[key]);
        }
      });

      await updateArticle(id, apiData);
      sendArtikelToast();
      navigate("/dokter/artikel");
    } catch (error) {
      console.error("Error updating Artikel:", error);
      // You might want to display an error message to the user using toast or another method.
    }
  };

  const sendArtikelToast = () =>
    toast.success(
      "Artikel berhasil di edit! Silakan tunggu admin untuk memverifikasi artikel",
      {
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
      }
    );

  // console.log(checkedIndex)
  // console.log(artikel);
  // console.log(image);

  return (
    <Layouts>
      <h2 className="py-3 fw-bold">Edit Artikel</h2>
      <div className="container">
        <div className="row">
          <div className="col-9 px-3">
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
                      text={"Unggah"}
                      type={"button"}
                      className={"btn btn-primary fw-semibold"}
                      bsDismiss={"modal"}
                      onClick={() => {
                        if (
                          errorMsg.form == "" &&
                          !loading &&
                          artikel.thumbnail instanceof File
                        ) {
                          handleUpdateArtikel(artikel.id);
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
            <ModalAlertEditArtikel id={"button-draft-artikel-modal"}>
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
                  <p className="fw-bold pe-5">
                    Apakah anda yakin untuk upload artikel ini sebagai draft?
                  </p>
                  <div className="d-flex mb-3 mt-4">
                    <Button
                      text={"Unggah"}
                      type={"button"}
                      className={"btn btn-primary fw-semibold"}
                      bsDismiss={"modal"}
                      onClick={() => {
                        if (
                          errorMsg.form == "" &&
                          !loading &&
                          artikel.thumbnail instanceof File
                        ) {
                          handleUpdateArtikel(artikel.id);
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
            {!loading && artikel !== null ? (
              <div>
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
                      value={artikel.title}
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
                        // console.log(artikel)
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
                          // console.log(artikel)
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-danger mb-0 my-1">
                        {errorMsg.content}
                      </p>
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
                    <img
                      src={
                        thumbnail.gambar == null
                          ? artikel.thumbnail
                          : thumbnail.gambar
                      }
                      width={100}
                      className="mt-4 d-block"
                    />

                    <Input
                      id={"thumbnail-artikel"}
                      name={"thumbnail-artikel"}
                      type={"file"}
                      accept={".jpg, .jpeg, .png"}
                      className={"rounded-3 border-solid border-1 mt-3  "}
                      onChange={async (e) => {
                        const allowedFormats = ["jpg", "jpeg", "png"];
                        const selectedFile = e.target.files[0];

                        // Dapatkan ekstensi file
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

                          // Tentukan apakah pengguna memilih file baru atau tidak
                          const isFileNew = selectedFile !== artikel.thumbnail;

                          if (isFileNew) {
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
                          }
                        } else {
                          setErrorMsg((old) => {
                            return {
                              ...old,
                              thumbnail:
                                "Format file tidak diizinkan. Pilih file dengan format jpg, jpeg, atau png",
                            };
                          });
                          // Menampilkan pesan kesalahan jika format tidak diizinkan
                          console.error(
                            "Format file tidak diizinkan. Pilih file dengan format jpg, jpeg, atau png"
                          );
                        }
                      }}
                    />
                    <p className="text-deskripsi-thumbnail">
                      Rekomendasi ukuran gambar: 300 x 450. Format gambar: jpg,
                      png, jpeg
                    </p>
                    <p className="text-danger">{errorMsg.thumbnail}</p>
                  </div>
                  <div className="d-flex m-3 button-form-artikel">
                    <div>
                      <Button
                        type={"button"}
                        onClick={async (e) => {
                          if (
                            errorMsg.form == "" &&
                            !loading &&
                            artikel.thumbnail instanceof File
                          ) {
                            // handleUpdateArtikel(artikel.id);
                          } else {
                            setLoading(true);
                            // Konversi thumbnail URL yang ada menjadi File
                            const file = await convertThumbnailUrlToFile(
                              artikel.thumbnail
                            );
                            console.log(file);
                            console.log(artikel);

                            setArtikel((old) => {
                              return {
                                ...old,
                                thumbnail: file, // Menggunakan objek File yang didapat dari fungsi
                              };
                            });
                            console.log("belum terubah");

                            setThumbnail((old) => {
                              return {
                                ...old,
                                gambar: URL.createObjectURL(file),
                              };
                            });

                            setArtikel((old) => {
                              return {
                                ...old,
                                user_name: storedDataLogin,
                                status: "Pending",
                              };
                            });
                            setLoading(false);
                          }

                          if (
                            errorMsg.form == "" &&
                            !loading &&
                            artikel.thumbnail instanceof File
                          ) {
                            dataArtikel.push(artikel);

                            console.log(artikel);
                            // handleUpdateArtikel(artikel.id);
                          } else {
                            <div className="d-flex justify-content-center">
                              <div
                                className="spinner-border text-primary"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            </div>;
                          }
                        }}
                        className={
                          "btn btn-primary me-3 btn-upload-artikel fw-semibold"
                        }
                        bsTogle="modal"
                        id={"button-upload-artikel"}
                        bsTarget={"#button-upload-artikel-modal"}
                        text={"Unggah Artikel"}
                      />
                    </div>
                    <div>
                      <Button
                        bsTogle="modal"
                        id={"button-draft-artikel"}
                        bsTarget={"#button-draft-artikel-modal"}
                        type={"button"}
                        style={{ backgroundColor: "white" }}
                        className={"btn me-3 btn-draft-artikel fw-semibold"}
                        text={"Simpan sebagai Draft"}
                        onClick={async (e) => {
                          setArtikel((old) => {
                            return {
                              ...old,
                              status: "Inactive",
                            };
                          });
                          if (
                            errorMsg.form == "" &&
                            !loading &&
                            artikel.thumbnail instanceof File
                          ) {
                            // handleUpdateArtikel(artikel.id);
                          } else {
                            setLoading(true);
                            // Konversi thumbnail URL yang ada menjadi File
                            const file = await convertThumbnailUrlToFile(
                              artikel.thumbnail
                            );
                            console.log(file);
                            console.log(artikel);

                            setArtikel((old) => {
                              return {
                                ...old,
                                thumbnail: file, // Menggunakan objek File yang didapat dari fungsi
                              };
                            });
                            console.log("belum terubah");

                            setThumbnail((old) => {
                              return {
                                ...old,
                                gambar: URL.createObjectURL(file),
                              };
                            });

                            setArtikel((old) => {
                              return {
                                ...old,
                                user_name: storedDataLogin,
                                status: "Inactive",
                              };
                            });
                            setLoading(false);
                          }

                          if (
                            errorMsg.form == "" &&
                            !loading &&
                            artikel.thumbnail instanceof File
                          ) {
                            dataArtikel.push(artikel);

                            // console.log(artikel);
                          } else {
                            <div className="d-flex justify-content-center">
                              <div
                                className="spinner-border text-primary"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            </div>;
                          }
                        }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
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
                                  setStatusChecked("Publik");
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
                                  setStatusChecked(Privat);
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
                          checked={
                            artikel &&
                            artikel.category_name &&
                            artikel.category_name.includes(item.name)
                          }
                          onChange={() =>
                            handleCheckboxChange(item.id, item.name)
                          }
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

export default EditArtikel;
