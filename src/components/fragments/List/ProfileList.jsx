import React from 'react';
import { NavLink } from 'react-router-dom';
import { accountBalance, acountCircle, archive, localLibrary } from '../../../../image';

const ProfileList = () => {
  return (
    <div>
      <div className="list-group">
        <div className=" title d-flex align-items-center">
          <h4>Lihat / Edit Profile</h4>
        </div>
        <hr className="styled-hr" />
        <NavLink
          to="/dokter/profile/data-pribadi"
          className="list-group-item list-group-item-action"
        >
          <img
            src={acountCircle}
            alt="Data Pribadi"
            className="mr-2"
            style={{ width: '32px', height: '32px', margin: '10px' }}
          />
          Data Pribadi
        </NavLink>
        <NavLink
          to="/dokter/profile/data-akademik"
          className="list-group-item list-group-item-action"
        >
          <img
            src={accountBalance}
            alt="Data Akademik"
            className="mr-2"
            style={{ width: '32px', height: '32px', margin: '10px' }}
          />
          Data Akademik
        </NavLink>
        <NavLink
          to="/dokter/profile/dokumen"
          className="list-group-item list-group-item-action"
        >
          <img
            src={archive}
            alt="Dokumen"
            className="mr-2"
            style={{ width: '32px', height: '32px', margin: '10px' }}
          />
          Dokumen
        </NavLink>
        <NavLink
          to="/dokter/profile/pengalaman"
          className="list-group-item list-group-item-action"
        >
          <img
            src={localLibrary}
            alt="Pengalaman"
            className="mr-2"
            style={{ width: '32px', height: '32px', margin: '10px' }}
          />
          Pengalaman
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileList;
