import { Link, NavLink } from "react-router-dom";
import "./SidebarItem.styles.css";

const SidebarItem = ({ path, onClick, id, text, svg, style }) => {
  return (
    <NavLink className="link" to={path} id={id} onClick={onClick} style={style}>
      <span className="col-3">{svg}</span>
      <span className="col-9 d-flex  align-items-end">{text}</span>
    </NavLink>
  );
};

export default SidebarItem;
