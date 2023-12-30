import React from 'react';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import '../css/Shopall.css';

const Brandlist = () => {
    return (
        <div className="product-list-container">
            <h1 className='list-heading'>All Brands List</h1>
            <ul className="product-list">
                <li className='product-list-name'><Link to="/" className='product-list-name-link'>Samsung</Link></li>
                <li className='product-list-name'><Link to="/" className='product-list-name-link'>Apple</Link></li>
                <li className='product-list-name'><Link to="/" className='product-list-name-link'>OnePlus</Link></li>
                <li className='product-list-name'><Link to="/" className='product-list-name-link'>IQOO</Link></li>
                <li className='product-list-name'><Link to="/" className='product-list-name-link'>Sony</Link></li>
                <li className='product-list-name'><Link to="/" className='product-list-name-link'>VIVO</Link></li>
            </ul>
        </div>
    );
}

export default Brandlist;
