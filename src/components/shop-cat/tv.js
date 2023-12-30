import React from 'react';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import '../css/Shopall.css';
import ProductList from '../ProductList';
import Samsungtv1 from '../../img/shopall/samsungtv1.png';
import oneplustv1 from '../../img/shopall/oneplustv1.png';
import Sonytv1 from '../../img/shopall/sonytv1.png';
import tv1 from '../../img/shopall/a-tv-1.png';
import miTv80cm from '../../img/shopall/miTv80cm.png';
import acer50inchTV from '../../img/shopall/acer50inchTV.png';
import samsungcrystalvisiontv55 from '../../img/shopall/samsungcrystalvisiontv55.png';
import lgtv32lm563bptc from '../../img/shopall/lgtv32lm563bptc.png';
import vu43ca from '../../img/shopall/vu43ca.png';


const TV = () => {
    return (
        <div className="shop-all-container">
            <div className="product-list-container">
                <h1 className='list-heading'>All Product List</h1>
                <ProductList />
            </div>
            <div className="product-detail-container">
                <h1 className='product-heading'>All TV</h1>
                <div className="container">
                    <div className="card">
                        <div className="card-head">
                            <Link to='/samsungtv1'>
                                <img src={Samsungtv1} className='product-img-tv' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung 80 cm (32 inches) HD</p>
                            <div className="product-price">
                                <b>₹13,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/sonytv1'>
                                <img src={Sonytv1} className='product-img-tv' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Sony Bravia 139 cm (55 inches) 4K Ultra HD</p>
                            <div className="product-price">
                                <b>₹53,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/tv1'>
                                <img src={tv1} className='product-img-tv' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Redmi 80 cm (32 inches) F Series HD</p>
                            <div className="product-price">
                                <b>₹11,499</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/miTv80cm'>
                                <img src={miTv80cm} className='product-img-tv' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>MI 80 Cm (32 Inches) A Series HD</p>
                            <div className="product-price">
                                <b>₹12,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/acer50inchTV'>
                                <img src={acer50inchTV} className='product-img-tv' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Acer 127 cm (50 inches) 4K Ultra HD</p>
                            <div className="product-price">
                                <b>₹34,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-head">
                            <Link to='/samsungcrystalvisiontv55'>
                                <img src={samsungcrystalvisiontv55} className='product-img-tv' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Samsung 138 cm (55 Inches) Crystal Vision 4K Ultra HD</p>
                            <div className="product-price">
                                <b>₹45,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/oneplustv1'>
                                <img src={oneplustv1} className='product-img-tv' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>OnePlus 108 cm (43 inches) Y Series</p>
                            <div className="product-price">
                                <b>₹26,999</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/lgtv32lm563bptc'>
                                <img src={lgtv32lm563bptc} className='product-img-tv' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>LG 80 cm (32 inches) HD Ready Smart LED TV</p>
                            <div className="product-price">
                                <b>₹13,499</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <Link to='/vu43ca'>
                                <img src={vu43ca} className='product-img-tv' />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className='product-name'>Vu 108 cm (43 inches) Premium Series 4K Ultra HD</p>
                            <div className="product-price">
                                <b>₹22,799</b>
                            </div>
                            <button className="product-buy-button">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TV;
