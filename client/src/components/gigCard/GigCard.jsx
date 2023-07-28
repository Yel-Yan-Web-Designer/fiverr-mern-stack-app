import React from 'react';
import "./GigCard.scss";
import { Link } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import { newRequest } from '../../utils/newRequest';


const GigCard = ({items}) => {
  let { title , price , cover, totalStars, starNumbers , userId , _id} = items;

  const {isLoading , error, data} = useQuery({
    queryKey : [userId],
    queryFn : async () => {
      const {data} = await newRequest.get(`/users/${userId}`);
      return data;
    }
  })

  return (
    <Link to={`/gig/${_id}`} className='gigcard-link'>
      <div className="gigcard">
        <img src={cover} alt="gig card image" className='gigcard-img'/>
        <div className="gigcard-info">
          {isLoading ? "Loading info..." : 
          error ? `error has been occured ${error}` :
          (
          <div className="user">
            <img src={ data.img ||"img/noavatar.jpg"} alt="user's profile pic" />
            <h4>{data.username}</h4>
          </div>
          )
          }
          <p className='gigcard-desc'>{title}</p>
          <div className="star">
            <img src="/img/star.png" alt="" />
            <span>{!isNaN(Math.round(totalStars / starNumbers)) && Math.round(totalStars / starNumbers) }</span>
          </div>
        </div>
        <div className="gigcard-price">
          <p>
            From &nbsp;${price}
          </p>
          <img src="img/heart.png" alt="" />
        </div>
      </div>
    </Link>
  )
}

export default GigCard