import { useState } from "react";
import HeaderStyle from "./Header.module.css";
import { Link } from "react-router-dom";
import CartDropdown from "../CartDropdown/CartDropdown";
import Badge from "../Badge/Badge";

export default function Header() {
  // State for toggling the hamburger menu
  const [isActive, setIsActive] = useState(false);

  function UpdateNavbarActive() {
    setIsActive();
  }

  // State for showing cart dropdown
  const [isCartOpen, setIsCartOpen] = useState(false);

  function updateIsCartOpen() {
    setIsCartOpen();
  }

  function toggleMenu() {
    setIsActive(!isActive);
  }

  function closeNavBar() {
    setIsActive(false);
  }

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className={HeaderStyle.header}>
      <div className={HeaderStyle.logo}>
        <img src="/assets/header/Logo.svg" alt="Logo" />
        <h3>
          <Link to="/">Geschäft</Link>
        </h3>
      </div>
      {/* Hamburger Icon */}
      <div className={HeaderStyle.hamburger} onClick={toggleMenu}>
        {/* <img src="/assets/menu.png" alt="menu" style={{ width: "40px" }} /> */}
        <img
          src="/assets/header/menueBar.png"
          alt="menu-bar"
          style={{ width: "40px" }}
        />
      </div>
      {/* Navbar and Cart combined in a single menu */}
      <div className={isActive ? HeaderStyle.navBarActive : HeaderStyle.navBar}>
        <button onClick={closeNavBar} className={HeaderStyle.closeIcon}>
          <img src="/assets/header/close.png" alt="close-icon" />
        </button>
        <nav onClick={() => setIsActive(false)}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className={HeaderStyle.cartIcon} onClick={toggleCart}>
          <img src="/assets/header/shopping-bag.png" alt="shopping-cart" />
          <Badge />
        </div>
        {/* Cart Dropdown */}
        {isCartOpen && (
          <CartDropdown
            UpdateNavbarActive={UpdateNavbarActive}
            updateIsCartOpen={updateIsCartOpen}
          />
        )}
      </div>
    </div>
  );
}
