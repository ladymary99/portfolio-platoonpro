import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

import firstImage from "./assets/website1.png"; // Top big image
import overlayImage from "./assets/book.png"; // small overlay on first image
import glassBackground from "./assets/june3.png"; // glassy box background
import cornerImage from "./assets/june5.png"; // right image in glassy box
import videoSrc from "./assets/v4.mp4"; // video for glassy box

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Scroll animations
  useEffect(() => {
    const boxes = gsap.utils.toArray(".box");

    gsap.fromTo(
      boxes,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
      }
    );

    // Hover blur: blur all other boxes
    boxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        gsap.to(
          boxes.filter((b) => b !== box),
          {
            filter: "blur(4px)",
            duration: 0.3,
            ease: "power2.out",
          }
        );
      });
      box.addEventListener("mouseleave", () => {
        gsap.to(boxes, {
          filter: "blur(0px)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  const toggleVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="hero">
      <div className="main-space">
        {/* LEFT COLUMN */}
        <div className="left-col" ref={leftRef}>
          {/* First Image */}
          <div className="box big-image">
            <img src={firstImage} alt="First" />
            <img className="overlay-img" src={overlayImage} alt="Overlay" />
          </div>

          {/* Glassy Box with video + image */}
          <div className="box glass">
            <img className="glass-bg" src={glassBackground} alt="Glass bg" />

            {/* Video left */}
            <div className="corner-box video-box">
              <video ref={videoRef} src={videoSrc} muted playsInline />
              <button className="play-btn" onClick={toggleVideo}>
                {isPlaying ? "❚❚" : "▶"}
              </button>
            </div>

            {/* Image right */}
            <div className="corner-box image-box">
              <img src={cornerImage} alt="Right" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-col" ref={rightRef}>
          <h1>We Make your restaurant online</h1>
          <p>
            Elevating restaurant brands through elegant design, powerful
            storytelling, and digital experiences that leave a lasting
            impression.
          </p>
          <button className="cta-btn">
            <span>Digital solutions</span>
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
        </div>
      </div>
    </section>
  );
}
