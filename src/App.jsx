import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import * as reactSpring from "@react-spring/three";
import myImage from "./assets/logo.png";
import SelectedWork from "./SelectedWork.jsx";
import Footer from "./Footer.jsx";
import "./index.css";
import TargetCursor from "./TargetCursor";
import VideoSection from "./VideoSection";

function App() {
  return (
    <div className="container">
      {/* <div>
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />

        <h1>Hover over the elements below</h1>
        <button className="cursor-target">Click me!</button>
        <div className="cursor-target">Hover target</div>
      </div> */}
      );
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
        {/* Navigation */}
        <nav className="nav">
          <div className="logo">
            <img src={myImage} alt="Description" />
          </div>

          <div className="nav-center">
            <button className="nav-btn active">Services</button>
            <button className="nav-btn">About</button>
            <button className="nav-btn">Pricing</button>
          </div>

          <button className="nav-btn outline">
            let's discuss
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
        </nav>

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
      {/* Services Section */}
      <div className="services">
        <div className="services-container">
          <p className="services-subtitle">(our services)</p>

          <div className="services-list">
            <div className="dot"></div>
            <div className="service-item">
              <span className="service-number">01</span>
              <h3 className="service-title">Digital Design</h3>
            </div>
            {/* <div className="service-dots">
              <div className="dot"></div>
            </div> */}
            <div className="service-item">
              <span className="service-number">02</span>
              <h3 className="service-title">Branding</h3>
              <div className="service-dots"></div>
            </div>

            <div className="service-item">
              <span className="service-number">03</span>
              <h3 className="service-title">Strategy Research</h3>
              <div className="service-dots"></div>
            </div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
      <SelectedWork />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default App;
