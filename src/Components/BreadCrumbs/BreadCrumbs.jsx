import styles from "./Breadcrumbs.module.css";
import { NavLink, useLocation, useParams } from "react-router-dom";
import arrow from "/assets/arrow-up.webp";

const Breadcrumb = ({ title }) => {
  const { pathname } = useLocation();
  // console.log(pathname);

  const { id: paramsId, title: paramsTitle, category } = useParams();

  return (
    <section
      className={
        pathname === `/shop` ||
        decodeURIComponent(pathname) === `/shop/${category}`
          ? styles.breadcrumbShop
          : styles.breadcrumb
      }
    >
      <div className={styles.container}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <img src={arrow} alt="arrow icon" width="20px" height="20px" />
          </li>
          {pathname === `/shop` ||
          decodeURIComponent(pathname) === `/shop/${category}` ||
          pathname === `/cart` ||
          pathname === `/contact` ? null : (
            <li>
              <NavLink to="/shop" className={styles.navLink}>
                Shop
              </NavLink>
            </li>
          )}

          {decodeURIComponent(pathname) ===
          `/shop/Product/${paramsId}/${paramsTitle}` ? (
            <>
              <li>
                <img src={arrow} alt="arrow icon" />
              </li>
              <li>
                <span className={styles.divider}></span>
              </li>
            </>
          ) : null}

          <li>
            <span className={styles.title}>{title}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
