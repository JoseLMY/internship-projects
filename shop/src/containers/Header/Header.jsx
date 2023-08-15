import React, { useState } from 'react'
import "./Header.css"

import shoppingCart from "../../assets/shopping-cart.png"
import iconMobile from "../../assets/iconMobile.png"
import { Mobile } from '../../components/Mobile'

function Header() {

    const [state, setState] = useState(false)
    const handleToggle = () =>{
        setState(!state)
    }

    return (
        <>
            <header className="header">
                <div className='logo'>
                    <h1>3-49 Productions</h1>
                </div>
                <div className='items-container'>
                    <div className='items'>
                        <a href="/" rel="noopener noreferrer">Home</a>
                        <a href="/Services" rel="noopener noreferrer">Services</a>
                        <a href="/Contact-us" rel="noopener noreferrer">Contact Us</a>
                        <a href="/About-us" rel="noopener noreferrer">About Us</a>
                    </div>
                </div>
                    <div className='shopping-cart'>
                        <img src={shoppingCart}/>
                        <span className='spanCart'>2</span>
                    </div>
            </header>
            <img src={iconMobile} className='iconMobile' onClick={handleToggle}/>
            {state && <Mobile/>}
        </>
    )
}

export {Header}