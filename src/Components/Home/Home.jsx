import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Home.css'
import '../../index.css'
import PORT from '../Image/PORT.jpg'
import { NavLink } from 'react-router-dom'
import About from '../About/About'
import Services from '../Services/Services'
import Project from '../Project/Project'
import { Contact } from '../Contact/Contact'
import Footer from '../Footer/Footer'




const Home = () => {


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
                        <img src={PORT} alt='PORT' />
                    </div>
                    <div className="content">
                        <h3>Alugbin Oluwaseyi John</h3>
                        <p>I am a Front-end Developer</p>
                        <NavLink to="/" className="btn"> Download CV <span className="fa fa-download" aria-hidden="true"></span> </NavLink>

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