import React from 'react';
import '../tws/tws.css';
import zFlip5 from '../../../img/shopall/samsungflip5.png';

const ZFlip5 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={zFlip5} alt="Samsung Galaxy Z Flip5 5G" />
     </div>
     <div className="product-details">
       <h1>Samsung Galaxy Z Flip5 5G</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Samsung</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Galaxy Z Flip5 5G</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Lavender, Graphite, Mint, Beige</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>Main: 6.7-inch Foldable FHD+ Dynamic AMOLED 2X Display<br/>
                 Cover: 2.0-inch Super AMOLED Display</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>8 GB</td>
           </tr>
           <tr>
             <td>ROM:</td>
             <td>256 GB</td>
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
             <td>5G</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>3500 mAh</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹84,999 (as of 27 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Stylish foldable design with a compact and pocket-friendly form factor.</li>
           <li>Vivid 6.7-inch foldable Dynamic AMOLED 2X display with 120Hz refresh rate for smooth visuals.</li>
           <li>Powerful 4nm Snapdragon 8 Gen 1 Octa-Core processor for seamless performance.</li>
           <li>Dual rear cameras (12MP + 12MP Ultra Wide) and 10MP front camera for high-quality photos and videos.</li>
           <li>Long-lasting 3500mAh battery with 25W super-fast charging support.</li>
           <li>Enhanced Flex Mode for hands-free selfies, video calls, and multitasking.</li>
           <li>Durable and water-resistant design (IPX8).</li>
           <li>5G connectivity for blazing-fast internet speeds.</li>
           <li>Android OS with Samsung's One UI for a smooth and intuitive user experience.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default ZFlip5;
