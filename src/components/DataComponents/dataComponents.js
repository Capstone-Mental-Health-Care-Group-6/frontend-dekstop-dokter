import {
  iconCardTarikSaldo,
  iconCardSaldoAktif,
  iconCardProsesPenarikan,
  iconChat,
  iconClock,
  iconPasien,
  iconZoom,
} from "../../../image";

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
