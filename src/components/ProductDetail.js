import React from 'react';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import './css/Shopall.css';
import SamsungS23Ultra from '../img/shopall/samsung-s23-ultra.png';
import SamsungS23FE from '../img/shopall/SamsumgS23FE.png';
import LavaAgni2 from '../img/shopall/lavaagni2.png';
import Oneplus11 from '../img/shopall/oneplus11.png';
import Oneplus11R from '../img/shopall/oneplus11r.png';
import Oneplusopen from '../img/shopall/oneplusopen.png';
import Samsungflip5 from '../img/shopall/samsungflip5.png';
import Samsungfold5 from '../img/shopall/samsungfold5.png';
import iqoo12 from '../img/shopall/iqoo12.png';
import iphone15 from '../img/shopall/iphone15.png';
import iphone14 from '../img/shopall/appleiphone14.png';
import nothingphone2 from '../img/shopall/nothingphone2.png';
import Tab8 from '../img/shopall/samsungtaba8.png';
import Tab9 from '../img/shopall/samsungtabs9.png';
import Tab9fe from '../img/shopall/samsungtabs9fe.png';
import Tab9plus from '../img/shopall/samsungtabs9plus.png'
import Taba9plus from '../img/shopall/samsungtaba9plus.png';
import Tab9ultra from '../img/shopall/samsungtabs9ultra.png';
import iPadpro from '../img/shopall/ipadpro.png';
import oneplustab from '../img/shopall/oneplustab.png';
import Xiaomitab from '../img/shopall/xiaomipad6.png';
import Samsungtv1 from '../img/shopall/samsungtv1.png';
import oneplustv1 from '../img/shopall/oneplustv1.png';
import Sonytv1 from '../img/shopall/sonytv1.png';
import tv1 from '../img/shopall/a-tv-1.png';
import miTv80cm from '../img/shopall/miTv80cm.png';
import acer50inchTV from '../img/shopall/acer50inchTV.png';
import samsungcrystalvisiontv55 from '../img/shopall/samsungcrystalvisiontv55.png';
import lgtv32lm563bptc from '../img/shopall/lgtv32lm563bptc.png';
import vu43ca from '../img/shopall/vu43ca.png';
import Budsfe from '../img/shopall/samsungbudsfe.png';
import Budspro2 from '../img/shopall/samsungbudspro2.png';
import Buds2 from '../img/shopall/samsungbuds2.png';
import OneplusBudspro2 from '../img/shopall/oneplusbudspro2.png';
import Oneplusnordbuds2r from '../img/shopall/oneplusnordbuds2r.png';
import Oneplusbudspro from '../img/shopall/oneplusbudspro.png';
import boatairdopes141 from '../img/shopall/boatairdopes141.png';
import boatairdopes170 from '../img/shopall/boatairdopes170.png';
import boat200plus from '../img/shopall/boat200plus.png';
import boatrockerz245v2pro from '../img/shopall/boatneck.png';
import boatsoundbar from '../img/shopall/boatsoundbar.png';
import boat121 from '../img/shopall/boat121.png';
import sonywf1000xm5 from '../img/shopall/sonywf1000xm5.png';
import jbl from '../img/shopall/jbl.png';
import sonyheadphone from '../img/shopall/sonyheadphone.png';

const ProductDetail = () => {
    return (
        <div>
            <h1 className='product-heading'>All Product</h1>
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
            </div>
        </div>
    );
};

export default ProductDetail;