import React from 'react';
import "./Reviews.scss";
import {Review} from '../index';

const Reviews = ({gigId}) => {

  return (
    <div className="reviews">
    <h2>Reviews</h2>
    <Review/>
  </div>
  )
}

export default Reviews