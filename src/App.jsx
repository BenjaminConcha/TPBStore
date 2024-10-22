import NavBar from "./components/NavBar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Store from "./pages/Store";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Faq from "./pages/Faq";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
