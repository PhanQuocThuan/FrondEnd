import React from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import SpCart from "../containers/SpCart";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SpCart />
        <Footer />
      </>
    );
  }
}
export default Home;
