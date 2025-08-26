import React, { useEffect, useRef, useState } from "react";
import "./SelectedWork.css";

import myImage1 from "./assets/website1.png";
import myImage2 from "./assets/website2.png";
import myImage3 from "./assets/website3.png";
import myImage4 from "./assets/design4.jpg";
import myImage5 from "./assets/website3.png";
import myImage6 from "./assets/website2.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const portfolioRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: "MAK & DRINK",
      tags: ["Figma", "React", "Node.js"],
      mockupImage: myImage1,
      description: "Vos Tissus - Explore more",
    },
    {
      id: 2,
      title: "MAMIAMO Italian Restaurant",
      tags: ["Branding", "Figma", "React"],
      mockupImage: myImage2,
      description: "Confidence - Shop now",
    },
    {
      id: 3,
      title: "Restaurant",
      tags: ["Figma", "Branding", "React"],
      mockupImage: myImage3,
      description: "DRINKS - About us, Our menu, Reservations, Contact us",
    },
    {
      id: 4,
      title: "Cazador Restaurant",
      tags: ["Branding", "Wordpress"],
      mockupImage: myImage4,
      description: "Jewelry Collection",
    },
  ];

  const morePortfolioItems = [
    {
      id: 5,
      title: "Bakery Landing Page",
      tags: ["UI/UX", "Figma"],
      mockupImage: myImage5,
      description: "Fresh Bread & Pastries",
    },
    {
      id: 6,
      title: "Coffee Shop Website",
      tags: ["React", "Tailwind"],
      mockupImage: myImage6,
      description: "Order your favorite coffee online",
    },
  ];

  const handleMouseMove = (e, id) => {
    const cursor = document.getElementById(`cursor-${id}`);
    if (!cursor) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    cursor.style.opacity = "1";
  };

  const handleMouseLeave = (id) => {
    const cursor = document.getElementById(`cursor-${id}`);
    if (cursor) cursor.style.opacity = "0";
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
            scrub: true,
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
          <p className="subtitles">
            // A showcase of our recent projects for restaurants and cafés, each
            crafted to highlight their unique identity. From branding to
            websites and content, our work reflects quality, creativity, and a
            passion for helping clients stand out and grow in a competitive
            market.
          </p>

          {/* Initial Projects */}
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
                    View Project
                  </div>
                </div>

                <div className="item-info">
                  <div className="item-details">
                    <span className="bullet">•</span>
                    <span className="item-title">{item.title}</span>
                  </div>
                  <div className="tags">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="tagworks">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects (revealed on button click) */}
          {showMore && (
            <div className="portfolio-grid">
              {morePortfolioItems.map((item) => (
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
                      View Project
                    </div>
                  </div>

                  <div className="item-info">
                    <div className="item-details">
                      <span className="bullet">•</span>
                      <span className="item-title">{item.title}</span>
                    </div>
                    <div className="tags">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="tagworks">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* More Projects Button */}
          <div className="more-btn-wrapper">
            <button className="more-btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "More Projects"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
