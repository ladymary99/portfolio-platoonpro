import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import * as reactSpring from "@react-spring/three";
import { Routes, Route } from "react-router-dom";
import SelectedWork from "./SelectedWork.jsx";
import Footer from "./Footer.jsx";
import "./index.css";
import Services from "./Services.jsx";
import Barnding from "./Barnding.jsx";
import VideoSection from "./VideoSection.jsx";
import AboutSection from "./AboutSection.jsx";
import FlowingMenu from "./FlowingMenu.jsx";
import Menu from "./Menu.jsx";
import Contact from "./Contact.jsx";
import Hero from "./Hero.jsx";
function App() {
  return (
    <div className="container">
      <Menu />
      <Routes>
        {/* <Route path="/pricing" element={<PricingPage />} /> */}
        <Route path="/works" element={<SelectedWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Hero />
      <AboutSection />
      <FlowingMenu />
      <Services />
      <SelectedWork />
      <Barnding />
      <VideoSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
