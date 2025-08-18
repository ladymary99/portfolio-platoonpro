import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./Menu.css";
import myImage from "./assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // change bg after 20px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { number: "/01", label: "PRICING", link: "/pricing" },
    { number: "/02", label: "WORKS", link: "/works" },
    { number: "/03", label: "CONTACT", link: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "glassy" : "transparent"}`}>
        <div className="logo">
          <img src={myImage} alt="Logo" />
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
                <Link
                  to={item.link}
                  key={i}
                  className="menu-item"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="menu-number">{item.number}</span>
                  <span className="menu-label">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="menu-socials">
              <a
                href="https://www.instagram.com/platoonproo"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                IG
              </a>
              <a
                href="https://www.linkedin.com/company/platoonpro/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                LIN
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                FAC
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
