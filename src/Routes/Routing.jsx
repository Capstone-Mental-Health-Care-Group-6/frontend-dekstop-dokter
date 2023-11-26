import React from "react"
import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/LandingPage/LandingPage"
import Dashboard from "../pages/Dashboard/Dashboard"
import Chat from "../pages/Chat/Chat"
import Transaksi from "../pages/Transaksi/Transaksi"
import Artikel from "../pages/Artikel/Artikel"
import LoginForm from "../pages/Login/Login"
import Register from "../pages/Signup/Signup"
import ForgotPw from "../pages/ForgotPassword/ForgotPassword"
import ResetPassword from "../pages/AturSandi/AturSandi"
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard-dokter" element={<Dashboard />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPw />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/dokter-chat" element={<Chat />} />
      <Route path="/dokter-transaksi" element={<Transaksi />} />
      <Route path="/dokter-artikel" element={<Artikel />} />
    </Routes>
  )
}

export default Routing
