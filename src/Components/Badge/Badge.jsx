import "./Badge.css";
import { useCartStore } from "../../Store";

function Badge() {
  const { cart } = useCartStore();

  return <span className="badge">{cart.length}</span>;
}

export default Badge;
