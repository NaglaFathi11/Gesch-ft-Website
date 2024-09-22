import { useEffect } from "react";
import HomeStyle from "./Home.module.css";
import { Link } from "react-router-dom";
import { useCategoriesStore } from "../../Store";
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {
  const { categories, getCategories, loading } = useCategoriesStore();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <>
      <section className={HomeStyle.background}>
        <img
          src="/assets/categories/bg.png"
          alt="Categories-bg-1"
          loading="lazy"
          className={HomeStyle.backgroundImg}
        />
        <h2 className={HomeStyle.h2}>
          <span>Explore</span> <br /> Our Categories
        </h2>
      </section>
      <section className={HomeStyle.content}>
        {loading ? (
          <div className="spinner-container">
            <ClipLoader color="#3498db" loading={loading} size={50} />
          </div>
        ) : (
          categories.map((category) => {
            return (
              <div key={category} className={HomeStyle.category}>
                <Link to={`/shop/${category}`} className={HomeStyle.title}>
                  {" "}
                  {category}
                </Link>
              </div>
            );
          })
        )}
      </section>
    </>
  );
}
