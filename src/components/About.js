import React, { useState } from 'react'
import './../App.css'

export default function About() {

    const [paypalStyle, setpaypalStyle] = useState({
        display: 'flex'
    });

    const [gpayStyle, setgpayStyle] = useState({
        display: 'none'
    });

    const [cardsStyle, setcardsStyle] = useState({
        display: 'none'
    });

    const handlePaypal = (event) => {
        setpaypalStyle({
            display: 'flex'
        })
        setcardsStyle({
            display: 'none'
        })
        setgpayStyle({
            display: 'none'
        })
    }

    const handleGpay = (event) => {
        setpaypalStyle({
            display: 'none'
        })
        setcardsStyle({
            display: 'flex'
        })
        setgpayStyle({
            display: 'none'
        })
    }

    const handleCards = (event) => {
        setpaypalStyle({
            display: 'none'
        })
        setcardsStyle({
            display: 'none'
        })
        setgpayStyle({
            display: 'flex'
        })
    }

    return (
        <div className='about-container'>
            <div className="checkout-container">
                <div className="checkout-heading">
                    <h1>Checkout</h1>
                </div>
                <div className="checkout-accordions">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Personal Info
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <input type="text" class="form-control" placeholder='Full Name'></input>
                                    <input type="text" class="form-control" placeholder='Email Address'></input>
                                    <input type="text" class="form-control" placeholder='Contact No.'></input>
                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Proceed
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Shipping Address
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <input type="text" class="form-control" placeholder='Full Name'></input>
                                    <input type="text" class="form-control" placeholder='Email Address'></input>
                                    <input type="text" class="form-control" placeholder='Contact No.'></input>
                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Proceed
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Payment Method
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div className="payment-methods">
                                        <button className="payment-method">
                                            <button onClick={handlePaypal}>Paypal</button>
                                            <button onClick={handleCards}>Cards</button>
                                            <button onClick={handleGpay}>Gpay</button>
                                        </button>
                                    </div>
                                    <div className="paypal-method" style={paypalStyle}>
                                        <input type="text" class="form-control" placeholder='Email Address'></input>
                                    </div>
                                    <div className="gpay-method" style={gpayStyle}>
                                        <input type="text" class="form-control" placeholder='Email Address'></input>
                                    </div>
                                    <div className="cards-method" style={cardsStyle}>
                                        <input type="text" class="form-control" placeholder='Email Address'></input>
                                        <div className="card-small-input">
                                            <input type="text" class="form-control" placeholder='Email Address'></input>
                                            <input type="text" class="form-control" placeholder='Email Address'></input>
                                        </div>
                                        <input type="text" class="form-control" placeholder='Email Address'></input>
                                    </div>
                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Proceed
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="cart-summary">
                <h1>Order Summary</h1>
                <div className="cart-item">
                    <img></img>
                    <div className="cart-item-info">
                        <h3>Apple</h3>
                        <h4>Qty: 1</h4>
                    </div>
                    <h3>20</h3>
                </div>
                <div className="cart-item">
                    <img></img>
                    <div className="cart-item-info">
                        <h3>Banana</h3>
                        <h4>Qty: 1</h4>
                    </div>
                    <h3>20</h3>
                </div>
                <div className="cart-item">
                    <img></img>
                    <div className="cart-item-info">
                        <h3>Orange</h3>
                        <h4>Qty: 1</h4>
                    </div>
                    <h3>20</h3>
                </div>
                <div className="horizontal-bar"></div>
                <div className="cart-costs">
                    <div className="cart-cost">
                        <h3>Subtotal</h3>
                        <h4>$200</h4>
                    </div>
                    <div className="cart-cost">
                        <h3>Estimated Tax</h3>
                        <h4>$200</h4>
                    </div>
                </div>
                <div className="horizontal-bar"></div>
                <div className="cart-costs">
                    <div className="cart-cost">
                        <h3>Estimated Total</h3>
                        <h4>$200</h4>
                    </div>
                </div>
                <div className="order-button">
                    <button>Place Order</button>
                </div>

            </div>
        </div>
    )
}
