import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import "./Menu.css";
import myImage from "./assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        ".menu-item",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, [menuOpen]);

  const menuItems = [
    { number: "/01", label: "PRICING", active: true },
    { number: "/02", label: "WORKS" },
    { number: "/03", label: "CONTACT" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={myImage} alt="Description" />
        </div>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="menu-container">
              {menuItems.map((item, i) => (
                <div className="menu-item" key={i}>
                  <span className="menu-number">{item.number}</span>{" "}
                  <span className="menu-label">
                    {item.label}
                    {item.active}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="menu-socials">
              <div className="social-icon">IG</div>
              <div className="social-icon">LIN</div>
              <div className="social-icon">FAC</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
