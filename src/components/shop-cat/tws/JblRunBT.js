import React from 'react';
import './tws.css';
import jblRunBT from '../../../img/shopall/jbl.png'; 

const JblRunBT = () => {
 return (
   <div className="product-container">
     <div className="sticky-column">
       <img src={jblRunBT} alt="JBL Endurance RunBT" />
     </div>
     <div className="product-details">
       <h1>JBL Endurance RunBT Sports In-Ear Wireless Bluetooth Earphones</h1>
       <table>
         <tbody>
           <tr>
             <td>Brand:</td>
             <td>JBL</td>
           </tr>
           <tr>
             <td>Model Name:</td>
             <td>Endurance RunBT</td>
           </tr>
           <tr>
             <td>Colour:</td>
             <td>Black</td>
           </tr>
           <tr>
             <td>Form Factor:</td>
             <td>In Ear</td>
           </tr>
           <tr>
             <td>Connectivity Technology:</td>
             <td>Bluetooth</td>
           </tr>
           <tr>
             <td>Price:</td>
             <td>₹1499</td>
           </tr>
         </tbody>
       </table>
       <button className="buy-button">Buy Now</button>
       <div className="product-description">
         <h3>About the Product</h3>
         <ul>
           <li>6 hours of wireless playback under optimum audio settings.</li>
           <li>IPX5 sweatproof design to endure high-intensity workouts.</li>
           <li>TwistLock and FlexSoft technologies for comfort and secure fit.</li>
           <li>Hands-free calling with one-button remote and microphone.</li>
           <li>Magnetic earbuds for easy cable management.</li>
           <li>Fliphook technology for two-way wear: in-ear or behind-the-ear.</li>
           <li>Voice assistant support with one-button access.</li>
         </ul>
       </div>
     </div>
   </div>
 );
};

export default JblRunBT;
