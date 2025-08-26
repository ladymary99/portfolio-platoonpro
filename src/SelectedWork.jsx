import React, { useRef, useState, useEffect } from "react";
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

  // GSAP animations
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

  const renderPortfolioItem = (item) => (
    <div key={item.id} className="portfolio-item">
      <div className="mockup-container">
        <img
          src={item.mockupImage}
          alt={item.description}
          className="mockup-image"
        />
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
  );

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

          <div className="portfolio-grid">
            {portfolioItems.map(renderPortfolioItem)}
          </div>

          {showMore && (
            <div className="portfolio-grid">
              {morePortfolioItems.map(renderPortfolioItem)}
            </div>
          )}

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
