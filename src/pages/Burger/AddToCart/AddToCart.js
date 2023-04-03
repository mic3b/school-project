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
    title: "1 kg wołowiny",
  },
  {
    title: "1 średnia cebula",
  },
  {
    title: "1 średnie jajko",
  },
  {
    title: "2 płaskie łyżeczki soli",
  },
  {
    title: "1 płaska łyżeczka pieprzu ",
  },
];

const menuDataRight = [
  {
    title: "6 bułek do burgerów",
  },
  {
    title: "duży pomidor malinowy",
  },
  {
    title: "mała cebula cukrowa lub zwykła",
  },
  {
    title: "kulka mozzarelli lub kawałek żółtego sera ",
    description: "",
  },
  {
    title: "kilka listków sałaty lodowej ",
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
