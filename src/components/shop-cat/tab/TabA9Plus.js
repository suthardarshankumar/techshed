import React from 'react';
import '../tws/tws.css';
import tabA9plus from '../../../img/shopall/samsungtaba9plus.png';

const TabA9Plus = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={tabA9plus} alt="Samsung Galaxy Tab A9 Plus" />
     </div>
     <div className="product-details">
       <h1>Samsung Galaxy Tab A9+ 27.94 cm (11.0 inch) Display</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Samsung</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Galaxy Tab A9+</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Gray, Dark Blue, Silver</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>27.94 cm (11.0 inch)</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>LCD</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>8 GB</td>
           </tr>
           <tr>
             <td>ROM:</td>
             <td>128 GB</td>
           </tr>
           <tr>
             <td>Expandable Storage:</td>
             <td>Yes</td>
           </tr>
           <tr>
             <td>Processor:</td>
             <td>Qualcomm Snapdragon SM6375</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>Android</td>
           </tr>
           <tr>
             <td>SIM Slot:</td>
             <td>No</td>
           </tr>
           <tr>
             <td>Connectivity:</td>
             <td>Wi-Fi</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>7040 mAh</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹17,999 (as of 27 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>
             <strong>Outstanding vividness with 11-inch LCD display, 90 Hz Refresh Rate, 1920 x 1200 (WQXGA)</strong>
           </li>
           <li>Powerful Qualcomm Snapdragon SM6375 Processor for smooth performance.</li>
           <li>8GB RAM for seamless multitasking and 128GB internal storage, expandable with MicroSD card.</li>
           <li>8MP AF Rear Camera and 5MP FF Front camera for capturing decent photos and videos.</li>
           <li>Long-lasting 7040mAh battery for extended use.</li>
           <li>Quad Speakers with Surround Sound for immersive audio experience.</li>
           <li>Sleek and lightweight design for effortless portability.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default TabA9Plus;
