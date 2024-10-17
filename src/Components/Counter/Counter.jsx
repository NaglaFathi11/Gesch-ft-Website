import "./Counter.css";
import PlusPhoto from "/assets/plus.webp";
import MinusPhoto from "/assets/minus.webp";
import { useCounterStore } from "../../Store";

export default function Counter({ product }) {
  const { count, decrementCount, incrementCount } = useCounterStore();
  return (
    <div className="Counter">
      <button onClick={() => decrementCount(product)}>
        <img src={MinusPhoto} alt="Not Found" width="10px" height="1px" />
      </button>
      <label>{count}</label>

      <button onClick={() => incrementCount(product)}>
        <img src={PlusPhoto} alt="Not Found" width="10px" height="1px" />
      </button>
    </div>
  );
}
