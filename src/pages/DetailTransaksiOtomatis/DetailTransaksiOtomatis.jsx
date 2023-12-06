import { useParams } from "react-router-dom";
import Layouts from "../../components/layouts/Layouts";
import "./DetailTransaksiOtomatis.style.css";
import { transaksiUsers } from "../../components/DataComponents/dataComponents";
import { Link } from "react-router-dom";

const DetailTransaksiOtomatis = () => {
    
    const {id} = useParams();
    const detail = transaksiUsers.find((item) => item.id === id);
    const rating = 5;

    return (
        <Layouts>
            <section className="header">
                <Link to={'/dokter-transaksi'} className="text-decoration-none">
                    <h2 className="header"> {"<"} Detail Transaksi </h2>
                </Link>
            </section>
            <section className="detail-transaksi">
                <div className="container container-atas">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <p className="label-detail">ID Transaksi</p>
                                </div>
                                <div className="col-6">
                                    <p className="value-detail">{detail.id}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="label-detail">Waktu</p>
                                </div>
                                <div className="col-6">
                                    <p className="value-detail">{detail.detailWaktu}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="label-detail">Nama Dokter</p>
                                </div>
                                <div className="col-6">
                                    <p className="value-detail">{detail.namaDokter}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="label-detail">Durasi Konseling</p>
                                </div>
                                <div className="col-6">
                                    <p className="value-detail">{detail.detailWaktu}</p>
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
                                    <p className="value-detail">{detail.namaPasien}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="label-detail">Paket Konseling</p>
                                </div>
                                <div className="col-6">
                                    <p className="value-detail">{detail.paketPelanggan}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="label-detail">Harga Total</p>
                                </div>
                                <div className="col-6">
                                    <p className="value-detail">{detail.harga}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="label-detail">Metode Pembayaran</p>
                                </div>
                                <div className="col-6">
                                    <p className="value-detail">{detail.metodePembayaran}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="label-detail">Status Pembayaran</p>
                                </div>
                                <div className="col-6">
                                    <p className="value-detail">{detail.statusPembayaran}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container container-rating">
                    <div className="row text-center">
                        <div className="col-12">
                            <p className="feedback-atas">Feedback</p>
                        </div>
                        <div className="col-12">
                            <div className="star-rating">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <span key={index} className={index < rating ? 'filled' : 'empty'}>
                                        &#9733;
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="col-12">
                            <p className="feedback-bawah">Sangat membantu dan membuat saya lebih bersemangat!</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layouts>
    )
}

export default DetailTransaksiOtomatis;