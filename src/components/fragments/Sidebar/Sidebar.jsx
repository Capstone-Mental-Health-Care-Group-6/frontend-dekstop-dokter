import SidebarItem from '../../elements/SidebarItem/SidebarItem';
import './Sidebar.styles.css'

const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebar" className="col-sm-3 bg-emphasis d-flex justify-content-center position-sticky">
          <div className= "sidebarcenter">
            <a className="navbar-brand d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="62" viewBox="0 0 51 54" fill="none">
                <ellipse cx="25.0501" cy="23.8304" rx="5.23759" ry="5.08234" fill="#0085FF"/>
                <path d="M31.5369 28.6702C27.9199 30.2489 26.505 31.4007 25.0547 33.8941V43.2224C26.2367 38.8305 27.8081 36.7957 32.0355 33.8941C37.0277 31.5398 38.9814 29.7338 38.019 23.9438C35.8918 26.143 34.5207 27.2146 31.5369 28.6702Z" fill="#0085FF"/>
                <path d="M18.5668 28.9495C22.1869 30.5383 23.6031 31.6976 25.0547 34.2071V43.5956C23.8716 39.1753 22.2988 37.1274 18.0677 34.2071C13.0711 31.8376 11.1157 30.02 12.0789 24.1926C14.208 26.406 15.5803 27.4845 18.5668 28.9495Z" fill="#0085FF"/>
                <path d="M15.3716 36.2684C22.516 41.9888 23.8611 46.3896 24.9359 54.0001C22.4287 48.7592 20.0649 46.8232 14.3464 44.9648C9.6328 44.3232 7.0377 43.8644 3.87126 40.1084C0.518525 35.6445 0.0813122 32.6453 0 26.7813C0.146788 24.9056 0.668153 25.3186 1.82177 26.7813L2.96038 31.412C3.51505 33.0893 4.10163 33.9326 5.35145 35.3648C6.86199 36.779 7.96253 37.034 10.0202 37.2849C7.7639 35.2496 6.33585 34.1838 4.55489 31.412C4.24274 30.2949 4.63754 30.1776 5.69349 30.2826C9.33382 32.8396 11.47 34.1266 15.3716 36.2684Z" fill="#0085FF"/>
                <path d="M35.1092 36.263C27.9324 41.9805 26.5811 46.3791 25.5014 53.9857C28.0201 48.7475 30.3946 46.8124 36.1391 44.955C40.8742 44.3137 43.4811 43.8551 46.6619 40.101C50.0299 35.6394 50.4691 32.6417 50.5508 26.7807C50.4033 24.9059 49.8796 25.3187 48.7207 26.7807L47.5769 31.409C47.0197 33.0855 46.4305 33.9283 45.175 35.3599C43.6576 36.7733 42.552 37.0282 40.485 37.2789C42.7516 35.2447 44.1861 34.1795 45.9752 31.409C46.2887 30.2925 45.8922 30.1752 44.8314 30.2801C41.1745 32.8359 39.0286 34.1223 35.1092 36.263Z" fill="#0085FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M46.8269 26.9989C47.1769 25.4342 47.3615 23.8069 47.3615 22.1364C47.3615 9.9108 37.472 0 25.2726 0C13.0732 0 3.18359 9.9108 3.18359 22.1364C3.18359 23.815 3.37004 25.45 3.7233 27.0217C3.66857 26.3796 3.64062 25.7296 3.64062 25.0729C3.64062 12.8473 13.3263 2.93654 25.2742 2.93654C37.222 2.93654 46.9077 12.8473 46.9077 25.0729C46.9077 25.7218 46.8804 26.3642 46.8269 26.9989Z" fill="#0085FF"/>
              </svg>
              <span className="emphati">Emphati</span> <span className="care">Care</span>
            </a>
          </div>
            <ul className="nav flex-column">
              <SidebarItem iconSrc="./src/assets/dashboard-active.png" text="Dashboard" />
              <SidebarItem iconSrc="./src/assets/chat bubble_outline.png" text="Chat" />
              <SidebarItem iconSrc="./src/assets/account_balance_wallet.png" text="Transaksi" />
              <SidebarItem iconSrc="./src/assets/description.png" text="Artikel" />
              <br /><br /><br /><br /><br /><br /><br /><br /><br />
              <SidebarItem iconSrc="./src/assets/move_item.png" text="Logout" />
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar;
