import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Chat from "../pages/Chat/Chat";
import Transaksi from "../pages/Transaksi/Transaksi";
import Artikel from "../pages/Artikel/Artikel";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard-dokter" element={<Dashboard />} />
      <Route path="/dokter-chat" element={<Chat />} />
      <Route path="/dokter-chat/:id" element={<Chat />} />
      <Route path="/dokter-transaksi" element={<Transaksi />} />
      <Route path="/dokter-artikel" element={<Artikel />} />
    </Routes>
  );
};

export default Routing;
