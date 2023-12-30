import React from 'react';
import '../tws/tws.css';
import nothingPhone2 from '../../../img/shopall/nothingphone2.png';

const NothingPhone2 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={nothingPhone2} alt="Nothing Phone (2) 5G" />
     </div>
     <div className="product-details">
       <h1>Nothing Phone (2) 5G</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Nothing</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Phone (2)</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>White, Black</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>6.7 inches</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>OLED, 120Hz</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>8 GB / 12 GB</td>
           </tr>
           <tr>
             <td>ROM:</td>
             <td>128 GB / 256 GB</td>
           </tr>
           <tr>
             <td>Processor:</td>
             <td>Snapdragon 8+ Gen 1</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>Android 12</td>
           </tr>
           <tr>
             <td>SIM Slot:</td>
             <td>Dual SIM (Nano-SIM, eSIM)</td>
           </tr>
           <tr>
             <td>Connectivity:</td>
             <td>5G, 4G VoLTE, Wi-Fi 6, Bluetooth 5.3</td>
           </tr>
           <tr>
             <td>Rear Camera:</td>
             <td>50MP + 16MP</td>
           </tr>
           <tr>
             <td>Front Camera:</td>
             <td>16MP</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>4500 mAh (45W fast charging)</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹31,999 (as of 30 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Unique transparent back with Glyph Interface for notifications and alerts.</li>
           <li>Powerful Snapdragon 8+ Gen 1 processor for smooth performance and gaming.</li>
           <li>Dual rear cameras with 50MP main sensor and 16MP ultrawide lens for versatile photography.</li>
           <li>16MP front camera for clear selfies and video calls.</li>
           <li>4500mAh battery with 45W wired fast charging and 15W wireless charging.</li>
           <li>6.7-inch OLED display with 120Hz refresh rate for immersive visuals.</li>
           <li>Stock Android experience with Nothing OS for a clean and bloatware-free interface.</li>
           <li>IP53 dust and water resistance for added durability.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default NothingPhone2;
