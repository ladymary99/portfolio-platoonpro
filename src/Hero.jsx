// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css"; // import the external CSS

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // left boxes slide in from left
    gsap.fromTo(
      ".box",
      { x: -120, opacity: 0 },
      {
        x: 0,
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

    // right column text & button slide in from right
    gsap.fromTo(
      ".right-col > *",
      { x: 120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="hero">
      <div className="mainspace ">
        {/* LEFT */}
        <div className="left-col" ref={leftRef}>
          <div className="box video">
            <video src="/sample.mp4" muted autoPlay loop playsInline />
          </div>

          <div className="box image">
            <img src="/img1.jpg" alt="pic 1" />
          </div>

          <div className="box glass">
            <p>Glassy card</p>
          </div>

          <div className="box image">
            <img src="/img2.jpg" alt="pic 2" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="right-col" ref={rightRef}>
          <h1>Welcome to Our Site</h1>
          <p>
            We craft beautiful digital experiences that inspire and engage
            users. Scroll down to discover more.
          </p>
          <button
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
