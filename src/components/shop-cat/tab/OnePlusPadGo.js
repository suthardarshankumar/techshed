import React from 'react';
import '../tws/tws.css';
import onePlusPadGo from '../../../img/shopall/oneplustab.png';

const OnePlusPadGo = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={onePlusPadGo} alt="OnePlus Pad Go" />
     </div>
     <div className="product-details">
       <h1>OnePlus Pad Go 28.85cm (11.35 inch) 2.4K LCD Display</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>OnePlus</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>OnePlus Pad Go</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Twin Mint</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>28.85cm (11.35 inch)</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>2.4K 7:5 Ratio ReadFit Eye Care LCD Display</td>
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
             <td>Yes</td>
           </tr>
           <tr>
             <td>Processor:</td>
             <td>Snapdragon 680 Octa-Core</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>Android</td>
           </tr>
           <tr>
             <td>SIM Slot:</td>
             <td>No</td>
           </tr>
           <tr>
             <td>Connectivity:</td>
             <td>Wi-Fi</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>8340 mAh</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹21,999 (as of 27 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Immersive 11.35-inch 2.4K LCD Display with 7:5 aspect ratio for comfortable reading and viewing.</li>
           <li>ReadFit Eye Care mode for reduced blue light emission and eye strain.</li>
           <li>Powerful Snapdragon 680 Octa-Core processor for smooth performance.</li>
           <li>8GB RAM for multitasking and 128GB internal storage, expandable with MicroSD card.</li>
           <li>Long-lasting 8340mAh battery for extended use.</li>
           <li>Quad speakers with Dolby Atmos for immersive sound.</li>
           <li>Sleek and lightweight design for portability.</li>
           <li>Android OS with OxygenOS for a smooth and intuitive user experience.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default OnePlusPadGo;
