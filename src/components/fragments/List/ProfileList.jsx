import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileList = () => {
  return (
    <div>
      <div className="list-group">
        <div className=" title d-flex align-items-center">
          <h4>Edit Profil</h4>
        </div>
        <hr className="styled-hr"/>
        <NavLink
          to="/dokter-data-pribadi"
          className="list-group-item list-group-item-action"
        >
          <img
            src="../src/assets/account circle.png"
            alt="Data Pribadi"
            className="mr-2"
            style={{ width: '32px', height: '32px', margin: '10px' }}
          />
          Data Pribadi
        </NavLink>
        <NavLink
          to="/dokter-data-akademik"
          className="list-group-item list-group-item-action"
        >
          <img
            src="../src/assets/account balance.png"
            alt="Data Akademik"
            className="mr-2"
            style={{ width: '32px', height: '32px', margin: '10px'}}
          />
          Data Akademik
        </NavLink>
        <NavLink
          to="/dokter-dokumen"
          className="list-group-item list-group-item-action"
        >
          <img
            src="../src/assets/archive.png"
            alt="Dokumen"
            className="mr-2"
            style={{ width: '32px', height: '32px', margin: '10px'}}
          />
          Dokumen
        </NavLink>
        <NavLink
          to="/dokter-pengalaman"
          className="list-group-item list-group-item-action"
        >
          <img
            src="../src/assets/local library.png"
            alt="Pengalaman"
            className="mr-2"
            style={{ width: '32px', height: '32px', margin: '10px'}}
          />
          Pengalaman
        </NavLink>
        <NavLink
          to="/dokter-profil-singkat"
          className="list-group-item list-group-item-action"
        >
          <img
            src="../src/assets/business center.png"
            alt="Profil Singkat"
            className="mr-2"
            style={{ width: '32px', height: '32px', margin: '10px'}}
          />
          Profil Singkat
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileList;
