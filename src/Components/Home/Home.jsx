import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Home.css'
import '../../index.css'
import PORT from '../Image/PORT.jpg'
import { NavLink } from 'react-router-dom'
import About from '../About/About'
import Services from '../Services/Services'
import Project from '../Project/Project'
import { Contact } from '../Contact/Contact'
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../Footer/Footer'
import myPdf from 'file:///C:/Users/Administrator/Desktop/CV/Oluwaseyi_John%20Resume0.pdf'




const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000
        });
      }, []);

    const [classActive, setClassActive] = useState('active')

    const themeToggler = () => {
        setClassActive(!classActive)
        console.log(classActive);
    };

    return (

        <div name="home">
            <Sidebar />
            <div>
                <section className="home" id="home">

                    <div id="particles-js"></div>
                    <div className="common">
                        <img src={PORT} alt='PORT' data-aos-anchor-placement="top-bottom" data-aos="fade-down" />
                    </div>
                    <div className="content">
                        <h3>Alugbin Oluwaseyi John</h3>
                        <p>I am a Front-end Developer</p>
                        <NavLink to={myPdf} className="btn"> Download CV <span className="fa fa-download" aria-hidden="true"></span> </NavLink>

                    </div>



                    <div onClick={themeToggler} id="theme-toggler" ></div>

                    <div class="share">

                        <a href="https://www.facebook.com" className="fab fa-facebook-f" target="_blank" rel="noopener noreferrer"> </a>
                        <a href="https://www.twitter.com" className="fab fa-twitter" target="_blank" rel="noopener noreferrer"> </a>
                        <a href="https://www.github.com/harllogeen" className="fab fa-instagram" target="_blank" rel="noopener noreferrer"> </a>
                        <a href="https://www.linkedin.com/in/oluwaseyi-alugbin-86ab08194/" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"> </a>
                        <a href="https://wa.me/+2348146676786" className="fab fa-whatsapp" target="_blank" rel="noopener noreferrer"> </a>
                    </div>
                </section>

            </div>
            <About />
            <Services />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home