
import React from "react";
import {
  BsChatLeft,
  BsGrid,
  BsWallet2,
  BsBoxArrowRight,
  BsFileEarmarkText,
} from "react-icons/bs";
import './Sidebar.styles.css'

import SidebarItem from "../../elements/SidebarItem/SidebarItem";


const Sidebar = () => {
  return (
    <div>
      <div className="sticky-top h-100 border border-2">
        <div
          className="sticky-top"
          style={{
            paddingLeft: "49px",
            paddingRight: "49px",
            paddingTop: "68px",
            paddingBottom: "68px",
          }}
        >
          <div>
            <img id="logo" src="assets/logo.png" alt="logo" />
            <SidebarItem
              path={"/"}
              id={"dashboard-link"}
              text="Dashboard"
              svg={<BsGrid size={25} strokeWidth={0.5} />}
            />
            <SidebarItem
              path={"/dokter-chat"}
              id="chat-link"
              text="Chat"
              svg={<BsChatLeft size={25} strokeWidth={0.5}  />}
            />
            <SidebarItem
              path={"/dokter-transaksi"}
              id={"transaksi-link"}
              text="Transaksi"
              svg={<BsWallet2 size={25} strokeWidth={0.5}  />}
            />
            <SidebarItem
              path={"/dokter-artikel"}
              id={"artikel-link"}
              text="Artikel"
              svg={<BsFileEarmarkText size={25} strokeWidth={0.5}  />}
            />
            <SidebarItem
              path={"/dokter-logout"}
              style={{marginTop:" 396px"}}
              className="logout-link"
              id="logout-link"
              text="Logout"
              svg={<BsBoxArrowRight size={25} strokeWidth={0.5} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Sidebar;
