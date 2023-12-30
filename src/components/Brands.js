import React from 'react';
import '../components/css/Brands.css';
import Apple from '../img/brands/apple.png';
import Acer from '../img/brands/acer.png';
import Boat from '../img/brands/boat.png';
import Boult_Audio from '../img/brands/boult-audio.png';
import Iqoo from '../img/brands/iqoo.png';
import Jbl from '../img/brands/jbl.png';
import Lg from '../img/brands/lg.png';
import Mi from '../img/brands/mi.png';
import Motorola from '../img/brands/motorola.png';
import Noise from '../img/brands/noise.png';
import Nothing from '../img/brands/nothing.png';
import Oneplus from '../img/brands/oneplus.png';
import Panasonic from '../img/brands/panasonic.png';
import Pixel from '../img/brands/pixel.png';
import Poco from '../img/brands/poco.png';
import Samsung from '../img/brands/samsung.png';
import Sony from '../img/brands/sony.png';
import Vivo from '../img/brands/vivo.png';
import Zebronics from '../img/brands/zebronics.png';

const Brands = () => {
  return (
    <div>

      <section className="brands-section">
        <div className="brands-container">
          <h1 className="brands-heading">Brands</h1>
          <div className="brands-row">
            <div>
              <div className="brands-col"><img src={Apple} alt="" className="brands-cat" /></div>
            </div>
            <div>
              <div className="brands-col"><img src={Samsung} alt="" className="brands-cat" /></div>
            </div>
            <div>
              <div className="brands-col"><img src={Pixel} alt="" className="brands-cat" /></div>
            </div>
            <div>
              <div className="brands-col"><img src={Sony} alt="" className="brands-cat" /></div>
            </div>
            <div>
              <div className="brands-col"><img src={Oneplus} alt="" className="brands-cat" /></div>
            </div>
          </div>
        </div>

        <div className="brands-container brands-cat-container">
          <div className="brands-row">
            <div>
              <div className="brands-col"><img src={Boat} alt="" className="brands-cat" /></div>
            </div>
            <div>
              <div className="brands-col"><img src={Zebronics} alt="" className="brands-cat" /></div>
            </div>
            <div>
              <div className="brands-col"><img src={Motorola} alt="" className="brands-cat" /></div>
            </div>
            <div>
              <div className="brands-col"><img src={Iqoo} alt="" className="brands-cat" /></div>
            </div>
            <div>
              <div className="brands-col"><img src={Lg} alt="" className="brands-cat" /></div>
            </div>
          </div>
        </div>

      

      </section>
    </div>
  );
};

export default Brands;
