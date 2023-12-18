import React from "react";
import "./NotFound404.style.css";
import Layouts from "../../components/layouts/Layouts";
import { imgNotFound404 } from "../../../image";
import { useLogin } from "../../hooks/useLogin";

const NotFound404 = () => {
  useLogin();
  return (
    <div>
      <Layouts>
        <div className="d-flex not__found flex-column align-items-center justify-content-center">
          <img src={imgNotFound404} alt="img-notfound-404" />
          <h5 className="fw-semibold">Oops! Halaman Tidak Ditemukan</h5>
          <p className="">
            Maaf, sepertinya halaman yang Anda cari tidak dapat ditemukan.
            Mungkin halaman tersebut telah dipindahkan, dihapus, atau tidak
            pernah ada. Pastikan URL yang Anda masukkan benar.
          </p>
        </div>
      </Layouts>
    </div>
  );
};

export default NotFound404;
