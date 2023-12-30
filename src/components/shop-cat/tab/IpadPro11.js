import React from 'react';
import '../tws/tws.css';
import ipadPro11 from '../../../img/shopall/ipadpro.png';

const IpadPro11 = () => {
  return (
    <div className="product-container">
      <div className="sticky-column">
        <img src={ipadPro11} alt="Apple 11-inch iPad Pro (Wi-Fi, 2TB) - Space Grey (4th Generation)" />
      </div>
      <div className="product-details">
        <h1>Apple 2022 11-inch iPad Pro (Wi-Fi, 2TB) - Space Grey (4th Generation)</h1>
        <table>
          <tbody>
            <tr>
              <td>Brand:</td>
              <td>Apple</td>
            </tr>
            <tr>
              <td>Model Name:</td>
              <td>iPad Pro (Wi-Fi, 2TB)</td>
            </tr>
            <tr>
              <td>Colours:</td>
              <td>Space Grey</td>
            </tr>
            <tr>
              <td>Display Size:</td>
              <td>27.96 cm (11 inch)</td>
            </tr>
            <tr>
              <td>Display Type:</td>
              <td>Liquid Retina Display with ProMotion, True Tone, and P3 wide color</td>
            </tr>
            <tr>
              <td>RAM:</td>
              <td>8 GB</td>
            </tr>
            <tr>
              <td>ROM:</td>
              <td>2 TB</td>
            </tr>
            <tr>
              <td>Processor:</td>
              <td>M2 chip with 8-core CPU and 10-core GPU</td>
            </tr>
            <tr>
              <td>Operating System:</td>
              <td>iPadOS</td>
            </tr>
            <tr>
              <td>SIM Slot:</td>
              <td>N/A (Wi-Fi only)</td>
            </tr>
            <tr>
              <td>Connectivity:</td>
              <td>Wi-Fi 6E</td>
            </tr>
            <tr>
              <td>Battery Capacity:</td>
              <td>Not specified by manufacturer</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>₹1,54,900 (as of 27 December 2023 on Amazon India)</td>
            </tr>
          </tbody>
        </table>
        <button className="buy-button">Buy Now</button>
        <div className="product-description">
          <h3>About the Product</h3>
          <ul>
            <li>Stunning 11-inch Liquid Retina display with ProMotion, True Tone, and P3 wide color for exceptional visuals.</li>
            <li>Powerful M2 chip with 8-core CPU and 10-core GPU for lightning-fast performance and effortless multitasking.</li>
            <li>Massive 2TB of internal storage for all your apps, files, and media.</li>
            <li>12MP Wide camera and 10MP Ultra Wide camera with Center Stage for incredible photos and videos.</li>
            <li>LiDAR Scanner for immersive AR experiences.</li>
            <li>Stay connected with ultra-fast Wi-Fi 6E.</li>
            <li>Supports Apple Pencil (2nd generation) for natural writing and drawing experiences.</li>
            <li>Magic Keyboard and Smart Keyboard Folio compatible for enhanced productivity.</li>
            <li>Sleek and lightweight design for effortless portability.</li>
            <li>iPadOS delivers powerful features and a seamless experience designed for the unique capabilities of iPad.</li>
          </ul>
      </div>
      </div>
    </div>
  );
};

export default IpadPro11;
