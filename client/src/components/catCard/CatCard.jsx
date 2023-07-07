import React from 'react';
import "./catCard.scss"

const catCard = ({items}) => {
  // console.log(items)
  return (
    <div className="catCard">
      <div className="container">
        <img src={items.img} alt="" className='catCard-img'/>
        <div className="cat-content">
        <p className="title">{items.title}</p>
        <h3 className="desc">{items.desc}</h3>
        </div>
      </div>
    </div>
  )
}

export default catCard