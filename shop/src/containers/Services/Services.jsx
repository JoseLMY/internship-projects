import React from 'react'
import "./Services.css"

function Services() {
    return(
        <>
            <div className='servicesContainer'>
                <div className='tService'>
                    <p>- SERVICES -</p>
                </div>
                <div className='allProducts'>
                    <div className='ser-Marketing'>
                        <div className='tt-service'>
                            <p>Marketing</p>
                        </div>
                        <div className='com-marketing'>
                            <p>
                                Unlock the hidden potential of your brand with personalized marketing strategies. Our team is ready to create the story that will take your business to the next level.
                            </p>
                        </div>
                        <div className='moreContainer'>
                            <a href="/Services/Marketing" rel="noopener noreferrer" className='more'>I wanna know more !</a>
                        </div>
                    </div>
                    <div className='ser-prod-audio-visual'>
                        <div className="tt-service">
                            <p>Audiovisual Production</p>
                        </div>
                        <div className='com-publicity'>
                            <p>
                                Turn ideas into powerful ads. Boost your message with creativity and professionalism to reach your audience in an unforgettable way.
                            </p>
                        </div>
                        <div className='moreContainer'>
                            <a href="/Services/Audiovisual-production" rel="noopener noreferrer" className='more'>I wanna know more !</a>
                        </div>
                    </div>
                    <div className='ser-consultancies'>
                        <div className="tt-service">
                            <p>Consultancies</p>
                        </div>
                        <div className='com-consultancies'>
                            <p>
                                Maximize your sales opportunities with the support of an expert advisor. Together, we will strategically and successfully achieve your business goals.
                            </p>
                        </div>
                        <div className='moreContainer'>
                            <a href="/Services/Consultancias" rel="noopener noreferrer" className='more'>I wanna know more !</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export {Services}