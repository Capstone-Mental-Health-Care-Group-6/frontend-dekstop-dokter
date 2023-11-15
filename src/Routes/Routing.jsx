import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Chat from "../pages/Chat";
import Transaksi from "../pages/Transaksi";
import Artikel from "../pages/Artikel";
import LandingPage from "../pages/LandingPage/LandingPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dokter-chat" element={<Chat />} />
      <Route path="/dokter-transaksi" element={<Transaksi />} />
      <Route path="/dokter-artikel" element={<Artikel />} />
    </Routes>
  );
};

export default Routing;
