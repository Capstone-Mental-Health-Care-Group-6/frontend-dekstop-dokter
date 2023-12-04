import React from "react";

const DropdownNotif = ({ imageSrc, dropdownContent }) => {
  return (
    <div className="dropdown">
      <button
        className="nav-link dropdown-toggle custom-dropdown-toggle"
        data-bs-toggle="dropdown"
        role="button"
        aria-expanded="false"
      >
        <img src={imageSrc} alt="Dropdown Image" className="notif-icon" />
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <p className="text-center fw-semibold">Notifikasi</p>
        {dropdownContent.map((item, index) => (
          <li key={index} className="dropdown-item">
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownNotif;
