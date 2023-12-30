import React from 'react';
import '../tws/tws.css';
import crystalVisionTV55 from '../../../img/shopall/samsungcrystalvisiontv55.png';

const CrystalVisionTV55 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={crystalVisionTV55} alt="Samsung 138 cm (55 Inches) Crystal Vision 4K Ultra HD Smart LED TV" />
     </div>
     <div className="product-details">
       <h1>Samsung 138 cm (55 Inches) Crystal Vision 4K Ultra HD Smart LED TV UA55CUE70AKLXL (Titan Gray)</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Samsung</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>UA55CUE70AKLXL</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Titan Gray</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>138 cm (55 Inches)</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>Crystal Vision 4K Ultra HD LED Display</td>
           </tr>
           <tr>
             <td>Resolution:</td>
             <td>3840 x 2160 pixels</td>
           </tr>
           <tr>
             <td>Refresh Rate:</td>
             <td>60 Hz</td>
           </tr>
           <tr>
             <td>Sound Output:</td>
             <td>20 Watts</td>
           </tr>
           <tr>
             <td>Smart TV:</td>
             <td>Yes, Tizen OS</td>
           </tr>
           <tr>
             <td>Connectivity:</td>
             <td>3 HDMI ports, 1 USB port, Wi-Fi, Ethernet</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹45,990 (as of 29 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Immersive 55-inch Crystal Vision 4K Ultra HD LED Display for vivid picture quality.</li>
           <li>Powerful Crystal Processor 4K for optimized picture quality and performance.</li>
           <li>HDR10+ and PurColor for enhanced color, contrast, and detail.</li>
           <li>Sleek and slim design with slim bezels for a more immersive viewing experience.</li>
           <li>Tizen OS Smart TV platform for access to popular streaming apps and content.</li>
           <li>Built-in voice assistants for convenient control.</li>
           <li>Multiple connectivity options including HDMI, USB, Wi-Fi, and Ethernet.</li>
         </ul>
     </div>
   </div>
 </div>
 );
};

export default CrystalVisionTV55;
