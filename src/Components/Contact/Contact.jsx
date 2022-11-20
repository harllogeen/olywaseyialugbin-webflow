import React from 'react'
import './Contact.css'
import '../../index.css'

export const Contact = () => {
    return (
        <div>
            <section className="contact" id="contact">

                <h1 className="heading"> <span>contact</span> me </h1>

                <form action="">
                    <input type="text" placeholder="Enter your name" className="box" />
                    <input type="email" placeholder="Enter your email" className="box" />
                    <input type="text" placeholder="subject" className="box" />
                    <textarea name="" className="box" placeholder="your message" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="send message" className="btn" />
                </form>

            </section>
        </div>
    )
}
