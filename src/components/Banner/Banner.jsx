import Slider from "react-slick";
import "./Banner.css";
import banner1 from "../Assets/BANNER_X3.png";
import banner2 from "../Assets/BANNER2_X3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={banner1} alt="Slide 1" />
      </div>
      <div>
        <img src={banner2} alt="Slide 2" />
      </div>
    </Slider>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__container">
        <Carousel />
      </div>
    </div>
  );
};

export default Banner;
