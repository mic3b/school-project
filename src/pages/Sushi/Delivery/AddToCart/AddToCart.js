import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import "./AddToCart.css";
import image1 from "../../../assets/burger.jpg";
import image2 from "../../../assets/cheese.jpg";
import image3 from "../../../assets/cake.jpg";
import image4 from "../../../assets/coffee.jpg";
import image5 from "../../../assets/pizza.jpeg";
import image6 from "../../../assets/coffee.jpg";

const menuDataLeft = [
  {
    title: "600g mąki pszennej",
    description: "najlepiej typ 00 + trochę do posypania blatu",
  },
  {
    title: "320 ml ciepłej wody",
    description: "",
  },
  {
    title: "25 g świeżych drożdży",
  },
  {
    title: "3 łyżki oliwy z oliwek",
  },
  {
    title: "Przyprawy ",
  },
];

const menuDataRight = [
  {
    title: "1 łyżeczka soli",
  },
  {
    title: "1 łyżeczka cukru no. białego",
  },
  {
    title: "250 g sera mozzarella z zalewy",
  },
  {
    title: "100 g szynki dojrzewającej ",
    description: "np. prosciutto crudo",
  },
  {
    title: "Dodatki ",
    description: "np. sos itd.",
  },
];

const AddToCart = () => {
  return (
    <div className="container add-to-cart">
      <h1 className="heading-secondary">
        Potrzebne <span>składniki </span>
      </h1>

      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              itemImage={data.img}
            />
          ))}
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              itemImage={data.img}
            />
          ))}
        </div>
      </div>

      <div className="addtocart-btn"></div>
    </div>
  );
};

export default AddToCart;
