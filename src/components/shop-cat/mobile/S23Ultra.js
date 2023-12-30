import React from 'react';
import '../tws/tws.css';
import s23Ultra from '../../../img/shopall/samsung-s23-ultra.png';

const S23Ultra = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={s23Ultra} alt="Samsung Galaxy S23 Ultra 5G" />
     </div>
     <div className="product-details">
       <h1>Samsung Galaxy S23 Ultra 5G</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Samsung</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Galaxy S23 Ultra 5G</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Cream, Phantom Black, Green (as of 29 December 2023 on Amazon India)</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>17.27 cm (6.8 inch)</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>Dynamic AMOLED 2X Display</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>12GB, 16GB</td>
           </tr>
           <tr>
             <td>ROM:</td>
             <td>256GB, 512GB</td>
           </tr>
           <tr>
             <td>Expandable Storage:</td>
             <td>No</td>
           </tr>
           <tr>
             <td>Processor:</td>
             <td>Snapdragon 8 Gen 2 Octa-Core</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>Android</td>
           </tr>
           <tr>
             <td>SIM Slot:</td>
             <td>Dual SIM (Nano-SIM, eSIM)</td>
           </tr>
           <tr>
             <td>Connectivity:</td>
             <td>5G</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>5000 mAh</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹1,24,999 (starting price as of 29 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Get a smartphone that can detect your moods and react accordingly.</li>
           <li>The Samsung Galaxy Ultra's potent processor and advanced camera sensor can handle low light and noise reduction.</li>
           <li>The phone's Snapdragon 8 Gen 2 processor also enables quick gaming and video streaming.</li>
           <li>You can also launch Expert RAW to take high-resolution RAW photos that are vivid and packed with information.</li>
           <li>Moreover, Dynamic AMOLED 2X offers clear, brilliant details in both bright and low-light conditions.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default S23Ultra;
