import { useState } from "react";
import myImage from "./assets/logo.png"; // example logo import

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="nav desktop-nav">
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

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)}>
          Menu
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-header">
            <span>bynikistudio.com</span>
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              CLOSE
            </button>
          </div>

          <ul className="mobile-menu-list">
            <li>
              <span>/01</span> HOME <span className="dot">•</span>
            </li>
            <li>
              <span>/02</span> WORKS
            </li>
            <li>
              <span>/03</span> PLAYGROUND
            </li>
            <li>
              <span>/04</span> ABOUT
            </li>
            <li>
              <span>/05</span> CONTACT
            </li>
          </ul>

          <div className="mobile-menu-socials">
            <button>Instagram</button>
            <button>Dribbble</button>
            <button>Behance</button>
          </div>
        </div>
      )}
    </>
  );
}
