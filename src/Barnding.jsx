import React, { useEffect, useRef, useState } from "react";
import "./SelectedWork.css";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import b1Image from "./assets/restu1.png";
import brand1 from "./assets/restu2.png";
import brand2 from "./assets/restu3.png";
import brand3 from "./assets/restu4.png";
import brand4 from "./assets/restu5.png";

import b2Image from "./assets/vona1.png";
import vona from "./assets/vona2.png";
import vona2 from "./assets/vona3.png";
import vona3 from "./assets/vona4.png";
import vona4 from "./assets/vona5.png";
import vona5 from "./assets/vona6.png";

import b3Image from "./assets/nostrum.png";
import no1 from "./assets/nostrum2.png";
import no2 from "./assets/nostrum3.png";
import no3 from "./assets/nostrum4.png";
import no4 from "./assets/nostrum5.png";
import no5 from "./assets/nostrum6.png";

import b4Image from "./assets/ciaco.png";
import ciaco1 from "./assets/ciaco2.png";
import ciaco2 from "./assets/ciaco3.png";
import ciaco3 from "./assets/ciaco4.png";
import ciaco4 from "./assets/ciaco5.png";
import ciaco5 from "./assets/ciaco6.png";

import b5Image from "./assets/june.png";
import june1 from "./assets/june2.png";
import june2 from "./assets/june3.png";
import june3 from "./assets/june4.png";
import june4 from "./assets/june5.png";
import june5 from "./assets/june6.png";

import b6Image from "./assets/the.png";
import the1 from "./assets/the2.png";
import the2 from "./assets/the3.png";
import the3 from "./assets/the4.png";
import the4 from "./assets/the5.png";
import the5 from "./assets/the6.png";

// import videoSample from "./assets/v2.mp4";

gsap.registerPlugin(ScrollTrigger);

const imageData = [
  {
    src: b1Image,
    title: "DONDE ENCARNA",
    desc: "Creative branding for DONDE ENCARNA, capturing its unique identity and culinary experience through logo, visuals, and design elements.",
    col1: [brand1, brand2, brand3],
    col2: [brand4, b1Image],
    video: b1Image,
  },
  {
    src: b2Image,
    title: "VONA Restaurant",
    desc: "Distinctive branding for VONA, showcasing its identity and culinary vibe through thoughtful design and visuals.",
    col1: [vona, vona2, vona3],
    col2: [vona4, vona5],
    video: b2Image,
  },
  {
    src: b3Image,
    title: "NOSTRUM",
    desc: "Elegant and memorable branding for NOSTRUM, highlighting its unique identity and dining experience through cohesive design and visuals.",
    col1: [no1, no2, no3],
    col2: [no4, no5],
    video: b3Image,
  },
  {
    src: b4Image,
    title: "CIACNBO",
    desc: "Creative branding for CIACNBO, reflecting its unique identity and culinary experience through engaging visuals and design elements.",
    col1: [ciaco1, ciaco2, ciaco3],
    col2: [ciaco4, ciaco5],
    video: b4Image,
  },
  {
    src: b5Image,
    title: "JUNE",
    desc: "Fresh and modern branding for JUNE, capturing its unique culinary identity through cohesive visuals and design.",
    col1: [june1, june2, june3, june4],
    col2: [june5],
    video: b5Image,
  },
  {
    src: b6Image,
    title: "The Qahwa",
    desc: "Inviting and memorable branding for The Qahwa, a coffee shop, highlighting its warm atmosphere and unique coffee experience through thoughtful visuals and design.",
    col1: [the1, the2, the3],
    col2: [the4, the5],
    video: b6Image,
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
              // Your brand is more than just a logo it's the feeling people
              remember. We craft bold, consistent identities that tell your
              story and set you apart. A powerful brand captures your essence
              and connects emotionally with your audience through thoughtful
              design, meaningful storytelling, and visuals that leave a lasting
              impression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
