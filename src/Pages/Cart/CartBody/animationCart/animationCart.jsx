import Lottie from "lottie-react";
import animationData from "../../../../../public/assets/cart/cartempty.json";
import "./animationCart.css";

const AnimationComponent = () => {
  return (
    <div className="animationCart">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default AnimationComponent;
