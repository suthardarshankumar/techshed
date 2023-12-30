import React from 'react';
import '../tws/tws.css';
import lgTv32 from '../../../img/shopall/lgtv32lm563bptc.png'; 

const LGTV32 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={lgTv32} alt="LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC" />
     </div>
     <div className="product-details">
       <h1>LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>LG</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>32LM563BPTC</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Dark Iron Gray</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>80 cm (32 inches)</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>HD Ready LED TV</td>
           </tr>
           <tr>
             <td>Resolution:</td>
             <td>1366 x 768 pixels</td>
           </tr>
           <tr>
             <td>Refresh Rate:</td>
             <td>50 Hz</td>
           </tr>
           <tr>
             <td>Smart TV:</td>
             <td>Yes</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>WebOS</td>
           </tr>
           <tr>
             <td>Connectivity:</td>
             <td>Wi-Fi, Ethernet</td>
           </tr>
           <tr>
             <td>Sound Output:</td>
             <td>10W</td>
           </tr>
           <tr>
             <td>USB Ports:</td>
             <td>2</td>
           </tr>
           <tr>
             <td>HDMI Ports:</td>
             <td>2</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹13,490 (as of 29 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Vivid picture quality with HD resolution and Active HDR.</li>
           <li>Immersive sound experience with AI Sound.</li>
           <li>Smart TV features for streaming apps and content.</li>
           <li>Sleek and slim design for a modern look.</li>
           <li>Multiple connectivity options for versatile use.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default LGTV32;
