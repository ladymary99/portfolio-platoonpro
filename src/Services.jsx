import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { number: "01", title: "Digital Design" },
  { number: "02", title: "Branding" },
  { number: "03", title: "Strategy Research" },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".service-item");

    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 30%",
            scrub: true, // scroll-synced
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="services" ref={containerRef}>
      <div className="services-container">
        <p className="services-subtitle">(our services)</p>

        <div className="services-list">
          <div className="dot"></div>

          {services.map((item) => (
            <div key={item.number} className="service-item">
              <span className="service-number">{item.number}</span>
              <h3 className="service-title">{item.title}</h3>
              <div className="service-dots"></div>
            </div>
          ))}

          <div className="dot"></div>
        </div>
      </div>

      {/* Extra dots */}
      <div className="dot extra-dot right-dot"></div>
      <div className="dot extra-dot bottom-right-dot"></div>
    </div>
  );
}
