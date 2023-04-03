import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Delivery from "./pages/Delivery/Delivery";
import About from "./pages/About/About";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Burger from "./pages/Burger/Delivery";
import Sushi from "./pages/Sushi/Delivery";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Delivery />} />
        <Route path="/sushi" element={<Sushi />} />
        <Route path="/burger" element={<Burger />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
