import { Link } from "react-router-dom";
import { useCartStore } from "../../Store";
import CartDropdownStyle from "./CartDropdown.module.css";

function CartDropdown({ updateIsCartOpen, UpdateNavbarActive }) {
  const { cart, removeFromCart } = useCartStore();
  // console.log(cart);

  // total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const roundedNumber = parseFloat(total.toFixed(2));

  const handleLinkClick = () => {
    updateIsCartOpen(false);
    UpdateNavbarActive(false);
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className={CartDropdownStyle.cartDropdownContainer}>
          <div className={CartDropdownStyle.cartDropdown}>
            <div className={CartDropdownStyle.title}>
              <h2>Shopping Cart</h2>
              <img
                className={CartDropdownStyle.closeIcon}
                src="/assets/cart-drop-down/close.svg"
                alt="Close-Icon"
                onClick={() => updateIsCartOpen(false)}
              />
            </div>
            <div className={CartDropdownStyle.message}>
              <img
                src="/assets/cart-drop-down/cart-empty.png"
                alt="cart-empty"
              />
              <p>
                No products in the cart{" "}
                <Link
                  to="/shop"
                  className={CartDropdownStyle.goShopping}
                  onClick={handleLinkClick}
                >
                  Go Shoopping
                </Link>
              </p>
            </div>
            <div className={CartDropdownStyle.cartButtonWrapper}>
              <Link
                to="/cart"
                className={CartDropdownStyle.cartButton}
                onClick={handleLinkClick}
              >
                Cart
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={CartDropdownStyle.cartDropdownContainer}>
          <div className={CartDropdownStyle.cartDropdown}>
            <div className={CartDropdownStyle.title}>
              <h2>Shopping Cart</h2>
              <img
                className={CartDropdownStyle.closeIcon}
                src="/assets/cart-drop-down/close.svg"
                alt="Close-Icon"
                onClick={handleLinkClick}
              />
            </div>
            <ul className={CartDropdownStyle.cartItems}>
              {cart.map((item) => (
                <li key={item.id} className={CartDropdownStyle.cartItem}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={CartDropdownStyle.cartItemImage}
                  />
                  <div className={CartDropdownStyle.cartItemDetails}>
                    <h4>
                      {item.title
                        ? item.title.split(/\s+|-/).slice(0, 2).join(" ")
                        : "No Title Available"}
                    </h4>

                    <span>{item.quantity} x </span>

                    <span className={CartDropdownStyle.price}>
                      Rs. {parseFloat((item.quantity * item.price).toFixed(2))}
                    </span>
                  </div>
                  <img
                    src="/assets/delete.png"
                    className={CartDropdownStyle.removeItemBtn}
                    onClick={() => removeFromCart(item.id)}
                  ></img>
                </li>
              ))}
            </ul>
            <div className={CartDropdownStyle.cartSubtotal}>
              <h4>Subtotal</h4>
              <p>Rs. {roundedNumber}</p>
            </div>
            <div className={CartDropdownStyle.cartButtonWrapper}>
              <Link
                to="/cart"
                className={CartDropdownStyle.cartButton}
                onClick={handleLinkClick}
              >
                Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartDropdown;
