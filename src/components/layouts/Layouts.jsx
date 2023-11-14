import React from "react";
import Sidebar from "../fragments/Sidebar/Sidebar";
import Header from "../fragments/Header/Header";

const Layouts = ({ children }) => {
  return (
    <>
      <div className="d-flex">
          <Sidebar />
          <div className="col bg-light">
          <Header/>
            <div className="p-4">
              {children}
            </div>
          </div>
      </div>
    </>
  );
};

export default Layouts;
