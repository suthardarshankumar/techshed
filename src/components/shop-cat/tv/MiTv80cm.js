import React from 'react';
import '../tws/tws.css'; 
import miTv80cm from '../../../img/shopall/miTv80cm.png';

const MiTv80cm = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={miTv80cm} alt="MI 80 Cm (32 Inches) A Series HD Ready Smart Google LED TV L32M8-5AIN (Black)" />
     </div>
     <div className="product-details">
       <h1>MI 80 Cm (32 Inches) A Series HD Ready Smart Google LED TV L32M8-5AIN (Black)</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>MI</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>L32M8-5AIN</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Black</td>
           </tr>
           <tr>
             <td>Screen Size:</td>
             <td>80 cm (32 inches)</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>HD Ready LED</td>
           </tr>
           <tr>
             <td>Resolution:</td>
             <td>1366 x 768 pixels</td>
           </tr>
           <tr>
             <td>Refresh Rate:</td>
             <td>60 Hz</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>Google TV</td>
           </tr>
           <tr>
             <td>Sound Output:</td>
             <td>20 W</td>
           </tr>
           <tr>
             <td>Speakers:</td>
             <td>2</td>
           </tr>
           <tr>
             <td>Built-in Wi-Fi:</td>
             <td>Yes</td>
           </tr>
           <tr>
             <td>Bluetooth:</td>
             <td>Yes</td>
           </tr>
           <tr>
             <td>HDMI Ports:</td>
             <td>2</td>
           </tr>
           <tr>
             <td>USB Ports:</td>
             <td>2</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹12,999 (as of 29 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Vivid HD Ready display for immersive viewing experiences.</li>
           <li>Smart TV capabilities with Google TV for seamless streaming and content access.</li>
           <li>Powerful sound with 20W speakers for room-filling audio.</li>
           <li>Multiple connectivity options with Wi-Fi, Bluetooth, HDMI, and USB ports.</li>
           <li>Sleek and modern design that complements any home décor.</li>
           <li>User-friendly interface for easy navigation and control.</li>
           <li>Access to a vast library of apps, games, and entertainment content.</li>
           <li>Voice search functionality for hands-free control.</li>
           <li>Chromecast built-in for casting content from your mobile devices.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default MiTv80cm;
