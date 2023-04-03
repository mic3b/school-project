import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/sushi.jpeg";
import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";
import AddToCart from "./AddToCart/AddToCart";

const Sushi = () => {
  return (
    <div>
      <HeroImage bgImage={bgImage} heading={["2. ", <span>Sushi</span>]} />
      <DeliveryInfo />
      <AddToCart />
    </div>
  );
};

export default Sushi;
