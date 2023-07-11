import React from 'react';
import "./ProjectCard.scss";

const ProjectCard = ({card}) => {
  return (
    <div className="projectCard">
      <img src={card.img} alt="" />
      <div className="card-info">
        <img src={card.pp} alt="" />
        <div className="card-info-details">
          <h2>{card.cat}</h2>
          <span>{card.username}</span>
        </div>
      </div>
  </div>
  )
}

export default ProjectCard