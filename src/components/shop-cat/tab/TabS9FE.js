import React from 'react';
import '../tws/tws.css';
import tabS9FE from '../../../img/shopall/samsungtabs9fe.png';

const TabS9FE = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={tabS9FE} alt="Samsung Galaxy Tab S9 FE" />
     </div>
     <div className="product-details">
       <h1>Samsung Galaxy Tab S9 FE 27.69 cm (10.9 inch) Display</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Samsung</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Galaxy Tab S9 FE</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Black, Silver, Pink, Green</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>27.69 cm (10.9 inch)</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>TFT LCD</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>6 GB / 8 GB</td>
           </tr>
           <tr>
             <td>ROM:</td>
             <td>128 GB / 256 GB</td>
           </tr>
           <tr>
             <td>Expandable Storage:</td>
             <td>Yes</td>
           </tr>
           <tr>
             <td>Processor:</td>
             <td>Snapdragon 778G</td>
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
             <td>Wi-Fi only / Wi-Fi + 5G</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>10090 mAh</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹44,999 (starting, as of 27 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Large 10.9-inch TFT LCD display with 120Hz refresh rate for smooth visuals.</li>
           <li>Powerful Snapdragon 778G processor for efficient performance.</li>
           <li>Ample RAM and storage options for multitasking and storing content.</li>
           <li>Dual rear cameras (8MP + 5MP Ultra Wide) and 5MP front camera for capturing photos and videos.</li>
           <li>Massive 10090mAh battery with 45W super-fast charging support for long usage.</li>
           <li>S Pen included for writing, drawing, and note-taking.</li>
           <li>Dual speakers with Dolby Atmos for immersive sound.</li>
           <li>Thin and lightweight design for portability.</li>
           <li>DeX mode for a desktop-like experience.</li>
           <li>Wi-Fi 6 and optional 5G connectivity for fast internet speeds.</li>
           <li>Android OS with Samsung's One UI for a seamless experience.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default TabS9FE;
