import React from "react";
import "./css/Body.css";
import Product from "../component/Product";

const OtherCake = () => {
  return (
    <div className="card-body p-3 mb-2 bg-warning-subtle text-warning-emphasis">
      <div id="row justify-content-center align-items-center">
        <h2>CÁC SẢN PHẨM CỦA CHÚNG TÔI</h2>
      </div>
      <div className="row justify-content-center justify-content-around">
        <Product
          id={9}
          img={`${process.env.PUBLIC_URL}/images/cake/BanhChung.jpg`}
          name="Bánh Chưng"
          price={320000}
          status={true}
        />
        <Product
          id={10}
          img={`${process.env.PUBLIC_URL}/images/cake/BanhPia.jpg`}
          name="Bánh Pía"
          price={100000}
        />
        <Product
          id={11}
          img={`${process.env.PUBLIC_URL}/images/cake/BanhTet.jpg`}
          name="Bánh Tét"
          price={150000}
        />
        <Product
          id={12}
          img={`${process.env.PUBLIC_URL}/images/cake/BanhMiTron.jpg`}
          name="Bánh Mì Tròn"
          price={200000}
        />
      </div>
      <div className="row justify-content-center justify-content-around">
        <Product
          id={13}
          img={`${process.env.PUBLIC_URL}/images/cake/BriocheBread.jpg`}
          name="Brioche Bread"
          price={220000}
        />
        <Product
          id={14}
          img={`${process.env.PUBLIC_URL}/images/cake/ChallahBread.jpg`}
          name="Challah Bread"
          price={90000}
        />
        <Product
          id={15}
          img={`${process.env.PUBLIC_URL}/images/cake/MiNem.jpg`}
          name="Bánh mì nem"
          price={120000}
        />
        <Product
          id={16}
          img={`${process.env.PUBLIC_URL}/images/cake/SwirlBread.jpg`}
          name="Swirl Bread"
          price={250000}
        />
      </div>
    </div>
  );
};

export default OtherCake;
