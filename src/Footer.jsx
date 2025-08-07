import React from "react";
import "./Footer.css";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

import Magnet from "./Magnet";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main content section */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-wrapper">
              <span className="footer-title">
                LET'S BRING
                <br />
                YOUR IDEA
                <br />
                TO LIFE
              </span>
            </div>

            <Magnet
              padding={100}
              magnetStrength={2}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.5s ease-in-out"
              wrapperClassName="magnet-wrapper"
              innerClassName="magnet-inner"
            >
              <button className="get-in-touch-btn">
                <span>GET IN TOUCH</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Magnet>
          </div>
        </div>
      </div>

      {/* Bottom section with contact info */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-info">
            <div className="footer-column">
              <h3>Contact</h3>
              <p>+33758352246</p>
              <p>info@platoonpro.com</p>
            </div>

            <div className="footer-column">
              <h3>Get In Touch</h3>
              <p>5 parv. alan turing</p>
              <p>75013 paris, france</p>
            </div>

            <div className="footer-column">
              <h3>Social</h3>
              <div className="social-links">
                <a href="#" className="social-link">
                  INTAGRAM
                </a>
                <a href="#" className="social-link">
                  BEHANCE
                </a>
                <a href="#" className="social-link">
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
