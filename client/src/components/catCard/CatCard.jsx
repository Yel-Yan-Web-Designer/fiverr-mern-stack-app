import React from 'react';
import "./catCard.scss";
import { Link } from 'react-router-dom';

const catCard = ({items}) => {
  // console.log(items)
  return (
    <Link to="/gigs" className="catCard">
      <div className="container">
        <img src={items.img} alt="" className='catCard-img'/>
        <div className="cat-content">
        <p className="title">{items.title}</p>
        <h3 className="desc">{items.desc}</h3>
        </div>
      </div>
    </Link>
  )
}

export default catCard;