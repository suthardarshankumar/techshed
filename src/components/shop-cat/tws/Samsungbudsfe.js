import React from 'react';
import './tws.css';
import Budsfe from '../../../img/shopall/samsungbudsfe.png';

const Samsungbudsfe = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={Budsfe} alt="Samsung Galaxy Wireless Buds Fe" />
     </div>
     <div className="product-details">
       <h1>Samsung Galaxy Wireless Buds Fe</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Samsung</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Galaxy Buds Fe</td>
           </tr>
           <tr>
             <td>Colors:</td>
             <td>Graphite, Lavender, Olive, White</td>
           </tr>
           <tr>
             <td>Form Factor:</td>
             <td>In Ear</td>
           </tr>
           <tr>
             <td>Connectivity Technology:</td>
             <td>Bluetooth 5.0</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹8,499</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Active Noise Cancellation (ANC) blocks out unwanted noise.</li>
           <li>Ambient Sound mode lets you hear your surroundings without having to take out your earbuds.</li>
           <li>Up to 21 hours of total battery life with the charging case.</li>
           <li>5.5 hours of non-stop playtime on a single charge.</li>
           <li>Fast charging: 1 hour of listening time from a 5-minute charge.</li>
           <li>IPX4 water-resistant for protection against sweat and light rain.</li>
           <li>Touch controls for music, calls, and volume.</li>
           <li>Voice assistant support for Bixby, Google Assistant, and Amazon Alexa.</li>
           <li>Enhanced comfort with ergonomic design and soft ear tips.</li>
           <li>Multiple ear tip and wingtip sizes for a personalized fit.</li>
           <li>Scalable Codec for optimized audio quality.</li>
           <li>Three microphones and beamforming technology for clear calls.</li>
           <li>Galaxy Buds app for customization and device management.</li>
           <li>Compatible with Android and iOS devices.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default Samsungbudsfe;
