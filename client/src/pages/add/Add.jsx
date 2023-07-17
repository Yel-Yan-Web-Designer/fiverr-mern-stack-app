import React from 'react';
import "./Add.scss"

const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1 className='add-title'>Add New Gig</h1>
        <div className="add-section">
          {/* left */}
          <div className="left info">
            <div className="left-title">
              <label htmlFor="">Title</label>
              <input type="text" placeholder="e.g. I will do something I'm really good at"/>
            </div>
            <div className="left-category">
              <label htmlFor="">Category</label>
              <select name="categories" id="categories">
                <option value="design">Design</option>
                <option value="web">Web Development</option>
                <option value="animation">Animation</option>
                <option value="music">Music</option>
              </select>
            </div>
            <div className="left-cover">
              <label htmlFor="">Cover Image</label>
              <input type="file" />
            </div>
            <div className="left-upload-file">
              <label htmlFor="">Upload Images</label>
              <input type="file" multiple/>
            </div>
            <div className="left-desc">
              <label htmlFor="">Description</label>
              <textarea name="" id="" placeholder='Brief descriptions to introduce your service to customers'></textarea>
            </div>
          </div>
          {/* right */}
          <div className="right details">
            <div className="right-title">
              <label htmlFor="">Service Title</label>
              <input type="text" placeholder='e.g. One-page web design'/>
            </div>
            <div className="right-desc">
              <label htmlFor="">Short Description</label>
              <textarea name="" id="" placeholder="Short description of your service"  cols="30" rows="10"></textarea>
            </div>
            <div className="right-deli">
              <label htmlFor="">Delivery Time (e.g. 3 days)</label>
              <input type="number" />
            </div>
            <div className="right-revision">
              <label htmlFor="">Revision Number</label>
              <input type="number" />
            </div>
            <div className="right-features">
              <label htmlFor="">Features</label>
              <input type="text" placeholder="e.g. page design" />
              <input type="text" placeholder="e.g. file uploading" />
              <input type="text" placeholder="e.g. setting up a domain" />
              <input type="text" placeholder="e.g. hosting" />
            </div>
            <div className="right-price">
              <label htmlFor="">Price</label>
              <input type="number" />
            </div>
            <button className="create-btn">Create</button>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Add