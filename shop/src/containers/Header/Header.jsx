import React from 'react'
import "./Header.css"

function Header() {
    return (
        <>
            <header className="header">
                <div className='logo'>
                    <h1><a href="/" className='backHome'>3-49 Productions. <span className='spanMaquina'>&#160;</span></a></h1>
                </div>
                <div className='items-container'>
                    <div className='items'>
                        <a href="/" rel="noopener noreferrer">Home</a>
                        <a href="#servicesContainer" rel="noopener noreferrer">Services</a>
                        <a href="#contatUsContainer" rel="noopener noreferrer">Contact Us</a>
                        <a href="#aboutUsContainer" rel="noopener noreferrer">About Us</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export {Header}