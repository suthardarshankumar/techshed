import React from 'react';
import './tws.css';
import BudsPro2 from '../../../img/shopall/oneplusbudspro2.png'; 

const OnePlusBudsPro2 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={BudsPro2} alt="OnePlus Buds Pro 2" />
     </div>
     <div className="product-details">
       <h1>OnePlus Buds Pro 2 Bluetooth TWS Earbuds</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>OnePlus</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Buds Pro 2</td>
           </tr>
           <tr>
             <td>Colors:</td>
             <td>Obsidian Black, Arbor Green, Misty White</td>
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
             <td>₹11,999</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Active Noise Cancellation (ANC) up to 48dB</li>
           <li>Spatial Audio with Dynamic Head Tracking</li>
           <li>MelodyBoost Dual Drivers for High-Quality Audio</li>
           <li>Up to 39 hours of total battery life with the charging case</li>
           <li>Up to 9 hours of non-stop playtime on a single charge (ANC off)</li>
           <li>Fast charging: 10 hours of listening time from a 10-minute charge</li>
           <li>IP55 water and sweat resistant</li>
           <li>Touch controls for music, calls, and volume</li>
           <li>Voice assistant support for Google Assistant</li>
           <li>Ergonomic design for a comfortable fit</li>
           <li>OnePlus Audio ID 2.0 for personalized sound</li>
           <li>OnePlus Fast Pair for quick and easy connection</li>
           <li>Neck Health with posture reminders</li>
           <li>Compatible with Android and iOS devices</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default OnePlusBudsPro2;
