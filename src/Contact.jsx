import { useState, useEffect } from "react";

import { InlineWidget } from "react-calendly";

import "./Contact.css";

const ContactWithCalendly = () => {
  const [status, setStatus] = useState({
    sending: false,
    sent: false,
    error: "",
  });

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      setStatus({ sending: true, sent: false, error: "" });
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.errors?.[0]?.msg || "Something went wrong");
      }

      setStatus({ sending: false, sent: true, error: "" });
      e.target.reset();
    } catch (err) {
      setStatus({
        sending: false,
        sent: false,
        error: err.message || "Failed to send message.",
      });
    }
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

          {/* Inline feedback */}
          {status.error && <p className="error-msg">{status.error}</p>}
          {status.sent && (
            <p className="success-msg">Message sent successfully!</p>
          )}
          <button className="send-btn" type="submit" disabled={status.sending}>
            <span>{status.sending ? "SENDING.." : "Submit"}</span>
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
