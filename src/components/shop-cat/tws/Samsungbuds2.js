import React from 'react';
import './tws.css';
import Buds2 from '../../../img/shopall/samsungbuds2.png'; // Assuming image path

const Samsungbuds2 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={Buds2} alt="Samsung Galaxy Buds 2" />
     </div>
     <div className="product-details">
       <h1>Samsung Galaxy Buds 2</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Samsung</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Galaxy Buds 2</td>
           </tr>
           <tr>
             <td>Colors:</td>
             <td>Graphite, Lavender, Olive, White</td>
           </tr>
           <tr>
             <td>Form Factor:</td>
             <td>In Ear</td>
           </tr>
           <tr>
             <td>Connectivity Technology:</td>
             <td>Bluetooth 5.2</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹11,990</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Active Noise Cancellation (ANC) blocks out unwanted noise.</li>
           <li>Ambient Sound mode lets you hear your surroundings without having to take out your earbuds.</li>
           <li>Up to 20 hours of total battery life with the charging case (ANC on).</li>
           <li>5 hours of continuous playtime on a single charge (ANC on).</li>
           <li>Fast charging: 1 hour of listening time from a 5-minute charge.</li>
           <li>IPX2 water-resistant for protection against sweat and light splashes.</li>
           <li>Touch controls for music, calls, and volume.</li>
           <li>Voice assistant support for Bixby, Google Assistant, and Amazon Alexa.</li>
           <li>Ergonomic design for comfortable fit.</li>
           <li>Multiple ear tip sizes for a personalized fit.</li>
           <li>2-way dynamic speakers for balanced sound.</li>
           <li>Three microphones and voice pickup unit for clear calls.</li>
           <li>Galaxy Buds app for customization and device management.</li>
           <li>Compatible with Android and iOS devices.</li>
           <li>Available in India with 1-year warranty.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default Samsungbuds2;
