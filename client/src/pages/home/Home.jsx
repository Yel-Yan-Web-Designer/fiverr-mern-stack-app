import React from 'react';
import "./Home.scss";

// import components
import {Featured, TrustedBy, Slide, CatCard, Selling , FiverrBusiness , LogoMaker,ProjectCard, Categories} from "../../components/index";
//  Import data
import { cards, projects, categoryItems } from '../../../data';

const Home = () => {
  // console.log(cards);
  return (
    <div className="home">
      <Featured/>
      <TrustedBy/>
      <div className="slide-container">
        <h1>Popular services</h1>
        <Slide>
          {cards.map(x => {
            return <CatCard key={x.id} items ={x}/>
          })}
        </Slide>
      </div>
      <Selling/>
      <Categories categoryItems = {categoryItems}/>
      <FiverrBusiness/>
      <div className="slide-container">
        <h1>Inspiring work made on Fiverr</h1>
        <Slide>
          {projects.map(card => <ProjectCard key={card.id} card = {card}/>)}
        </Slide>
      </div>
      <LogoMaker/>
    </div>
  )
}

export default Home