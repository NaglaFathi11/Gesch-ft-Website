import "./Counter.css";
import PlusPhoto from "/assets/plus.svg";
import MinusPhoto from "/assets/minus.svg";
import { useCounterStore } from "../../Store";

export default function Counter({ product }) {
  const { count, decrementCount, incrementCount } = useCounterStore();
  return (
    <div className="Counter">
      <button onClick={() => decrementCount(product)}>
        <img src={MinusPhoto} alt="Not Found" />
      </button>
      <label>{count}</label>

      <button onClick={() => incrementCount(product)}>
        <img src={PlusPhoto} alt="Not Found" />
      </button>
    </div>
  );
}
