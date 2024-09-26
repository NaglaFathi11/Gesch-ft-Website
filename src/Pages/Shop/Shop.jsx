import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ShopStyle from "./Shop.module.css";
import { v4 as uuidv4 } from "uuid";
import AddToCart from "../../Components/AddToCart/AddToCart";
import { useProductsStore } from "../../Store";
import CurrencyFormatter from "../../Components/CurrencyFornatter/CurrencyFornatter";
import Breadcrumb from "../../Components/BreadCrumbs/BreadCrumbs";
import ClipLoader from "react-spinners/ClipLoader";

export default function Shop() {
  const { category } = useParams();
  // console.log(category);

  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const { products, getProducts, loading } = useProductsStore();
  const formatCurrency = CurrencyFormatter();

  useEffect(() => {
    if (category) {
      getProducts();
    } else {
      getProducts();
    }
  }, [category, getProducts]);

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  // console.log(currentItems);

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className={ShopStyle.breadcrumbShopWrapper}>
        <h5>Shop</h5>
        <Breadcrumb title={"shop"} />
      </div>
      <section className={ShopStyle.products}>
        {loading ? (
          <div className="spinner-container">
            <ClipLoader color="#3498db" loading={loading} size={50} />
          </div>
        ) : (
          <ul>
            {currentItems.map((product) => (
              <li key={uuidv4()} className={ShopStyle.productItem}>
                <div className={ShopStyle.imageContainer}>
                  <div className={ShopStyle.imageWrapper}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className={ShopStyle.productImage}
                    />
                  </div>
                </div>
                <div className={ShopStyle.productDetails}>
                  <Link
                    to={`/shop/Product/${product.id}/${encodeURIComponent(
                      product.title
                    )}`}
                    className={ShopStyle.productTitle}
                  >
                    {product.title}
                  </Link>
                  <h6 className={ShopStyle.productCategory}>
                    {product.category}
                  </h6>
                  <p className={ShopStyle.productPrice}>
                    {formatCurrency(product.price)}
                  </p>
                </div>
                <AddToCart product={product} />
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className={ShopStyle.Pagination}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          containerClassName={ShopStyle.pagination}
          activeClassName={ShopStyle.active}
        />
      </section>
    </>
  );
}
