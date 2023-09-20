import React from 'react';
import "./Review.scss";
import { useQuery } from "@tanstack/react-query";
import { newRequest } from '../../utils/newRequest';

const Review = ({ review }) => {
    // get loggined user 
    const {isLoading , err , data} = useQuery({
      queryKey : [review.userId],
      queryFn : async () => {
        const { data } = await newRequest(`/users/${review.userId}`);
        return data
      }
    })

    console.log(data)

  return (
    <div className="review">
      {isLoading 
      ? "Loading..."
      : err
      ? `Something went wrong ${err.messages}`
      : (
        <div className="user-profile-pic">
          <img src={data.img || "/img/noavatar.jpg"} alt="user's profile picture"/>
        </div>
      )
      }
      <div className="user-info">
        {/* info details */}
        {
          isLoading 
          ? "Loading..."
          : err
          ? `Something went wrong ${err.messages}`
          : (
          <div className="user-info-details">
            <h4 className='username'>{data.username}</h4>
            <div className="wrapper">
              <img
              src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
              alt="national flag"
              className='flag'
              />
              <span>{data.country}</span>
            </div>
          </div>
          )
        }
        {/*  stars reviews */}
        <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/img/star.png" alt="" key={i} />
          ))}
          <span>{review.star}</span>
        </div>
        {/* reviews text */}
        <p className='reviews-text'>{review.desc}</p>
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