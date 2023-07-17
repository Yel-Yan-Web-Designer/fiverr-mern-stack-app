import React from 'react';
import "./Messages.scss";
import { Link } from 'react-router-dom';

const Messages = () => {
  const currentUser = {
    id : 1,
    username : "Anna",
    isSeller : true
  }

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat`;

  return (
    <div className='messages'>
      <div className="container">
      <div className="title">
          <h1>Messages</h1>
        </div>

        {/* table */}
        <div className="table-container">
          <table>
            {/* table head */}
            <tr>
              <th><h3>{currentUser?.isSeller ? "Buyer" : "Seller"}</h3></th>
              <th><h3>Last Message</h3></th>
              <th><h3>Date</h3></th>
              <th><h3>Action</h3></th>
            </tr>
            {/* table body */}
            <tr className='active'>
              <td><h4>John Doe</h4></td>
              <td>
              <Link className='messages-link' to="/message/123">
                {message.substring(0, 100)}
                </Link>
              </td>
              <td>2 days ago</td>
              <td>
                <button className="messages-btn">Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td><h4>Steven</h4></td>
              <td>
              <Link className='messages-link' to="/message/123">
                {message.substring(0, 100)}
                </Link>
              </td>
              <td>1 day ago</td>
              <td>
                <button className="messages-btn">Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td><h4>Jessica</h4></td>
              <td>
                <Link className='messages-link' to="/message/123">
                {message.substring(0, 100)}
                </Link>
              </td>
              <td>1 weeks ago</td>
              <td>
                <button className="messages-btn">Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td><h4>Abel</h4></td>
              <td>
                <Link className='messages-link' to="/message/123">
                {message.substring(0, 100)}
                </Link>
              </td>
              <td>3 days ago</td>
              <td>
                <button className="messages-btn">Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td><h4>Joshua</h4></td>
              <td>
                <Link className='messages-link' to="/message/123">
                {message.substring(0, 100)}
                </Link>
              </td>
              <td>2 days ago</td>
              <td>
                <button className="messages-btn">Mark as Read</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Messages