import React from 'react';
import './tws.css';
import boatairdopes170 from '../../../img/shopall/boatairdopes170.png';

const Boat170 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={boatairdopes170} alt="boAt Airdopes 170" />
     </div>
     <div className="product-details">
       <h1>boAt Airdopes 170 Bluetooth TWS Earbuds</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>boAt</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Airdopes 170</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Classic Black, Tranquil Blue, Frost White</td>
           </tr>
           <tr>
             <td>Form Factor:</td>
             <td>In Ear</td>
           </tr>
           <tr>
             <td>Connectivity Technology:</td>
             <td>Bluetooth 5.3</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹1,599</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Playback: Up to 50 hours of total playtime (up to 9 hours per earbud)</li>
           <li>Low Latency: BEAST mode for real-time audio and low latency gaming</li>
           <li>Clear Voice Calls: Quad Mics with ENx Tech for noise cancellation</li>
           <li>boAt Signature Sound: 13mm audio drivers for immersive audio</li>
           <li>ASAP Charge: 75 minutes of playtime in just 5 minutes of charge</li>
           <li>Instant Connect: Insta Wake N' Pair for seamless connection</li>
           <li>IP Rating: IPX4 water and sweat resistance</li>
           <li>Touch Controls: Convenient touch controls for music and calls</li>
           <li>Voice Assistant: One Touch Voice Assistant support</li>
           <li>Country Of Origin: India</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default Boat170;
