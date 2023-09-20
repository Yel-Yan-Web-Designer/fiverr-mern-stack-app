import React from 'react';
import { useState, useEffect } from 'react';
import "./Navbar.scss";
import {RxHamburgerMenu} from "react-icons/rx";
import {AiFillCaretDown} from "react-icons/ai";
import { Link , useLocation, useNavigate} from "react-router-dom";
import { newRequest } from '../../utils/newRequest';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [navOpen , setNavOpen] = useState(false);
    const [option , setoption] = useState(false);

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

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

    //handle logout
    async function handleLogout () {
        try {
            await newRequest.post("/auth/logout");
            localStorage.setItem("currentUser", null);
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <nav className={navOpen ? "nav-open" : ""} id={scroll || pathname !== "/" ? "active" : ""}>
        <div className="subnav-1">
            <div className="logo">
                <Link to="/"><h2 className='fiverr-logo'>fiverr</h2></Link>
            </div>

            <div className="links">
                <span className='fiverr-business'>
                    <a href="https://business.fiverr.com/business?source=LOHP_business_banner" target='blank' className='fiverr-business'>Fiverr Business</a>
                </span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
            </div>

            {currentUser ? (
                <div className="user">
                    <span>{currentUser?.username}</span>
                    <div className="user-container" onClick={() => setoption(!option)}>
                        <div className="avatar">
                            <img
                            src={currentUser?.img || "img/noavatar.jpg"}
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
                    <span className='option-links'  onClick={handleLogout}>Logout</span>
                        </div>}
                    </div>
                    <RxHamburgerMenu className='hamburger-menu' onClick={toggleNavMenu}/>
                </div>
            ) : 
            (
            <div className="nav-login">
                <span><Link to="/login" className='link'>Sign In</Link></span>
                <span><Link to="/register"><button className='join-btn'>Join</button></Link></span>
                <RxHamburgerMenu className='hamburger-menu' onClick={toggleNavMenu}/>
            </div>
            )
            }

        </div>
        {scroll && <div className="line-break"></div>}
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
            {!currentUser ? (<button className='join-fiverr'><Link to="/register" style={{color : "white"}}>Join fiverr</Link></button>) : (
                <span className='logout-fiverr' onClick={handleLogout}>Log out</span>
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
                <h4>
                    <a href="https://business.fiverr.com/business?source=LOHP_business_banner" target='blank'>
                        Fiverr Business
                    </a>
                </h4>
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

