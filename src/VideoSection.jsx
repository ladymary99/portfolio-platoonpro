// src/components/HealthSection.jsx
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "./VideoSection.css";
import b1 from "./assets/b1.jpg";
import b2 from "./assets/b2.jpg";
import b3 from "./assets/b3.jpg";
import b4 from "./assets/b4.jpg";
import b5 from "./assets/b5.jpg";

const healthItems = [
  {
    id: 1,
    title: "Signature Flame Grill",
    image: b1,
    thumb: b1,
  },
  {
    id: 2,
    title: "Ocean Essence Platter",
    image: b2,
    thumb: b2,
  },
  {
    id: 3,
    title: "The Garden Table",
    image: b3,
    thumb: b3,
  },
  {
    id: 4,
    title: "Spice Route Journey",
    image: b4,
    thumb: b4,
  },
  {
    id: 5,
    title: "Chef’s Signature Picks",
    image: b5,
    thumb: b5,
  },
  {
    id: 6,
    title: "Golden Hour Desserts",
    image: b1,
    thumb: b1,
  },
  {
    id: 7,
    title: "Crafted Mixology",
    image: b1,
    thumb: b1,
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
              <img
                src={item.thumb}
                alt=""
                className="thumb"
                ref={(el) => (thumbRefs.current[index] = el)}
              />
            )}
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div className="right-panel">
        <img
          src={activeItem.image}
          alt={activeItem.title}
          className="main-image"
          ref={imageRef}
        />
      </div>
    </div>
  );
}
