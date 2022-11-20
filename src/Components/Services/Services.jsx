import React from 'react'
import './Services.css';
import '../../index.css';

const Services = () => {
    return (
        <div>
            <section class="services" id="services">
                <h1 class="heading"> My <span>Services</span> </h1>
                <div class="box-container">

                    <div class="box">
                        <i class="fas fa-code"></i>
                        <h3>Web Design</h3>
                        <p>This aspect refer to the designing of websites that are displayed on the internet. It usually
                            refers to the user experience aspects of website development rather than software development.
                        </p>
                    </div>

                    <div class="box">
                        <i class="fas fa-mobile"></i>
                        <h3>Responsive Design</h3>
                        <p>Responsive web design is a web development approach that creates dynamic changes to the
                            appearance of a website, depending on the screen size and orientation of the device being used
                            to view it.</p>
                    </div>

                    <div class="box">
                        <i class="fas fa-paint-brush"></i>
                        <h3>Graphic Design</h3>
                        <p>Graphic design is a craft where professionals create visual content to communicate messages. By
                            applying visual hierarchy and page layout techniques, designers use typography and pictures to
                            meet users.
                        </p>
                    </div>

                    <div class="box">
                        <i class="fas fa-search-dollar"></i>
                        <h3>Forex Technical Analyst</h3>
                        <p>technical analysis is the framework in which traders study price movement. The theory is that a
                            person can look at historical price movements and determine the current trading conditions </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Services