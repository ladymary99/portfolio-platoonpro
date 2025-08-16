import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FlowingMenu.css";

gsap.registerPlugin(ScrollTrigger);

const blocks = [
  {
    id: "001",
    heading: "Website Design & Development",
    subtitle:
      "We design and build custom, mobile-friendly websites that reflect your restaurant’s brand, improve user experience, and help drive more bookings and orders.  ",
    items: [
      "Custom responsive design  ",
      "Fast loading pages  ",
      "Online booking integration  ",
      "Easy navigation",
    ],
  },
  {
    id: "002",
    heading: "Branding & Visual Identity",
    subtitle:
      "From logo creation to color palettes and design elements, we craft a visual identity that tells your restaurant’s story and makes a lasting impression.  ",
    items: [
      "Logo Design",
      "Color scheme development  ",
      "Typography selection ",
      "Brand guidelines creation  ",
    ],
  },
  {
    id: "003",
    heading: "Social Media Management",
    subtitle:
      "We plan, create, and manage content across platforms like Instagram, Facebook, and TikTok to boost engagement, grow your audience, and build community.  ",
    items: [
      "Content strategy  ",
      "Regular posting schedules  ",
      "Audience engagement  ",
      "Performance analysis",
    ],
  },
  {
    id: "004",
    heading: "Google My Business Optimization ",
    subtitle:
      "We set up and optimize your Google profile to improve local search visibility, attract nearby customers, and increase foot traffic.  ",
    items: [
      "Profile creation and setup  ",
      "Accurate business information",
      "Review management  ",
      "Local SEO optimization  ",
    ],
  },
  {
    id: "005",
    heading: "Online Menu & Ordering Systems",
    subtitle:
      "We create user-friendly digital menus that showcase your offerings with images and prices and make it easy for customers to view or order online.  ",
    items: [
      "Interactive digital menus  ",
      "Clear pricing and descriptions  ",
      "Easy order placement  ",
      "Mobile accessibility  ",
    ],
  },
  {
    id: "006",
    heading: "Photography & Content Creation ",
    subtitle:
      "We capture high-quality, professional photos of your food, team, and space perfect for your website, social media, and promotional materials.  ",
    items: [
      "Food photography  ",
      "Interior and exterior shots  ",
      "Staff portraits   ",
      "Video content creation",
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
      start: "top 100%",
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
          <div className="tag">// Our Services</div>
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
