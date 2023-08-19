import React from 'react'
import "./Marketing.css"
import { ButtonBuy } from '../../components/Button-buy/ButtonBuy'

// import imgMarketing from "../../assets/marketing.jpg"

function Marketing() {
    return(
        <>
        <section className='marketingSection'>
            <header className='header-marketing'>
                <h1>3-49 /Marketing</h1>
                <div className='marketing-home'>
                    <a href="/" rel="noopener noreferrer">Home</a>
                </div>
            </header>

            <div className='inf-marketing-container'>
                <div className='img-inf-marketing'>
                    <h2 className='secc-marketing'>MARKETING</h2>
                </div>
                <div className='inf-marketing'>
                    <div className="mark-digital">
                        <h3>DIGITAL MARKETING</h3>
                        <div className='dis-publicity'>
                            <h2>- Publicity Design</h2>
                            <p>
                                We transform ideas into iconic logos that define your visual identity.
                            </p>
                        </div>
                        <div className='cre-logos'>
                            <h2>- Logo Creation</h2>
                            <p>
                                We transform ideas into iconic logos that define your visual identity.
                            </p>
                        </div>
                        <div className='ses-photo'>
                            <h2>- Photo Shoots</h2>
                            <p>
                                We capture moments that last, turning moments into unforgettable memories.
                            </p>
                        </div>
                        <div className='soc-networks'>
                            <h2>- Management of Social Networks</h2>
                            <p>
                                We elevate brands: we promote visibility, positioning and sales through strategic management in social networks.
                            </p>
                        </div>
                        <ButtonBuy />
                    </div>
                    <div className="mark-offline">
                        <h3>TRADICIONAL MARKETING</h3>
                        <div className='dis-publicity'>
                            <h2>- Publicity Design</h2>
                            <p>
                                We turn concepts into print art, leaving a visual and emotional mark on each unique project.                            
                            </p>
                        </div>
                        <div className='cre-logos'>
                            <h2>- Logo Creation</h2>
                            <p>
                                Forging memorable identities, printed logos that define your brand with lasting impact
                            </p>
                        </div>
                        <div className='ses-photo'>
                            <h2>- Photo Shoots</h2>
                            <p>
                                A través de mi lente, transformo momentos en historias visuales cautivadoras, capturando emociones que perduran para siempre.
                            </p>
                        </div>
                    </div>
                    <ButtonBuy />
                </div>
            </div>
        </section>
        </>
    )
}

export {Marketing}