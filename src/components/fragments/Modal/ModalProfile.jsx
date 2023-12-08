import React, { useState } from "react";
import './ModalProfile.styles.css'
import { exclamation } from "../../../../image";

const ModalProfile = ({ show, onClose }) => {
  const overlayStyle = {
    display: show ? "block" : "none",
  };

  const modalStyle = {
    display: show ? "block" : "none",
  };

  const handleConfirm = () => {
    window.location.href = '/dokter/profile?dataSaved=true';
  };
  

  return (
    <div className="modal-profile">
      <div className="overlay" style={overlayStyle} onClick={onClose}></div>
      <div className={`modal${show ? " show" : ""}`} tabIndex="-1" style={modalStyle} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content border-0">
            <div className="modal-header border-0">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img
                  src={exclamation}
                  alt="Logo"
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px", marginBottom: "10px" }}
                />
                <h5 className="modal-title mb-0">Apakah anda yakin ingin menyimpan perubahan?</h5>
              </div>
            </div>
            <div className="modal-body border-0">
              <p>Yakin ingin menyimpan perubahan?</p>
            </div>
            <div className="modal-footer border-0 d-flex flex-column align-items-center">
              <button type="button" className="btn btn-primary" onClick={handleConfirm}>
                Simpan Perubahan
              </button>
              <button
                type="button"
                className="btn-batal mt-2"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProfile;
