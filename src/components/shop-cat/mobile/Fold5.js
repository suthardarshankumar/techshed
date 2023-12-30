import React from 'react';
import '../tws/tws.css';
import fold5 from '../../../img/shopall/samsungfold5.png'; // Assuming image path

const Fold5 = () => {
    return (
        <div className="product-container">
            <div className="sticky-column">
                <img src={fold5} alt="Samsung Galaxy Z Fold5 5G" />
            </div>
            <div className="product-details">
                <h1>Samsung Galaxy Z Fold5 5G</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Brand:</td>
                            <td>Samsung</td>
                        </tr>
                        <tr>
                            <td>Model Name:</td>
                            <td>Galaxy Z Fold5 5G</td>
                        </tr>
                        <tr>
                            <td>Colours:</td>
                            <td>Phantom Black, Cream, Graphite, Lavender, Mint, Icy Blue</td>
                        </tr>
                        <tr>
                            <td>Display Size:</td>
                            <td>Main Screen: 19.21 cm (7.6 inch) / Cover Screen: 15.73 cm (6.2 inch)</td>
                        </tr>
                        <tr>
                            <td>Display Type:</td>
                            <td>Foldable Dynamic AMOLED 2X Display</td>
                        </tr>
                        <tr>
                            <td>RAM:</td>
                            <td>12GB</td>
                        </tr>
                        <tr>
                            <td>ROM:</td>
                            <td>256GB, 512GB</td>
                        </tr>
                        <tr>
                            <td>Expandable Storage:</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>Processor:</td>
                            <td>4nm Snapdragon 8 Gen 2 Octa-Core (Expected)</td>
                        </tr>
                        <tr>
                            <td>Operating System:</td>
                            <td>Android 13</td>
                        </tr>
                        <tr>
                            <td>SIM Slot:</td>
                            <td>Nano-SIM</td>
                        </tr>
                        <tr>
                            <td>Connectivity:</td>
                            <td>5G</td>
                        </tr>
                        <tr>
                            <td>Battery Capacity:</td>
                            <td>4400 mAh (Expected)</td>
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td>₹1,55,999 (Starting price as of 30 December 2023 on Amazon India)</td>
                        </tr>
                    </tbody>
                </table>
                <button className="buy-button">Buy Now</button>
                <div className="product-description">
                    <h3>About the Product</h3>
                    <ul>
                        <li>Sleek and innovative foldable design for a versatile experience.</li>
                        <li>Immersive 7.6-inch Dynamic AMOLED 2X main display with 120Hz refresh rate for ultra-smooth visuals.</li>
                        <li>Convenient 6.2-inch cover display for easy access to notifications and quick tasks.</li>
                        <li>Powerful 4nm Snapdragon 8 Gen 2 Octa-Core processor (expected) for exceptional performance.</li>
                        <li>12GB RAM for seamless multitasking and ample storage options (256GB/512GB).</li>
                        <li>Advanced triple rear camera system (expected) for stunning photography and videography.</li>
                        <li>Enhanced under-display camera for an uninterrupted viewing experience.</li>
                        <li>Long-lasting 4400mAh battery (expected) with fast charging support.</li>
                        <li>S Pen support (expected) for enhanced productivity and creativity.</li>
                        <li>Durable Armor Aluminum frame and IPX8 water resistance for enhanced protection.</li>
                        <li>Android 13 with Samsung's One UI for a seamless and intuitive user experience.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Fold5;

