import React from 'react';
import './tws.css';
import boatairdopes200plus from '../../../img/shopall/boat200plus.png'; 

const Boat200Plus = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={boatairdopes200plus} alt="boAt Airdopes 200 Plus TWS" />
     </div>
     <div className="product-details">
       <h1>boAt Airdopes 200 Plus TWS Earbuds</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>boAt</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Airdopes 200 Plus</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Bold Blue, Carbon Black</td>
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
           <li>Playback: Up to 100 hours of total playtime (up to 8 hours per earbud)</li>
           <li>Low Latency: Beast Mode for real-time audio and low latency gaming</li>
           <li>Clear Voice Calls: Quad Mics with ENx Tech for noise cancellation</li>
           <li>boAt Signature Sound: 13mm audio drivers for immersive audio</li>
           <li>ASAP Charge: 60 minutes of playtime in just 5 minutes of charge</li>
           <li>Instant Connect: IWP Tech for seamless connection</li>
           <li>IP Rating: IPX5 water and sweat resistance</li>
           <li>Touch Controls: Convenient touch controls for music and calls</li>
           <li>Voice Assistant: One Touch Voice Assistant support</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default Boat200Plus;
