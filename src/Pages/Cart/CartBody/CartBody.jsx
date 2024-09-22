import cartStyle from "../Cart.module.css";
import { useCartStore } from "../../../Store";
import { Link } from "react-router-dom";
import CartBodyStyle from "./CartBody.module.css";
import AnimationComponent from "./animationCart/animationCart";
import CurrencyFormatter from "../../../Components/CurrencyFornatter/CurrencyFornatter";

function CartBody() {
  const { cart, removeFromCart } = useCartStore();
  console.log("Cart data in CartBody:", cart);

  const formatCurrency = CurrencyFormatter();

  return (
    <>
      {cart.length === 0 ? (
        <tbody>
          <tr className={CartBodyStyle.emptyCartWrapper}>
            <td className={CartBodyStyle.emptyCartdata}>
              <div className={CartBodyStyle.emptyCartMessage}>
                <AnimationComponent />
                <p>
                  Your cart is currently empty{" "}
                  <Link to="/shop" className={CartBodyStyle.goShopping}>
                    Go Shoopping
                  </Link>
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      ) : (
        <>
          <thead>
            <tr className={cartStyle.row}>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className={cartStyle.productInfo}>
                  <img src={item.image} alt={item.title} />
                  <h4>
                    {item.title
                      ? item.title.split(/\s+|-/).slice(0, 2).join(" ")
                      : "No Title Available"}
                  </h4>
                </td>
                <td>
                  <span>{formatCurrency(item.price)}</span>
                </td>
                <td>
                  <button className={CartBodyStyle.quantityBtn}>
                    <span>{item.quantity}</span>
                  </button>
                </td>
                <td>
                  <span>{formatCurrency(item.price * item.quantity)}</span>
                </td>
                <td>
                  <button
                    className={CartBodyStyle.deleteBtn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    <img
                      src="/assets/delete.png"
                      className={cartStyle.removeItemBtn}
                      alt="Remove"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </>
      )}
    </>
  );
}

export default CartBody;
