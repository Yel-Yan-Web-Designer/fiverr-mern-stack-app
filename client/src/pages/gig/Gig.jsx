import React from 'react';
import Slider from "react-slick";
import "./slick/slick.scss"; 
import "./slick/slick.theme.scss";
import "./Gig.scss";

import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { newRequest } from '../../utils/newRequest';
import {Reviews } from '../../components/index.js';

const Gig = () => {
  // get single gig's id from url
  const { id } = useParams();

  //fetching data for single id gig
  const {isLoading , error ,  data : gigData}= useQuery({
    queryKey : ["gig"],
    queryFn : async () => {
      const {data} = await newRequest.get(`/gigs/single/${id}`);
      return data
    }
  })

  const userId = gigData?.userId; // get single gig's userId
  
  //fetching data for user's info
  const {
    isLoading : isLoadingUser,
    error : errorUser,
    data : dataUser
  } = useQuery({
    queryKey : ["single gig user"],
    queryFn : async () => {
      const {data} = await newRequest.get(`/users/${gigData.userId}`);
      return data;
    },
  /* 
  the query will be enabled (executed) only if userId has a truthy value.
  this ensures that the user query is not executed until the userId value is available and not undefined. 
  */
    enabled : !!userId
  })


  //react slick settings manually
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
  }
  return (
    <div className='gig'>
      <div className="container">
        {/* load single gig data */}
        {isLoading ? "Loading Gig..." :
          error ? `Something went wrong ${error}` :
          (
          <div className="wrapper">
          <div className="left">
            <span><b>fiverr</b> / {gigData.category}</span>
            <h1 className='left-title'>{gigData?.title}</h1>
            {/* load user data */}
            {isLoadingUser ? "Loading user info.." : 
              errorUser ? `Something went wrong ${error}` :
              (
                <div className="user">
                <img src={ dataUser.img || "img/noavatar.jpg"} alt="user's profile picture" className="user-profile-pic" />
  
                <h3 className="username">{dataUser.username}</h3>
  
                <div className="stars">
                  {/* make explicit an array for stars */}
                  {!isNaN(Math.round(gigData?.totalStars / gigData?.starNumbers)) &&
                    Array(Math.round(gigData?.totalStars / gigData?.starNumbers))
                    .fill()
                    .map((x, i) => <img key={i} src="/img/star.png" alt="" />)
                  }
                  <span>{Math.round(gigData?.totalStars / gigData?.starNumbers)}</span>
                </div>
              </div>
  
              )
            }
            <div className="slide-container">
              <Slider {...settings}>
              <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
              </Slider>
            </div>
          </div>
          <div className="right">
            <div className="package">
              {/* package price */}
              <div className="package-price">
                <h3>{gigData?.shortTitle}</h3>
                <h3>$ {gigData?.price}</h3>
              </div>
              {/* package description */}
              <div className="package-desc">
                <p>
                  {gigData?.shortDesc}
                </p>
              </div>
              {/* package details */}
              <div className="package-details">
                <div className="package-service">
                  <div className="package-item">
                    <img src="/img/clock.png" alt="" />
                    <h4>{gigData?.deliveryTime} Days Delivery</h4>
                  </div>
                  <div className="package-item">
                    <img src="/img/recycle.png" alt="" />
                    <h4>{gigData?.revisionTime} Revision</h4>
                  </div>
                </div>
                <div className="package-features">
                  {gigData?.features.map((feature , i) => {
                    return (
                      <div className="package-feature-item" key={i}>
                        <img src="/img/greencheck.png" alt="" />
                        <span>{feature}</span>
                    </div>
                    )
                  })}
                </div>
              </div>
              {/* package btn */}
              <button className='package-btn'>Continue</button>
            </div> 
          </div>

          <div className="about">
            <div className="left">
              {/* about gig */}
              <h2>About This Gig</h2>
              <p>{gigData?.desc}</p>
                {/*  seller */}
              <div className="seller-container">
                <h2>About the seller</h2>
                {/* load data user for seller */}
                {isLoading ? "Loading seller info.." :
                  error ? `Something went wrong ${error.message}` :
                  (
                    <div className="seller">
                      <img src={ dataUser?.img|| "img/noavatar.jpg"} alt="user's profile picture" className="user-profile-pic" />
    
                    <div className="seller-info">
                      <h3 className="username">{gigData?.username}</h3>
                      <p>Web Designer</p>
                      <div className="stars">
                        {/* make explicit an array for stars */}
                        {!isNaN(Math.round(gigData?.totalStars / gigData?.starNumbers)) &&
                          Array(Math.round(gigData?.totalStars / gigData?.starNumbers))
                          .fill()
                          .map((x, i) => <img key={i} src="/img/star.png" alt="" />)
                        }
                      <span>{Math.round(gigData?.totalStars / gigData?.starNumbers)}</span>
                    </div>
                      <button className="contact-btn">
                        Contact me
                      </button>
                    </div>
                  </div>
                  )
                }
              </div>
              
              {/*  card */}
              <div className="card">
                <div className="card-top">
                  <div className="card-data">
                    <h4 className='card-top-title'>From</h4>
                    <h4>{dataUser?.country}</h4>
                  </div>
                  <div className="card-data">
                    <h4 className='card-top-title'>Avg. response time</h4>
                    <h4>1 hour</h4>
                  </div>
                  <div className="card-data">
                    <h4 className='card-top-title'>Languages</h4>
                    <h4>English, Hindi</h4>
                  </div>
                  <div className="card-data">
                    <h4 className='card-top-title'>Member since</h4>
                    <h4>Jul 2020</h4>
                  </div>
                  <div className="card-data">
                    <h4 className='card-top-title'>Last delivery</h4>
                    <h4>about 15 hours</h4>
                  </div>
                </div>
                <div className="card-bottom">
                  <p>{gigData?.desc}
                  </p>
                  <p style={{marginTop : "1em"}}>
                    Thanks!
                  </p>
                </div>
              </div>
              {/* review */}
              <Reviews gigId = {id}/>
            </div>
          </div>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default Gig