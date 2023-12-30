import React from 'react';
import './tws.css';
import wf1000xm5 from '../../../img/shopall/sonywf1000xm5.png';

const SonyWF1000XM5 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={wf1000xm5} alt="Sony WF-1000XM5 Wireless Earbuds" />
     </div>
     <div className="product-details">
       <h1>Sony WF-1000XM5 Wireless Noise Cancelling Earbuds</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Sony</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>WF-1000XM5</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Black, Silver</td>
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
             <td>₹24,990</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Industry-leading noise cancellation with Auto NC Optimizer and 8 microphones for immersive sound.</li>
           <li>Exceptional sound quality with LDAC support for high-resolution audio.</li>
           <li>Up to 36 hours of total battery life with the charging case, and 8 hours on a single charge.</li>
           <li>Quick charge: 3 hours of listening time from a 10-minute charge.</li>
           <li>IPX4 water-resistant for protection against sweat and light rain.</li>
           <li>Touch controls for music, calls, and volume.</li>
           <li>Voice assistant support for Google Assistant and Amazon Alexa.</li>
           <li>Ergonomic design for a comfortable and secure fit.</li>
           <li>Speak-to-Chat feature automatically pauses music when you start talking.</li>
           <li>Multipoint connection for seamless switching between two devices.</li>
           <li>Compatible with Android and iOS devices.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default SonyWF1000XM5;
