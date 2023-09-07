import "./App.css";

import Header from "./components/header-component";
import About from "./components/about-component";
import Home from "./components/home-component";
import Product from "./pages/product-component";
import CreateProduct from "./pages//createProduct-component";
import ProductDetails from "./pages//productDetails-component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./pages/productList-component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="product">
            <Route path="" element={<Product />} />
            <Route path="create" element={<CreateProduct />} />
            <Route path="details" element={<ProductDetails />} />
            <Route path="list" element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
