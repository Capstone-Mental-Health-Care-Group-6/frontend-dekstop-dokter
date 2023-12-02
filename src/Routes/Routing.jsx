import React from "react"
import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/LandingPage/LandingPage"
import Dashboard from "../pages/Dashboard/Dashboard"
import Chat from "../pages/Chat/Chat"
import Transaksi from "../pages/Transaksi/Transaksi"
import Artikel from "../pages/Artikel/Artikel"
import Profile from "../pages/Profile/Profile"
import DataPribadi from "../pages/DataPribadi/DataPribadi"
import DataAkademik from "../pages/DataAkademik/DataAkademik"
import Dokumen from "../pages/Dokumen/Dokumen"
import Pengalaman from "../pages/Pengalaman/Pengalaman"
import LoginForm from "../pages/Login/Login"
import Register from "../pages/Signup/Signup"
import ForgotPw from "../pages/ForgotPassword/ForgotPassword"
import ResetPassword from "../pages/AturSandi/AturSandi"
import PencairanSaldo from "../pages/PencairanSaldo/PencairanSaldo"
import RegisDataPribadi from "../pages/RegisDataPribadi/RegisDataPribadi"
import RegisDataAkademik from "../pages/RegisDataAkademik/RegisDataAkademik"
import RegisDokumen from "../pages/RegisDokumen/RegisDokumen"
import RegisPengalaman from "../pages/RegisPengalaman/RegisPengalaman"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard-dokter" element={<Dashboard />} />
      <Route path="/login-dokter" element={<LoginForm />} />
      <Route path="/register-dokter" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPw />} />
      <Route path="/reset-password" element={<ResetPassword />} />
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
      <Route path="/regis-data-pribadi" element={<RegisDataPribadi />} />
      <Route path="/regis-data-akademik" element={<RegisDataAkademik />} />
      <Route path="/regis-dokumen" element={<RegisDokumen />} />
      <Route path="/regis-pengalaman" element={<RegisPengalaman />} />
    </Routes>
  )
}

export default Routing
