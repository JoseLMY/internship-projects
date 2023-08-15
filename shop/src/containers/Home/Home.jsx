import React from 'react'
import "./Home.css"

import imgHome from "../../assets/img1.jpg"

function Home() {
    return(
        <>
            <section className='homeContainer'>
                <div className='imgHome-container'>
                    <img src={imgHome} alt="" />
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
        </>
    )
}

export {Home}