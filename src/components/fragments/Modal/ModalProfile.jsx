import React from "react";
import './ModalProfile.styles.css'
import { NavLink } from "react-router-dom";

const ModalProfile = ({ show, onClose }) => {
  const overlayStyle = {
    display: show ? "block" : "none",
  };

  const modalStyle = {
    display: show ? "block" : "none",
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
                  src="../src/assets/exclamation.png"
                  alt="Logo"
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px", marginBottom: "10px" }}
                />
                <h5 className="modal-title mb-0">Apakah anda yakin ingin menyimpan perubahan?</h5>
              </div>
            </div>
            <div className="modal-body border-0">
              <p>
                If you continue, changes you made will be saved. You can always
                change and save again.
              </p>
            </div>
            <div className="modal-footer border-0 d-flex flex-column align-items-center">
              <NavLink to='/dokter-profile'>
                <button type="button" className="btn btn-primary">
                  Simpan Perubahan
                </button>
              </NavLink>
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
