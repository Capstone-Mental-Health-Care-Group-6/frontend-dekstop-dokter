import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Chat from "../pages/Chat/Chat";
import Transaksi from "../pages/Transaksi/Transaksi";
import Artikel from "../pages/Artikel/Artikel";
import PencairanSaldo from "../pages/PencairanSaldo/PencairanSaldo";
import Profile from "../pages/Profile/Profile";
import DataPribadi from "../pages/DataPribadi/DataPribadi";
import DataAkademik from "../pages/DataAkademik/DataAkademik";
import Dokumen from "../pages/Dokumen/Dokumen";
import Pengalaman from "../pages/Pengalaman/Pengalaman";
import ProfilSingkat from "../pages/ProfilSingkat/ProfilSingkat";
import PrivacyPolicy from "../pages/PricacyPolicy/PrivacyPolicy";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard-dokter" element={<Dashboard />} />
      <Route path="/dokter-chat" element={<Chat />} />
      <Route path="/dokter-chat/:id" element={<Chat />} />
      <Route path="/dokter-transaksi" element={<Transaksi />} />
      <Route path="/pencairan-saldo-dokter" element={<PencairanSaldo />} />
      <Route path="/dokter-artikel" element={<Artikel />} />
      <Route path="/dokter-profile" element={<Profile />} />   
      <Route path="/dokter-data-pribadi" element={<DataPribadi />} />   
      <Route path="/dokter-data-akademik" element={<DataAkademik />} />   
      <Route path="/dokter-dokumen" element={<Dokumen />} />   
      <Route path="/dokter-pengalaman" element={<Pengalaman />} /> 
      <Route path="/dokter-profil-singkat" element={<ProfilSingkat />} /> 
      <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
    </Routes>
  );
};

export default Routing;
