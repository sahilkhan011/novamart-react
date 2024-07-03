import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Contact from "./assets/Pages/Contact";
import Store from "./assets/Pages/Store";
import SubCategory from "./assets/Pages/SubCategory";
import Products from "./assets/Pages/Products";
import Login from "./assets/Pages/Login";
import Register from "./assets/Pages/Register";
import SignIn from "./assets/Pages/SignIn";
import ProductPage from "./assets/Pages/ProductPage";
import Container from "./Components/Container/Container";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/Login"
          element={
            <SignIn>
              <Login />
            </SignIn>
          }
        />
        <Route
          path="/Register"
          element={
            <SignIn>
              <Register />
            </SignIn>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Container>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/subcategory/:catid" element={<SubCategory />} />
                  <Route path="/products/:subcatid" element={<Products />} />
                  <Route path="/product/:productid" element={<ProductPage />} />
                </Routes>
              </Container>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
