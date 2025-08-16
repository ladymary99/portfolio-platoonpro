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
          start: "top 100%",
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
    "At our core, we help restaurants and cafés grow by delivering tailored digital solutions from modern websites and menu design to social media content and full branding. " +
    "We work with small to mid-sized food businesses and cloud kitchens aiming to boost visibility and customer engagement. " +
    "By combining industry knowledge with creative strategy, we craft experiences that reflect each brand’s unique flavor. " +
    "Our mission is to empower food businesses through strong digital identity, and our vision is to be the go-to creative partner in the industry. " +
    "Whether you're launching or rebranding, we're here to bring your vision to life.";

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={astronaut} alt="Astronaut Toy" className="mockup-image" />
        </div>
        <div className="about-text" ref={textContainerRef}>
          <p className="label">// About</p>
          <p ref={textRef} className="description">
            {text.split("").map((char, index) => (
              <span key={index} className="char">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
          <ul className="info-list" ref={listRef}>
            <li>
              <span className="number">01.</span> Digital Marketing Agency
            </li>
            <li>
              <span className="number">02.</span> From (Paris, France)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
