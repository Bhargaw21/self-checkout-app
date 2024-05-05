import React from 'react'
import './../App.css'
import instadp from './instadp.jpeg'

export default function Landing() {
    return (
        <div className='landing-container'>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img></img>
                </div>
                <div className="navbar-main">
                    <h2>Menu</h2>
                    <h2>About</h2>
                </div>
                <div className="navbar-buttons">
                    <div className="cart-button">
                        <img></img>
                    </div>
                    <div className="user-button">
                        <img></img>
                    </div>
                </div>
            </div>

            <div className="landing-main-container">
                <div className="landing-main">
                    <h3>Tired of waiting in long queues?</h3>
                    <h1>SELF CHECKOUT</h1>
                    <h1>USING AI</h1>
                </div>
                <div className="landing-promotion">

                </div>
            </div>
        </div>
    )
}
