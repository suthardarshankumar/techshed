import React from 'react';
import '../tws/tws.css';
import tabS9Ultra from '../../../img/shopall/samsungtabs9ultra.png';

const TabS9Ultra = () => {
    return (
        <div className="product-container">
            <div className="sticky-column">
                <img src={tabS9Ultra} alt="Samsung Galaxy Tab S9 Ultra" />
            </div>
            <div className="product-details">
                <h1>Samsung Galaxy Tab S9 Ultra 36.99 cm (14.6 inch) Dynamic AMOLED 2X Display</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Brand:</td>
                            <td>Samsung</td>
                        </tr>
                        <tr>
                            <td>Model Name:</td>
                            <td>Galaxy Tab S9 Ultra</td>
                        </tr>
                        <tr>
                            <td>Colours:</td>
                            <td>Gray</td>
                        </tr>
                        <tr>
                            <td>Display Size:</td>
                            <td>36.99 cm (14.6 inch)</td>
                        </tr>
                        <tr>
                            <td>Display Type:</td>
                            <td>Dynamic AMOLED 2X Display</td>
                        </tr>
                        <tr>
                            <td>RAM:</td>
                            <td>12 GB</td>
                        </tr>
                        <tr>
                            <td>ROM:</td>
                            <td>256 GB</td>
                        </tr>
                        <tr>
                            <td>Expandable Storage:</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Processor:</td>
                            <td>4nm Snapdragon 8 Gen 1 Octa-Core</td>
                        </tr>
                        <tr>
                            <td>Operating System:</td>
                            <td>Android</td>
                        </tr>
                        <tr>
                            <td>SIM Slot:</td>
                            <td>Nano-SIM (Optional, 5G variant)</td>
                        </tr>
                        <tr>
                            <td>Connectivity:</td>
                            <td>Wi-Fi, Wi-Fi + 5G (Optional)</td>
                        </tr>
                        <tr>
                            <td>Battery Capacity:</td>
                            <td>11200 mAh</td>
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td>₹96,999 (as of 27 December 2023 on Amazon India)</td>
                        </tr>
                    </tbody>
                </table>
                <button className="buy-button">Buy Now</button>
                <div className="product-description">
                    <h3>About the Product</h3>
                    <ul>
                        <li>Immersive 14.6-inch Dynamic AMOLED 2X Display with 120Hz refresh rate for ultra-smooth visuals.</li>
                        <li>Powerful 4nm Snapdragon 8 Gen 1 Octa-Core processor for exceptional performance.</li>
                        <li>12GB RAM for seamless multitasking and 256GB internal storage, expandable with MicroSD card.</li>
                        <li>Dual rear cameras (13MP + 6MP Ultra Wide) and 12MP front camera for capturing high-quality photos and videos.</li>
                        <li>Massive 11200mAh battery with 45W super-fast charging support for extended use.</li>
                        <li>Included S Pen with ultra-low latency for natural writing and drawing experiences.</li>
                        <li>Quad speakers with Dolby Atmos for cinematic sound.</li>
                        <li>Sleek and lightweight design with a stunning edge-to-edge display.</li>
                        <li>DeX mode for enhanced productivity with a desktop-like experience.</li>
                        <li>Wi-Fi 6E and optional 5G connectivity for blazing-fast internet speeds.</li>
                        <li>Android OS with Samsung's One UI for a smooth and intuitive user experience.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TabS9Ultra;