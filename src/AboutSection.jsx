import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutSection.css";
import astronaut from "./assets/b3.jpg"; // Use your image path

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Image zoom in
    gsap.fromTo(
      imageRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Letter-by-letter text animation
    const letters = textRef.current.querySelectorAll(".char");

    gsap.fromTo(
      letters,
      { color: "#666", opacity: 0 },
      {
        color: "#fff",
        opacity: 1,
        stagger: 0.03,
        duration: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const text =
    "With 10 years under our belt, we’re experts at crafting — memorable websites and brand visuals that reflect each client’s unique story";

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image" ref={imageRef}>
          <img src={astronaut} alt="Astronaut Toy" />
        </div>
        <div className="about-text">
          <p className="label">(About)</p>
          <p ref={textRef} className="description">
            {text.split("").map((char, index) => (
              <span key={index} className="char">
                {char}
              </span>
            ))}
          </p>
          <ul className="info-list">
            <li>
              <span className="number">01.</span> Digital Design Studio
            </li>
            <li>
              <span className="number">02.</span> From (Hanoi, Vietnam)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
