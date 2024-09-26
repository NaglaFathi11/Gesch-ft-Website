import cartStyle from "../Cart.module.css";
import { useCartStore } from "../../../Store";
import { Link } from "react-router-dom";
import CartBodyStyle from "./CartBody.module.css";
import AnimationComponent from "./animationCart/animationCart";
import CurrencyFormatter from "../../../Components/CurrencyFornatter/CurrencyFornatter";

function CartBody() {
  const { cart, removeFromCart } = useCartStore();
  // console.log("Cart data in CartBody:", cart);

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
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className={CartBodyStyle.productImgWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={CartBodyStyle.productImg}
                  />
                </td>
                <td data-title="Product Name">
                  <span>
                    {item.title
                      ? item.title.split(/\s+|-/).slice(0, 2).join(" ")
                      : "No Title Available"}
                  </span>
                </td>

                <td data-title="Price">
                  <span>{formatCurrency(item.price)}</span>
                </td>
                <td data-title="Quantity">
                  <button className={CartBodyStyle.quantityBtn}>
                    <span>{item.quantity}</span>
                  </button>
                </td>
                <td data-title="Subtotal">
                  <span>{formatCurrency(item.price * item.quantity)}</span>
                </td>
                <td data-title="Delete">
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
