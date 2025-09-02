import React, { useState } from "react";
import "./Footer.css";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import Magnet from "./Magnet";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    sending: false,
    sent: false,
    error: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) {
      setStatus({ ...status, error: "Please enter your email." });
      return;
    }

    try {
      setStatus({ sending: true, sent: false, error: "" });
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.errors?.[0]?.msg || "Failed to subscribe");
      }

      setStatus({ sending: false, sent: true, error: "" });
      setEmail("");
    } catch (err) {
      setStatus({
        sending: false,
        sent: false,
        error: err.message || "Something went wrong.",
      });
    }
  }

  return (
    <footer className="footer">
      {/* Main content section */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-wrapper">
              <span className="footer-title">
                LET'S BRING
                <br />
                YOUR IDEA
                <br />
                TO LIFE
              </span>
            </div>

            {/* Contact Form */}
            <form className="footer-form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status.sending}
                required
              />

              {status.error && <p className="error-msg">{status.error}</p>}
              {status.sent && (
                <p className="success-msg">Subscribed successfully!</p>
              )}
              <Magnet
                padding={100}
                magnetStrength={2}
                activeTransition="transform 0.3s ease-out"
                inactiveTransition="transform 0.5s ease-in-out"
                wrapperClassName="magnet-wrapper"
                innerClassName="magnet-inner"
              >
                <button
                  className="get-in-touch-btn"
                  type="submit"
                  disabled={status.sending}
                >
                  <span>{status.sending ? "SENDING..." : "SUBSCRIBE"}</span>

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Magnet>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom section with contact info */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-info">
            <div className="footer-column">
              <h3>Contact</h3>
              <p>+33758352246</p>
              <p>info@platoonpro.com</p>
            </div>

            <div className="footer-column">
              <h3>Social</h3>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/platoonproo"
                  className="social-link"
                >
                  INSTAGRAM
                </a>
                <a href="#" className="social-link">
                  BEHANCE
                </a>
                <a
                  href="https://www.linkedin.com/company/platoonpro/"
                  className="social-link"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
