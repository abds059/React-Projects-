import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import About from "./About";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/products">Products</Link> | 
                <Link to="/contact">Contact</Link> | 
                <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;