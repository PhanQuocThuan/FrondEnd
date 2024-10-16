import React from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import ProductDetail from "../component/ProductDetail";

class Detail extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ProductDetail />
        <Footer />
      </>
    );
  }
}
export default Detail;
