import React from 'react';
import { Link } from 'react-router-dom';
import "./Message.scss"

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span><Link to="/messages"><b style={{color : "black"}}>MESSAGES</b></Link> / John Doe</span>

        {/* messages section */}
        <div className="message-item-container">
          <div className="message-item">
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            <p>       
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          <div className="message-item owner">
            <img
              src="https://images.pexels.com/photos/4668557/pexels-photo-4668557.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          <div className="message-item">
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            <p>       
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          <div className="message-item owner">
            <img
              src="https://images.pexels.com/photos/4668557/pexels-photo-4668557.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>
              Let`s talk about the price 
            </p>
          </div>
          <div className="message-item owner">
            <img
              src="https://images.pexels.com/photos/4668557/pexels-photo-4668557.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="message-item">
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            <p>       
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
        </div>
        <hr />
        {/* text input section */}
        <div className="text-input">
          <textarea placeholder="Write a message" name="write messages" id="" cols="30" rows="10"></textarea>
          <button className='message-send-btn'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message