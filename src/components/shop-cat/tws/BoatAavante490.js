import React from 'react';
import './tws.css';
import boatAavante490 from '../../../img/shopall/boatsoundbar.png'; 

const BoatAavante490 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={boatAavante490} alt="boAt Aavante Bar 490 Bluetooth Soundbar" />
     </div>
     <div className="product-details">
       <h1>boAt Aavante Bar 490 Bluetooth Soundbar 10W RMS Signature Sound</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>boAt</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Aavante Bar 490</td>
           </tr>
           <tr>
             <td>Colour:</td>
             <td>Classic Black</td>
           </tr>
           <tr>
             <td>Output Power:</td>
             <td>10W RMS</td>
           </tr>
           <tr>
             <td>Connectivity Technology:</td>
             <td>Bluetooth 5.1, AUX, TF Card, USB</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹1,799</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Immersive Sound - 10W RMS Signature Sound for a powerful audio experience.</li>
           <li>Wireless Connectivity - Bluetooth 5.1 for seamless connection with your devices.</li>
           <li>Multiple Connectivity Options - AUX, TF Card, and USB for versatility.</li>
           <li>Long Playtime - Up to 7 hours of playback on a single charge.</li>
           <li>Built-in Microphone - For hands-free calling and voice assistant support.</li>
           <li>TWS Feature - Pair two Aavante Bar 490 soundbars for a true wireless stereo experience.</li>
           <li>Compact and Portable - Sleek design for easy placement and portability.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default BoatAavante490;
