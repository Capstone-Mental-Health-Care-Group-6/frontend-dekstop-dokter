import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Chat from "../pages/Chat/Chat";
import Transaksi from "../pages/Transaksi/Transaksi";
import Artikel from "../pages/Artikel/Artikel";
import TambahArtikel from "../pages/tambahArtikel/TambahArtikel";
import Profile from "../pages/Profile/Profile";
import DataPribadi from "../pages/DataPribadi/DataPribadi";
import DataAkademik from "../pages/DataAkademik/DataAkademik";
import Dokumen from "../pages/Dokumen/Dokumen";
import Pengalaman from "../pages/Pengalaman/Pengalaman";
import DetailTransaksiOtomatis from "../pages/DetailTransaksiOtomatis/DetailTransaksiOtomatis";
import DetailTransaksiManual from "../pages/DetailTransaksiManual/DetailTransaksiManual";
import LoginForm from "../pages/Login/Login";
import Register from "../pages/Signup/Signup";
import ForgotPw from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/AturSandi/AturSandi";
import PencairanSaldo from "../pages/PencairanSaldo/PencairanSaldo";
import ChatBot from "../pages/ChatBot/ChatBot";
import NotFound404 from "../pages/NotFound404/NotFound404";
import ProfilSingkat from "../pages/ProfilSingkat/ProfilSingkat";
import PrivacyPolicy from "../pages/PricacyPolicy/PrivacyPolicy";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dokter/dashboard" element={<Dashboard />} />
      <Route path="/dokter/chatbot" element={<ChatBot />} />
      <Route path="/login-dokter" element={<LoginForm />} />
      <Route path="/register-dokter" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPw />} />
      <Route path="/reset-password/:id" element={<ResetPassword />} />
      <Route path="/dokter/chat" element={<Chat />} />
      <Route path="/dokter/chat/:id" element={<Chat />} />
      <Route path="/dokter/transaksi" element={<Transaksi />} />
      <Route
        path="/dokter/transaksi/transaksi/otomatis/:id"
        element={<DetailTransaksiOtomatis />}
      />
      <Route
        path="/dokter/transaksi/transaksi/manual/:id"
        element={<DetailTransaksiManual />}
      />
      <Route path="/dokter/saldo" element={<PencairanSaldo />} />
      <Route path="/dokter/artikel" element={<Artikel />} />
      <Route path="/dokter/artikel/tambah" element={<TambahArtikel />} />
      <Route path="/dokter/profile" element={<Profile />} />
      <Route path="/dokter/profile/data-pribadi" element={<DataPribadi />} />
      <Route path="/dokter/profile/data-akademik" element={<DataAkademik />} />
      <Route path="/dokter/profile/dokumen" element={<Dokumen />} />
      <Route path="/dokter/profile/pengalaman" element={<Pengalaman />} />
      <Route path="/dokter/profil-singkat" element={<ProfilSingkat />} />
      <Route path="/privacy/policy" element={<PrivacyPolicy />} />

      {/* route ketika url tidak sesuai */}
      <Route element={<NotFound404 />} path="*" />
    </Routes>
  );
};

export default Routing;
