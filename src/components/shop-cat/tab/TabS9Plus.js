import React from 'react';
import '../tws/tws.css';
import tabS9Plus from '../../../img/shopall/samsungtabs9plus.png';

const TabS9Plus = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={tabS9Plus} alt="Samsung Galaxy Tab S9+" />
     </div>
     <div className="product-details">
       <h1>Samsung Galaxy Tab S9+ 31.50 cm (12.4 inch) Dynamic AMOLED 2X Display</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Samsung</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Galaxy Tab S9+</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Gray, Silver, Beige</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>31.50 cm (12.4 inch)</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>Dynamic AMOLED 2X Display</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>12 GB</td>
           </tr>
           <tr>
             <td>ROM:</td>
             <td>256 GB</td>
           </tr>
           <tr>
             <td>Expandable Storage:</td>
             <td>Yes</td>
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
             <td>Wi-Fi + 5G</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>10090 mAh</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹92,999 (as of 27 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Immersive 12.4-inch Dynamic AMOLED 2X Display with 120Hz refresh rate for ultra-smooth visuals.</li>
           <li>Powerful 4nm Snapdragon 8 Gen 1 Octa-Core processor for effortless multitasking and gaming.</li>
           <li>12GB RAM for seamless performance and 256GB internal storage, expandable with MicroSD card.</li>
           <li>Dual rear cameras (13MP + 6MP Ultra Wide) and 12MP front camera for capturing stunning photos and videos.</li>
           <li>Long-lasting 10090mAh battery with 45W super-fast charging support.</li>
           <li>S Pen included for natural writing and drawing experience.</li>
           <li>Quad speakers with Dolby Atmos for immersive sound.</li>
           <li>Ultra-thin and lightweight design for portability.</li>
           <li>DeX mode for a desktop-like experience.</li>
           <li>Wi-Fi 6E and 5G connectivity for ultra-fast internet speeds.</li>
           <li>Android OS with Samsung's One UI for a user-friendly experience.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default TabS9Plus;