import React from 'react';
import '../tws/tws.css';
import iphone15 from '../../../img/shopall/iphone15.png';

const Iphone15 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={iphone15} alt="Apple iPhone 15" />
     </div>
     <div className="product-details">
       <h1>Apple iPhone 15 (128 GB) - Gray</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Apple</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>iPhone 15</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Gray, Green, Pink</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>6.1 inches</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>Super Retina XDR OLED display with ProMotion</td>
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
             <td>Processor:</td>
             <td>A17 Bionic chip</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>iOS 17</td>
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
             <td>3240 mAh</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹79,999 (as of 30 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Stunning 6.1-inch Super Retina XDR OLED display with ProMotion for ultra-smooth visuals and adaptive refresh rates up to 120Hz.</li>
           <li>Powerful A17 Bionic chip for exceptional performance in everything from gaming to photo editing.</li>
           <li>Advanced triple-lens camera system with 48MP wide, 12MP ultrawide, and 12MP telephoto lenses for stunning photos and videos in any lighting condition.</li>
           <li>Cinematic Mode for recording videos with shallow depth of field and automatic focus transitions for a professional look.</li>
           <li>Improved Night mode for capturing incredible low-light photos.</li>
           <li>Long-lasting battery life for all-day use.</li>
           <li>Water and dust resistant (IP68).</li>
           <li>5G connectivity for blazing-fast speeds.</li>
           <li>iOS 17 with new features and enhancements.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default Iphone15;
