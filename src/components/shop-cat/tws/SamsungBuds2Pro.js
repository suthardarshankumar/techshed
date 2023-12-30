import React from 'react';
import './tws.css';
import Budspro2 from '../../../img/shopall/samsungbudspro2.png';

const SamsungBuds2Pro = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={Budspro2} alt="Samsung Galaxy Buds2 Pro" />
     </div>
     <div className="product-details">
       <h1>Samsung Galaxy Buds2 Pro</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Samsung</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Galaxy Buds2 Pro</td>
           </tr>
           <tr>
             <td>Colors:</td>
             <td>Graphite, Bora Purple, White</td>
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
             <td>₹14,990 (starting price)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Advanced Active Noise Cancellation (ANC) blocks out up to 99% of unwanted noise.</li>
           <li>Enhanced Ambient Sound mode for clear awareness of surroundings.</li>
           <li>2-way speaker with woofer and tweeter for balanced sound.</li>
           <li>Up to 20 hours of total battery life with the charging case.</li>
           <li>5 hours of non-stop playtime on a single charge with ANC on.</li>
           <li>Fast charging: 1 hour of listening time from a 5-minute charge.</li>
           <li>IPX7 water-resistant for protection against sweat and rain.</li>
           <li>Voice Detect feature automatically switches between ANC and Ambient Sound.</li>
           <li>360 Audio for immersive sound experience (compatible devices only).</li>
           <li>Touch controls for music, calls, and volume.</li>
           <li>Voice assistant support for Bixby, Google Assistant, and Amazon Alexa.</li>
           <li>Ergonomic design for comfortable fit.</li>
           <li>Multiple ear tip sizes for a personalized fit.</li>
           <li>Galaxy Buds app for customization and device management.</li>
           <li>Compatible with Android and iOS devices.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default SamsungBuds2Pro;
