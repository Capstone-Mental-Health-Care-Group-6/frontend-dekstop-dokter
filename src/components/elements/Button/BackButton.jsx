import React from "react";
import { NavLink } from "react-router-dom"; // Import Link from react-router-dom if you're using it for navigation

const BackButton = ({ location }) => {
  return (
    <div className="back-button">
      <NavLink to={location}>
        <button className="btn border-0" style={{
          color: 'var(--neutral-1000, #000)',
          fontFamily: 'Montserrat',
          fontSize: '30px',
          fontStyle: 'normal',
          fontWeight: 600,
          paddingBottom: '20px',
          lineHeight: 'normal',
          marginLeft: '-40px',
        }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M10.7575 12.5002L15.7075 17.4502C15.803 17.5424 15.8792 17.6528 15.9316 17.7748C15.984 17.8968 16.0116 18.028 16.0128 18.1608C16.0139 18.2936 15.9886 18.4252 15.9384 18.5481C15.8881 18.671 15.8138 18.7827 15.7199 18.8766C15.626 18.9705 15.5144 19.0447 15.3915 19.095C15.2686 19.1453 15.1369 19.1706 15.0041 19.1694C14.8714 19.1683 14.7401 19.1407 14.6181 19.0883C14.4961 19.0359 14.3858 18.9597 14.2935 18.8642L8.63654 13.2072C8.44907 13.0197 8.34375 12.7653 8.34375 12.5002C8.34375 12.235 8.44907 11.9807 8.63654 11.7932L14.2935 6.13618C14.4821 5.95402 14.7347 5.85323 14.9969 5.85551C15.2591 5.85778 15.5099 5.96295 15.6954 6.14836C15.8808 6.33377 15.9859 6.58458 15.9882 6.84678C15.9905 7.10898 15.8897 7.36158 15.7075 7.55018L10.7575 12.5002Z" fill="black" />
          </svg> Kembali
        </button>
      </NavLink>
    </div>
  );
};

export default BackButton;
