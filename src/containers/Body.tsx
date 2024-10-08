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
          id={1}
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/ChocolateCake.jpg`}
          name="Chocolate Cake"
          price={320000}
          status={true}
        />
        <Product
          id={2}
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/ColorfulCake.jpg`}
          name="Colorful Cake"
          price={100000}
        />
        <Product
          id={10}
          img={`${process.env.PUBLIC_URL}/images/cake/BanhPia.jpg`}
          name="Bánh Pía"
          price={100000}
          status={true}
        />
        <Product
          id={4}
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/ForestCake.jpg`}
          name="Forest Cake"
          price={200000}
        />
      </div>
      <div className="row justify-content-center justify-content-around">
        <Product
          id={5}
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/FragranceOil.jpg`}
          name="Fragrance Oil"
          price={220000}
          status={true}
        />
        <Product
          id={13}
          img={`${process.env.PUBLIC_URL}/images/cake/BriocheBread.jpg`}
          name="Brioche Bread"
          price={220000}
          status={true}
        />
        <Product
          id={14}
          img={`${process.env.PUBLIC_URL}/images/cake/ChallahBread.jpg`}
          name="Challah Bread"
          price={90000}
        />
        <Product
          id={8}
          img={`${process.env.PUBLIC_URL}/images/birthdaycake/SpiderManCake.jpg`}
          name="Spider Man Cake"
          price={250000}
        />
      </div>
      <div className="row justify-content-center justify-content-around">
        <Product
          id={15}
          img={`${process.env.PUBLIC_URL}/images/cake/MiNem.jpg`}
          name="Bánh mì nem"
          price={120000}
          status={true}
        />
        <Product
          id={16}
          img={`${process.env.PUBLIC_URL}/images/cake/SwirlBread.jpg`}
          name="Swirl Bread"
          price={250000}
          status={true}
        />
        <Product
          id={14}
          img={`${process.env.PUBLIC_URL}/images/cake/ChallahBread.jpg`}
          name="Challah Bread"
          price={90000}
        />
        <Product
          id={12}
          img={`${process.env.PUBLIC_URL}/images/cake/BanhMiTron.jpg`}
          name="Bánh Mì Tròn"
          price={200000}
          status={true}
        />
      </div>
    </div>
  );
};

export default Body;
