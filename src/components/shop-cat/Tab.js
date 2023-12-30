import React from 'react';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import '../css/Shopall.css';
import ProductList from '../ProductList';
import Tab8 from '../../img/shopall/samsungtaba8.png';
import Tab9 from '../../img/shopall/samsungtabs9.png';
import Tab9fe from '../../img/shopall/samsungtabs9fe.png';
import Tab9plus from '../../img/shopall/samsungtabs9plus.png'
import Taba9plus from '../../img/shopall/samsungtaba9plus.png';
import Tab9ultra from '../../img/shopall/samsungtabs9ultra.png';
import iPadpro from '../../img/shopall/ipadpro.png';
import oneplustab from '../../img/shopall/oneplustab.png';
import Xiaomitab from '../../img/shopall/xiaomipad6.png';


const Tab = () => {
    return (
        <div className="shop-all-container">
            <div className="product-list-container">
                <h1 className='list-heading'>All Product List</h1>
                <ProductList />
            </div>
            <div className="product-detail-container">
                <h1 className='product-heading'>All Tablets</h1>
                <div className="container">
                    <div className="card">
                        <div className="card-head">
                            <Link to='/taba8'>
                                <img src={Tab8} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy Tab A8</p>
                            <div className="product-price">
                                <b>₹16,499</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/tab9'>
                                <img src={Tab9} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy Tab S9</p>
                            <div className="product-price">
                                <b>₹72,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/tab9fe'>
                                <img src={Tab9fe} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy Tab S9 FE</p>
                            <div className="product-price">
                                <b>₹44,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/tab9plus'>
                                <img src={Tab9plus} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy Tab S9+</p>
                            <div className="product-price">
                                <b>₹92,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/taba9plus'>
                                <img src={Taba9plus} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy Tab A9+</p>
                            <div className="product-price">
                                <b>₹17,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-head">
                            <Link to='/tabs9ultra'>
                                <img src={Tab9ultra} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy Tab S9 Ultra</p>
                            <div className="product-price">
                                <b>₹1,07,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/ipadpro'>
                                <img src={iPadpro} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Apple 2022 11-inch iPad Pro</p>
                            <div className="product-price">
                                <b>₹1,89,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/oneplustab'>
                                <img src={oneplustab} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>OnePlus Pad Go</p>
                            <div className="product-price">
                                <b>₹21,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/xiaomitab'>
                                <img src={Xiaomitab} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Xiaomi Pad 6</p>
                            <div className="product-price">
                                <b>₹25,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tab;
