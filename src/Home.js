import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Product from "./Product";
import BootstrapCarousel from "./BootstrapCarousel";

function Home() {
  return (
    <div>
      <div className="home__container">
        <BootstrapCarousel />

        <div className="home__row">
          <Product
            id="12321341"
            title="Clear Cosmetic Storage Organizer - Easily Organize Your Cosmetics, Jewelry and Hair Accessories. Looks Elegant Sitting on Your Vanity, Bathroom Counter"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/A1E3XADJJmL._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Scented Candles, Premium Peach Amber Candles for Home Scented, 7oz Large Fall Aromatherapy Candle, Soy Candles Gifts for Her Stress Relief, Christmas Birthday Gifts for Women with Black Gold Gift Box"
            price={23.01}
            rating={4}
            image="https://m.media-amazon.com/images/I/81dLjc0H4CL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Red Roses Fresh Flowers Delivery - 2 Dozen Fresh Roses Flower Delivery, Fresh Cut Long Stem Roses Bouquet of Flowers for Delivery, Birthday & Valentines Day Gifts for Her by Aquarossa Farms"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81g6R+V2Q4L._AC_SY300_SX300_.jpg"
          />
          <Product
            id="3254354345"
            title="HoMedics Indoor 3-Tier Relaxation Tabletop Fountain, Automatic Pump with Power Switch, Extra Deep Basin with Natural River Rocks and Reflective Lighting Feature, EnviraScape Silver Springs"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71gvpZYgPxS._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49038501"
            title="Gskyer Telescope, 70mm Aperture 400mm AZ Mount Astronomical Refracting Telescope for Kids Beginners - Travel Telescope with Carry Bag, Phone Adapter and..."
            price={1001.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71kZr1V+OpL._AC_SL1500_.jpg"
          />
          <Product
            id="23445932"
            title="Nespresso Vertuo Coffee and Espresso Machine by Breville, Black"
            price={610.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71rhMv9KDYL._AC_SL1500_.jpg"
          />
          <Product
            id="325435434"
            title="comiso Wireless Earbuds, True Wireless in Ear Bluetooth 5.0 with Microphone, Deep Bass, IPX7 Waterproof Loud Voice Sport Earphones with Charging Case for..."
            price={220.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/619z6zMx93L._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Sony X85J 85 Inch TV: 4K Ultra HD LED Smart Google TV with Native 120HZ Refresh Rate, Dolby Vision HDR, and Alexa Compatibility KD85X85J- 2021 Model, Black"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81KttE7uLAL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
