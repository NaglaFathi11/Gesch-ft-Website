// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Layout from "./Pages/Layout/Layout";
// import Home from "./Pages/Home/Home";
// import Shop from "./Pages/Shop/Shop";
// import SingleProduct from "./Pages/SingleProduct/SingleProduct";
// import Cart from "./Pages/Cart/Cart";
// import Contact from "./Pages/Contact/Contact";
// import NotFound from "./Pages/NotFound/NotFound";
// import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function App() {
//   return (
//     <>
//       <Router>
//         <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="shop" element={<Shop />} />
//             <Route path="shop/:category" element={<Shop />} />
//             <Route path="shop/Product/:id/:title" element={<SingleProduct />} />
//             <Route path="cart" element={<Cart />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="*" element={<NotFound />} />
//           </Route>
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Suspense } from "react";

// Lazy loading
const Home = React.lazy(() => import("./Pages/Home/Home"));
const Shop = React.lazy(() => import("./Pages/Shop/Shop"));
const SingleProduct = React.lazy(() =>
  import("./Pages/SingleProduct/SingleProduct")
);
const Cart = React.lazy(() => import("./Pages/Cart/Cart"));
const Contact = React.lazy(() => import("./Pages/Contact/Contact"));
const NotFound = React.lazy(() => import("./Pages/NotFound/NotFound"));

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="shop/:category" element={<Shop />} />
              <Route
                path="shop/Product/:id/:title"
                element={<SingleProduct />}
              />
              <Route path="cart" element={<Cart />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
