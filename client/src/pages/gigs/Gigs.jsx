import React,{useState, useRef} from 'react';
import "./Gigs.scss";
import { gigs } from '../../../data';

// import component
import GigCard from '../../components/gigCard/GigCard';

const Gigs = () => {
  // /api/gigs?sort="sales"
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef(null);
  const maxRef = useRef(null);

  console.log(open);

  // apply min & max budget
  function apply () {
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
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
          {gigs.map(gig => <GigCard key={gig.id} items={gig} />)}
        </div>
      </div>
    </div>
  )
}

export default Gigs