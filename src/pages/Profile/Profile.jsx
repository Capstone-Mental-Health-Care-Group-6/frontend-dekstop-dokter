import React, { useState, useEffect } from "react";
import Layouts from "../../components/layouts/Layouts";
import "./Profile.styles.css";
import ProfileList from "../../components/fragments/List/ProfileList";
import { useLocation } from "react-router-dom";
import ModalProfileSuccess from "../../components/fragments/Modal/ModalProfileSuccess";
import { useLogin } from "../../hooks/useLogin";
import axios from "axios";
import { DetailDoctor, getAllDoctors } from "../../service/doctor";

const Profile = () => {
  useLogin();
  const [showModal, setShowModal] = useState(false);

  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataSaved = queryParams.get('dataSaved') === 'true';
  
  useEffect(() => {
    setLoading(true);
    DetailDoctor((res) => {
      setDoctor(res.data);
      setLoading(false);
    });
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Layouts>
      <div className="profile-pages">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {doctor.map((doctorData) => (
              <div key={doctorData.id} className="card">
                <div className="card-body d-flex align-items-center">
                  <img src={doctorData.doctor_avatar} className="img-fluid" alt="..." />
                  <div className="ms-3">
                    <h6 className="card-title">{doctorData.doctor_name}</h6>
                    <p className="card-text">Psikolog</p>
                    <p className="card-text">Empathi Care</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
