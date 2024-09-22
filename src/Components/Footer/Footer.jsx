import { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const [footerData] = useState([
    {
      id: 1,
      title: "High Quality",
      description: "crafted from top materials",
      img: "/assets/footer/highQuality.png",
    },
    {
      id: 2,
      title: "Warranty Protection",
      description: "Over 2 years",
      img: "/assets/footer/Warranty-Protection.png",
    },
    {
      id: 3,
      title: "Free Shipping",
      description: "Order over 150 $",
      img: "/assets/footer/Free-Shipping.png",
    },
    {
      id: 4,
      title: "24 / 7 Support",
      description: "Dedicated support",
      img: "/assets/footer/Support.png",
    },
  ]);

  const [navLinks] = useState([
    { id: 1, path: "/", label: "Home" },
    { id: 2, path: "/shop", label: "Shop" },
    { id: 3, path: "#", label: "About" },
    { id: 4, path: "/contact", label: "Contact" },
  ]);

  const [footerLinks] = useState([
    { id: 1, label: "Payment Options", path: "#" },
    { id: 2, label: "Returns", path: "#" },
    { id: 3, label: "Privacy Policies", path: "#" },
  ]);

  return (
    <footer>
      <div className="partOneContainer">
        {footerData.map((item) => {
          return (
            <div key={item.id} className="itemWrapper">
              <div className="img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="partTwo">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Geschäft.</h3>
            <address>
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </address>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Help</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section newsletter">
            <h4>Newsletter</h4>
            <form>
              <input type="email" placeholder="Enter Your Email Address" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>2024 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
