import React from "react";
import "./SelectedWork.css";
import TiltedCard from "./TiltedCard";
import myImage1 from "./assets/res1.png";
import myImage2 from "./assets/RES2.png";
import myImage3 from "./assets/RES3.png";

import b1Image from "./assets/b1.jpg";
import b2Image from "./assets/b2.jpg";
import b3Image from "./assets/b3.jpg";
import b4Image from "./assets/b4.jpg";
import b5Image from "./assets/b5.jpg";
import b6Image from "./assets/b6.jpg";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Resturant",
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

  return (
    <div className="portfolio-section">
      {/* Selected Works Section */}
      <div className="selected-works">
        <div className="container">
          <span className="main-title">Selected Works</span>
          <p className="subtitle">
            // We help brands grow and tell their stories to the world.
          </p>

          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
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

      <div className="branding-section">
        <div className="container">
          <div className="branding-layout">
            {/* Large BRANDING title */}
            <h2 className="branding-main-title">Barnding</h2>

            {/* Scattered product images - exact positioning from original */}
            <div className="branding-items-scattered">
              <div className="branding-item item-1">
                <TiltedCard
                  imageSrc={b1Image}
                  altText="beauty stone"
                  captionText="beauty stone"
                  containerHeight="250px"
                  containerWidth="200px"
                  imageHeight="250px"
                  imageWidth="200px"
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                />
                <p className="item-label">beauty stone</p>
              </div>
              <div className="branding-item item-2">
                <TiltedCard
                  imageSrc={b2Image}
                  altText="beauty stone"
                  captionText="beauty stone"
                  containerHeight="250px"
                  containerWidth="200px"
                  imageHeight="250px"
                  imageWidth="200px"
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                />
                <p className="item-label">beauty stone</p>
              </div>
              <div className="branding-item item-3">
                <TiltedCard
                  imageSrc={b3Image}
                  altText="beauty stone"
                  captionText="beauty stone"
                  containerHeight="250px"
                  containerWidth="200px"
                  imageHeight="250px"
                  imageWidth="200px"
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                />
                <p className="item-label">beauty stone</p>
              </div>

              <div className="branding-item item-4">
                <TiltedCard
                  imageSrc={b4Image}
                  altText="beauty stone"
                  captionText="beauty stone"
                  containerHeight="250px"
                  containerWidth="200px"
                  imageHeight="250px"
                  imageWidth="200px"
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                />
                <p className="item-label">beauty stone</p>
              </div>
              <div className="branding-item item-5">
                <TiltedCard
                  imageSrc={b5Image}
                  altText="beauty stone"
                  captionText="beauty stone"
                  containerHeight="250px"
                  containerWidth="200px"
                  imageHeight="250px"
                  imageWidth="200px"
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                />
                <p className="item-label">Beauty stone</p>
              </div>
              <div className="branding-item item-6">
                <TiltedCard
                  imageSrc={b6Image}
                  altText="beauty stone"
                  captionText="dermi"
                  containerHeight="250px"
                  containerWidth="200px"
                  imageHeight="250px"
                  imageWidth="200px"
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                />
                <p className="item-label">Dermi</p>
              </div>
            </div>

            {/* Bottom subtitle */}
            <div className="branding-subtitle-bottom">
              <p className="section-subtitle">
                // We help brands grow and tell their stories to the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
