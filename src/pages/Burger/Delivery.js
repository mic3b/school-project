import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/burger.jpg";
import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";
import AddToCart from "./AddToCart/AddToCart";

const Burger = () => {
  return (
    <div>
      <HeroImage bgImage={bgImage} heading={["3. ", <span>Burger</span>]} />
      <DeliveryInfo />
      <AddToCart />
    </div>
  );
};

export default Burger;
