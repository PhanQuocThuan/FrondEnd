import React from "react";
import "./css/Body.css";
import Product from "../component/Product";

const Body = () => {
  return (
    <div className="card-body p-3 mb-2 bg-warning-subtle text-warning-emphasis">
      <div id="row justify-content-center align-items-center">
        <h2>CÁC SẢN PHẨM CỦA CHÚNG TÔI</h2>
      </div>
      <div className="row justify-content-center justify-content-around">
        <Product
          img={`${process.env.PUBLIC_URL}/images/dessert/BurntCaramelSignature.jpg`}
          name="Burnt Caramel"
          price={320000}
          status={true}
          quantity={100}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/cake/BanhChung.jpg`}
          name="Bánh Chưng"
          price={100000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/cake/BanhPia.jpg`}
          name="Bánh Pía"
          price={150000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/LoveCake.jpg`}
          name="Love Cake"
          price={200000}
        />
      </div>
      <div className="row justify-content-center justify-content-around">
        <Product
          img={`${process.env.PUBLIC_URL}/images/dessert/PinkGuava.jpg`}
          name="Pink Guava"
          price={220000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/ChocolateCake.jpg`}
          name="Chocolate Cake"
          price={90000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/dessert/Strawberry.jpg`}
          name="Strawberry"
          price={120000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/dessert/CreamyChoco.jpg`}
          name="Creamy Choco"
          price={250000}
        />
      </div>
      <div className="row justify-content-center justify-content-around">
        <Product
          img={`${process.env.PUBLIC_URL}/images/cake/BanhTet.jpg`}
          name="Bánh Tét"
          price={230000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/dessert/TropicalCoconut.jpg`}
          name="Tropical Coconut"
          price={80000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/FragranceOil.jpg`}
          name="Fragrance Oil"
          price={70000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/dessert/YuzuLemon.jpg`}
          name="Yuzu Lemon"
          price={290000}
        />
      </div>
    </div>
  );
};

export default Body;
