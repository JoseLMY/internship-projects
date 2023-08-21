import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
import instagram from "../../assets/instagram.png"
import email from "../../assets/email.png"
import phone from "../../assets/phone.png"

import "./FooterBar.css"

function FooterBar() {
    return(
        <>
            <div className='footerBar'>
                <div className='logo-349-productios'>
                    <h1>349 - Productions</h1>
                    <p>Creating culture through the screen...</p>
                </div>
                <div className='net-contact'>
                    <div className='networks whatsaap'>
                        <img src={whatsapp} alt="img network 349 Productinos " width={20} className='imgWhatsApp'/>
                        <a href="https://www.google.com/search?q=whatsapp+web&sca_esv=558180114&rlz=1C1CHBF_esCO966CO967&sxsrf=AB5stBi-wkTSp6kLG32pfhdPzU_0m-r--A%3A1692383113799&ei=ibffZNqtML2PwbkP2vaEqAo&oq=whatsapp&gs_lp=Egxnd3Mtd2l6LXNlcnAiCHdoYXRzYXBwKgIIATIHECMYigUYJzIHECMYigUYJzILEAAYgAQYsQMYgwEyEBAAGIAEGBQYhwIYsQMYgwEyCxAuGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIoFGLEDGIMBMgsQABiABBixAxiDATIFEAAYgARI9yFQ9wVYtQ9wAXgAkAEAmAG3A6ABsBmqAQUzLTMuNbgBAcgBAPgBAcICChAAGEcY1gQYsAPCAgoQABiKBRiwAxhDwgIGEAAYFhgewgIIEAAYFhgeGAriAwQYACBBiAYBkAYK&sclient=gws-wiz-serp" target="_blank" rel="noopener noreferrer" >WhatsApp</a>
                    </div>
                    <div className='networks instagram'>
                        <img src={instagram} alt="img network 349 Productinos" width={32} className='imgInstagram'/>
                        <a href="https://www.instagram.com/3_49producciones/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        
                    </div>
                    <div className='contactMe'>
                        <div className='networks email'>
                            <img src={email} alt="img network 349 Productinos" width={20} className='imgWhatsApp'/>
                            349.productios@gmail.com
                        </div>
                        <div className='networks phone'>
                            <img src={phone} alt="img network 349 Productinos" width={20} className='imgWhatsApp'/>
                                (601) 123 456 7890
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {FooterBar}