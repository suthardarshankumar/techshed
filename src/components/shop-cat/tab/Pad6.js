import React from 'react';
import '../tws/tws.css';
import pad6 from '../../../img/shopall/xiaomipad6.png'; 

const Pad6 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={pad6} alt="Xiaomi Pad 6" />
     </div>
     <div className="product-details">
       <h1>Xiaomi Pad 6 | Qualcomm Snapdragon 870</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Xiaomi</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Pad 6</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Gray, Silver, Beige (Check available colors on Amazon India)</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>27.81 cm (11 inch)</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>2.5K+ LCD Display</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>6 GB / 8 GB</td>
           </tr>
           <tr>
             <td>ROM:</td>
             <td>128 GB / 256 GB</td>
           </tr>
           <tr>
             <td>Expandable Storage:</td>
             <td>No</td>
           </tr>
           <tr>
             <td>Processor:</td>
             <td>Qualcomm Snapdragon 870 Octa-Core</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>Android</td>
           </tr>
           <tr>
             <td>SIM Slot:</td>
             <td>None</td>
           </tr>
           <tr>
             <td>Connectivity:</td>
             <td>Wi-Fi</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>8720 mAh</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹Rs. 25,999 (starting price, as of 27 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>11-inch 2.5K+ LCD Display with 120Hz refresh rate for smooth visuals.</li>
           <li>Powerful Qualcomm Snapdragon 870 Octa-Core processor for exceptional performance.</li>
           <li>Available in 6GB or 8GB RAM options for smooth multitasking.</li>
           <li>128GB or 256GB internal storage for ample space.</li>
           <li>Dual rear cameras (13MP + 8MP Ultra Wide) and 8MP front camera for capturing photos and videos.</li>
           <li>Massive 8720mAh battery with fast charging support for extended use.</li>
           <li>Quad speakers with Dolby Atmos for immersive sound.</li>
           <li>Sleek and lightweight design for portability.</li>
           <li>Wi-Fi connectivity for fast internet access.</li>
           <li>Android OS with MIUI for a customizable user experience.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default Pad6;
