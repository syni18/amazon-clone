import React from 'react'
import './home.css'
import Product from '../products/Product'
import Banner from '../../images/amazonbanner2.jpg'
import LeanStartup from '../../images/leanstartup.jpg';
import Pintola from '../../images/pintola.jpg'
import OnePlus10R from '../../images/oneplus10r.jpg'
import AntSpeaker from '../../images/antSpeaker.jpg'
import MacbookAir from '../../images/macbookAir.jpg'
import SamsungLedTV from '../../images/samsungLedTV.jpg'
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img src={Banner} alt="" className="home_banner" />
        <div className="home_row">
          <Product
            id={Math.random()}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
            price={49.99}
            image={LeanStartup}
            rating={5}
          />
          <Product
            id={Math.random()}
            title="Pintola HIGH Protein Peanut Butter (ORGANIC JAGGERY) (Creamy, 1kg)"
            price={19.99}
            image={Pintola}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id={Math.random()}
            title="OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC"
            price={125.5}
            image={OnePlus10R}
            rating={4}
          />
          <Product
            id={Math.random()}
            title="Tribit StormBox 24W Bluetooth Wireless Speakers with Mic-360° Surround Sound,Enhanced Bass,Wireless Dual Pair"
            price={65.0}
            image={AntSpeaker}
            rating={4}
          />
          <Product
            id={Math.random()}
            title="2021 Apple MacBook Pro (14-inch/35.97 cm, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Space Grey"
            price={780.98}
            image={MacbookAir}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id={Math.random()}
            title="Samsung 108 cm (43 inches) Crystal 4K Neo Series Ultra HD Smart LED TV UA43AUE65AKXXL (Black) (2022 Model)"
            price={999.99}
            image={SamsungLedTV}
            rating={4}
          />
        </div>
        <div className="home_row">{/* product */}</div>
      </div>
    </div>
  );
}

export default Home