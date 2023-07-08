import React from 'react';
import "./Selling.scss"

const Selling = () => {
  return (
    <div className='selling'>
        <div className="container">
            <div className="selling-content">
                <h2 className='selling-title'>The best part? Everything.</h2>  

                <div className="selling-desc-wrapper">
                    <div className="selling-desc">
                        <div className="selling-check">
                            <span><img src="./img/check.png" alt="" /></span>
                            <h4>Stick to your budget</h4>
                        </div>
                        <p className='selling-desc-details'>
                        Find the right service for every price point. No hourly rates, just project-based pricing.
                        </p>
                    </div>
                    <div className="selling-desc">
                        <div className="selling-check">
                            <span><img src="./img/check.png" alt="" /></span>
                            <h4>Get quality work done quickly</h4>
                        </div>
                        <p className='selling-desc-details'>
                        Hand your project over to a talented freelancer in minutes, get long-lasting results.
                        </p>
                    </div>
                    <div className="selling-desc">
                        <div className="selling-check">
                            <span><img src="./img/check.png" alt="" /></span>
                            <h4>Pay when you are happy</h4>
                        </div>
                        <p className='selling-desc-details'>
                        Upfront quotes mean no surprises. Payments only get released when you approve.
                        </p>
                    </div>
                    <div className="selling-desc">
                        <div className="selling-check">
                            <span><img src="./img/check.png" alt="" /></span>
                            <h4>Count on 24/7 support</h4>
                        </div>
                        <p className='selling-desc-details'>
                        Our round-the-clock support team is available to help anytime, anywhere.
                        </p>
                    </div>
                </div>
            </div>
            <div className="selling-media">
                <img src="./fiverr-img/selling-media.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Selling;