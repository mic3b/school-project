import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/pizza.jpeg";
import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";
import AddToCart from "./AddToCart/AddToCart";

const Delivery = () => {
  return (
    <div>
      <HeroImage bgImage={bgImage} heading={["1. ", <span>Pizza</span>]} />
      <DeliveryInfo />
      <AddToCart />
    </div>
  );
};

export default Delivery;
