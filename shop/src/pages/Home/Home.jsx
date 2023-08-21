import React from 'react'
import "./Home.css"

import { Services } from '../../containers/Services/Services'
import { ContactUs } from '../../containers/Contact-us/ContactUs'
import { AboutUs } from '../../containers/About-us/AboutUs'
import { FooterBar } from '../../containers/Footer-bar/FooterBar'

import whatsapp from "../../assets/whatsapp.png"
import instagram from "../../assets/instagram.png"

import imgHome from "../../assets/img1.jpg"

function Home() {
    return(
        <>
            <section className='homeContainer'>
                <div className='primary'>
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
                    <div className='net-primary'>
                        <div className='networks-primary whatsaap-primary'>
                            <img src={whatsapp} alt="img network 349 Productinos " width={20} className='imgWhatsApp-primary'/>
                            <a href="https://www.google.com/search?q=whatsapp+web&sca_esv=558180114&rlz=1C1CHBF_esCO966CO967&sxsrf=AB5stBi-wkTSp6kLG32pfhdPzU_0m-r--A%3A1692383113799&ei=ibffZNqtML2PwbkP2vaEqAo&oq=whatsapp&gs_lp=Egxnd3Mtd2l6LXNlcnAiCHdoYXRzYXBwKgIIATIHECMYigUYJzIHECMYigUYJzILEAAYgAQYsQMYgwEyEBAAGIAEGBQYhwIYsQMYgwEyCxAuGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIoFGLEDGIMBMgsQABiABBixAxiDATIFEAAYgARI9yFQ9wVYtQ9wAXgAkAEAmAG3A6ABsBmqAQUzLTMuNbgBAcgBAPgBAcICChAAGEcY1gQYsAPCAgoQABiKBRiwAxhDwgIGEAAYFhgewgIIEAAYFhgeGAriAwQYACBBiAYBkAYK&sclient=gws-wiz-serp" target="_blank" rel="noopener noreferrer" className='a-wha-primary'>WhatsApp</a>
                        </div>
                        <div className='networks-primary instagram-primary'>
                            <img src={instagram} alt="img network 349 Productinos" width={32} className='imgInstagram-primary'/>
                            <a href="https://www.instagram.com/3_49producciones/" target="_blank" rel="noopener noreferrer" className='a-inst-primary'>Instagram</a>
                        </div>
                    </div>
                    </div>
                </div>
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
            </section>
        </>
    )
}

export {Home}