import React from 'react'
/*change*/
import './../App.css'
import instadp from './instadp.jpeg'
import groceryImg from './grocery-app.png'

export default function Landing() {
    return (
        <>
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
                        <div className="landing-buttons">
                            <button className='scan-button'>Scan Items</button>
                            <button className='explore-button'>Know More</button>
                        </div>
                    </div>
                    <div className="landing-promotion">
                        <img src={groceryImg}></img>
                    </div>
                </div>
            </div>
        </>

    )
}
