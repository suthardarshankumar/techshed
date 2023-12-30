import React from 'react';
import './tws.css';
import budspro from '../../../img/shopall/oneplusbudspro.png';

const OnePlusBudsPro = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={budspro} alt="OnePlus Buds Pro" />
     </div>
     <div className="product-details">
       <h1>OnePlus Buds Pro Bluetooth TWS Earbuds</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>OnePlus</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Buds Pro</td>
           </tr>
           <tr>
             <td>Colors:</td>
             <td>Matte Black, Glossy White</td>
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
             <td>₹9,999</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Smart Adaptive Noise Cancellation for a personalized noise-canceling experience</li>
           <li>11mm dynamic drivers for deep bass and clear treble</li>
           <li>Up to 38 hours of total battery life with the charging case</li>
           <li>10 minutes of Warp Charge provides 10 hours of listening time</li>
           <li>IP55 water and sweat resistant for protection during workouts</li>
           <li>Dolby Atmos support for immersive sound</li>
           <li>Zen Mode Air for a peaceful listening experience</li>
           <li>Low latency gaming mode for a seamless gaming experience</li>
           <li>Touch controls for music, calls, and volume</li>
           <li>Voice assistant support for Google Assistant and Amazon Alexa</li>
           <li>OnePlus Audio ID for personalized sound</li>
           <li>Find My Buds feature to locate your earbuds</li>
           <li>Compatible with Android and iOS devices</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default OnePlusBudsPro;
