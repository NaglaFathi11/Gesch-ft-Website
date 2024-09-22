import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// import Breadcrumb from "../../Components/BreadCrumbs/BreadCrumbs";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      {/* <Breadcrumb /> */}
      <Outlet />
      <Footer />
    </>
  );
}
