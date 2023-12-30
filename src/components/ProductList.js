import React from 'react';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import './css/Shopall.css';

const ProductList = () => {
  return (
    <ul className="product-list">
      <li className='product-list-name'><Link to="/shopall" className='product-list-name-link'>Shop All</Link></li>
      <li className='product-list-name'><Link to="/mobile" className='product-list-name-link'>Mobile</Link></li>
      <li className='product-list-name'><Link to="/tws" className='product-list-name-link'>Audio</Link></li>
      <li className='product-list-name'><Link to="/tab" className='product-list-name-link'>Tablets</Link></li>
      <li className='product-list-name'><Link to="/tv" className='product-list-name-link'>T.V</Link></li>
    </ul>
  );
};

export default ProductList;