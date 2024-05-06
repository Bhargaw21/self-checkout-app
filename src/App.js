import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { useState } from 'react';

import Landing from './components/Landing';
import Works from './components/Works';
import About from './components/About';

import Header from './components/Header/Header'
import WebcamCapture from './components/Webcam/Webcam'
import Groceries from './components/Groceries/Groceries'

import groceryImg from './components/grocery-app.png'
import logoImg from './components/self-logo.png'
import userImg from './components/userImg.png'
import cartImg from './components/icons8-cart-50.png'
import apple from './components/appleimage.jpeg'
import banana from './components/bananaimage.jpg'
import orange from './components/fresh-orange-500x500.webp'
import gpayLogo from './components/gpay-logo.png'
import paypalLogo from './components/PayPal-Logo.png'
import cardsLogo from './components/credit-card-logo.jpeg'


function App() {

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

  const sectionRef = useRef(null);

  // Function to handle scrolling to the section
  const scrollToSection = () => {
    // Scroll to the section
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='scroll-container'>
        <div className="scroll-class">
          <div className='landing-container'>
            <div className="navbar-container">
              <div className="navbar-logo">
                <img src={logoImg}></img>
              </div>
              <div className="navbar-main">
                <h2>Menu</h2>
                <h2>About</h2>
              </div>
              <div className="navbar-buttons">
                <div className="cart-button">
                  <img src={cartImg}></img>
                </div>
                <div className="user-button">
                  <img src={userImg}></img>
                </div>
              </div>
            </div>

            <div className="landing-main-container">
              <div className="landing-main">
                <h3>Tired of waiting in long queues?</h3>
                <h1>SELF CHECKOUT</h1>
                <h1>USING AI</h1>
                <div className="landing-buttons">
                  <button className='scan-button' onClick={scrollToSection}>Scan Items</button>
                  <button className='explore-button'>View Menu</button>
                </div>
              </div>
              <div className="landing-promotion">
                <img src={groceryImg}></img>
              </div>
            </div>
          </div>
        </div>
        <div className='scroll-class'>
          <div ref={sectionRef} className='works-container'>
            <h1>React Project</h1>
          </div>
        </div>
        <div className='scroll-class'>
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
                          <div className="payment-method">
                            <button onClick={handlePaypal}><img src={paypalLogo}></img></button>
                            <button onClick={handleCards}><img src={gpayLogo}></img></button>
                            <button onClick={handleGpay}><img src={cardsLogo}></img></button>
                          </div>
                        </div>
                        <div className="paypal-method" style={paypalStyle}>
                          <input type="text" class="form-control" placeholder='Email Address'></input>
                        </div>
                        <div className="gpay-method" style={gpayStyle}>
                          <input type="text" class="form-control" placeholder='UPI IF'></input>
                        </div>
                        <div className="cards-method" style={cardsStyle}>
                          <input type="text" class="form-control" placeholder='Card Number'></input>
                          <div className="card-small-input">
                            <input type="text" class="form-control" placeholder='Expiry'></input>
                            <input type="text" class="form-control" placeholder='CVV/CVC'></input>
                          </div>
                          <input type="text" class="form-control" placeholder='Name on Card'></input>
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
                <img src={apple}></img>
                <div className="cart-item-info">
                  <h3>Apple</h3>
                  <h4>Qty: 1</h4>
                </div>
                <h3>20</h3>
              </div>
              <div className="cart-item">
                <img src={banana}></img>
                <div className="cart-item-info">
                  <h3>Banana</h3>
                  <h4>Qty: 1</h4>
                </div>
                <h3>20</h3>
              </div>
              <div className="cart-item">
                <img src={orange}></img>
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
        </div>
      </div>
    </>
  );
}

export default App;
