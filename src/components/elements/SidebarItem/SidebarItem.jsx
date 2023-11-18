import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon, title, location, condition }) => {
  return (
    <li className={`sidebar-item  ${condition}`}>
      <NavLink to={location} className="sidebar-link">
        <div className="iconNavbar">{icon} </div>
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
