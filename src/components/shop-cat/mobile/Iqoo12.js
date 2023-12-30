import React from 'react';
import '../tws/tws.css';
import iqoo12 from '../../../img/shopall/iqoo12.png';

const Iqoo12 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={iqoo12} alt="iQOO 12 5G" />
     </div>
     <div className="product-details">
       <h1>iQOO 12 5G (Legend, 16GB RAM, 512GB Storage)</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>iQOO</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>iQOO 12 5G</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Legend (Black), Alpha (White), Phoenix (Orange)</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>6.78 inches</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>AMOLED</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>16 GB</td>
           </tr>
           <tr>
             <td>ROM:</td>
             <td>512 GB</td>
           </tr>
           <tr>
             <td>Expandable Storage:</td>
             <td>No</td>
           </tr>
           <tr>
             <td>Processor:</td>
             <td>Snapdragon 8 Gen 3</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>Android 13</td>
           </tr>
           <tr>
             <td>SIM Slot:</td>
             <td>Dual SIM, GSM+GSM</td>
           </tr>
           <tr>
             <td>Connectivity:</td>
             <td>5G</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>4700 mAh</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹57,999 (as of 30 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Powerful Snapdragon 8 Gen 3 processor for exceptional performance.</li>
           <li>16GB RAM for seamless multitasking and 512GB internal storage for ample space.</li>
           <li>6.78-inch AMOLED display with a smooth refresh rate for immersive visuals.</li>
           <li>Triple rear cameras (50MP + 50MP + 64MP) for capturing stunning photos and videos.</li>
           <li>4700mAh battery with super-fast charging support for extended use.</li>
           <li>In-display fingerprint sensor for secure and convenient unlocking.</li>
           <li>5G connectivity for blazing-fast internet speeds.</li>
           <li>Android 13 with iQOO's intuitive UI for a smooth user experience.</li>
           <li>Available in multiple stylish colors.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default Iqoo12;
