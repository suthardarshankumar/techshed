import React from 'react';
import '../tws/tws.css'; 
import oneplus11 from '../../../img/shopall/oneplus11.png';

const OnePlus11 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={oneplus11} alt="OnePlus 11 5G" />
     </div>
     <div className="product-details">
       <h1>OnePlus 11 5G</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>OnePlus</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>OnePlus 11 5G</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Black, Green, White</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>6.7 inches (approximate)</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>Fluid AMOLED Display</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>8 GB, 12 GB</td>
           </tr>
           <tr>
             <td>ROM:</td>
             <td>128 GB, 256 GB</td>
           </tr>
           <tr>
             <td>Processor:</td>
             <td>Snapdragon 8 Gen 2 (approximate)</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>Android</td>
           </tr>
           <tr>
             <td>SIM Slot:</td>
             <td>Dual SIM (Nano-SIM, Nano-SIM)</td>
           </tr>
           <tr>
             <td>Connectivity:</td>
             <td>5G supported</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>5000 mAh (approximate)</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹56,999 (starting price as of 29 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
     </div>
   </div>
 );
};

export default OnePlus11;
