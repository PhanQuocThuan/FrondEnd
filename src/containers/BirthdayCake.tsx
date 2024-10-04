import React from "react";
import "./css/Body.css";
import Product from "../component/Product";

const BirthdayCake = () => {
  return (
    <div className="card-body p-3 mb-2 bg-warning-subtle text-warning-emphasis">
      <div id="row justify-content-center align-items-center">
        <h2>CÁC SẢN PHẨM CỦA CHÚNG TÔI</h2>
      </div>
      <div className="row justify-content-center justify-content-around">
        <Product
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/ChocolateCake.jpg`}
          name="Chocolate Cake"
          price={320000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/ColorfulCake.jpg`}
          name="Colorful Cake"
          price={100000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/ConfettiCake.jpg`}
          name="Confetti Cake"
          price={150000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/ForestCake.jpg`}
          name="Forest Cake"
          price={200000}
        />
      </div>
      <div className="row justify-content-center justify-content-around">
        <Product
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/FragranceOil.jpg`}
          name="Fragrance Oil"
          price={220000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/LoveCake.jpg`}
          name="Love Cake"
          price={90000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/PremiumCake.jpg`}
          name="Premium Cake"
          price={120000}
        />
        <Product
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/SpiderManCake.jpg`}
          name="Spider Man Cake"
          price={250000}
        />
      </div>
    </div>
  );
};

export default BirthdayCake;
