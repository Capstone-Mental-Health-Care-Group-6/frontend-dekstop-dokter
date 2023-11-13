import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/SidebarList.style.css";
import {
  BsChatLeft,
  BsGrid,
  BsWallet2,
  BsBoxArrowRight,
  BsFileEarmarkText,
} from "react-icons/bs";

const SidebarList = () => {
  const [isActive, setIsActive] = useState(false);

  const linkActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <img id="logo" src="assets/logo.png" alt="logo" />

      <Link
        id="link"
        className="text-decoration-none"
        to="/"
        onClick={linkActive}
      >
        <div className="row" id="dashboard-link">
          <div className="col-3">
            <BsGrid size={25} />
          </div>
          <div className="col-9 d-flex  align-items-end">
            <p className="link-text"> Dashboard</p>
          </div>
        </div>
      </Link>

      <Link id="link" className="text-decoration-none" to="/dokter-chat">
        <div className="row" id="chat-link">
          <div className="col-3">
            <BsChatLeft id="icon-chat-svg" size={23} fontWeight="bolder" />
          </div>
          <div className="col-9 d-flex  align-items-end">
            <p className="link-text"> Chat</p>
          </div>
        </div>
      </Link>

      <Link id="link" className="text-decoration-none" to="/dokter-transaksi">
        <div className="row" id="transaksi-link">
          <div className="col-3">
            <BsWallet2 size={23} />
          </div>
          <div className="col-9 d-flex  align-items-end">
            <p className="link-text">Transaksi</p>
          </div>
        </div>
      </Link>

      <Link
        id="link"
        className="text-decoration-none"
        to="/dokter-artikel"
        onClick={linkActive}
      >
        <div className="row" id="artikel-link">
          <div className="col-3">
            <BsFileEarmarkText size={23} />
          </div>
          <div className="col-9 d-flex  align-items-end">
            <p className="link-text">Artikel</p>
          </div>
        </div>
      </Link>

      <Link id="link" to="/dokter-logout" className="text-decoration-none">
        <div className="row" id="logout-link">
          <div className="col-3">
            <BsBoxArrowRight size={23} />
          </div>
          <div className="col-9 d-flex  align-items-end ">
            <p className="link-text"> Logout</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SidebarList;
