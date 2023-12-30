import React from 'react';
import './tws.css';
import budspro2r from '../../../img/shopall/oneplusnordbuds2r.png';

const BudsPro2R = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={budspro2r} alt="OnePlus Buds Pro 2R" />
     </div>
     <div className="product-details">
       <h1>OnePlus Buds Pro 2R Bluetooth Truly Wireless Earbuds</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>OnePlus</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Buds Pro 2R</td>
           </tr>
           <tr>
             <td>Colors:</td>
             <td>Obsidian Black, Misty White</td>
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
             <td>₹9,999 (current price on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Active Noise Cancellation (ANC) up to 45dB</li>
           <li>Dual Drivers for immersive sound</li>
           <li>Up to 40 hours of total battery life with the charging case</li>
           <li>10 hours of non-stop playtime on a single charge</li>
           <li>Fast charging: 10 hours of listening time from a 10-minute charge</li>
           <li>IP55 water-resistant and dustproof</li>
           <li>Touch controls for music, calls, and volume</li>
           <li>Voice assistant support</li>
           <li>Ergonomic design for a comfortable fit</li>
           <li>Dolby Atmos support for spatial audio</li>
           <li>OnePlus Audio ID for personalized sound</li>
           <li>HeyMelody app for customization and device management</li>
           <li>Compatible with Android and iOS devices</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default BudsPro2R;
