import React from "react";
import "./ModalLogout.css";

const ModalLogout = ({ show, onClose, onSubmit }) => {
  const overlayStyle = {
    display: show ? "block" : "none",
  };

  const modalStyle = {
    display: show ? "block" : "none",
  };

  return (
    <div className="modal-logout">
      <div
        className="overlay"
        style={overlayStyle}
        onClick={onClose}
      ></div>
      <div
        className={`modal${show ? " show" : ""}`}
        tabIndex="-1"
        style={modalStyle}
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content border-0">
            <div className="modal-header border-0">
              <h5 className="modal-title">Konfirmasi</h5>
            </div>
            <div className="modal-body">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img
                  src="../src/assets/iMac Exit.png"
                  alt="Logo"
                  className="img_logout"
                  style={{
                    width: "72px",
                    height: "72px",
                    marginBottom: "10px",
                  }}
                />
                <p>Yakin ingin keluar dari halaman ini?</p>
              </div>
            </div>
            <div className="modal-footer border-0 align-items-center justify-content-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
              >
                Tidak
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={onSubmit}
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
