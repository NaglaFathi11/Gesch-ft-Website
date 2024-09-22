import { FaStar } from "react-icons/fa";

function RatingStars({ rate }) {
  //   console.log(rate);

  const stars = Array.from({ length: 5 }, (_, index) => {
    return <FaStar key={index} color={index < rate ? "#ffc107" : "#e4e5e9"} />;
  });

  return <div>{stars}</div>;
}

export default RatingStars;
