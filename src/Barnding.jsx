import React, { useEffect, useRef, useState } from "react";
import "./SelectedWork.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import b1Image from "./assets/b1.jpg";
import b2Image from "./assets/b2.jpg";
import b3Image from "./assets/b3.jpg";
import b4Image from "./assets/b4.jpg";
import b5Image from "./assets/b5.jpg";
import b6Image from "./assets/b6.jpg";
import videoSample from "./assets/v2.mp4"; // Your video file

gsap.registerPlugin(ScrollTrigger);

const imageData = [
  {
    src: b1Image,
    title: "Branding Project",
    desc: "We developed a stunning branding experience with rich visuals, detailed identity work, and a multi-platform presentation.",
    col1: [b1Image, b2Image, b3Image],
    col2: [b4Image, b5Image],
    video: videoSample,
  },
  {
    src: b2Image,
    title: "Luxury Skincare",
    desc: "Elegant and minimalistic design for a premium skincare brand.",
    col1: [b2Image, b3Image, b6Image],
    col2: [b1Image, b4Image],
    video: videoSample,
  },
  {
    src: b3Image,
    title: "Creative Campaign",
    desc: "A bold and colorful approach to brand storytelling.",
    col1: [b3Image, b4Image, b5Image],
    col2: [b6Image, b1Image],
    video: videoSample,
  },
  {
    src: b4Image,
    title: "Fashion Identity",
    desc: "A modern and sleek visual identity for a fashion startup.",
    col1: [b4Image, b5Image, b6Image],
    col2: [b1Image, b2Image],
    video: videoSample,
  },
  {
    src: b5Image,
    title: "Product Packaging",
    desc: "Eye-catching packaging design that makes your product pop off the shelf.",
    col1: [b5Image, b1Image, b3Image],
    col2: [b2Image, b4Image],
    video: videoSample,
  },
  {
    src: b6Image,
    title: "Event Branding",
    desc: "Immersive branding for unforgettable experiences.",
    col1: [b6Image, b2Image, b4Image],
    col2: [b1Image, b3Image],
    video: videoSample,
  },
];

const Branding = () => {
  const brandingRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    gsap.utils.toArray(".branding-image").forEach((img) => {
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

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("image-modal")) {
      setSelectedImage(null);
    }
  };

  return (
    <div
      className="branding-section"
      ref={brandingRef}
      onMouseMove={handleMouseMove}
    >
      <div className="container3">
        <div className="branding-layout">
          <h2 className="branding-main-title">Branding</h2>

          <div className="branding-items-scattered">
            {imageData.map((item, index) => (
              <div
                className={`branding-item item-${index + 1}`}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedImage(item)}
              >
                <div className="branding-image-container">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="branding-image"
                  />
                  <p className="item-label">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cursor Button */}
          {hoveredIndex !== null && (
            <div
              className="hover-button"
              style={{
                top: `${cursorPos.y}px`,
                left: `${cursorPos.x}px`,
              }}
            >
              View Details
            </div>
          )}

          {/* Modal Popup */}
          {selectedImage && (
            <div className="image-modal" onClick={handleCloseModal}>
              <div className="modal-content">
                <button
                  className="close-btn"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.desc}</p>
                <div className="modal-grid">
                  <div className="modal-col">
                    {selectedImage.col1.map((img, i) => (
                      <img key={i} src={img} alt={`col1-${i}`} />
                    ))}
                  </div>
                  <div className="modal-col">
                    {selectedImage.col2.map((img, i) => (
                      <img key={i} src={img} alt={`col2-${i}`} />
                    ))}
                    <div className="custom-video-container">
                      <video
                        ref={(el) => (selectedImage.videoRef = el)}
                        src={selectedImage.video}
                        onClick={() => {
                          if (selectedImage.videoRef.paused) {
                            selectedImage.videoRef.play();
                          } else {
                            selectedImage.videoRef.pause();
                          }
                        }}
                      ></video>
                      <button
                        className="video-play-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (selectedImage.videoRef.paused) {
                            selectedImage.videoRef.play();
                          } else {
                            selectedImage.videoRef.pause();
                          }
                        }}
                      >
                        ▶
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="branding-subtitle-bottom">
            <p className="section-subtitle">
              // We cook up logos, color palettes, menus, and signage that feel
              like the first bite—unforgettable. From food-truck charm to
              fine-dining prestige, we plate your story so guests taste it
              before they even sit down.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
