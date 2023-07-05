import React from 'react';
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="hero-wrapper">
        <div className="hero-backgrounds">
          <div className="hero-img1"></div>
          <div className="hero-img2"></div>
          <div className="hero-img3"></div>
          <div className="hero-img4"></div>
          <div className="hero-img5"></div>
        </div>
        <div className="hero-content">
          <div className="header">
            <h1>
                Find the right <i>freelance</i><br/>
                <i>service</i>, right away
            </h1>
            <div className="search">
                <div className="searchbar">
                  <input 
                    type="text" 
                    placeholder='Search for any service'  
                  />
                </div>
                <div className="submit-btn"><img src="img/search.png" alt="" /></div>
            </div>
            <div className="popular">
              <span>Popular:</span>
              <button>Web Design</button>
              <button>WordPress</button>
              <button>Logo Design</button>
              <button>AI Services</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Featured;