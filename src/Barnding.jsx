import React, { useEffect, useRef } from "react";
import "./SelectedWork.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import b1Image from "./assets/b1.jpg";
import b2Image from "./assets/b2.jpg";
import b3Image from "./assets/b3.jpg";
import b4Image from "./assets/b4.jpg";
import b5Image from "./assets/b5.jpg";
import b6Image from "./assets/b6.jpg";

gsap.registerPlugin(ScrollTrigger);

const Branding = () => {
  const brandingRef = useRef(null);

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

  return (
    <div className="branding-section" ref={brandingRef}>
      <div className="container3">
        <div className="branding-layout">
          <h2 className="branding-main-title">Branding</h2>

          <div className="branding-items-scattered">
            {[b1Image, b2Image, b3Image, b4Image, b5Image, b6Image].map(
              (img, index) => (
                <div className={`branding-item item-${index + 1}`} key={index}>
                  <div className="branding-image-container">
                    <img
                      src={img}
                      alt={`branding-${index + 1}`}
                      className="branding-image"
                    />
                    <p className="item-label">
                      {index === 5 ? "Dermi" : "beauty stone"}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="branding-subtitle-bottom">
            <p className="section-subtitle">
              // We help brands grow and tell their stories to the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
