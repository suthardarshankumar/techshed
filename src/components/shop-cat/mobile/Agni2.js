import React from 'react';
import '../tws/tws.css';
import agni2 from '../../../img/shopall/lavaagni2.png';

const Agni2 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={agni2} alt="Lava Agni 2 5G" />
     </div>
     <div className="product-details">
       <h1>Lava Agni 2 5G</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Lava</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Agni 2 5G</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Glass Black, Glass Red, Glass Green</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>6.78 inches</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>IPS LCD</td>
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
             <td>No</td>
           </tr>
           <tr>
             <td>Processor:</td>
             <td>MediaTek Dimensity 810 Octa-core</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>Android 12</td>
           </tr>
           <tr>
             <td>SIM Slot:</td>
             <td>Dual SIM (Nano-SIM, Nano-SIM)</td>
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
             <td>₹15,499 (as of 29 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>90Hz refresh rate for smooth visuals.</li>
           <li>Powerful MediaTek Dimensity 810 Octa-core processor for efficient performance.</li>
           <li>8GB RAM for smooth multitasking and 128GB internal storage.</li>
           <li>Triple rear cameras (64MP + 5MP + 2MP) and 16MP front camera for capturing photos and videos.</li>
           <li>Long-lasting 5000mAh battery with 30W fast charging support.</li>
           <li>Side-mounted fingerprint sensor for quick and secure unlocking.</li>
           <li>Sleek and stylish design with a glass back.</li>
           <li>Stock Android 12 for a clean and bloatware-free experience.</li>
           <li>5G connectivity for ultra-fast internet speeds.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default Agni2;
