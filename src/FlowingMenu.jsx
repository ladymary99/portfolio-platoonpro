import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FlowingMenu.css";

gsap.registerPlugin(ScrollTrigger);

const blocks = [
  {
    id: "001",
    heading: "DIGITAL\nDESIGN",
    subtitle:
      "To be part of the positive transformation by leaving a distinctive mark on people, communities, and brands, and to see our partners make a difference.",
    items: [
      "Art Direction",
      "Web Design",
      "User Experience",
      "Product Design",
      "Design System",
    ],
  },
  {
    id: "002",
    heading: "BRANDING\nDESIGN",
    subtitle:
      "To be part of the positive transformation by leaving a distinctive mark on people, communities, and brands, and to see our partners make a difference.",
    items: [
      "Brand Identity",
      "Logo Design",
      "Naming",
      "Brand Story",
      "Campaign",
    ],
  },
  {
    id: "003",
    heading: "COMMUNICATION",
    subtitle:
      "To be part of the positive transformation by leaving a distinctive mark on people, communities, and brands, and to see our partners make a difference.",
    items: ["Brand Strategy", "Visual Identity", "Brand Experiences"],
  },
  {
    id: "004",
    heading: "STRATEGY RESEARCH",
    subtitle:
      "To be part of the positive transformation by leaving a distinctive mark on people, communities, and brands, and to see our partners make a difference.",
    items: [
      "User Research",
      "Testing",
      "Interaction Design",
      "UI Design",
      "Visual Design",
    ],
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setVisibleItems((prev) => ({
          ...prev,
          [entry.target.dataset.id]: entry.isIntersecting,
        }));
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const items = containerRef.current.querySelectorAll(".service-block");
    items.forEach((item) => observer.observe(item));

    const rightSection = containerRef.current.querySelector(".services-right");
    const secondRow = rightSection.querySelector(".second-row");
    ScrollTrigger.create({
      trigger: secondRow,
      start: "top 100%", // <-- second row triggers later
      end: "bottom top",
      onEnter: () => rightSection.classList.add("sticky-active"),
      onEnterBack: () => rightSection.classList.add("sticky-active"),
      onLeave: () => rightSection.classList.remove("sticky-active"),
      onLeaveBack: () => rightSection.classList.remove("sticky-active"),
    });

    return () => {
      if (observer) {
        items.forEach((item) => observer.unobserve(item));
        observer.disconnect();
      }
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="services-section" ref={containerRef}>
      {/* Left sticky intro */}
      <div className="services-intro">
        <div className="content-box">
          <div className="tag">004 - Our Services</div>
          <p className="lead">
            Our collaborative approach ensures that every design not only
            reflects your brand's identity but also helps it stand out in the
            crowded digital world.
          </p>
        </div>
      </div>

      {/* Right column */}
      <div className="services-right">
        {/* First row */}
        <div className="services-row first-row">
          {blocks.slice(0, 2).map((block, i) => {
            const isVisible = visibleItems[block.id];
            return (
              <article
                key={block.id}
                className={`service-block ${isVisible ? "visible" : "hidden"}`}
                data-id={block.id}
              >
                <div className="block-header">
                  <span className="block-number">{block.id}</span>
                </div>
                <header className="block-title">
                  <h2
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html: block.heading.replace("\n", "<br/>"),
                    }}
                  />
                </header>
                <div className="block-content">
                  <p className="subtitle">{block.subtitle}</p>
                  <ul className="service-list">
                    {block.items.map((item, idx) => (
                      <li className="service-item" key={idx}>
                        <div className="icon-dot" aria-hidden="true" />
                        <span className="service-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Second row */}
        <div className="services-row second-row">
          {blocks.slice(2, 4).map((block, i) => {
            const isVisible = visibleItems[block.id];
            return (
              <article
                key={block.id}
                className={`service-block ${isVisible ? "visible" : "hidden"}`}
                data-id={block.id}
              >
                <div className="block-header">
                  <span className="block-number">{block.id}</span>
                </div>
                <header className="block-title">
                  <h2
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html: block.heading.replace("\n", "<br/>"),
                    }}
                  />
                </header>
                <div className="block-content">
                  <p className="subtitle">{block.subtitle}</p>
                  <ul className="service-list">
                    {block.items.map((item, idx) => (
                      <li className="service-item" key={idx}>
                        <div className="icon-dot" aria-hidden="true" />
                        <span className="service-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
