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
    title: "3 listki nori",
  },
  {
    title: "250 g ryżu do sushi",
    description: "",
  },
  {
    title: "2 łyżki octu ryżowego + 1 łyżka",
  },
  {
    title: "1/2 łyżeczki soli",
  },
  {
    title: "2 łyżeczki cukru",
  },
  {
    title: "1/2 marchewki",
  },
  {
    title: "1/2 ogórka szklarniowego",
  },
];

const menuDataRight = [
  {
    title: "1/2 awokado",
  },
  {
    title: "100 g wędzonego łososia",
  },
  {
    title: "1/2 papryki",
  },
  {
    title: "szczypiorek ",
  },
  {
    title: "almette śmietankowy lub z suszonymi pomidorami",
  },
  {
    title: "wasabi",
  },
  {
    title: "sos sojowy",
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
