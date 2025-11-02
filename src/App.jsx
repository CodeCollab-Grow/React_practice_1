import { useState } from "react";
import { motion } from "motion/react";
import "./App.css";
import Navbar from "./assets/components/navbar";
import Body from "./assets/components/body";
import Footer from "./assets/components/footer";
import About from "./assets/components/more";
import MouseMask from "./assets/components/mouse";

function App() {
  return (
    <div className="">
      <Navbar />

      <Body />
      <About />
      <Footer />
    </div>
  );
}

export default App;
