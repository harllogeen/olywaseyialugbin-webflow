import React, { useEffect } from 'react'
import "./About.css"
import '../../index.css'
import AOS from "aos";
import "aos/dist/aos.css";
import html from "../Image/html.png"
import css from '../Image/css.png'
import BOOTSTRAP from '../Image/BOOTSTRAP.png'
import javascript from '../Image/javascript.png'
import typescript from '../Image/typescript.png'
import REACT from '../Image/REACT.png'
import jira from '../Image/jira.png'
import { NavLink } from 'react-router-dom'

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <div>
            <section className="about" id="about"  data-aos="fade-down">
                <h1 className="heading"> <span>About</span> Me</h1>

                <div className="row">
                    <div className="content">
                        <h3>My name is <span>Alugbin Oluwaseyi John</span></h3>
                        <p>I am an Innovative Frontend Developer with 2 years experience building and maintaining responsive
                            websites in the recruiting industry. Proficient in HTML5, CSS3, Javascript, React, React-Redux
                            and Node; plus modern libraries and frameworks. Passionate about usability and possess working
                            knowledge of Figma Designs..</p>

                        <NavLink to="/contact" className="btn"> Contact Me <span className="fas fa-chevron-right"></span> </NavLink>
                    </div>

                    <div className="box-container">
                        <div className="box" data-aos="flip-up">
                            <img src={html} alt="html" className="mytypescript1" />

                            <div className="progress">
                                <h3> HTML <span>100%</span> </h3>
                                <div className="bar bar-2-1"><span></span></div>
                            </div>
                        </div>
                        <div className="box" data-aos="flip-down">
                            <img src={css} alt="css" />

                            <div className="progress">
                                <h3> CSS <span>95%</span> </h3>
                                <div className="bar bar-2-2"><span></span></div>
                            </div>
                        </div>

                        <div className="box" data-aos="flip-up">
                            <img src={BOOTSTRAP} alt="bootstrap" />

                            <div className="progress">
                                <h3> BOOTSTRAP <span>80%</span> </h3>
                                <div className="bar bar-2-3"><span></span></div>
                            </div>
                        </div>


                        <div className="box" >
                            <img src={javascript} alt="javascript" />

                            <div className="progress">
                                <h3> JAVASCRIPT <span>80%</span> </h3>
                                <div className="bar bar-2-4"><span></span></div>
                            </div>
                        </div>
                        <div className="box">
                            <img src={typescript} alt="typescript" className="mytypescript" />

                            <div className="progress">
                                <h3>TYPESCRIPT<span>70%</span> </h3>
                                <div className="bar bar-2-5"><span></span></div>
                            </div>
                        </div>

                        <div className="box" data-aos="flip-up">
                            <img src={REACT} alt="REACT" className="mytypescrip2" width="30%" />

                            <div className="progress">
                                <h3> REACT JS <span>85%</span> </h3>
                                <div className="bar bar-2-6"><span></span></div>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up-right">
                            <img src={jira} alt="jira" className="mytypescrip2" width="30%" />

                            <div className="progress">
                                <h3>JIRA SOFTWARE<span>85%</span> </h3>
                                <div className="bar bar-2-6"><span></span></div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default About