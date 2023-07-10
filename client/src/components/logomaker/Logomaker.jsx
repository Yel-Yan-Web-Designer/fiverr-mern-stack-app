import React from 'react';
import "./Logomaker.scss"

const Logomaker = () => {
  return (
    <div className='logomaker'>
      <div className="container">
        <div className="logomaker-content">
            <h3 className="logomaker-subtitle">
                <span className='fiverr-title'><b>fiverr</b> logo maker.</span>
            </h3>
            <h1 className="logomaker-title">
                Make an incredible logo <br /><i>in minutes</i>
            </h1>
            <p className="logomaker-desc">
            Pre-designed by top talent. Just add your touch.
                </p>
              <a href="https://www.fiverr.com/logo-maker?source=LOHP_banner" className="logomaker-btn" target='blank'>
                Try Fiverr Logo Maker
            </a>
        </div>

        <div className="logomaker-img">
          <img src="./fiverr-img/logomaker.jpg" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Logomaker