import singleProductStyle from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSingleProductStore, useCartStore } from "../../Store";
import Counter from "../../Components/Counter/Counter";
import RatingStars from "../../Components/RatingStars/RatingStars";
import CurrencyFormatter from "../../Components/CurrencyFornatter/CurrencyFornatter";
import Breadcrumb from "../../Components/BreadCrumbs/BreadCrumbs";
import ClipLoader from "react-spinners/ClipLoader";

export default function SingleProduct() {
  const { product, getProduct, loading } = useSingleProductStore();
  const { addToCart } = useCartStore();
  const formatCurrency = CurrencyFormatter();

  const [productMeta] = useState([
    { id: 1, title: "SKU" },
    { id: 2, title: "Category" },
    { id: 3, title: "Tags" },
  ]);

  const [productOptions] = useState([
    { id: 1, color: "#816DFA" },
    { id: 2, color: "#000" },
    { id: 3, color: "#FFD700" },
  ]);

  const [socialShare] = useState([
    { id: 1, img: "/assets/single-product/facebook.webp" },
    { id: 2, img: "/assets/single-product/linkedin.webp" },
    { id: 3, img: "/assets/single-product/twitter.webp" },
  ]);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    getProduct(id);
  }, [id, getProduct]);
  // console.log(product);

  return (
    <>
      <Breadcrumb title={product.title} />
      {loading ? (
        <div className="spinner-container">
          <ClipLoader color="#3498db" loading={loading} size={50} />
        </div>
      ) : (
        <div className={singleProductStyle.singleProduct}>
          <div className={singleProductStyle.productContainer}>
            <div className={singleProductStyle.productGallery}>
              <div className={singleProductStyle.mainImage}>
                <img src={product.image} alt={product.title} />
              </div>
            </div>

            <div className={singleProductStyle.productDetails}>
              <h1 className={singleProductStyle.productName}>
                {product.title}
              </h1>

              <p className={singleProductStyle.productPrice}>
                {formatCurrency(product.price)}
              </p>

              <div className={singleProductStyle.productRating}>
                <div className={singleProductStyle.rate}>
                  <RatingStars
                    rate={product.rating ? product.rating.rate : "no rate"}
                  />
                </div>
                <span> {product.rating?.count} Customer Review</span>
              </div>
              <p className={singleProductStyle.productDescription}>
                {product.description}
              </p>

              <div className={singleProductStyle.productOptions}>
                <label style={{ color: "#9F9F9F" }}>Color:</label>
                <div className={singleProductStyle.colorOptions}>
                  {productOptions.map((option) => (
                    <button
                      key={option.id}
                      className={singleProductStyle.colorOption}
                      style={{ backgroundColor: option.color }}
                    ></button>
                  ))}
                </div>
              </div>

              <div className={singleProductStyle.addToCart}>
                <Counter product={product} />
                <button
                  onClick={() => addToCart(product)}
                  className={singleProductStyle.addBtn}
                >
                  Add To Cart
                </button>
              </div>

              <div className={singleProductStyle.productMeta}>
                {productMeta.map((item) => (
                  <p key={item.id}>
                    <strong>{item.title}:</strong>{" "}
                    {item.title === "SKU" && product.id}
                    {item.title === "Category" && product.category}
                    {item.title === "Tags" && `${product.category}, Shop`}
                  </p>
                ))}

                <div className={singleProductStyle.socialShare}>
                  <strong>Share:</strong>
                  {socialShare.map((item) => (
                    <a href="#" key={item.id}>
                      <img
                        src={item.img}
                        alt={item.img}
                        width="20px"
                        height="20px"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={singleProductStyle.productDescription}>
            <h2>Description</h2>
            <p>{product.description}.</p>
          </div>
        </div>
      )}
    </>
  );
}
