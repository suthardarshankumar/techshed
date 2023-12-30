import React from 'react';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ShippingReturns from './components/ShippingReturns';
import TermsConditions from './components/TermsConditions';
import Brands from './components/Brands';
import Shopall from './components/Shopall';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Mobile from './components/shop-cat/Mobile';
import Tab from './components/shop-cat/Tab';
import Tws from './components/shop-cat/Tws';
import TV from './components/shop-cat/tv';
import Boat141 from './components/shop-cat/tws/Boat141';
import Samsungbudsfe from './components/shop-cat/tws/Samsungbudsfe';
import Samsungbuds2 from './components/shop-cat/tws/Samsungbuds2';
import SamsungBuds2Pro from './components/shop-cat/tws/SamsungBuds2Pro';
import OnePlusBudsPro2 from './components/shop-cat/tws/OnePlusBudsPro2';
import BudsPro2R from './components/shop-cat/tws/BudsPro2R';
import OnePlusBudsPro from './components/shop-cat/tws/OnePlusBudsPro';
import Boat170 from './components/shop-cat/tws/Boat170';
import Boat200Plus from './components/shop-cat/tws/Boat200Plus';
import BoatRockerz245V2Pro from './components/shop-cat/tws/BoatRockerz245V2Pro';
import BoatAavante490 from './components/shop-cat/tws/BoatAavante490';
import BoatAirdopes121V2Plus from './components/shop-cat/tws/boatAirdopes121v2Plus';
import SonyWF1000XM5 from './components/shop-cat/tws/SonyWF1000XM5';
import JblRunBT from './components/shop-cat/tws/JblRunBT';
import WH1000XM5 from './components/shop-cat/tws/WH1000XM5';
import TabA8 from './components/shop-cat/tab/TabA8';
import TabS9 from './components/shop-cat/tab/TabS9';
import TabS9FE from './components/shop-cat/tab/TabS9FE';
import TabS9Plus from './components/shop-cat/tab/TabS9Plus';
import TabA9Plus from './components/shop-cat/tab/TabA9Plus';
import TabS9Ultra from './components/shop-cat/tab/TabS9Ultra';
import IpadPro11 from './components/shop-cat/tab/IpadPro11';
import OnePlusPadGo from './components/shop-cat/tab/OnePlusPadGo';
import Xiaomi from './components/shop-cat/tab/Pad6';
import Samsungtv1 from './components/shop-cat/tv/Tv32Inch';
import OnePlus43Y1SPro from './components/shop-cat/tv/OnePlus43Y1SPro';
import SonyBravia55X74K from './components/shop-cat/tv/SonyBravia55X74K';
import RedmiTV80cm from './components/shop-cat/tv/RedmiTV80cm';
import MiTv80cm from './components/shop-cat/tv/MiTv80cm';
import Acer50InchTV from './components/shop-cat/tv/Acer50InchTV';
import CrystalVisionTV55 from './components/shop-cat/tv/CrystalVisionTV55';
import LGTV32 from './components/shop-cat/tv/LGTV32';
import Vu43CA from './components/shop-cat/tv/Vu43CA';
import S23Ultra from './components/shop-cat/mobile/S23Ultra';
import S23FE from './components/shop-cat/mobile/S23FE';
import Agni2 from './components/shop-cat/mobile/Agni2';
import OnePlus11 from './components/shop-cat/mobile/OnePlus11';
import OnePlus11R from './components/shop-cat/mobile/OnePlus11R';
import OpenFold from './components/shop-cat/mobile/OpenFold';
import ZFlip5 from './components/shop-cat/mobile/ZFlip5';
import Fold5 from './components/shop-cat/mobile/Fold5';
import Iqoo12 from './components/shop-cat/mobile/Iqoo12';
import Iphone15 from './components/shop-cat/mobile/Iphone15';
import Iphone14 from './components/shop-cat/mobile/Iphone14';
import NothingPhone2 from './components/shop-cat/mobile/NothingPhone2';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/sign" element={<Signup />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/shippingreturns" element={<ShippingReturns />} />
        <Route exact path="/termsconditions" element={<TermsConditions />} />
        <Route exact path="/brands" element={<Brands />} />
        <Route exact path="/shopall" element={<Shopall />} />
        <Route exact path="/productlist" element={<ProductList />} />
        <Route exact path="/productdetails" element={<ProductDetail />} />
        <Route exact path="/mobile" element={<Mobile />} />
        <Route exact path="/tab" element={<Tab />} />
        <Route exact path="/tws" element={<Tws />} />
        <Route exact path="/tv" element={<TV />} />
        <Route exact path="/boat141" element={<Boat141 />} />
        <Route exact path="/samsungbudsfe" element={<Samsungbudsfe />} />
        <Route exact path="/samsungbuds2" element={<Samsungbuds2 />} />
        <Route exact path="/samsungbuds2pro" element={<SamsungBuds2Pro />} />
        <Route exact path="/oneplusbudspro2" element={<OnePlusBudsPro2 />} />
        <Route exact path="/budspro2r" element={<BudsPro2R />} />
        <Route exact path="/oneplusbudspro" element={<OnePlusBudsPro />} />
        <Route exact path="/boat170" element={<Boat170 />} />
        <Route exact path="/boat200plus" element={<Boat200Plus />} />
        <Route exact path="/boatneck" element={<BoatRockerz245V2Pro />} />
        <Route exact path="/boatsoundbar" element={<BoatAavante490 />} />
        <Route exact path="/boat121" element={<BoatAirdopes121V2Plus />} />
        <Route exact path="/sonywf1000xm5" element={<SonyWF1000XM5 />} />
        <Route exact path="/jbl" element={<JblRunBT />} />
        <Route exact path="/sonyheadphone" element={<WH1000XM5 />} />
        <Route exact path="/taba8" element={<TabA8 />} />
        <Route exact path="/tab9" element={<TabS9 />} />
        <Route exact path="/tab9fe" element={<TabS9FE />} />
        <Route exact path="tab9plus" element={<TabS9Plus />} />
        <Route exact path="/taba9plus" element={<TabA9Plus />} />
        <Route exact path="/tabs9ultra" element={<TabS9Ultra />} />
        <Route exact path="/ipadpro" element={<IpadPro11 />} />
        <Route exact path="/oneplustab" element={<OnePlusPadGo />} />
        <Route exact path="/xiaomitab" element={<Xiaomi />} />
        <Route exact path="/samsungtv1" element={<Samsungtv1 />} />
        <Route exact path="/oneplustv1" element={<OnePlus43Y1SPro />} />
        <Route exact path="/sonytv1" element={<SonyBravia55X74K />} />
        <Route exact path="/tv1" element={<RedmiTV80cm />} />
        <Route exact path="miTv80cm" element={<MiTv80cm />} />
        <Route exact path="/acer50inchTV" element={<Acer50InchTV />} />
        <Route exact path="/samsungcrystalvisiontv55" element={<CrystalVisionTV55 />} />
        <Route exact path="/lgtv32lm563bptc" element={<LGTV32 />} />
        <Route exact path="/vu43ca" element={<Vu43CA />} />
        <Route exact path="/samsungS23Ultra" element={<S23Ultra />} />
        <Route exact path="/samsungs23fe" element={<S23FE />} />
        <Route exact path="/agni2" element={<Agni2 />} />
        <Route exact path="/oneplus11" element={<OnePlus11 />} />
        <Route exact path="/oneplus11r" element={<OnePlus11R />} />
        <Route exact path="/oneplusopen" element={<OpenFold />} />
        <Route exact path="/flip5" element={<ZFlip5 />} />
        <Route exact path="/fold5" element={<Fold5 />} />
        <Route exact path="/iqoo12" element={<Iqoo12 />} />
        <Route exact path="/iphone15" element={<Iphone15 />} />
        <Route exact path="/iphone14" element={<Iphone14 />} />
        <Route exact path="/nothingphone2" element={<NothingPhone2 />} />
        {/*<Route exact path="/" element={< />} />
        <Route exact path="/" element={< />} /> */}
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
