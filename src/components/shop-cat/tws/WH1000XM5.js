import React from 'react';
import './tws.css';
import wh1000xm5 from '../../../img/shopall/sonyheadphone.png';

const WH1000XM5 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={wh1000xm5} alt="Sony WH-1000XM5 Wireless Headphones" />
     </div>
     <div className="product-details">
       <h1>Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Sony</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>WH-1000XM5</td>
           </tr>
           <tr>
             <td>Colors:</td>
             <td>Black, Silver, Mid-Night Blue</td>
           </tr>
           <tr>
             <td>Form Factor:</td>
             <td>Over-Ear</td>
           </tr>
           <tr>
             <td>Connectivity Technology:</td>
             <td>Bluetooth 5.2</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹27,990</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Industry-leading Active Noise Cancellation (ANC) with 8 microphones</li>
           <li>Exceptional call quality with 8 microphones and beamforming technology</li>
           <li>40 hours of battery life with ANC on, 30 hours with ANC off</li>
           <li>3-minute quick charge for 3 hours of playback</li>
           <li>Multipoint connectivity for seamless switching between two devices</li>
           <li>Alexa built-in for voice control</li>
           <li>Ergonomic design for all-day comfort</li>
           <li>Touch sensor controls for music, calls, and volume</li>
           <li>Speak-to-Chat feature automatically pauses music when you start talking</li>
           <li>Quick Attention Mode lets you hear ambient sounds without taking off headphones</li>
           <li>Adaptive Sound Control adjusts ANC based on your surroundings</li>
           <li>Sony Headphones Connect app for customization and device management</li>
           <li>Compatible with Android and iOS devices</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default WH1000XM5;
