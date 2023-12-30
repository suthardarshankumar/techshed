import React from 'react';
import './tws.css';
import boatairdopes141 from '../../../img/shopall/boatairdopes141.png';

const Boat141 = () => {
  return (
    <div className="product-container">
      <div className="sticky-column">
        <img src={boatairdopes141} alt="boAt Airdopes 141" />
      </div>
      <div className="product-details">
        <h1>boAt Airdopes 141 Bluetooth TWS Earbuds</h1>
        <table>
          <tbody>
            <tr>
              <td>Brand:</td>
              <td>boAt</td>
            </tr>
            <tr>
              <td>Model Name:</td>
              <td>Airdopes 141</td>
            </tr>
            <tr>
              <td>Colour:</td>
              <td>Bold Black</td>
            </tr>
            <tr>
              <td>Form Factor:</td>
              <td>In Ear</td>
            </tr>
            <tr>
              <td>Connectivity Technology:</td>
              <td>Bluetooth 5.1</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>₹1,299</td>
            </tr>
          </tbody>
        </table>
        <button className="buy-button">Buy Now</button>
        <div className="product-description">
          <h3>About the Product</h3>
          <ul>
            <li>Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds.</li>
            <li>Low Latency- Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience. These TWS earbuds are your companion for a perfect gaming experience.</li>
            <li>Clear Voice Calls- It dons built-in mic on each earbud along with our ENx Environmental Noise Cancellation tech that ensures a smooth delivery of your voice via voice calls.</li>
            <li>boAt Signature Sound- Delve into your cherished boAt Immersive auditory time with Airdopes 141.</li>
            <li>ASAP Charge- The TWS earbuds are equipped with our ASAP Charge feature that offers up to 75 min of playtime in just 5 min of charge; while the carry case comes along with the Type C interface.</li>
            <li>Instant Connect- Connect to your morning playlists without any hiccup via the Insta Wake N’ Pair technology that powers on the earbuds as soon as you open the case cover.</li>
            <li>IP Rating- The TWS earbuds body comes protected with IPX4 rating for water and sweat resistance.</li>
            <li>Voice Assistant- You can summon your default voice assistant(s) with ease via its One Touch Voice Assistant.</li>
            <li>Country Of Origin: China, India</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Boat141;
