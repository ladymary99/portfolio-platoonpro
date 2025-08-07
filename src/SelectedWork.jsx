import React from "react";
import "./SelectedWork.css";
import myImage1 from "./assets/b7.jpg";
import myImage2 from "./assets/b7.jpg";
import myImage3 from "./assets/b7.jpg";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const portfolioRef = useRef(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Restaurant",
      tags: ["branding", "UI design"],
      mockupImage: myImage1,
      description: "Vos Tissus - Explore more",
    },
    {
      id: 2,
      title: "ILOVETISSUS",
      tags: ["branding"],
      mockupImage: myImage2,
      description: "Confidence - Shop now",
    },
    {
      id: 3,
      title: "ILOVETISSUS",
      tags: ["web design"],
      mockupImage: myImage3,
      description: "DRINKS - About us, Our menu, Reservations, Contact us",
    },
    {
      id: 4,
      title: "ILOVETISSUS",
      tags: ["branding"],
      mockupImage:
        "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400&h=300&fit=crop",
      description: "Jewelry Collection",
    },
  ];
  const handleMouseMove = (e, id) => {
    const cursor = document.getElementById(`cursor-${id}`);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (cursor) {
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      cursor.style.opacity = 1;
    }
  };

  const handleMouseLeave = (id) => {
    const cursor = document.getElementById(`cursor-${id}`);
    if (cursor) {
      cursor.style.opacity = 0;
    }
  };

  useEffect(() => {
    gsap.utils.toArray(".mockup-image").forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 0.95 },
        {
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true, // smooth scroll sync
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="portfolio-section" ref={portfolioRef}>
      <div className="selected-works">
        <div className="container">
          <span className="main-title">Selected Works</span>
          <p className="subtitle">
            // We help brands grow and tell their stories to the world.
          </p>

          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="portfolio-item"
                onMouseMove={(e) => handleMouseMove(e, item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
              >
                <div className="mockup-container">
                  <img
                    src={item.mockupImage}
                    alt={item.description}
                    className="mockup-image"
                  />
                  <div className="custom-cursor" id={`cursor-${item.id}`}>
                    View More Projects
                  </div>
                </div>

                <div className="item-info">
                  <div className="item-details">
                    <span className="bullet">•</span>
                    <span className="item-title">{item.title}</span>
                  </div>
                  <div className="tags">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
