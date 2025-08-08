import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutSection.css";
import astronaut from "./assets/b3.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const textRef = useRef(null);
  const textContainerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    // Image zoom effect (smooth)
    gsap.utils.toArray(".about-image img").forEach((img) => {
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

    // Text container slide up/down
    gsap.fromTo(
      textContainerRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );

    // Letter-by-letter fade + slide
    const letters = textRef.current.querySelectorAll(".char");
    gsap.fromTo(
      letters,
      { color: "#666", opacity: 0, y: 20 },
      {
        color: "#fff",
        opacity: 1,
        y: 0,
        stagger: 0.03,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );

    // List items slide + fade
    gsap.fromTo(
      listRef.current.querySelectorAll("li"),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 95%",
          end: "bottom 75%",
          scrub: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const text =
    "With 10 years under our belt, we’re experts at crafting — memorable websites and brand visuals that reflect each client’s unique story";

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={astronaut} alt="Astronaut Toy" className="mockup-image" />
        </div>
        <div className="about-text" ref={textContainerRef}>
          <p className="label">(About)</p>
          <p ref={textRef} className="description">
            {text.split("").map((char, index) => (
              <span key={index} className="char">
                {char}
              </span>
            ))}
          </p>
          <ul className="info-list" ref={listRef}>
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
