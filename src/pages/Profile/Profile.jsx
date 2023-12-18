import React, { useState, useEffect } from "react";
import Layouts from "../../components/layouts/Layouts";
import "./Profile.styles.css";
import ProfileList from "../../components/fragments/List/ProfileList";
import { useLocation } from "react-router-dom";
import ModalProfileSuccess from "../../components/fragments/Modal/ModalProfileSuccess";
import axios from "axios";

const Profile = () => {
  const [psikologData, setPsikologData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataSaved = queryParams.get('dataSaved') === 'true';

  useEffect(() => {
    const fetchPsikologData = async () => {
      try {
        const response = await axios.get('/doctor/13');
        setPsikologData({
          doctor_avatar: response.data.gambar,
          doctor_name: response.data.nama,
        });
      } catch (error) {
        console.error("Error fetching psikolog data:", error);
      }
    };

    fetchPsikologData();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Layouts>
      <div className="profile-pages">
        {Object.keys(psikologData).length > 0 ? ( // Check if psikologData has any keys
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <img src={psikologData.doctor_avatar} className="img-fluid" alt="..." />
              <div className="ms-3">
                <h6 className="card-title">{psikologData.doctor_name}</h6>
                <p className="card-text">Psikolog</p>
                <p className="card-text">Empathi Care</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
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
