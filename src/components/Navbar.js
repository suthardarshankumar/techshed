import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import Search from '../img/icon/search.svg';

const Navbar = () => {
    return (
      <section>
        <nav className="all-navbars">
  
          {/* Second Navbar */}
          <div className="navbar second-navbar">
            <div className="navbar-left">
              <div className="navbar-heading"><Link className='navbar-heading' to="/">TechShop</Link></div>
              <div className="search-bar-container">
                <input type="text" className="search-bar" placeholder="Search..." />
                <img src={Search} className="navbar-search-icon" alt="Search Icon" />
              </div>
            </div>
            <div className="navbar-right">
            <div className="navbar-section navbar-list"><Link className='navbar-section navbar-list' to="/about">About Us</Link></div>
              <div className="navbar-section navbar-list"><Link className='navbar-section navbar-list' to="/contact">Contact Us</Link></div>
              <div className="navbar-section navbar-font"><Link className='navbar-section navbar-list' to="/login">Login</Link></div>
              <div className="navbar-section navbar-font"><Link className='navbar-section navbar-list' to="/favourites">Favourites</Link></div>
            </div>
          </div>
  
          {/* Third Navbar */}
          <div className="navbar third-navbar">
            <div className="navbar-left">
              <div className="navbar-section-third"><Link to="/shopall" className='second-navbar-list'>Shop All</Link></div>
              <div className="navbar-section-third"><Link to="/mobile" className='second-navbar-list'>Mobile</Link></div>
              <div className="navbar-section-third"><Link to="/tab" className='second-navbar-list'>Tablets</Link></div>
              <div className="navbar-section-third"><Link to="/tws" className='second-navbar-list'>Audio</Link></div>
              <div className="navbar-section-third"><Link to="/tv" className='second-navbar-list'>T.V</Link></div>
              {/* <div className="navbar-section-third">Drones & Cameras</div>
              <div className="navbar-section-third">Wearables</div>
              <div className="navbar-section-third">Sales</div> */}
            </div>
          </div>
        </nav>
      </section>
  );
};

export default Navbar;
