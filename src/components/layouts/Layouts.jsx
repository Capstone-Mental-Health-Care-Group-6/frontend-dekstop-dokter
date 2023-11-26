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
  iconProfilePasien1,
  iconProfilePasien2,
  iconProfilePasien3,
  logoEmpathiCare,
} from "../../../image";
import SidebarItem from "../elements/SidebarItem/SidebarItem";
import "./Layout.styles.css";
import { NavLink } from "react-router-dom";
import DropdownNotif from "../elements/DropdownNotification/DropdownNotif";
import Button from "../elements/Button/Button";

const Layouts = ({ children }) => {
  const dataNotification = [
    {
      id: 1,
      content: (
        <div className="d-flex align-items-center border-bottom border-secondary-subtle py-3">
          <img src={iconProfilePasien1} alt="icon-profile-pasien" />
          <div className="ms-2">
            <p className="fw-semibold">
              Rojak <span>via</span> Chat
            </p>

            <Button
              text={"lihat detail"}
              className={"btn btn-primary text-white px-2 py-1 rounded-3"}
            />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="d-flex align-items-center border-bottom border-secondary-subtle py-3">
          <img src={iconProfilePasien2} alt="icon-profile-pasien" />
          <div className="ms-2">
            <p className="fw-semibold">Mawardi</p>
            <p className="text__chat">
              oke dok akan segera saya terapkan metode ini
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="d-flex align-items-center border-bottom border-secondary-subtle py-3">
          <img src={iconProfilePasien3} alt="icon-profile-pasien" />
          <div className="ms-2">
            <p className="fw-semibold">Putri Malu</p>
            <p className="text__chat">
              Sama-sama , saya senang bisa membantu Anda. kita......
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <nav
        id="navbar"
        className="navbar bg-white d-flex align-items-center justify-content-end"
      >
        <div className="d-flex align-items-center gap-2 pe-4">
          <DropdownNotif
            imageSrc={iconNotifNavbar}
            dropdownContent={dataNotification.map((item) => item)}
          />
          <img
            src={iconProfileNavbar}
            alt="icon-profile"
            className="iconNavbar"
          />
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
            <div className="d-grid logout justify-content-start">
              <button className="btn">
                {" "}
                {<BsBoxArrowRight />} <span className="ms-2">Logout</span>{" "}
              </button>
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
