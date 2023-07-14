import React from 'react';
import "./myGigs.scss";
import {Link} from 'react-router-dom';

const myGigs = () => {

  const currentUser = {
    id : 1,
    username : "Anna",
    isSeller : true
  }
  return (
    <div className='mygigs'>
      <div className="container">
        <div className="title">
          <h1>{currentUser?.isSeller ? "Gigs" : "Orders"}</h1>

          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>

        {/* table */}
        <div className="table-container">
          <table>
            <tr>
              <th><h3>Image</h3></th>
              <th><h3>Title</h3></th>
              <th><h3>Price</h3></th>
              <th><h3>Orders</h3></th>
              <th><h3>Action</h3></th>
            </tr>
            <tr>
              <td className='img-td'>
                <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='mygigs-image' />
              </td>
              <td>Ai generated concept art</td>
              <td>120.<sup>90</sup></td>
              <td>41</td>
              <td className='img-td'> 
                <img className="delete" src="/img/delete.png" alt="" />
              </td>
            </tr>
            <tr>
              <td className='img-td'>
                <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='mygigs-image' />
              </td>
              <td>Ai generated concept art</td>
              <td>120.<sup>90</sup></td>
              <td>41</td>
              <td className='img-td'>
                <img className="delete" src="/img/delete.png" alt="" />
              </td>
            </tr>
            <tr>
              <td className='img-td'>
                <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='mygigs-image' />
              </td>
              <td>Ai generated concept art</td>
              <td>120.<sup>90</sup></td>
              <td>41</td>
              <td className='img-td'>
                <img className="delete" src="/img/delete.png" alt="" />
              </td>
            </tr>
            <tr>
              <td className='img-td'>
                <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='mygigs-image' />
              </td>
              <td>Web design for responsive</td>
              <td>110.<sup>20</sup></td>
              <td>12</td>
              <td className='img-td'>
                <img className="delete" src="/img/delete.png" alt="" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default myGigs