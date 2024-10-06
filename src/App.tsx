// import Card from "./Card";
import Home from "./view/Home";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BirthDay from "./view/Birthday";
import Other from "./view/Other";
import Cart from "./view/Cart";
import { CartProvider } from "./component/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/birthday" element={<BirthDay />} />
          <Route path="/other" element={<Other />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
