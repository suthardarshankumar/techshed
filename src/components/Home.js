import React from 'react';
import '../App.css';
import Brands from './Brands';
import Laptop from '../img/laptop.png';
import Phone_Left from '../img/Phone-left-side.webp';
import Headphone_Right from '../img/headphone-right-side.webp';
import Bill from '../img/icon/bill.svg';
import Pickup from '../img/icon/pickup.svg';
import Box from '../img/icon/box.svg';
import Time from '../img/icon/time.svg';
import Ipad from '../img/ipad.png';
import Speaker from '../img/speaker.png';
import Soundbar from '../img/soundbar.png';
import Computer from '../img/computer.png';
import Mobile from '../img/mobile.png';
import Drones from '../img/drones.png';
import Tablets from '../img/tablets.png';
import TV from '../img/tv.png';
import Wearable from '../img/wearable.png';
import Speaker_1 from '../img/speaker-1.png';
import Headphone from '../img/headphones.png';
import Laptop_1 from '../img/laptop-1.png';

const Home = () => {
  return (
    <div>
      <section className="home-section">
        <img className="background-section" src={Laptop} alt="" />
        <p className="home-best-price">Best Price</p>
        <h1 className="home-heading">Incredible Prices on All Your Favorite Items</h1>
        <p className="home-details">Get more for less on selected brands</p>
        <button className="home-button">Show Now</button>
      </section>

      <section className="image-section">
        <div className="image-container">
          <img className="image-left" src={Phone_Left} alt="Left Image" />
          <div className="text-overlay-left">
            <p className="offer-title">Holiday Deals</p>
            <h1 className="offer-heading">Up to 30% off</h1>
            <p className="offer-details">Selected Smartphone Brands</p>
            <button className="offer-button offer-button-left">Show Now</button>
          </div>
        </div>
        <div className="image-container">
          <img className="image-right" src={Headphone_Right} alt="Right Image" />
          <div className="text-overlay-right">
            <p className="offer-title">Just In</p>
            <h1 className="offer-heading">Take Your Sound Anywhere</h1>
            <p className="offer-details">Top Headphone Brands</p>
            <button className="offer-button offer-button-right">Show Now</button>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container-section">
          <div className="row-section">
            <div className="col-section">
              <i><img className="service-icon" src={Pickup} alt="Pickup Icon" /></i>
              <p className="service-details">Curb-side pickup</p>
            </div>
            <div className="col-section">
              <i><img className="service-icon" src={Box} alt="Box Icon" /></i>
              <p className="service-details">Free Shipping for orders over ₹500</p>
            </div>
            <div className="col-section">
              <i><img className="service-icon" src={Bill} alt="Bill Icon" /></i>
              <p className="service-details">Low prices guaranteed</p>
            </div>
            <div className="col-section">
              <i><img className="service-icon" src={Time} alt="Time Icon" /></i>
              <p className="service-details">Available to you 24/7</p>
            </div>
          </div>
        </div>
      </section>

      <section className="best-seller-section">
        <div className="best-seller-container">
          <h1 className="best-seller-heading">Best Sellers</h1>
          <div className="best-seller-row">
            <div className="best-seller-col">
              <img src={Ipad} alt="" className="best-seller-img best-seller-ipad" />
              <p>Corr Playtime 10.3", 64GB with WiFi</p>
              <p className="best-seller-prices">₹29999</p>
            </div>
            <div className="best-seller-col">
              <img src={Laptop_1} alt="" className="best-seller-img" />
              <p>Pilates 14" Touch Screen Laptop 12GB Memory</p>
              <p className="best-seller-prices">₹34999</p>
            </div>
            <div className="best-seller-col">
              <img src={Speaker} alt="" className="best-seller-img" />
              <p>Turn5 Portable Bluetooth Speaker With Handle</p>
              <p className="best-seller-prices">₹1499</p>
            </div>
            <div className="best-seller-col">
              <img src={Soundbar} alt="" className="best-seller-img" />
              <p>TV Bluetooth Soundbar With HDMI-ARC Connectivity</p>
              <p className="best-seller-prices">₹1999</p>
            </div>
          </div>
          <button className="best-seller-button">View All</button>
        </div>
      </section>

      <section className="shop-cat-section">
        <div className="shop-container">
          <h1 className="shop-cat-heading">Shop by Category</h1>
          <div className="shop-row">
            <div>
              <div className="shop-col"><img src={Computer} alt="" className="shop-cat" /></div>
              <p className="shop-cat-details">Computer</p>
            </div>
            <div>
              <div className="shop-col"><img src={Mobile} alt="" className="shop-cat" /></div>
              <p className="shop-cat-details">Mobile</p>
            </div>
            <div>
              <div className="shop-col"><img src={Drones} alt="" className="shop-cat" /></div>
              <p className="shop-cat-details">Drones & Cameras</p>
            </div>
            <div>
              <div className="shop-col"><img src={Tablets} alt="" className="shop-cat" /></div>
              <p className="shop-cat-details">Tablets</p>
            </div>
          </div>
        </div>

        <div className="shop-container shop-cat-container">
          <div className="shop-row">
            <div>
              <div className="shop-col"><img src={TV} alt="" className="shop-cat" /></div>
              <p className="shop-cat-details">T.V & Home Cinema</p>
            </div>
            <div>
              <div className="shop-col"><img src={Wearable} alt="" className="shop-cat" /></div>
              <p className="shop-cat-details">Wearable Tech</p>
            </div>
            <div>
              <div className="shop-col"><img src={Speaker_1} alt="" className="shop-cat" /></div>
              <p className="shop-cat-details">Speakers</p>
            </div>
            <div>
              <div className="shop-col"><img src={Headphone} alt="" className="shop-cat" /></div>
              <p className="shop-cat-details">Headphones</p>
            </div>
          </div>
        </div>
      </section>
      <Brands />
    </div>
  );
};

export default Home;
