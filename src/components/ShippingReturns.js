import React from 'react';
import './css/Other.css';

const ShippingReturns = () => {
  return (
    <div className="policy-container">
      <h2>Shipping & Returns Policy</h2>

      <div className="section">
        <h3>Shipping Information</h3>
        <p>
          <strong>Processing Time:</strong> Orders are typically processed and shipped within 1-2 business days, excluding weekends and holidays. Any delays in processing times will be communicated promptly.
        </p>
        <p>
          <strong>Shipping Methods:</strong> We offer a range of shipping options to provide flexibility for our customers. The available shipping methods and estimated delivery times will be displayed during the checkout process.
        </p>
        <p>
          <strong>Shipping Costs:</strong> Shipping costs are calculated based on the selected shipping method, the weight of the items in your order, and the destination address. You can view the shipping costs at checkout before completing your purchase.
        </p>
        <p>
          <strong>Order Tracking:</strong> Once your order has been shipped, you will receive a shipping confirmation email containing the tracking information. You can track the status of your order through the provided tracking link.
        </p>
      </div>

      <div className="section">
        <h3>Returns & Exchanges</h3>
        <p>
          <strong>Return Eligibility:</strong> TechShop accepts returns on products within 30 days of delivery. To be eligible for a return, the item must be unused, in its original packaging, and in the same condition as received.
        </p>
        <p>
          <strong>Initiating a Return:</strong> To initiate a return, please contact our customer support team at <a href="mailto:support@techshop.com">support@techshop.com</a>. Include your order number and a detailed explanation of the reason for the return. Our team will guide you through the return process.
        </p>
        <p>
          <strong>Refund Process:</strong> Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, the refund will be processed to the original payment method within 5-7 business days.
        </p>
        <p>
          <strong>Exchanges:</strong> If you received a defective or damaged product, we offer exchanges. Contact our customer support team to initiate the exchange process, and we will provide instructions on returning the item.
        </p>
        <p>
          <strong>Non-Returnable Items:</strong> Certain items, such as gift cards, software, and personalized or custom-made products, are non-returnable.
        </p>
      </div>

      <div className="section">
        <h3>Contact Information</h3>
        <p>If you have any questions or concerns about our Shipping & Returns Policy, please contact our customer support team at <a href="mailto:support@techshop.com">support@techshop.com</a> or call us at (555) 123-4567.</p>
      </div>

      <div className="note">
        <p>
          <strong>Note:</strong> This Shipping & Returns Policy is subject to change. Please check our website for the most up-to-date information.
        </p>
      </div>
    </div>
  );
};

export default ShippingReturns;
