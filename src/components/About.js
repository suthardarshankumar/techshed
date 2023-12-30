import React from 'react';
import './css/Other.css';
import Aboutus_Image from '../img/aboutus.png'

const About = () => {
  return (
    <div>
      <h1 className='about-heading'>About Us</h1>
      <section className="about-container">
        <div className="about-left-column">
        <img src={Aboutus_Image} alt="" className="aboutus-image" />
        </div>
        <div className='about-right-col'>
          <p className="about-right-column">Welcome to TechShop, your ultimate destination for cutting-edge technology and innovation. At TechShop, we take pride in offering a diverse range of premium electronic products to meet the ever-evolving needs of our tech-savvy customers. Whether you're on the lookout for the latest smartphones, powerful computers, sleek tablets, high-performance drones, state-of-the-art cameras, stylish wearables, reliable chargers, immersive TVs, or any other tech accessory, we've got you covered.</p>
          <p className="about-right-column">Our mission at TechShop is to provide an unparalleled shopping experience, combining top-notch products with exceptional customer service. We believe in empowering our customers with the latest and greatest in technology, ensuring they stay ahead in this dynamic digital era.</p>
          <p className="about-right-column">With a commitment to quality, innovation, and customer satisfaction, TechShop strives to be your go-to destination for all things tech. Our carefully curated selection of products comes from leading brands and manufacturers, guaranteeing reliability, performance, and style.</p>
          <p className="about-right-column">Join us on this exciting journey into the world of technology. Explore, shop, and discover the possibilities with TechShop – where innovation meets convenience.</p>
          <p className="about-right-column">Thank you for choosing TechShop – Your Tech, Your Way.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
