import React from 'react';
import '../tws/tws.css';
import openFold from '../../../img/shopall/oneplusopen.png';

const OpenFold = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={openFold} alt="OnePlus Open Fold" />
     </div>
     <div className="product-details">
       <h1>OnePlus Open Fold 17.78 cm (7 inch) Foldable Display</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>OnePlus</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>OnePlus Open Fold</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Voyager Black</td>
           </tr>
           <tr>
             <td>Main Display Size:</td>
             <td>17.78 cm (7 inch) Foldable AMOLED</td>
           </tr>
           <tr>
             <td>Cover Display Size:</td>
             <td>6.7 inch AMOLED</td>
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
             <td>4nm Snapdragon 8 Gen 1 Octa-Core</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>Android</td>
           </tr>
           <tr>
             <td>SIM Slot:</td>
             <td>Nano-SIM</td>
           </tr>
           <tr>
             <td>Connectivity:</td>
             <td>Wi-Fi, Wi-Fi + 5G</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>4800 mAh</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹1,05,999 (as of 30 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Innovative 7-inch foldable AMOLED display for a seamless tablet experience.</li>
           <li>Premium build with aerospace-grade materials for exceptional durability.</li>
           <li>TÜV Rheinland certified for 1,000,000 folds for long-lasting reliability.</li>
           <li>Powerful 4nm Snapdragon 8 Gen 1 processor for exceptional performance.</li>
           <li>16GB RAM for seamless multitasking and 512GB internal storage for ample space.</li>
           <li>Triple rear cameras (50MP main + 48MP ultra-wide + 8MP telephoto) for stunning photos and videos.</li>
           <li>16MP front camera for clear selfies and video calls.</li>
           <li>Long-lasting 4800mAh battery with 65W super-fast charging support.</li>
           <li>OxygenOS 13 based on Android 13 for a smooth and intuitive user experience.</li>
           <li>Wi-Fi 6E and 5G connectivity for blazing-fast internet speeds.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default OpenFold;
