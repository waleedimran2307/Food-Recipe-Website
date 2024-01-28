import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function HomePageBanner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="container-fluid  carousel"
    >
      <Carousel.Item className="carousel-item">
        <img
          src="images/banner2.jpeg"
          alt="No images"
          className="carousel-img"
        />
        ;
        <Carousel.Caption className="carousel-caption">
          <div className="row">
            <p className="fs-1 fw-bold">
              Taste the World with
              <br /> FlavorVerse!
            </p>
          </div>

          <div className="row d-none d-md-block justify-content-center visually-sm-hidden  d-md-flex justify-content-center">
            <h6 className=" mt-4 text-center opacity-75 py-4 px-5 m-3 w-75 bg-secondary rounded-circle">
              Welcome to FlavorVerse, your passport to culinary adventures!
              <br className="hidden md:block" /> Discover a treasure trove of
              delectable recipes from around the globe.
            </h6>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img
          src="images/banner1.jpeg"
          alt="No images"
          className="carousel-img"
        />
        ;
        <Carousel.Caption className="carousel-caption">
          <div className="row">
            <p className="fs-1 fw-bold">
              Taste the World with
              <br /> FlavorVerse!
            </p>
          </div>

          <div className="row d-none d-md-block justify-content-center visually-sm-hidden  d-md-flex justify-content-center">
            <h6 className=" mt-4 text-center opacity-75 py-4 px-5 m-3 w-75 bg-secondary rounded-circle">
              Welcome to FlavorVerse, your passport to culinary adventures!
              <br className="hidden md:block" /> Discover a treasure trove of
              delectable recipes from around the globe.
            </h6>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img
          src="images/banner3.webp"
          alt="No images"
          className="carousel-img "
        />
        ;
        <Carousel.Caption className="carousel-caption">
          <div className="row ">
            <p className="fs-1 fw-bolder text-white ">
              Taste the World with
              <br /> FlavorVerse!
            </p>
          </div>

          <div className="row d-none d-md-block justify-content-center visually-sm-hidden  d-md-flex justify-content-center">
            <h6 className=" mt-4 text-center opacity-75 py-4 px-5 m-3 w-75 bg-secondary rounded-circle">
              Welcome to FlavorVerse, your passport to culinary adventures!
              <br className="hidden md:block" /> Discover a treasure trove of
              delectable recipes from around the globe.
            </h6>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePageBanner;
