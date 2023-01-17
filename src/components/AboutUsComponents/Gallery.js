import Slider from "react-slick";
import Stats from "./Stats";
import image01 from "../../assets/images/GalleryImages/image_02.jpg";
import image02 from "../../assets/images/GalleryImages/image_03.jpg";
import image03 from "../../assets/images/GalleryImages/image_09.jpg";
import image04 from "../../assets/images/GalleryImages/image_011.jpg";
import "./Gallery.css";

export default function Gallery() {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 592,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <img className='gallery-item' src={image01} alt='gallery-img'></img>
        <img src={image02} alt='gallery-img'></img>
        <img src={image03} alt='gallery-img'></img>
        <img src={image04} alt='gallery-img'></img>
      </Slider>
    </>
  );
}
