import React from 'react';
import '../tws/tws.css';
import acer50inchTV from '../../../img/shopall/acer50inchTV.png';

const Acer50InchTV = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={acer50inchTV} alt="Acer 127 cm (50 inches) Advanced I Series 4K Ultra HD Smart LED Google TV" />
     </div>
     <div className="product-details">
       <h1>Acer 127 cm (50 inches) Advanced I Series 4K Ultra HD Smart LED Google TV</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Acer</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>AR50GR2851UDFL</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Black</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>127 cm (50 inches)</td>
           </tr>
           <tr>
             <td>Display Type:</td>
             <td>4K Ultra HD LED</td>
           </tr>
           <tr>
             <td>Resolution:</td>
             <td>3840 x 2160 pixels</td>
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
             <td>Connectivity:</td>
             <td>Wi-Fi, Ethernet</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹34,990 (as of 27 December 2023 on Amazon India)</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>Immersive 50-inch 4K Ultra HD LED display with stunning visuals and vivid colors.</li>
           <li>Smart TV with Google TV for seamless access to streaming apps and content.</li>
           <li>Crisp and clear audio with 20W sound output for an immersive viewing experience.</li>
           <li>Multiple connectivity options including Wi-Fi and Ethernet for easy internet access.</li>
           <li>Sleek and modern design that complements any home décor.</li>
           <li>Voice control support for hands-free convenience.</li>
           <li>Access to a vast library of apps, games, and content through the Google Play Store.</li>
           <li>Chromecast built-in for effortless casting of content from your smartphone or tablet.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default Acer50InchTV;
