import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  iconCardProsesPenarikan,
  iconCardSaldoAktif,
  iconChat,
  iconClock,
  iconPasien,
  iconProfilePasien1,
  iconProfilePasien2,
  iconProfilePasien3,
  iconZoom,
  personChat,
  personChat2,
  personChat3,
} from "../../../image";
import Button from "../elements/Button/Button";

export const cardLaporanMingguan = [
  {
    bgColor: "#A2DEFF",
    iconCard: iconPasien,
    subtitle: "Total Pasien",
    text: "28",
  },

  {
    bgColor: "#FFBBBB",
    iconCard: iconClock,
    subtitle: "Jam Praktek",
    text: "80",
  },

  {
    bgColor: "#C1FFEF",
    iconCard: iconChat,
    subtitle: "Layanan Chat",
    text: "18",
  },

  {
    bgColor: "#F0CAFF",
    iconCard: iconZoom,
    subtitle: "Layanan Vidio Call",
    text: "10",
  },
];

export const dataPasien = [
  {
    id: 1,
    nama: "Rojak",
    jenisKelamin: "Laki-Laki",
    keluhan: "Susah Tidur",
    viaLayanan: "Chat",
  },
  {
    id: 2,
    nama: "Mawardi",
    jenisKelamin: "Laki-Laki",
    keluhan: "Susah Dilupakan",
    viaLayanan: "Video Call",
  },
  {
    id: 3,
    nama: "Putri Malu",
    jenisKelamin: "Perempuan",
    keluhan: "Stress",
    viaLayanan: "Video Call",
  },
  {
    id: 4,
    nama: "Suwardi",
    jenisKelamin: "Laki-Laki",
    keluhan: "Introvet",
    viaLayanan: "Chat",
  },
  {
    id: 5,
    nama: "Roni",
    jenisKelamin: "Laki-Laki",
    keluhan: "Sering Cemas",
    viaLayanan: "Video Call",
  },
  {
    id: 6,
    nama: "Putri Malu",
    jenisKelamin: "Perempuan",
    keluhan: "Stress",
    viaLayanan: "Video Call",
  },
  {
    id: 7,
    nama: "Suwardi",
    jenisKelamin: "Laki-Laki",
    keluhan: "Introvet",
    viaLayanan: "Chat",
  },
  {
    id: 8,
    nama: "Roni",
    jenisKelamin: "Laki-Laki",
    keluhan: "Sering Cemas",
    viaLayanan: "Video Call",
  },
  {
    id: 10,
    nama: "Putri Malu",
    jenisKelamin: "Perempuan",
    keluhan: "Stress",
    viaLayanan: "Video Call",
  },
  {
    id: 11,
    nama: "Suwardi",
    jenisKelamin: "Perempuan",
    keluhan: "Introvet",
    viaLayanan: "Chat",
  },
  {
    id: 12,
    nama: "Roni",
    jenisKelamin: "Laki-Laki",
    keluhan: "Sering Cemas",
    viaLayanan: "Video Call",
  },
];

export const dataNotification = [
  {
    id: 1,
    content: (
      <div className="d-flex align-items-center border-bottom border-secondary-subtle py-3">
        <img src={iconProfilePasien1} alt="icon-profile-pasien" />
        <div className="ms-2">
          <p className="fw-semibold">
            Rojak <span>via</span> Chat
          </p>

          <Button
            text={"lihat detail"}
            className={"btn btn-primary text-white px-2 py-1 rounded-3"}
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="d-flex align-items-center border-bottom border-secondary-subtle py-3">
        <img src={iconProfilePasien2} alt="icon-profile-pasien" />
        <div className="ms-2">
          <p className="fw-semibold">Mawardi</p>
          <p className="text__chat">
            oke dok akan segera saya terapkan metode ini
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="d-flex align-items-center border-bottom border-secondary-subtle py-3">
        <img src={iconProfilePasien3} alt="icon-profile-pasien" />
        <div className="ms-2">
          <p className="fw-semibold">Putri Malu</p>
          <p className="text__chat">
            Sama-sama , saya senang bisa membantu Anda. kita......
          </p>
        </div>
      </div>
    ),
  },
];

