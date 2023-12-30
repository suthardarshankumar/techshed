import React from 'react';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import ProductList from '../ProductList';
import '../css/Shopall.css';
import Brandlist from './Brandlist';
import Budsfe from '../../img/shopall/samsungbudsfe.png';
import Budspro2 from '../../img/shopall/samsungbudspro2.png';
import Buds2 from '../../img/shopall/samsungbuds2.png';
import OneplusBudspro2 from '../../img/shopall/oneplusbudspro2.png';
import Oneplusnordbuds2r from '../../img/shopall/oneplusnordbuds2r.png';
import Oneplusbudspro from '../../img/shopall/oneplusbudspro.png';
import boatairdopes141 from '../../img/shopall/boatairdopes141.png';
import boatairdopes170 from '../../img/shopall/boatairdopes170.png';
import boat200plus from '../../img/shopall/boat200plus.png';
import boatrockerz245v2pro from '../../img/shopall/boatneck.png';
import boatsoundbar from '../../img/shopall/boatsoundbar.png';
import boat121 from '../../img/shopall/boat121.png';
import sonywf1000xm5 from '../../img/shopall/sonywf1000xm5.png';
import jbl from '../../img/shopall/jbl.png';
import sonyheadphone from '../../img/shopall/sonyheadphone.png';


const Tws = () => {
    return (
        <div className="shop-all-container">
            <div className="product-list-container">
                <h1 className='list-heading'>All Product List</h1>
                <ProductList />
            </div>
            <div className="product-detail-container">
                <h1 className='product-heading'>All Audio Product</h1>
                <div className="container">
                    <div className="card">
                        <div className="card-head">
                            <Link to='/samsungbudsfe'>
                                <img src={Budsfe} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy Buds Fe</p>
                            <div className="product-price">
                                <b>₹8,499</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/samsungbuds2'>
                                <img src={Buds2} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy Buds 2</p>
                            <div className="product-price">
                                <b>₹6,399</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/samsungbuds2pro'>
                                <img src={Budspro2} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung Galaxy Buds 2 Pro </p>
                            <div className="product-price">
                                <b>₹14,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/oneplusbudspro2'>
                                <img src={OneplusBudspro2} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>OnePlus Buds Pro 2</p>
                            <div className="product-price">
                                <b>₹11,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/budspro2r'>
                                <img src={Oneplusnordbuds2r} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>OnePlus Buds Pro 2R</p>
                            <div className="product-price">
                                <b>₹11,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/oneplusbudspro'>
                                <img src={Oneplusbudspro} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>OnePlus Buds Pro 2R</p>
                            <div className="product-price">
                                <b>₹9,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-head">
                            <Link to='/boat141'>
                                <img src={boatairdopes141} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>boAt Airdopes 141 Bluetooth TWS Earbuds</p>
                            <div className="product-price">
                                <b>₹1,299</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/boat170'>
                                <img src={boatairdopes170} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>boAt Airdopes 170 Bluetooth TWS Earbuds</p>
                            <div className="product-price">
                                <b>₹1,499</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/boat200plus'>
                                <img src={boat200plus} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>boAt Airdopes 200 Plus Bluetooth TWS Earbuds</p>
                            <div className="product-price">
                                <b>₹1,499</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/boatneck'>
                                <img src={boatrockerz245v2pro} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>boAt Newly Launched Rockerz 245 V2 Pro</p>
                            <div className="product-price">
                                <b>₹999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/boatsoundbar'>
                                <img src={boatsoundbar} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>boAt Aavante Bar 490 Bluetooth Soundbar 10W RMS</p>
                            <div className="product-price">
                                <b>₹1,199</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/boat121'>
                                <img src={boat121} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>boAt Newly Launched Airdopes 121 V2 Plus</p>
                            <div className="product-price">
                                <b>₹1,399</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/sonywf1000xm5'>
                                <img src={sonywf1000xm5} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Sony WF-1000XM5</p>
                            <div className="product-price">
                                <b>₹24,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/jbl'>
                                <img src={jbl} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>JBL Endurance RunBT</p>
                            <div className="product-price">
                                <b>₹1,499</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/sonyheadphone'>
                                <img src={sonyheadphone} className='product-img' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Sony WH-1000XM5</p>
                            <div className="product-price">
                                <b>₹27,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tws;
