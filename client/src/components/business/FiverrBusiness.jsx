import React from 'react';
import "./FiverrBusiness.scss";

const FiverrBusiness = () => {
  return (
    <div className='business'>
        <div className="container">
            <div className="business-content">
            <h3 className="business-subtitle">
                <span className='fiverr-title'><b>fiverr</b> business.</span>
                <span className='new'>NEW</span>
            </h3>

            <h1 className="business-title">
                A solution built for <i>business</i>
            </h1>

            <div className="business-content-details">
                <p className="business-desc">
                    Upgrade to a curated experience to access vetted talent and exclusive tools
                </p>
                <ul className="business-list">
                    <li>
                        <span>
                            <img src="./img/check.png" alt="" />
                        </span>
                        <p>Talent matching</p>
                    </li>
                    <li>
                        <span>
                            <img src="./img/check.png" alt="" />
                        </span>
                        <p>Dedicated account management</p>
                    </li>
                    <li>
                        <span>
                            <img src="./img/check.png" alt="" />
                        </span>
                        <p>Team collaboration tools</p>
                    </li>
                    <li>
                        <span>
                            <img src="./img/check.png" alt="" />
                        </span>
                        <p>Business payment solutions</p>
                    </li>
                </ul>
            </div>
            <a href="https://business.fiverr.com/business?source=LOHP_business_banner" className="explore-btn" target='blank'>
                Explore Fiverr Business
            </a>
            </div>
            <div className="business-img">
                <img src="./fiverr-img/fb-removebg.jpg" alt="fiverr business image" />
            </div>
        </div>
    </div>
  )
}

export default FiverrBusiness