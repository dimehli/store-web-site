
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Footer from "./components/Footer";
import MapSection from './components/MapSection';
import Home from "./pages/shop/Home";



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Registration" element={<Registration />} />
          </Routes>
        </Router>
        <Footer/>
        <MapSection />
      </ShopContextProvider>

    </div>
  );
}

export default App;