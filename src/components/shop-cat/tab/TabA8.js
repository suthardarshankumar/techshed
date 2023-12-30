import React from 'react';
import '../tws/tws.css';
import tabA8 from '../../../img/shopall/samsungtaba8.png';

const TabA8 = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={tabA8} alt="Samsung Galaxy Tab A8" />
     </div>
     <div className="product-details">
       <h1>Samsung Galaxy Tab A8 10.5 inches Display with Calling</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>Samsung</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Galaxy Tab A8</td>
           </tr>
           <tr>
             <td>Colours:</td>
             <td>Gray, Silver</td>
           </tr>
           <tr>
             <td>Display Size:</td>
             <td>10.5 inches</td>
           </tr>
           <tr>
             <td>Display Resolution:</td>
             <td>1920x1200 (WUXGA) TFT</td>
           </tr>
           <tr>
             <td>Processor:</td>
             <td>UniSOC T618</td>
           </tr>
           <tr>
             <td>RAM:</td>
             <td>4GB</td>
           </tr>
           <tr>
             <td>ROM:</td>
             <td>64GB (Expandable up to 1TB)</td>
           </tr>
           <tr>
             <td>Rear Camera:</td>
             <td>8MP AF + 5MP</td>
           </tr>
           <tr>
             <td>Front Camera:</td>
             <td>5MP</td>
           </tr>
           <tr>
             <td>Battery Capacity:</td>
             <td>7040mAh</td>
           </tr>
           <tr>
             <td>Connectivity:</td>
             <td>Wi-Fi + LTE</td>
           </tr>
           <tr>
             <td>Operating System:</td>
             <td>Android 11</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹16,499</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>10.5 inch immersive display with 16:10 aspect ratio</li>
           <li>Quad speakers with Dolby Atmos for rich sound</li>
           <li>Powerful UniSOC T618 octa-core processor</li>
           <li>4GB RAM for smooth multitasking</li>
           <li>64GB internal storage expandable up to 1TB</li>
           <li>8MP rear camera and 5MP front camera for clear photos and video calls</li>
           <li>Long-lasting 7040mAh battery with 15W fast charging</li>
           <li>Supports Wi-Fi and LTE for seamless connectivity</li>
           <li>Sleek and stylish design with metal body</li>
           <li>Kid-friendly features with Samsung Kids</li>
           <li>Face recognition for secure unlocking</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default TabA8;
