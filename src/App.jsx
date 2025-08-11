import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import * as reactSpring from "@react-spring/three";
import { Routes, Route } from "react-router-dom";
import myImage from "./assets/logo.png";
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
function App() {
  return (
    <div className="container">
      <Menu />
      <Routes>
        {/* <Route path="/pricing" element={<PricingPage />} /> */}
        <Route path="/works" element={<SelectedWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="hero-section">
        {/* Background blur effects */}
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
          }}
        >
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23ebedff&color2=%2338549e&color3=%23020c1b&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=1.8&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&type=waterPlane&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false"
          />
        </ShaderGradientCanvas>

        {/* Hero Section */}
        <div className="hero">
          <h1 className="hero-title">
            We create remarkable
            <br />
            and exciting digital
            <br />
            adventures
          </h1>

          <button className="cta-btn">
            <span>digital solutions</span>
            <div className="cta-icon">
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l9.2-9.2M17 17V7H7"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
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
