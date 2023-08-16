import React from 'react'
import "./Header.css"

import shoppingCart from "../../assets/shopping-cart.png"

function Header() {
    return (
        <>
            <header className="header">
                <div className='logo'>
                    <h1>3-49 Productions <span className='spanMaquina'>&#160;</span></h1>
                </div>
                <div className='items-container'>
                    <div className='items'>
                        <a href="/" rel="noopener noreferrer">Home</a>
                        <a href="#servicesContainer" rel="noopener noreferrer">Services</a>
                        <a href="#contatUsContainer" rel="noopener noreferrer">Contact Us</a>
                        <a href="#aboutUsContainer" rel="noopener noreferrer">About Us</a>
                    </div>
                </div>
                    <div className='shopping-cart'>
                        <img src={shoppingCart} alt='buy services'/>
                        <span className='spanCart'>2</span>
                    </div>
            </header>
        </>
    )
}

export {Header}