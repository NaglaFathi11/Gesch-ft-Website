import "./AddToCart.css";
import { useCartStore } from "../../Store";

function AddToCart({ product }) {
  const { addToCart } = useCartStore();
  // console.log(product);
  // console.log(product.id);

  return (
    <div className="productOverlay">
      <button onClick={() => addToCart(product)} className="addToCartButton">
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
