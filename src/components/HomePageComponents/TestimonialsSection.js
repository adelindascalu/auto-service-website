import Slider from "react-slick";
import React from "react";
import { useState, useEffect } from "react";

import "../Reusable-components/Slider/slick.css";
import "../Reusable-components/Slider/slick-theme.css";
import "./TestimonialsSection.css";

export default function Testimonials() {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("https://randomuser.me/api/?results=6")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=6");
        const { results } = await res.json();
        setData(results);
      } catch (err) {
        alert("Problem loading the API. Please refresh the page.");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className='testimonials-section'>
        <div className='container'>
          <h2 className='heading-secondary'>Hear from our customers</h2>
          <Slider {...settings}>
            {data.map((user, index) => (
              <div className='customer-card' key={index}>
                <img
                  className='customer-img'
                  src={user.picture.large}
                  alt='customer'
                />
                <h3 className='customer-name heading-tertiary' key={index}>
                  {user.name.first} {user.name.last}
                </h3>
                <p className='customer-city'>{user.location.city}</p>
                <p className='customer-text'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus ratione, nostrum ipsam labore eaque molestias
                  dolorum earum numquam voluptates minus.
                </p>
                <p className='customer-rating'>★★★★★</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
