// import Card from "./Card";
import Home from "./view/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BirthDay from "./view/Birthday";
import Other from "./view/Other";
import Cart from "./view/Cart";
import { CartProvider } from "./component/CartContext";
import Admin from "./Layout/admin";
import User from "./page/AdminUsers";
import Products from "./page/AdminProducts";
import Dashboard from "./page/Dashboard";
import Profile from "./page/Profile";
import ProtectedRoute from "./component/ProtectedRoute";
import { AuthProvider } from "./component/AuthContext";
import Detail from "./view/Detail";

function App() {
  return (
    <CartProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/birthday" element={<BirthDay />} />
            <Route path="/other" element={<Other />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            >
              <Route path="user" element={<User />} />
              <Route path="products" element={<Products />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </CartProvider>
  );
}

export default App;
