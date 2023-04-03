import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AmazingMeal.css";

import image1 from "../../../assets/burger.jpg";
import image2 from "../../../assets/cheese.jpg";
import image3 from "../../../assets/cake.jpg";
import image4 from "../../../assets/coffee.jpg";
import image5 from "../../../assets/pizza.jpeg";
import image6 from "../../../assets/sushi.jpeg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillStarFill } from "react-icons/bs";

const AmazingMeal = () => {
  const [items, setItems] = useState([
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
    { id: 4, url: image4 },
    { id: 5, url: image5 },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="amazing-card-container">
            <div className="amazing-card amazing-card-left">
              <Link to="/pizza">
                <img src={image5} alt="Pizza" className="amazing-card-image" />
              </Link>

              <div className="amazing-card-content">
                <div className="amazing-card-title">
                  <BsFillStarFill color="#c3512f" />
                  <h3 className="heading-tertiary">
                    1. <span>Pizza</span>
                  </h3>
                </div>

                <p>Kliknij Aby Sprawdzić Przepis Na Pizze!</p>
              </div>
            </div>

            <div className="amazing-card amazing-card-left">
              <Link to="/sushi">
                <img src={image6} alt="Sushi" className="amazing-card-image" />
              </Link>

              <div className="amazing-card-content">
                <div className="amazing-card-title">
                  <BsFillStarFill color="#c3512f" />
                  <h3 className="heading-tertiary">
                    2. <span>Sushi</span>
                  </h3>
                </div>

                <p>Kliknij Aby Sprawdzić Przepis Na Sushi!</p>
              </div>
            </div>

            <div className="amazing-card amazing-card-right">
              <Link to="burger">
                <img src={image1} alt="Burger" className="amazing-card-image" />
              </Link>

              <div className="amazing-card-content">
                <div className="amazing-card-title">
                  <BsFillStarFill color="#c3512f" />
                  <h3 className="heading-tertiary">
                    3. <span>Burger</span>
                  </h3>
                </div>

                <p>Kliknij Aby Sprawdzić Przepis Na Burgera!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="twoja-stara"></div>
    </>
  );
};

export default AmazingMeal;
