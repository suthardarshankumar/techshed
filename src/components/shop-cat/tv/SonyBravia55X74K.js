import React from 'react';
import '../tws/tws.css';
import bravia55X74K from '../../../img/shopall/sonytv1.png'; 

const SonyBravia55X74K = () => {
  return (
    <div className="product-container">
      <div className="sticky-column">
        <img src={bravia55X74K} alt="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K" />
      </div>
      <div className="product-details">
        <h1>Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K</h1>
        <table>
          <tbody>
            <tr>
              <td>Brand:</td>
              <td>Sony</td>
            </tr>
            <tr>
              <td>Model Name:</td>
              <td>Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K</td>
            </tr>
            <tr>
              <td>Colours:</td>
              <td>Black</td>
            </tr>
            <tr>
              <td>Display Size:</td>
              <td>139 cm (55 inches)</td>
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
              <td>Refresh Rate:</td>
              <td>50 Hz</td>
            </tr>
            <tr>
              <td>Operating System:</td>
              <td>Google TV</td>
            </tr>
            <tr>
              <td>Connectivity:</td>
              <td>Wi-Fi, Bluetooth</td>
            </tr>
            <tr>
              <td>Sound Output:</td>
              <td>20 W</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>₹53,990 (as of 27 December 2023 on Amazon India)</td>
            </tr>
          </tbody>
        </table>
        <button className="buy-button">Buy Now</button>
        <div className="product-description">
          <h3>About the Product</h3>
          <ul>
            <li>Immersive 55-inch 4K Ultra HD LED display with stunning picture quality.</li>
            <li>Google TV with built-in Chromecast for seamless content streaming.</li>
            <li>X1 4K Processor for enhanced clarity, color, and contrast.</li>
            <li>Triluminos Pro display for wider color gamut and more natural-looking colors.</li>
            <li>Motionflow XR technology for smooth and clear motion.</li>
            <li>Dolby Vision and Dolby Atmos for cinematic viewing experience.</li>
            <li>X-Balanced Speaker for clear and powerful sound.</li>
            <li>Smart features like voice search and Google Assistant.</li>
            <li>Sleek and slim design that complements your living space.</li>
            <li>Multiple connectivity options including HDMI, USB, and Bluetooth.</li>
          </ul>
      </div>
    </div>
  </div>
  );
};

export default SonyBravia55X74K;
