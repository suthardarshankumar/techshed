import React from 'react';
import '../tws/tws.css'; 
import tv32inch from '../../../img/shopall/samsungtv1.png'; 

const Tv32Inch = () => {
  return (
    <div className="product-container">
      <div className="sticky-column">
        <img src={tv32inch} alt="Samsung 80 cm (32 inches) HD Ready Smart LED TV" />
      </div>
      <div className="product-details">
        <h1>Samsung 80 cm (32 inches) HD Ready Smart LED TV UA32T4380AKXXL</h1>
        <table>
          <tbody>
            <tr>
              <td>Brand:</td>
              <td>Samsung</td>
            </tr>
            <tr>
              <td>Model Name:</td>
              <td>UA32T4380AKXXL</td>
            </tr>
            <tr>
              <td>Colour:</td>
              <td>Glossy Black</td>
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
              <td>50 Hz</td>
            </tr>
            <tr>
              <td>Smart TV:</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Operating System:</td>
              <td>Tizen</td>
            </tr>
            <tr>
              <td>Wi-Fi:</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>USB Ports:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>HDMI Ports:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Sound Output:</td>
              <td>20W</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>₹13,990 (as of 27 December 2023 on Amazon India)</td>
            </tr>
          </tbody>
        </table>
        <button className="buy-button">Buy Now</button>
        <div className="product-description">
          <h3>About the Product</h3>
          <ul>
            <li>Immersive viewing experience with 80 cm (32 inches) HD Ready LED display.</li>
            <li>Smart TV with Tizen OS for access to streaming apps and online content.</li>
            <li>PurColor technology for enhanced picture quality and lifelike colors.</li>
            <li>HDR support for improved contrast and details in darker scenes.</li>
            <li>Powerful audio with 20W sound output for a captivating experience.</li>
            <li>Multiple connectivity options with Wi-Fi, USB, and HDMI ports.</li>
            <li>Sleek and slim design that complements any room décor.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tv32Inch;
