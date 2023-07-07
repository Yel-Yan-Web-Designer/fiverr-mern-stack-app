import React from 'react';
import "./Home.scss";

// import components
import {Featured, TrustedBy, Slide, CatCard} from "../../components/index";
//  Import data
import { cards, projects } from '../../../data';

const Home = () => {
  // console.log(cards);
  return (
    <div className="home">
      <Featured/>
      <TrustedBy/>
      <Slide>
        {cards.map(x => {
          return <CatCard key={x.id} items ={x}/>
        })}
      </Slide>
    </div>
  )
}

export default Home