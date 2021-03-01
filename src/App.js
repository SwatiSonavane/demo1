import React, { useState } from "react";
import test from "./jsons/test.json";
import "./App.css";
import Header from "./components/Header";
import BurgerMenu from "./components/BurgerMenu";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BurgerMenu />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
