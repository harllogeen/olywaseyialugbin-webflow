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
import { ThemeProvider } from 'styled-components'
import ParticleComponent from '../SubComponent/ParticleComponent';
import {DarkTheme} from '../theme';
import ParticleBackground from '../ParticleBackground/ParticleBackground'




const Home = () => {
   
    
    const [classActive, setClassActive] = useState('active')

    const themeToggler = () => {
        setClassActive(!classActive)
        console.log(classActive);
    };

    return (
        <ThemeProvider theme={DarkTheme}>
        <div>
            <Sidebar />
            <div>
                
            <ParticleComponent theme='dark' />
                
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
                    
                    

                    <div onClick={themeToggler} id="theme-toggler" className={`${classActive ? "fas fa-moon" : "fas fa-sun"} `}></div>

                    <div class="share">

                        <NavLink to="https://www.facebook.com" className="fab fa-facebook-f"> </NavLink>
                        <NavLink to="https://www.twitter.com" className="fab fa-twitter"></NavLink>
                        <NavLink to="https://www.github.com/harllogeen" className="fab fa-instagram"></NavLink>
                        <NavLink to="https://www.linkedin.com/in/oluwaseyi-alugbin-86ab08194/" className="fab fa-linkedin"></NavLink>
                        <NavLink to="https://wa.me/+2348146676786" className="fab fa-whatsapp"></NavLink>
                    </div>
                </section>
                
            </div>
           <ParticleBackground />
            <About />
            <Services />
            <Project />
            <Contact />
            <Footer />
        </div>
        </ThemeProvider>
    )
}

export default Home