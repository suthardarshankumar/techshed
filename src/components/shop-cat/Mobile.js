import React from 'react';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import '../css/Shopall.css';
import ProductList from '../ProductList';
import SamsungS23Ultra from '../../img/shopall/samsung-s23-ultra.png';
import SamsungS23FE from '../../img/shopall/SamsumgS23FE.png';
import LavaAgni2 from '../../img/shopall/lavaagni2.png';
import Oneplus11 from '../../img/shopall/oneplus11.png';
import Oneplus11R from '../../img/shopall/oneplus11r.png';
import Oneplusopen from '../../img/shopall/oneplusopen.png';
import Samsungflip5 from '../../img/shopall/samsungflip5.png';
import Samsungfold5 from '../../img/shopall/samsungfold5.png';
import iqoo12 from '../../img/shopall/iqoo12.png';
import iphone15 from '../../img/shopall/iphone15.png';
import iphone14 from '../../img/shopall/appleiphone14.png';
import nothingphone2 from '../../img/shopall/nothingphone2.png';


const Mobile = () => {
    return (
        <div className="shop-all-container">
            <div className="product-list-container">
                <h1 className='list-heading'>All Product List</h1>
                <ProductList />
            </div>
            <div className="product-detail-container">
                <h1 className='product-heading'>All Mobile</h1>
                <div className="container">
                    <div className="card">
                        <div className="card-head">
                            <Link to='/samsungS23Ultra'>
                                <img src={SamsungS23Ultra} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy S23 Ultra 5G</p>
                            <div className="product-price">
                                <b>₹1,24,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/samsungs23fe'>
                                <img src={SamsungS23FE} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy S23 FE</p>
                            <div className="product-price">
                                <b>₹59,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/agni2'>
                                <img src={LavaAgni2} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Lava Agni 2 5G</p>
                            <div className="product-price">
                                <b>₹15,499</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/oneplus11'>
                                <img src={Oneplus11} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>OnePlus 11 5G</p>
                            <div className="product-price">
                                <b>₹56,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/oneplus11r'>
                                <img src={Oneplus11R} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>OnePlus 11R 5G</p>
                            <div className="product-price">
                                <b>₹43,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/oneplusopen'>
                                <img src={Oneplusopen} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>OnePlus Open</p>
                            <div className="product-price">
                                <b>₹1,05,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/flip5'>
                                <img src={Samsungflip5} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy Z Flip5 5G</p>
                            <div className="product-price">
                                <b>₹99,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/fold5'>
                                <img src={Samsungfold5} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy Z Flip5 5G</p>
                            <div className="product-price">
                                <b>₹1,55,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/iqoo12'>
                                <img src={iqoo12} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>iQOO 12 5G</p>
                            <div className="product-price">
                                <b>₹57,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/iphone15'>
                                <img src={iphone15} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Apple iPhone 15</p>
                            <div className="product-price">
                                <b>₹79,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/iphone14'>
                                <img src={iphone14} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Apple iPhone 14</p>
                            <div className="product-price">
                                <b>₹61,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/nothingphone2'>
                                <img src={nothingphone2} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy Z Flip5 5G</p>
                            <div className="product-price">
                                <b>₹61,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mobile;
