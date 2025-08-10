import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";

import "./Contact.css";

const ContactWithCalendly = () => {
  /* ---------- Calendly badge ---------- */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: "https://calendly.com/saanii-bt77/30min",
        text: "Free Call",
        color: "black",
        textColor: "#ffffff",
        branding: true,
      });
    }
  }, []);

  /* ---------- Contact form ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data); // <-- swap with your API call
    alert("Message sent (check console)!");
  };

  return (
    <section className="contact-calendly-wrapper">
      {/* LEFT – Contact form */}
      <div className="contact-form">
        <h2>Let us know how we can help.</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" required />
          </label>

          <label>
            E-mail
            <input name="email" type="email" required />
          </label>

          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button className="send-btn" type="submit">
            <span>Submit</span>
            <div className="cta-icon">
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l9.2-9.2M17 17V7H7"
                />
              </svg>
            </div>
          </button>
        </form>
      </div>

      {/* RIGHT – Calendly */}
      <div className="calendly-inline-wrapper">
        <InlineWidget url="https://calendly.com/saanii-bt77/30min" />
      </div>
    </section>
  );
};

export default ContactWithCalendly;
