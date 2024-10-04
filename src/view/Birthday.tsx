import React from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import BirthdayCake from "./../containers/BirthdayCake";

class BirthDay extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BirthdayCake />
        <Footer />
      </>
    );
  }
}
export default BirthDay;
