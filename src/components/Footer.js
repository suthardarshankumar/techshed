import React from 'react'
import { Routes, Route, Link, Switch } from 'react-router-dom';
import './css/Footer.css'

const Footer = () => {
    return(
        <div>
            <footer className="footer-container">
                <div className="column">
                    <h3 className='footer-heading'>Store Location</h3>
                    <p className='Location'>Unit 7-8, Ground Floor, Silver Oaks Mall, Sardar Patel Marg, Adalaj Road, Gandhinagar, Gujarat - 382009</p>
                </div>
                <div className="column">
                    <h3 className='footer-heading'>Shop</h3>
                    <p className="footer-list"><Link className='footer-link' to="/Shopall">Shop All</Link></p>
                    <p className="footer-list"><Link className='footer-link' to="/mobile">Mobile</Link></p>
                    <p className="footer-list"><Link className='footer-link' to="/tab">Tablets</Link></p>
                    <p className="footer-list"><Link className='footer-link' to="/tws">Audio</Link></p>
                    <p className="footer-list"><Link className='footer-link' to="/tv">T.V</Link></p>
                </div>
                <div className="column">
                    <h3 className='footer-heading'>Customer Support</h3>
                    <p className="footer-list"><Link className='footer-link' to="/contac">Contact Us</Link></p>
                    <p className="footer-list"><Link className='footer-link' to="/computers">About Us</Link></p>
                </div>
                <div className="column">
                    <h3 className='footer-heading'>Policy</h3>
                    <p className="footer-list"><Link className='footer-link' to="/shippingreturns">Shipping & Returns</Link></p>
                    <p className="footer-list"><Link className='footer-link' to="/termsconditions">Terms & Conditions</Link></p>
                    <p className="footer-list"><Link className='footer-link' to="/tablets">Payment Methods</Link></p>
                    <p className="footer-list"><Link className='footer-link' to="/drones-cameras">FAQ</Link></p>
                </div>
            </footer>
            <div className='footer-copyright'>
                <p>&copy; 2023 TechShop. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;