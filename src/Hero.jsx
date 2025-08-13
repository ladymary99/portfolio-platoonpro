// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";
import v4 from "./assets/v4.mp4";
import Image from "./assets/design1.png";
import b2Image from "./assets/b2.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  /* ---------- scroll-triggered entrance ---------- */
  useEffect(() => {
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

  /* ---------- hover blur ---------- */
  useEffect(() => {
    const boxes = gsap.utils.toArray(".box");

    boxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        gsap.to(
          boxes.filter((b) => b !== box),
          { filter: "blur(4px)", duration: 0.35, ease: "power2.out" }
        );
      });

      box.addEventListener("mouseleave", () => {
        gsap.to(boxes, {
          filter: "blur(0px)",
          duration: 0.35,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <section className="hero">
      <div className="main-space">
        {/* LEFT */}
        <div className="left-col" ref={leftRef}>
          <div className="box video">
            <video src={v4} muted autoPlay loop playsInline />
          </div>
          <div className="box image">
            <img src={Image} alt="pic 1" />
          </div>
          <div className="box glass">
            <p>Glassy card</p>
          </div>
          <div className="box image">
            <img src={b2Image} alt="pic 2" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="right-col" ref={rightRef}>
          <h1>We Make your restuarant online</h1>
          {/* <p>
            We craft beautiful digital experiences that inspire and engage
            users. Scroll down to discover more.
          </p> */}
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
