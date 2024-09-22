import cartStyle from "./Cart.module.css";
import CartTotalPrice from "../Cart/CartTotalPrice/CartTotalPrice";
import CartBody from "./CartBody/CartBody";
import Breadcrumb from "../../Components/BreadCrumbs/BreadCrumbs";

export default function Cart() {
  return (
    <>
      <Breadcrumb title={"cart"} />

      <div className={cartStyle.cartPage}>
        <div className={cartStyle.cartTable}>
          <table>
            <CartBody />
          </table>
        </div>
        <CartTotalPrice />
      </div>
    </>
  );
}
