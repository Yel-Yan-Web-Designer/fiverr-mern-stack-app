import React from 'react';
import Slider from "react-slick";
import "./slick/slick.scss"; 
import "./slick/slick.theme.scss";
import "./Gig.scss";

const Gig = () => {

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
          <div className="wrapper">
            <div className="left">
            <span><b>fiverr</b> / Graphics & Design</span>
            <h1 className='left-title'>I will create ai generated art for you</h1>
            <div className="user">
              <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user's profile picture" className="user-profile-pic" />

              <h3 className="username">Anna</h3>

              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5.0</span>
              </div>
            </div>

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
            right 
          </div>
          </div>
          <div className="about">
            <div className="left">
              {/* about gig */}
              <h2>About This Gig</h2>
              <p>
                I use an AI program to create images based on text prompts. This
                means I can help you to create a vision you have through a textual
                description of your scene without requiring any reference images.
                Some things I have found it often excels at are: Character portraits
                (E.g. a picture to go with your DnD character) Landscapes (E.g.
                wallpapers, illustrations to compliment a story) Logos (E.g. Esports
                team, business, profile picture) You can be as vague or as
                descriptive as you want. Being more vague will allow the AI to be
                more creative which can sometimes result in some amazing images. You
                can also be incredibly precise if you have a clear image of what you
                want in mind. All of the images I create are original and will be
                found nowhere else. If you have any questions you are more than
                welcome to send me a message.
              </p>
                {/*  seller */}
              <div className="seller-container">
                <h2>About the seller</h2>
                <div className="seller">
                <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user's profile picture" className="user-profile-pic" />

                <div className="seller-info">
                  <h3 className="username">Anna</h3>
                  <p>Web Designer</p>
                  <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5.0</span>
                </div>
                <button className="contact-btn">
                  Contact me
                </button>
                </div>
              </div>
              </div>
              
              {/*  card */}
              <div className="card">
                <div className="card-top">
                  <div className="card-data">
                    <h4 className='card-top-title'>From</h4>
                    <h4>India</h4>
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
                  <p>Hi, My name is Chirag. I am a professional graphics designer with 4+ years of experience. I specialize in the logo designing field. My service offers to design all types of logos that meet your desire and demand. I strongly believe in the quality of the work. Share your requirements, I’ll make the perfect logo that suits your business.
                  Besides professional work, I have a lot of hobbies such as going to the gym, yoga, and watching movies. Because it gives me an opportunity to enhance my life. For me, hobbies create a positive impact both on your personal and professional life.
                  </p>
                  <p style={{marginTop : "1em"}}>
                    Thanks!
                  </p>
                </div>
              </div>
              {/* review */}
            </div>
            <div className="right"></div>
          </div>
      </div>
    </div>
  )
}

export default Gig