import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Navigate } from "react-router";
import Cart from "./pages/Cart";
import Home from './pages/Home';
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register ";
import SingleProduct from "./pages/SingleProduct";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/products/*" element={<ProductList/>}/>
          <Route path="/products/:category*" element={<ProductList/>}/>
          <Route path="/product/:productId/*" element={<SingleProduct/>}/>
          <Route path="/signup" element={ <Register/>}/>
          <Route path="/login/*" element={user ? <Navigate to={"/"}/> : <Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
