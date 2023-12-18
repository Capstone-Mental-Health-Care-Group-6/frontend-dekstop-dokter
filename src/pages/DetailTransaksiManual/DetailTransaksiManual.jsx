import Layouts from "../../components/layouts/Layouts";
import "./DetailTransaksiManual.style.css";
// import { transaksiUsers } from "../../components/DataComponents/dataComponents";
import { useParams } from "react-router-dom";
import { arrowLeft } from "../../../image";
import { Link } from "react-router-dom";
import { detailTransaction } from "../../service/transaction";
import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const DetailTransaksiManual = () => {
  useLogin();

  const { id } = useParams();
  const [detail, setDetail] = useState({}); // State untuk menyimpan detail transaksi
  const [rating, setRating] = useState(5);

  useEffect(() => {
    detailTransaction(id, (data) => {
      console.log("Response from API:", data); // Tambahkan log untuk respons dari API
      if (data && data.data && data.data.length > 0) {
        console.log("Data to set:", data.data[0]); // Log data yang akan diatur ke state detail
        const formattedDate = formatDate(data.data[0].created_at); // Mengubah format tanggal sesuai kebutuhan
        data.data[0].created_at = formattedDate; // Mengupdate format tanggal dalam data

        const doctorStarRating = data.data[0].doctor_star_rating;
        setRating(doctorStarRating); // Set nilai rating dari response API

        setDetail(data.data[0]); // Ambil data pertama dari respons API
      } else {
        console.log("No data received from API");
      }
    });
  }, [id]);

  const formatDate = (dateString) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const formattedDate = new Date(dateString).toLocaleString("id-ID", options);
    return formattedDate.replace(",", ""); // Menghapus koma setelah hari dalam bahasa Inggris
  };

  return (
    <Layouts>
      <section className="header">
        <Link
          to={"/dokter/transaksi"}
          className="text-decoration-none d-flex align-items-center gap-3"
        >
          <img src={arrowLeft} alt="" />
          <h2 className="header"> Detail Transaksi </h2>
        </Link>
      </section>

      <section className="container-fluid">
        <div className="row">
          <div className="col-7">
            <div className="container container-atas">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <p className="label-detail">ID Transaksi</p>
                    </div>
                    <div className="col-6">
                      <p className="value-detail">{detail.transaction_id}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="label-detail">Waktu</p>
                    </div>
                    <div className="col-6">
                      <p className="value-detail">{detail.created_at}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="label-detail">Nama Dokter</p>
                    </div>
                    <div className="col-6">
                      <p className="value-detail">{detail.doctor_name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="label-detail">Durasi Konseling</p>
                    </div>
                    <div className="col-6">
                      <p className="value-detail">{detail.duration_name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container container-bawah">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <p className="label-detail">Nama User</p>
                    </div>
                    <div className="col-6">
                      <p className="value-detail">{detail.patient_name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="label-detail">Paket Konseling</p>
                    </div>
                    <div className="col-6">
                      <p className="value-detail">
                        {detail.counseling_type === "A"
                          ? "Paket Primium"
                          : "Paket Instan"}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="label-detail">Harga Total</p>
                    </div>
                    <div className="col-6">
                      <p className="value-detail">{detail.price_result}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="label-detail">Metode Pembayaran</p>
                    </div>
                    <div className="col-6">
                      <p className="value-detail">{detail.payment_type}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="label-detail">Status Pembayaran</p>
                    </div>
                    <div className="col-6">
                      <p className="value-detail">
                        {detail.payment_status === 2
                          ? "accept"
                          : detail.payment_status === 5
                          ? "pending"
                          : "failed"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12"></div>
            </div>
          </div>
          <div className="col-5">
            <div className="container-kanan">
              <div className="row">
                <div className="col-12">
                  <h2 className="h2-bukti-transfer">Bukti Transfer : </h2>
                  <hr />
                </div>
              </div>
              <div className="row text-center">
                <div className="col-12">
                  <div className="image-background">
                    <img
                      src={detail.payment_proof}
                      alt=""
                      className="image-bukti-transaksi"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-center feedback mt-2 p-2">
                <div className="col-12">
                  <p className="feedback-atas">Feedback</p>
                </div>
                <div className="col-12">
                  <div className="star-rating">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        className={index < rating ? "filled" : "empty"}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-12">
                  <p className="feedback-bawah">{detail.doctor_review}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default DetailTransaksiManual;
