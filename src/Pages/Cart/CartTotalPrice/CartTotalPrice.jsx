import cartStyle from "../Cart.module.css";
import { useCartStore } from "../../../Store";
import CurrencyFormatter from "../../../Components/CurrencyFornatter/CurrencyFornatter";

function CartTotalPrice() {
  const { cart } = useCartStore();

  // total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const roundedNumber = parseFloat(total.toFixed(2));

  const formatCurrency = CurrencyFormatter();

  return (
    <div className={cartStyle.cartTotals}>
      <div>
        <h2>Cart Totals</h2>
      </div>
      <div className={cartStyle.TotalNumber}>
        <h4>Total:</h4>
        <p>{formatCurrency(roundedNumber)}</p>
      </div>
      <div>
        <button className={cartStyle.checkoutBtn}>Check Out</button>
      </div>
    </div>
  );
}

export default CartTotalPrice;
