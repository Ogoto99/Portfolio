import React from 'react';
import navCSS from './../Navbar/Nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className={navCSS.navbar}>
      <div className={navCSS.leftSection}>
        <div className={navCSS.navIcons}>
          <i className="ri-more-fill"></i>
          <i className="ri-arrow-left-s-line"></i>
          <i className="ri-arrow-right-s-line"></i>
          <div className={navCSS.homeIcon}>
            <i className="ri-home-4-fill"></i>
          </div>
        </div>

        <div className={navCSS.searchBar}>
          <i className="ri-search-line"></i>
          <input type="text" placeholder="What do you want to play?" />
          <i className="ri-mic-line"></i>
        </div>
      </div>

      <div className={navCSS.rightSection}>
        <button className={navCSS.premiumBtn}>Explore Premium</button>
        <i className="ri-notification-2-line"></i>
        <i className="ri-team-line"></i>
        <div className={navCSS.profileCircle}>M</div>
      </div>
    </nav>
  );
}

export default Nav;
