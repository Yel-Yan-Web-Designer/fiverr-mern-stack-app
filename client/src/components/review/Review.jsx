import React from 'react';
import "./Review.scss"

const Review = () => {
  return (
    <div className="review">
      <div className="user-profile-pic">
      <img src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user's profile picture"/>
      </div>
      <div className="user-info">
        {/* info details */}
        <div className="user-info-details">
          <h4 className='username'>Sidney Owen</h4>
          <div className="wrapper">
            <img
            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
            alt="national flag"
            className='flag'
            />
            <span>Germany</span>
          </div>
        </div>
        {/*  stars reviews */}
        <div className="stars">
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <span>5.0</span>
        </div>
        {/* reviews text */}
        <p className='reviews-text'>
        PRO: Clear communication, timely drafts, willing to support. CON: However no feeling for the industry the logo was intended for. Lack of graphical experience to design a custom logo, rather utilizing off-the-shelve stock logos. For simle text-based logos, definitely a job worth considering.
        </p>
        {/* helpful */}
        <div className="helpful">
            <h5>helpful</h5>
            <img src="/img/like.png" alt="" />
            <h5>Yes</h5>
            <img src="/img/dislike.png" alt="" />
            <h5>No</h5>
        </div>
      </div>
    </div>
  )
}

export default Review