// src/components/HealthSection.jsx
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "./VideoSection.css";
import v1 from "./assets/v1.mp4";
import v2 from "./assets/v2.mp4";
import v3 from "./assets/v3.mp4";
import v4 from "./assets/v4.mp4";
import v5 from "./assets/v5.mp4";

const healthItems = [
  {
    id: 1,
    title: "Signature Flame Grill",
    video: v1,
  },
  {
    id: 2,
    title: "Ocean Essence Platter",
    video: v2,
  },
  {
    id: 3,
    title: "The Garden Table",
    video: v3,
  },
  {
    id: 4,
    title: "Spice Route Journey",
    video: v4,
  },
  {
    id: 5,
    title: "Chef’s Signature Picks",
    video: v5,
  },
  {
    id: 6,
    title: "Golden Hour Desserts",
    video: v1,
  },
  {
    id: 7,
    title: "Crafted Mixology",
    video: v2,
  },
];

export default function HealthSection() {
  const [activeItem, setActiveItem] = useState(healthItems[0]);
  const imageRef = useRef(null);
  const thumbRefs = useRef([]);

  // Animate main image when activeItem changes
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
    );
  }, [activeItem]);

  return (
    <div className="health-section">
      <div className="left-panel">
        {healthItems.map((item, index) => (
          <div
            key={item.id}
            className={`text-item ${activeItem.id === item.id ? "active" : ""}`}
            onMouseEnter={() => {
              setActiveItem(item);
              const thumb = thumbRefs.current[index];
              if (thumb) {
                gsap.fromTo(
                  thumb,
                  { opacity: 0, x: -20 },
                  { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
                );
              }
            }}
          >
            {activeItem.id === item.id && (
              <video
                className="thumb"
                ref={(el) => (thumbRefs.current[index] = el)}
                src={item.video}
                muted
                autoPlay
                loop
                playsInline
              />
            )}
            <span>{item.title}</span>
          </div>
        ))}
      </div>

      <div className="right-panel">
        <video
          src={activeItem.video}
          className="main-video"
          ref={imageRef}
          muted
          autoPlay
          loop
          playsInline
        />
      </div>
    </div>
  );
}