export const dataChatUser = [
  {
    id: 1000,
    name: "Rojak",
    text: "Saya juga punya masalah hubungan...",
    image: personChat,
    status: "aktif",
    session: "zoom",
  },
  {
    id: 999,
    name: "Mawardi",
    text: "aku selalu cemas",
    image: personChat2,
    status: "aktif",
  },
  {
    id: 598,
    name: "Putri",
    text: "bapak saya hamil",
    image: personChat3,
    status: "aktif",
  },
  {
    id: 579,
    name: "Joko",
    text: "bapak saya hamil",
    image: personChat,
    status: "berakhir",
  },
  {
    id: 589,
    name: "Putri",
    text: "bapak saya hamil",
    image: personChat3,
    status: "berakhir",
  },
];

// export const dataChatBot = [
//   {
//     sender: "bot",
//     content:
//       "Selamat datang di Aplikasi Kesehatan Mental kami! Saya akan dengan senang hati membantu Anda memahami fitur-fitur yang tersedia. Berikut beberapa hal yang dapat Anda lakukan:",
//   },
// ];

export const dataChat = [
  {
    sender: "dokter",
    content: "Halo selamat pagi rojak",
    timestamp: "13:46:00",
  },
  {
    sender: "user",
    content:
      "Selamat pagi Dok. Saya merasa sangat sulit tidur akhir-akhir ini. Saya terjaga sepanjang malam, dan ini mulai mengganggu hidup saya.",
    timestamp: "13:47:00",
  },
  {
    sender: "dokter",
    content:
      "Pertama, bisakah Anda ceritakan lebih banyak tentang kesulitan tidur yang Anda alami? Apakah ini telah berlangsung lama?",
    timestamp: "13:49:00",
  },
  {
    sender: "user",
    content:
      "Ya, masalah tidur ini sudah berlangsung sekitar sebulan. Saya sulit tidur, sering terbangun tengah malam, dan terkadang tidak bisa tidur lagi. Ini membuat saya merasa lelah sepanjang hari dan sulit berkonsentrasi.",
    timestamp: "13:48:00",
  },
  {
    sender: "dokter",
    content:
      "Saya mengerti, itu pasti sangat mengganggu. Apakah ada faktor khusus yang mungkin menjadi pemicu masalah tidur Anda? Misalnya, stres, kekhawatiran, atau perubahan dalam rutinitas harian Anda?",
    timestamp: "13:49:00",
  },
  {
    sender: "user",
    content:
      "Saya juga punya masalah hubungan pribadi akhir-akhir ini, yang membuat saya khawatir.",
    timestamp: "13:49:00",
  },
  {
    sender: "dokter",
    content:
      "Sebelum saya lanjut untuk menganalisa Anda saya menyarankan untuk membaca  ARTIKEL_GANGGUAN_TIDUR",
    timestamp: "13:49:00",
  },
];

export const dataPencairanSaldo = [
  {
    className: "card__saldo__aktif",
    imgSrc: iconCardSaldoAktif,
    title: "Saldo Aktif",
    subTitle: "Rp 200.000",
  },
  {
    className: "card__proses__penarikan",
    imgSrc: iconCardProsesPenarikan,
    title: "Proses Penarikan",
    subTitle: "Rp 50.000",
  },
];

export const dataTablePencairanSaldo = [
  {
    idTransaksi: "CASDI9823HUAK",
    avatar: avatar1,
    namaPasien: "Gwenchana",
    tanggal: "22 Okt 2023",
    paketLangganan: "Paket Premium",
    harga: "Rp 200.000",
    status: "Sukses",
  },
  {
    idTransaksi: "CASDI9823HUAK",
    avatar: avatar2,
    namaPasien: "Gwenchana",
    tanggal: "22 Okt 2023",
    paketLangganan: "Paket Premium",
    harga: "Rp 200.000",
    status: "Sukses",
  },
  {
    idTransaksi: "CASDI9823HUAK",
    avatar: avatar3,
    namaPasien: "Gwenchana",
    tanggal: "22 Okt 2023",
    paketLangganan: "Paket Instan",
    harga: "Rp 200.000",
    status: "Proses",
  },
  {
    idTransaksi: "CASDI9823HUAK",
    avatar: avatar4,
    namaPasien: "Gwenchana",
    tanggal: "22 Okt 2023",
    paketLangganan: "Paket Instan",
    harga: "Rp 200.000",
    status: "Pending",
  },
  {
    idTransaksi: "CASDI9823HUAK",
    avatar: avatar4,
    namaPasien: "Gwenchana",
    tanggal: "22 Okt 2023",
    paketLangganan: "Paket Premium",
    harga: "Rp 200.000",
    status: "Pending",
  },
];
