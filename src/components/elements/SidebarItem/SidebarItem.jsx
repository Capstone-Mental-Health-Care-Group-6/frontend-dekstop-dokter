import './SidebarItem.styles.css'

const SidebarItem = ({ iconSrc, text }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">
        <div className="sidebar-item">
          <div className="item-content">
            <img src={iconSrc} alt={`${text} Icon`} className="icon"/>
            <div className="text">{text}</div>
          </div>
        </div>
      </a>
    </li>
    )
  }
  
  export default SidebarItem