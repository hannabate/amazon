import React from "react";
import Carousel from "react-bootstrap/Carousel";

function BootstrapCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpantherwakandaforever_lob_mas_mob_04.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71cvXoaMZPL._SX3000_.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61zMuPjqQBL._SX3000_.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61-5K0tIvKL._SX3000_.jpg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BootstrapCarousel;
