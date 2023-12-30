import React from 'react';
import '../tws/tws.css';
import iphone14 from '../../../img/shopall/appleiphone14.png';

const Iphone14 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={iphone14} alt="Apple iPhone 14" />
     </div>
     <div className="product-details">
       <h1>Apple iPhone 14</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Apple</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>iPhone 14</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Midnight, Starlight, Blue, Red (Based on Amazon India listing)</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>6.1 inches</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>Super Retina XDR display</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>6 GB</td>
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
             <td>A15 Bionic chip</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>iOS 16</td>
           </tr>
           <tr>
             <td>SIM Slot:</td>
             <td>Nano-SIM and eSIM</td>
           </tr>
           <tr>
             <td>Connectivity:</td>
             <td>5G</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>To be confirmed (not yet listed on Amazon India)</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹61,999 (as of 27 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Ceramic Shield front for enhanced durability.</li>
           <li>Dual-camera system with 12MP Wide and 12MP Ultra Wide cameras.</li>
           <li>TrueDepth front camera with Night mode and 4K Dolby Vision HDR recording.</li>
           <li>Cinematic mode for shallow depth of field and focus transitions in videos.</li>
           <li>Photo styles for personalizing the look of your photos.</li>
           <li>A15 Bionic chip for powerful performance.</li>
           <li>Up to 19 hours of video playback.</li>
           <li>5G for superfast downloads and high-quality streaming.</li>
           <li>iOS 16 with new features like customizable Lock Screen, Focus filters, and Live Text in videos.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default Iphone14;
