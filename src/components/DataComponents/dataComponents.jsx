import {
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
  avatar1, 
  avatar2, 
  avatar3, 
  avatar4, 
  avatar5,
  BuktiTransaksi
} from "../../../image";
import Button from "../elements/Button/Button";

export const cardLaporanMingguan = [
  {
    bgColor: "#A2DEFF",
    iconCard: iconPasien,
    subtitle: "Total Pasien",
    text: "28 Pasien",
  },

  {
    bgColor: "#FFBBBB",
    iconCard: iconClock,
    subtitle: "Jam Praktek",
    text: "80 jam",
  },

  {
    bgColor: "#C1FFEF",
    iconCard: iconChat,
    subtitle: "Layanan Chat",
    text: "18 chat",
  },

  {
    bgColor: "#F0CAFF",
    iconCard: iconZoom,
    subtitle: "Layanan Vidio Call",
    text: "10 Video Call",
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

export const transaksiUsers = [
  {
    id: "SMBN76448KKHJ",
    avatar: avatar1,
    namaPasien: "Gwenchana",
    tanggal: "22 Okt 2023",
    paketPelanggan: "Paket Premium",
    harga: "Rp 200.000",
    metodePembayaran: "OVO",
    namaDokter: "Lika Angelina S.Psi, M.Psi. Psikolog",
    durasi: "120 Menit",
    statusPembayaran: "Sudah Bayar",
    detailWaktu: "18:06, Min 22 Okt 2023",
    jenisTransaksi : "manual",
    buktiTransaksi : BuktiTransaksi
  },
  {
    id: "TLFY0399HJIU",
    avatar: avatar2,
    namaPasien: "Gwenchanayo",
    tanggal: "15 Okt 2023",
    paketPelanggan: "Paket Instan",
    harga: "Rp 100.000",
    metodePembayaran: "GOPAY",
    namaDokter: "Lika Angelina S.Psi, M.Psi. Psikolog",
    durasi: "120 Menit",
    statusPembayaran: "Sudah Bayar",
    detailWaktu: "18:06, Min 22 Okt 2023",
    jenisTransaksi : "otomatis",
    buktiTransaksi : BuktiTransaksi
  },
  {
    id: "EPTG2226LOGK",
    avatar: avatar3,
    namaPasien: "Gwenchanaaa",
    tanggal: "30 Sep 2023",
    paketPelanggan: "Paket Instan",
    harga: "Rp 120.000",
    metodePembayaran: "BCA",
    namaDokter: "Lika Angelina S.Psi, M.Psi. Psikolog",
    durasi: "120 Menit",
    statusPembayaran: "Sudah Bayar",
    detailWaktu: "18:06, Min 22 Okt 2023",
    jenisTransaksi : "manual",
    buktiTransaksi : BuktiTransaksi
  },
  {
    id: "CASX6737BJEU",
    avatar: avatar4,
    namaPasien: "Popo aja",
    tanggal: "25 Sep 2023",
    paketPelanggan: "Paket Premium",
    harga: "Rp 220.000",
    metodePembayaran: "OVO",
    namaDokter: "Lika Angelina S.Psi, M.Psi. Psikolog",
    durasi: "120 Menit",
    statusPembayaran: "Sudah Bayar",
    detailWaktu: "18:06, Min 22 Okt 2023",
    jenisTransaksi : "otomatis",
    buktiTransaksi : BuktiTransaksi
  },
  {
    id: "CASDI9823HUAK",
    avatar: avatar5,
    namaPasien: "Orang Lain",
    tanggal: "10 Sep 2023",
    paketPelanggan: "Paket Premium",
    harga: "Rp 220.000",
    metodePembayaran: "BCA",
    namaDokter: "Lika Angelina S.Psi, M.Psi. Psikolog",
    durasi: "120 Menit",
    statusPembayaran: "Sudah Bayar",
    detailWaktu: "18:06, Min 22 Okt 2023",
    jenisTransaksi : "manual",
    buktiTransaksi : BuktiTransaksi
  },

]
