import React,{useState, useRef} from 'react';
import "./Gigs.scss";
// import { gigs } from '../../../data'; mock api data
import {   useQuery } from '@tanstack/react-query';
import { newRequest } from '../../utils/newRequest';

// import component
import GigCard from '../../components/gigCard/GigCard';


// fetched gigs
async function fetchGigs () {
   const {data} = await newRequest.get("/gigs");
   return data;
}

const Gigs = () => {
  // /api/gigs?sort="sales"
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef(null);
  const maxRef = useRef(null);

  // fetch data with react query
 const {isLoading , error , data , refetch} = useQuery({
    queryKey : ["gigs"],
    queryFn : fetchGigs
  })
  
  // apply min & max budget
  function apply () {
  //when user click apply btn trigger react-query background refetch to check it's their any data updated or not
    refetch(); 
  }

  // resorting
  function reSort (type){
    setSort(type); // setting type 
    setOpen(!open)
  }

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
            <input ref ={minRef} type="number" placeholder='min'/>
            <input ref={maxRef} type="number" placeholder='max'/>
            <button className='apply-btn' onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <h3 className="sortby">Sort by</h3>
            <span className='sortby-type'>
              {sort === "sales" ? "BestSelling" : "Newest"}
            </span>
            <img 
              onClick={() => setOpen (!open)}
              src="./img/down.png" alt="" 
              className='down'
            />
            {open && (
              <div className="right-menu">
                {sort === "sales" ? 
                <span onClick={()=> reSort("createdAt")}>Newest</span>
                  : (
                <span onClick={() => reSort("sales")}>Selling</span>   
                )}
              <span onClick={() => reSort("sales")}>Popular</span>   
            </div>
            )}
          </div>
        </div>
        <div className="cards">
          { isLoading ? "Loading..." : 
            error ? `error has been occured ${error.message}`:
            data.length === 0 ? 
            "There are no gigs yet!": 
            data.map(gig => <GigCard key={gig._id} items={gig} />)}
        </div>
      </div>
    </div>
  )
}

export default Gigs