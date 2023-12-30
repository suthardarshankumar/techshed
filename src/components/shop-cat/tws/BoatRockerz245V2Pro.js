import React from 'react';
import './tws.css';
import boatrockerz245v2pro from '../../../img/shopall/boatneck.png';

const BoatRockerz245V2Pro = () => {
  return (
    <div className="product-container">
      <div className="sticky-column">
        <img src={boatrockerz245v2pro} alt="boAt Rockerz 245 V2 Pro" />
      </div>
      <div className="product-details">
        <h1>boAt Rockerz 245 V2 Pro Wireless Neckband</h1>
        <table>
          <tbody>
            <tr>
              <td>Brand:</td>
              <td>boAt</td>
            </tr>
            <tr>
              <td>Model Name:</td>
              <td>Rockerz 245 V2 Pro</td>
            </tr>
            <tr>
              <td>Colors:</td>
              <td>Active Black, Teal Green, Cool Blue</td>
            </tr>
            <tr>
              <td>Form Factor:</td>
              <td>In Ear Neckband</td>
            </tr>
            <tr>
              <td>Connectivity Technology:</td>
              <td>Bluetooth 5.3</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>₹999</td>
            </tr>
          </tbody>
        </table>
        <button className="buy-button">Buy Now</button>
        <div className="product-description">
          <h3>About the Product</h3>
          <ul>
            <li>Playback: Up to 30 hours of total playtime</li>
            <li>Low Latency: BEAST Mode for real-time audio and low-latency gaming</li>
            <li>Clear Voice Calls: ENx Tech for environmental noise cancellation</li>
            <li>Fast Charging: ASAP Charge for 10 hours of playtime in 10 minutes</li>
            <li>Dual Pairing: Connect to two devices simultaneously</li>
            <li>Magnetic Buds: Secure and tangle-free</li>
            <li>IPX5 Water Resistance: Protection against sweat and water splashes</li>
            <li>Voice Assistant: Support for Siri and Google Assistant</li>
            <li>USB Type-C Interface</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BoatRockerz245V2Pro;
