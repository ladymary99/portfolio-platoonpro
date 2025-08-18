import React, { useState } from "react";
import "./Footer.css";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import Magnet from "./Magnet";

const Footer = () => {
  const [form, setForm] = useState({ name: "", message: "" });
  const [status, setStatus] = useState({
    sending: false,
    sent: false,
    error: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (status.error) setStatus((s) => ({ ...s, error: "" }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setStatus({ ...status, error: "Please fill out both fields." });
      return;
    }

    try {
      setStatus({ sending: true, sent: false, error: "" });
      // Replace with your API call
      await new Promise((res) => setTimeout(res, 1000));
      setStatus({ sending: false, sent: true, error: "" });
      setForm({ name: "", message: "" });
    } catch {
      setStatus({
        sending: false,
        sent: false,
        error: "Something went wrong.",
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
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                disabled={status.sending}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                disabled={status.sending}
                required
              ></textarea>

              {status.error && <p className="error-msg">{status.error}</p>}
              {status.sent && (
                <p className="success-msg">Message sent successfully!</p>
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
                  <span>{status.sending ? "SENDING..." : "GET IN TOUCH"}</span>
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
