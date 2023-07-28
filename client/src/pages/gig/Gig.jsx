import React from 'react';
import Slider from "react-slick";
import "./slick/slick.scss"; 
import "./slick/slick.theme.scss";
import "./Gig.scss";

import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { newRequest } from '../../utils/newRequest';

const Gig = () => {
  // get single gig's id from url
  const {id } = useParams();

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
              <div className="reviews">
                <h2>Reviews</h2>
                <div className="user-feedback">
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
                <div className="user-feedback">
                  <div className="user-profile-pic">
                  <img src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user's profile picture"/>
                  </div>
                  <div className="user-info">
                    {/* info details */}
                    <div className="user-info-details">
                      <h4 className='username'>Kyle simpson</h4>
                      <div className="wrapper">
                        <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt="national flag"
                        className='flag'
                        />
                        <span>United State</span>
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
                    This artist did a perfect job with pretty minimal instructions/description from me. Definitely recommend! This is my first time using Fiverr for anything, and the process was seamless. Thank you!
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
                <div className="user-feedback">
                  <div className="user-profile-pic">
                  <img src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user's profile picture"/>
                  </div>
                  <div className="user-info">
                    {/* info details */}
                    <div className="user-info-details">
                      <h4 className='username'>Garner David</h4>
                      <div className="wrapper">
                        <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt="national flag"
                        className='flag'
                        />
                        <span>united State</span>
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
                    I have been working with Art for a few weeks now and he has been nothing but professional and helpful! The logo I received at the end was brilliant and what I needed; although I only paid for the standard package, I definitely believe I received a premium service! Great man for the Job!
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
              </div>
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