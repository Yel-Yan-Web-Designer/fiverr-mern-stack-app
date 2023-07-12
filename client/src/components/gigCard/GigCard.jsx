import React from 'react';
import "./GigCard.scss";
import { Link } from 'react-router-dom';

const GigCard = ({items}) => {
  let {img, desc , pp, username , price , star, sup} = items;
  return (
    <Link to="/gig/123" className='gigcard-link'>
      <div className="gigcard">
        <img src={img} alt="gig card image" className='gigcard-img'/>
        <div className="gigcard-info">
          <div className="user">
            <img src={pp} alt="user's profile pic" />
            <h4>{username}</h4>
          </div>
          <p className='gigcard-desc'>{desc}</p>
          <div className="star">
            <img src="/img/star.png" alt="" />
            <span>{star}</span>
            <span className='sup'>({sup})</span>
          </div>
        </div>
        <div className="gigcard-price">
          <p>
            From &nbsp;${price}
          </p>
          <img src="img/heart.png" alt="" />
        </div>
      </div>
    </Link>
  )
}

export default GigCard