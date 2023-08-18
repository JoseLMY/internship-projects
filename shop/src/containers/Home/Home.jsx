import React from 'react'
import "./Home.css"

import imgHome from "../../assets/img1.jpg"
import { Services } from '../Services/Services'
import { ContactUs } from '../Contact-us/ContactUs'
import { AboutUs } from '../About-us/AboutUs'
import { FooterBar } from '../Footer-bar/FooterBar'

function Home() {
    return(
        <>
            <section className='homeContainer'>
                <div className='imgHome-container'>
                    <img src={imgHome} alt="" className='imgHome'/>
                </div>
                <div className='nameContainer'>
                    <div className='logo'>
                        <p>3-49</p>
                    </div>
                    <div className='productions'>
                        <p>Productions</p>
                    </div>
                </div>
            </section>
            <section id='servicesContainer'>
                <Services />
            </section>
            <section id='contatUsContainer'>
                <ContactUs />
            </section>
            <section id='aboutUsContainer'>
                <AboutUs />
            </section>
            <section id='footerBarContainer'>
                <FooterBar />
            </section>
        </>
    )
}

export {Home}