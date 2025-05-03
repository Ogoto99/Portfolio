import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import navCSS from './../Navbar/Nav.module.css'

function Nav() {
    
    const menu = useRef();
    
     const menuHandler =()=>{
        menu.current.classList.toggle(navCSS.activeNav);
    }  
    
    return (
        <nav>
            <div className={navCSS.logo}>
                <Link to="/Home">Melekh</Link>
            </div>
            <ul ref={menu}>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Service">Service</Link>
                </li>
                <li>
                    <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>

            <div className={navCSS.nav_btns}>
            <div className={navCSS.social}>
                <i className="ri-facebook-line"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-twitter-x-line"></i>
                <i className="ri-youtube-line"></i>
            </div>

            <i className="ri-menu-line" id={navCSS.bars} onClick={menuHandler}></i>
            </div>
        </nav>
    )
}

export default Nav