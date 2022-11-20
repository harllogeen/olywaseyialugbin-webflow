import React, { useState } from 'react'
import './Sidebar.css'
import '../../index.css'
import PORT from '../Image/PORT.jpg'
import { NavLink } from 'react-router-dom'
import '../Home/Home.css'



const Sidebar = () => {
    const [nav, setNav] = useState(false)
    const handleClose = () => setNav(!nav)
    const handleClick = () => {
        setNav(!nav)
    }

    return (
        <header className="header">


            <div id="menu-btn" className="mmytoggle" onClick={handleClick}>
                {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="actt" width='60%'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="times" width='60%'>
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
                }
            </div>
            <div class="user">
                <img src={PORT} alt='PORT' />
                <h3>Alugbin Oluwaseyi</h3>
                <p>Front-end Developer</p>
            </div>

            <nav className='navbar'>
                <NavLink to='/' smooth={true} duration={500} className="underline" >home</NavLink>
                <NavLink to='/about' smooth={true} offset={-200} duration={500} >about</NavLink>
                <NavLink to='/services' smooth={true} offset={-50} duration={500} >services</NavLink>
                <NavLink to='/projects' smooth={true} offset={-100} duration={500} >projects</NavLink>
                <NavLink to='/contact' smooth={true} offset={-50} duration={500}>contact</NavLink>
            </nav>


            {nav === true ? (

                <nav className='mobileNavbar'>
                    <div class="user">
                        <img src={PORT} alt='PORT' />
                        <h3>Alugbin Oluwaseyi</h3>
                        <p>Front-end Developer</p>
                    </div>
                    <NavLink to='/' smooth={true} duration={500} className="underline" onClick={handleClose}>home</NavLink>
                    <NavLink to='/about' smooth={true} offset={-200} duration={500} onClick={handleClose}>about</NavLink>
                    <NavLink to='/services' smooth={true} offset={-50} duration={500} onClick={handleClose}>services</NavLink>
                    <NavLink to='/projects' smooth={true} offset={-100} duration={500} onClick={handleClose}>projects</NavLink>
                    <NavLink to='/contact' smooth={true} offset={-50} duration={500} onClick={handleClose}>contact</NavLink>
                </nav>
            ) : null}
        </header>
    )
}

export default Sidebar