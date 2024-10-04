import React from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Body from "../containers/Body";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}
export default Home;
