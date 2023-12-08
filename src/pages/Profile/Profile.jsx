import React, { useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import "./Profile.styles.css";
import ProfileList from "../../components/fragments/List/ProfileList";
import { gambar } from "../../../image";
import { useLocation } from "react-router-dom";
import ModalProfileSuccess from "../../components/fragments/Modal/ModalProfileSuccess";

const Profile = () => {
  const namaPsikolog = "nama psikolog"
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataSaved = queryParams.get('dataSaved') === 'true';

  const [showModal, setShowModal] = useState(dataSaved);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Layouts>
      <div className="profile-pages">
        <div className="card">
          <div className="card-body d-flex align-items-center">
            <img src={gambar} className="img-fluid" alt="..." />
            <div className="ms-3">
              <h6 className="card-title">{namaPsikolog}</h6>
              <p className="card-text">Psikolog</p>
              <p className="card-text">Empathi Care</p>
            </div>
          </div>
        </div>
        <div className="list mb-3">
          <ProfileList />
        </div>
        <div className="modal-container" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <ModalProfileSuccess show={showModal} onClose={handleCloseModal} />
        </div>
      </div>
    </Layouts>
  );
};

export default Profile;
