import React from "react";
import {
  BsGrid,
  BsChatLeft,
  BsWallet2,
  BsFileEarmarkText,
  BsBoxArrowRight,
} from "react-icons/bs";
import {
  logoEmphatiCare,
  logoEmpathiCareMobile,
  iconNotifNavbar,
  iconProfileNavbar,
} from "../../../image";
import SidebarItem from "../elements/SidebarItem/SidebarItem";
import "./Layout.styles.css";
import { NavLink } from "react-router-dom";

const Layouts = ({ children }) => {
  return (
    <>
      <div className="sidebar">
        <div className="offcanvass offcanvas-start">
          <div className="offcanvas-header d-flex justify-content-center">
            <img src={logoEmphatiCare} alt="logo-emphatiCare" />
            <img src={logoEmpathiCareMobile} alt="logo-emphatiCare" />
          </div>
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

              <li className="sidebar-item-logout">
                <NavLink to={"/"} className="sidebar-link-logout">
                  <div className="iconNavbar">
                    <BsBoxArrowRight />
                  </div>
                  <span>Logout</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <main className="main">
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
            <img
              src={iconProfileNavbar}
              alt="icon-profile"
              className="iconNavbar"
            />
          </div>
        </nav>
        <div className="p-3">{children}</div>
      </main>
    </>
  );
};

export default Layouts;
