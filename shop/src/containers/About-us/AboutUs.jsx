import React from 'react'
import "./AboutUs.css"

function AboutUs() {
    return(
        <>
            <div className='aboutUs-container'>
                <div className='title-aboutUs'>
                    <h2>
                        - ABOUT US -
                    </h2>
                </div>
                <div className='description-container'>
                    <div className='description-1 description'>
                        <p>
                            We promote your brand in the digital world. We connect ideas and create realities through cutting-edge marketing strategies, captivating audiovisual productions and personalized advice. Your success is our fuel. Join us to transform your vision into amazing results.
                        </p>
                    </div>
                    <div className='description-2 description'>
                        <p>
                            With over 6 years of experience, we have elevated brands to new heights. From revolutionizing services to catalyzing business ideas, our expert approach drives results. Our expertise in audiovisual productions, including powerful documentaries and videos, amplifies your message. Join us in unleashing the power of innovation.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export {AboutUs}