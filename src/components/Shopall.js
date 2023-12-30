import React from 'react';
import './css/Shopall.css';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

const Shopall = () => {

  return (
    <div className="shop-all-container">
      <div className="product-list-container">
        <h1 className='list-heading'>All Product List</h1>
        <ProductList />
      </div>
      <div className="product-detail-container">
          <ProductDetail/>
      </div>
    </div>
  );
};

export default Shopall;
