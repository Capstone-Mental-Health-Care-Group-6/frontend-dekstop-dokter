import React from "react";
import Layouts from "../../components/layouts/Layouts";
import "./Profile.styles.css";
import ProfileList from "../../components/fragments/List/ProfileList";
import { gambar } from "../../../image";

const Profile = () => {

  return (
    <Layouts>
      <div className="profile-pages">
        <div className="card mb-3 align-items-start">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={gambar} className="img-fluid" alt="Profile" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">Helen Dharani Jiffri S.Psi, M.Psi</h6>
                <p className="card-text">
                  Psikolog
                </p>
                <p className="card-text">
                  Emphati Care
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="list mb 3">
          <ProfileList />
        </div>
      </div>
    </Layouts>
  );
};

export default Profile;