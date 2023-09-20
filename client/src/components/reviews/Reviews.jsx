import React from 'react';
import { useQuery } from "@tanstack/react-query";
import "./Reviews.scss";
import { newRequest } from '../../utils/newRequest';
import {Review} from '../index';

const Reviews = ({ gigId }) => {

  const {isLoading , err , data}=useQuery({
    queryKey : ["reviews"],
    queryFn : async () => {
      const {data} = await newRequest.get(`/reviews/${gigId}`);
      return  data;
    }
  })
  
  return (
    <div className="reviews">
    <h2>Reviews</h2>

    {isLoading
    ? "Loading..."
    : err 
    ? `Something went wrong ${err.message}`
    : data.map((review) => <Review key={review._id} review= {review} />)
    }
  </div>
  )
}

export default Reviews