import React from 'react';
import '../tws/tws.css';
import redmiTv from '../../../img/shopall/a-tv-1.png';

const RedmiTV80cm = () => {
  return (
    <div className="product-container">
      <div className="sticky-column">
        <img src={redmiTv} alt="Redmi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV" />
      </div>
      <div className="product-details">
        <h1>Redmi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV L32R8-FVIN (Black)</h1>
        <table>
          <tbody>
            <tr>
              <td>Brand:</td>
              <td>Redmi</td>
            </tr>
            <tr>
              <td>Model Name:</td>
              <td>L32R8-FVIN</td>
            </tr>
            <tr>
              <td>Colours:</td>
              <td>Black</td>
            </tr>
            <tr>
              <td>Display Size:</td>
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
              <td>Fire OS</td>
            </tr>
            <tr>
              <td>Sound Output:</td>
              <td>20 Watts</td>
            </tr>
            <tr>
              <td>Speaker:</td>
              <td>2 speakers</td>
            </tr>
            <tr>
              <td>Built-in Apps:</td>
              <td>Prime Video, Netflix, Disney+Hotstar, YouTube, etc.</td>
            </tr>
            <tr>
              <td>Connectivity:</td>
              <td>Wi-Fi, 2 HDMI ports, 2 USB ports</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>₹11,499 (as of 29 December 2023 on Amazon India)</td>
            </tr>
          </tbody>
        </table>
        <button className="buy-button">Buy Now</button>
        <div className="product-description">
          <h3>About the Product</h3>
          <ul>
            <li>Immerse yourself in entertainment with the 80 cm (32 inches) HD Ready display.</li>
            <li>Enjoy a wide range of content with Fire OS, including popular streaming apps.</li>
            <li>Experience vivid visuals and clear sound with 20 Watts of powerful audio.</li>
            <li>Easily connect to your favorite devices with multiple HDMI and USB ports.</li>
            <li>Access a vast selection of movies, TV shows, music, and games on the Fire TV platform.</li>
            <li>Control your TV with Alexa voice commands using the included remote.</li>
            <li>Sleek and modern design complements your home décor.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RedmiTV80cm;
