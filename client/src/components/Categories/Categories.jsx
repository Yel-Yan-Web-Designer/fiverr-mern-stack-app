import React from 'react';
import "./Categories.scss";

const Categories = ({categoryItems}) => {
  return (
    <div className="categories">
        <div className="container">
            <h2 className='categories-title'>You need it, we`ve got it</h2>

            <div className="categories-container">
                    {categoryItems.map(({id, img, title}) => {
                        return (
                            <div className="category" key={id}>
                                <img src={img} alt="" />
                                <div className="line"></div>
                                <span className="category-title">{title}</span>
                            </div>
                        )
                    })}
            </div>
        </div>
    </div>
  )
}

export default Categories