import React from 'react';
import './tws.css';
import boatAirdopes121v2Plus from '../../../img/shopall/boat121.png';

const BoatAirdopes121V2Plus = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={boatAirdopes121v2Plus} alt="boAt Airdopes 121 V2 Plus TWS" />
     </div>
     <div className="product-details">
       <h1>boAt Airdopes 121 V2 Plus TWS Earbuds</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>boAt</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Airdopes 121 V2 Plus</td>
           </tr>
           <tr>
             <td>Colors:</td>
             <td>Active Black, Marine Blue, Slate Grey</td>
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
             <td>₹1,299</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Playback: Up to 50 hours of total playtime (up to 10 hours per earbud)</li>
           <li>Low Latency: BEAST mode for real-time audio and low latency gaming, 50ms latency</li>
           <li>Clear Voice Calls: Quad Mics with ENx Tech for noise cancellation</li>
           <li>ASAP Charge: 60 minutes of playtime in just 5 minutes of charge</li>
           <li>Instant Connect: Insta Wake N' Pair for seamless connection</li>
           <li>IP Rating: IPX4 water and sweat resistance</li>
           <li>Touch Controls: Convenient touch controls for music and calls</li>
           <li>Voice Assistant: One Touch Voice Assistant support</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default BoatAirdopes121V2Plus;
