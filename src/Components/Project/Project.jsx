import React, { useEffect } from 'react';
import './Project.css';
import '../../index.css'
import AOS from "aos";
import "aos/dist/aos.css";
import project1 from '../Image/project1.jpg'
import project2 from '../Image/cloud.png'
import project3 from '../Image/project3.jpg'
import project4 from '../Image/project4.jpg'

const Project = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <div >
            <section className="portfolio" id="portfolio"  data-aos="fade-down">
                <h1 className="heading"> My <span>Projects</span> </h1>
                <div className="box-container">

                    <div className="box" >
                        <img src={project1} alt="project1" />
                        <div className="content">
                            <a href=" https://hospital-management-system-pi.vercel.app/" target="_blank" rel="noreferrer">
                                <h3>project 01</h3>
                            </a>
                        </div>
                    </div>
                    <div className="box" data-aos="fade-up-right" >
                        <img src={project2} alt="project2" />
                        <div className="content">
                            <a href="https://vercel.com/harllogeen/cloud-management" target="_blank" rel="noreferrer">
                                <h3>project 02</h3>
                            </a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up-down">
                        <img src={project3} alt="project3" />
                        <div className="content">
                            <a href="https://new-chaffeur.vercel.app/" target="_blank" rel="noreferrer">
                                <h3>project 03</h3>
                            </a>
                        </div>
                    </div>

                    <div className="box" >
                        <img src={project4} alt="project4" target="_blank" rel="noreferrer" />
                        <div className="content">
                            <a href=" http://healthlites.vercel.app/">
                                <h3>project 04</h3>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )

}


export default Project