import React from 'react';
import '../tws/tws.css';
import s23FE from '../../../img/shopall/SamsumgS23FE.png'; 

const S23FE = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={s23FE} alt="Samsung Galaxy S23 FE" />
     </div>
     <div className="product-details">
       <h1>Samsung Galaxy S23 FE</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Samsung</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Galaxy S23 FE</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Mint, Graphite, Purple, Indigo, Tangerine (Check for availability)</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>6.1 inches (Check for exact specifications)</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>Dynamic AMOLED 2X Display (Check for exact specifications)</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>8GB</td>
           </tr>
           <tr>
             <td>ROM:</td>
             <td>128GB, 256GB</td>
           </tr>
           <tr>
             <td>Expandable Storage:</td>
             <td>No</td>
           </tr>
           <tr>
             <td>Processor:</td>
             <td>Exynos 2200 (Check for exact specifications)</td>
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
             <td>5G, 4G VoLTE, Wi-Fi 6, Bluetooth 5.2</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>4500 mAh (Check for exact specifications)</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹59,999 (starting price, as of 29 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Premium design and display, featuring a floating camera design and a vibrant AMOLED screen.</li>
           <li>Powerful performance with a flagship-grade processor (Check for exact specifications).</li>
           <li>Exceptional night photography capabilities with enhanced camera features.</li>
           <li>Long-lasting battery life for extended use.</li>
           <li>Immersive entertainment experience with Dolby Atmos sound.</li>
           <li>Sleek and lightweight design for comfortable portability.</li>
           <li>Fast charging support for quick power-ups.</li>
           <li>Android OS with Samsung's One UI for a smooth and intuitive user experience.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default S23FE;
