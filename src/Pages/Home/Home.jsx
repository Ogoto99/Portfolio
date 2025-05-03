import React from "react";
import Nav from "../../Components/Navbar/Nav";
import homeCSS from './../Home/Home.module.css';

import heroImg from './../../assets/IMG-20250211-WA0007 - Copy.jpg';

function Home() {
    return (
        <div>
            {/* Nav bar */}
            <Nav/>

            <div className={homeCSS.Header_wrapper}>
                <div className={homeCSS.header_content}>
                    <h2>Hi , I m Melekh Ogoto - <span>UI / UX Designer</span></h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maxime debitis quasi et ut in necessitatibus, ipsam molestias ducimus magnam beatae sint vitae laudantium illum animi fuga culpa cum optio!</p>

                    <div className={homeCSS.social_contact}>
                        <p>Email : <span>ogotomelekh99@gmail.com</span></p>
                        <p>Email : <span>ogotomelekh99@gmail.com</span></p>
                    </div>

                    <div className={homeCSS.header_btns}>
                        <button>Download CV</button>
                        <button>Hire Me Now</button>
                    </div>


                </div>
                <div className={homeCSS.header_image}>
                    <img src={heroImg} alt="hero-image" />
                </div>
            </div>


        </div>
    )
}

export default Home;