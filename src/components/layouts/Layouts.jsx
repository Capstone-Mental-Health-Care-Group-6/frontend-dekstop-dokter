import React from "react";
import {
  BsGrid,
  BsChatLeft,
  BsWallet2,
  BsFileEarmarkText,
  BsBoxArrowRight,
} from "react-icons/bs";
import {
  logoEmpathiCareMobile,
  iconNotifNavbar,
  iconProfileNavbar,
  logoEmpathiCare,
} from "../../../image";
import SidebarItem from "../elements/SidebarItem/SidebarItem";
import "./Layout.styles.css";
import { NavLink } from "react-router-dom";

const Layouts = ({ children }) => {
  return (
    <>
      <nav
        id="navbar"
        className="navbar bg-white d-flex align-items-center justify-content-end"
      >
        <div className="d-flex align-items-center gap-2 pe-4">
          <img
            src={iconNotifNavbar}
            alt="icon-notification"
            className="notif-icon"
          />
          <NavLink to={"/dokter-profile"}>
            <img
              src={iconProfileNavbar}
              alt="icon-profile"
              className="iconNavbar"
            />
          </NavLink>
        </div>
      </nav>

      <div className="sidebar">
        <div className="offcanvass offcanvas-start">
          <div className="offcanvas-header d-flex justify-content-center ">
            <img src={logoEmpathiCare} alt="logo-emphatiCare" />
            <img src={logoEmpathiCareMobile} alt="logo-emphatiCare" />
          </div>
          <div className="d-grid wrapper align-items-stretch">
            <div className="offcanvass-body d-grid  align-items-stretch">
              <ul className="menu d-grid justify-content-center align-items-center mx-auto p-0">
                <SidebarItem
                  icon={<BsGrid />}
                  title="Dashboard"
                  location="/dashboard-dokter"
                />
                <SidebarItem
                  icon={<BsChatLeft />}
                  title="Chat"
                  location="/dokter-chat"
                />
                <SidebarItem
                  icon={<BsWallet2 />}
                  title="Transaksi"
                  location="/dokter-transaksi"
                />
                <SidebarItem
                  icon={<BsFileEarmarkText />}
                  title="Konten"
                  location="/dokter-artikel"
                />
              </ul>

            </div>
            <div className="d-grid logout justify-content-start" >
              <button className="btn" > {<BsBoxArrowRight />} <span className="ms-2" >Logout</span> </button>
            </div>
          </div>
        </div>
      </div>

      <main className="main">
        <div className="p-3">{children}</div>
      </main>
    </>
  );
};

export default Layouts;
