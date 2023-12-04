import React from "react";
import {
  BsGrid,
  BsChatLeft,
  BsWallet2,
  BsFileEarmarkText,
  BsBoxArrowRight,
<<<<<<< HEAD
=======
  BsCoin,
>>>>>>> 3cba41a7cb42a5eb8aade4b59bdbbf5782514cc7
} from "react-icons/bs";
import {
  logoEmpathiCareMobile,
  iconNotifNavbar,
  iconProfileNavbar,
  logoEmpathiCare,
} from "../../../image";
import SidebarItem from "../elements/SidebarItem/SidebarItem";
import "./Layout.styles.css";
<<<<<<< HEAD
=======
import { NavLink } from "react-router-dom";
import DropdownNotif from "../elements/DropdownNotification/DropdownNotif";
import { dataNotification } from "../DataComponents/dataComponents";
>>>>>>> 3cba41a7cb42a5eb8aade4b59bdbbf5782514cc7

const Layouts = ({ children }) => {
  return (
    <>
      <nav
        id="navbar"
        className="navbar bg-white d-flex align-items-center justify-content-end"
      >
        <div className="d-flex align-items-center gap-2 pe-4">
<<<<<<< HEAD
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
=======
          <DropdownNotif
            imageSrc={iconNotifNavbar}
            dropdownContent={dataNotification.map((item) => item)}
          />
          <NavLink to={"/dokter-profile"}>
            <img
              src={iconProfileNavbar}
              alt="icon-profile"
              className="iconNavbar"
            />
          </NavLink>
>>>>>>> 3cba41a7cb42a5eb8aade4b59bdbbf5782514cc7
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
<<<<<<< HEAD
=======
                  icon={<BsCoin />}
                  title="Pencairan Saldo"
                  location="/pencairan-saldo-dokter"
                />
                <SidebarItem
>>>>>>> 3cba41a7cb42a5eb8aade4b59bdbbf5782514cc7
                  icon={<BsFileEarmarkText />}
                  title="Konten"
                  location="/dokter-artikel"
                />
              </ul>
<<<<<<< HEAD

            </div>
            <div className="d-grid logout justify-content-start" >
              <button className="btn" > {<BsBoxArrowRight />} <span className="ms-2" >Logout</span> </button>
=======
            </div>
            <div className="d-grid logout justify-content-start">
              <button className="btn">
                {" "}
                {<BsBoxArrowRight />} <span className="ms-2">Logout</span>{" "}
              </button>
>>>>>>> 3cba41a7cb42a5eb8aade4b59bdbbf5782514cc7
            </div>
          </div>
        </div>
      </div>

      <main className="main">
<<<<<<< HEAD
        <div className="py-3">{children}</div>
=======
        <div className="p-3">{children}</div>
>>>>>>> 3cba41a7cb42a5eb8aade4b59bdbbf5782514cc7
      </main>
    </>
  );
};

export default Layouts;
