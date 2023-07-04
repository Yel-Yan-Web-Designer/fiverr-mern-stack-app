import React from 'react';
import { useState, useEffect } from 'react';
import "./Navbar.scss";
import {RxHamburgerMenu} from "react-icons/rx";
import {AiFillCaretDown} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [navOpen , setNavOpen] = useState(false);
    const [option , setoption] = useState(false);

    const currentUser = {
        id: 1,
        username : "Anna",
        isSeller : false
    }

    function toggleNavMenu () {
        setNavOpen(prevState => !prevState);
    }

    function scrollForNav () {
        window.scrollY ? setScroll(true) : setScroll(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollForNav)

        return () => {
            window.removeEventListener("scroll", scrollForNav)
        }
    }, [])

  return (
    <nav className={navOpen ? "nav-open" : ""} id={scroll ? "active" : ""}>
        <div className="subnav-1">
            <div className="logo">
                <h2 className='fiverr-logo'>fiverr</h2>
            </div>

            <div className="links">
                <span className='fiverr-business'>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
            </div>

            {currentUser ? (
                <div className="user">
                    <div className="user-container" onClick={() => setoption(!option)}>
                        <div className="avatar">
                        <img
                        src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                        className='avatar'
                    />
                        </div>
                        {option && <div className='options'>
                            {currentUser?.isSeller && (
                                <>
                                    <Link className='option-links' to="/mygigs">Gigs</Link>
                                    <Link className='option-links' to="/add">Add New Gig</Link>
                                </>
                            )}
                    <Link className='option-links' to="/orders">Orders</Link>
                    <Link className='option-links' to="/messages">Messages</Link>
                    <Link className='option-links' to="/">Logout</Link>
                        </div>}
                    </div>
                    <RxHamburgerMenu className='hamburger-menu' onClick={toggleNavMenu}/>
                </div>
            ) : 
            (
            <div className="nav-login">
                <span>Sign In</span>
                <span><button className='join-btn'>Join</button></span>
                <RxHamburgerMenu className='hamburger-menu' onClick={toggleNavMenu}/>
            </div>
            )
            }

        </div>
        <div className="line-break"></div>
        <div className="subnav-2">
            <h3 className="link">Digital Marketing</h3>
            <h3 className="link">Graphic & Design</h3>
            <h3 className="link">Writing & Translation</h3>
            <h3 className="link">Video & Animation</h3>
            <h3 className="link">Music & Audio</h3>
            <h3 className="link">Programming & Tech</h3>
            <h3 className="link">Photography</h3>
            <h3 className="link">Business</h3>
            <h3 className="link">AI Services</h3>
        </div>
        {/* mobile nav */}
        <div className='mobile-nav'>
            {!currentUser ? (<button className='join-fiverr'>Join Fiverr</button>) : (
                <Link className='logout-fiverr' to="/">Log out</Link>
            )}

            <div className="category-container">
                <div className="drop-down">
                    <h4 className="browse-categories" onClick={() => setDropdown(prevState => !prevState)}>Browse Categories <AiFillCaretDown/></h4>

                        <ul className={dropdown ? "active dropdown-content" : "dropdown-content"}>
                            <li>Digital Markeing</li>
                            <li>Graphic Design</li>
                            <li>Writing &Translation</li>
                            <li>Video & Animaton</li>
                            <li>Music & Audio</li>
                            <li>Programming & Tech</li>
                            <li>Photography</li>
                            <li>Business</li>
                            <li>AI Services</li>
                        </ul>
                </div>
                <h4>Fiverr Business</h4>
                <h4>Explore</h4>
            </div>
            <div className="general-container">
                <h3>General</h3>
                <div className="general-links">
                    <h4><Link to="/">Home</Link></h4>
                    {!currentUser?.isSeller && <h4>Become A Seller</h4>}
                    <h4>English</h4>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;

/*
Gigs
Add new gigs
orders
messages
logout
*/