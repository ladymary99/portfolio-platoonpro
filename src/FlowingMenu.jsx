import React from "react";
import "./FlowingMenu.css";

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
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      {/* Left column: intro */}
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

      {/* Right column: blocks with numbers, title, items */}
      <div className="services-grid">
        {blocks.map((b, i) => (
          <article className="service-block" key={b.id}>
            <div className="block-header">
              <span className="block-number">{b.id}</span>

              {/* decorative rotated container with small SVG mark */}
              <div
                className="decorative"
                style={{ transform: `rotate(${235.6 + i * 0.02}deg)` }}
                aria-hidden
              >
                {/* small decorative "wheel" - simplified */}
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 72 72"
                  className="wheel"
                >
                  <circle
                    cx="36"
                    cy="36"
                    r="30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <g transform="translate(36,36)">
                    <path
                      d="M0,-24 L8,-8 L24,-8 L12,4 L16,20 L0,12 L-16,20 L-12,4 L-24,-8 L-8,-8 Z"
                      fill="currentColor"
                      opacity="0.08"
                    />
                  </g>
                </svg>
              </div>
            </div>

            <header className="block-title">
              {/* allow multi-line */}
              <h2
                className="title"
                dangerouslySetInnerHTML={{
                  __html: b.heading.replace("\n", "<br/>"),
                }}
              />
            </header>

            <div className="block-content">
              <p className="subtitle">{b.subtitle}</p>

              <ul className="service-list">
                {b.items.map((it, idx) => (
                  <li className="service-item" key={idx}>
                    <div className="icon-dot" aria-hidden />
                    <span className="service-text">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
