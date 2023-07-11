import React from 'react';
import "./Gigs.scss";
import { gigs } from '../../../data';

// import component
import GigCard from '../../components/gigCard/GigCard';

const Gigs = () => {
  return (
    <div className='gigs'>
      <div className="container">
        <span><b>fiverr</b> / Graphics & Design</span>
        <h1>Al Artists</h1>
        <p>
          Explore the boundaries of art and technology with fiverr`s AI artists
        </p>

        <div className="menu">
          <div className="left">
            <h3 className='budget'>Budget</h3>
            <input type="text" placeholder='min'/>
            <input type="text" placeholder='max'/>
            <button className='apply-btn'>Apply</button>
          </div>
          <div className="righ">sort </div>
        </div>
        <div className="cards">
          {gigs.map(gig => <GigCard key={gig.id} items={gig} />)}
        </div>
      </div>
    </div>
  )
}

export default Gigs