import React from 'react';
import '../tws/tws.css'; 
import onePlus11R from '../../../img/shopall/oneplus11r.png';

const OnePlus11R = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={onePlus11R} alt="OnePlus 11R 5G" />
     </div>
     <div className="product-details">
       <h1>OnePlus 11R 5G</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>OnePlus</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>11R 5G</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Galactic Silver, Sonic Black (Check for availability)</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>6.7 inches (Actual size may vary)</td>
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
             <td>4nm Snapdragon 8 Gen 1 Octa-Core</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>OxygenOS based on Android 13</td>
           </tr>
           <tr>
             <td>SIM Slot:</td>
             <td>Dual SIM (Nano-SIM, Nano-SIM)</td>
           </tr>
           <tr>
             <td>Connectivity:</td>
             <td>5G, 4G LTE, Wi-Fi 6, Bluetooth 5.3</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>4500 mAh (Typical) / 4380 mAh (Rated)</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹43,999 (Starting price, as of 29 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Fast and smooth performance with 4nm Snapdragon 8 Gen 1 Octa-Core processor.</li>
           <li>Immersive visual experience with 6.7-inch Fluid AMOLED Display and 120Hz refresh rate.</li>
           <li>Exceptional photography with 50MP Triple Rear Camera with Sony IMX766 and 16MP Front Camera.</li>
           <li>Long-lasting battery with 4500 mAh capacity and 150W SUPERVOOC fast charging.</li>
           <li>Sleek and stylish design with premium build quality.</li>
           <li>OxygenOS based on Android 13 for a smooth and intuitive user experience.</li>
           <li>Advanced gaming features for an immersive gaming experience.</li>
           <li>Dolby Atmos support for enhanced audio experience.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default OnePlus11R;
