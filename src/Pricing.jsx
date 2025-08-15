import React, { useState, useEffect } from "react";
import "./Pricing.css";

const Pricing = () => {
  const [selectedFeatures, setSelectedFeatures] = useState({
    seo: false,
    ecommerce: false,
    blog: false,
    analytics: false,
    support: false,
    customDomain: false,
  });
  const [pageCount, setPageCount] = useState(1);
  const [customPrice, setCustomPrice] = useState(99);

  const features = [
    { id: "seo", label: "SEO Optimization", price: 150 },
    { id: "ecommerce", label: "E-commerce Integration", price: 300 },
    { id: "blog", label: "Blog System", price: 100 },
    { id: "analytics", label: "Advanced Analytics", price: 75 },
    { id: "support", label: "24/7 Priority Support", price: 200 },
    { id: "customDomain", label: "Custom Domain Setup", price: 50 },
  ];

  const basePrice = 99;
  const pricePerPage = 25;

  useEffect(() => {
    const featuresCost = features.reduce((total, feature) => {
      return total + (selectedFeatures[feature.id] ? feature.price : 0);
    }, 0);

    const pagesCost = (pageCount - 1) * pricePerPage;
    const totalPrice = basePrice + featuresCost + pagesCost;
    setCustomPrice(totalPrice);
  }, [selectedFeatures, pageCount]);

  const handleFeatureToggle = (featureId) => {
    setSelectedFeatures((prev) => ({
      ...prev,
      [featureId]: !prev[featureId],
    }));
  };

  const handlePageCountChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setPageCount(Math.max(1, value));
  };

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h1 className="pricing-title">Choose Your Perfect Plan</h1>
          <p className="pricing-description">
            // Select the plan that best fits your needs. From simple websites
            to complex applications, we have the right solution for your
            business.
          </p>
        </div>

        <div className="pricing-cards">
          {/* Basic Plan */}
          <div className="pricing-card">
            <div className="card-header">
              <h3 className="plan-name">Basic Plan</h3>
              <p className="plan-description">
                Perfect for small businesses and personal websites
              </p>
            </div>
            <div className="price-display">
              <span className="price">$49</span>
              <span className="period">/month</span>
            </div>
            <ul className="features-list">
              <li>
                <span>✓</span> Up to 5 pages
              </li>
              <li>
                <span>✓</span> Mobile responsive design
              </li>
              <li>
                <span>✓</span> Basic SEO setup
              </li>
              <li>
                <span>✓</span> Contact form
              </li>
              <li>
                <span>✓</span>SSL certificate
              </li>
              <li>
                <span>✓</span> Monthly backups
              </li>
            </ul>
            <button className="get-started-btn">Get Started</button>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card pro-card">
            <div className="popular-badge">Most Popular</div>
            <div className="card-header">
              <h3 className="plan-name">Pro Plan</h3>
              <p className="plan-description">
                Ideal for growing businesses with advanced needs
              </p>
            </div>
            <div className="price-display">
              <span className="price">$99</span>
              <span className="period">/month</span>
            </div>
            <ul className="features-list">
              <li>
                <span>✓</span> Up to 15 pages
              </li>
              <li>
                <span>✓</span> Advanced SEO optimization
              </li>
              <li>
                <span>✓</span> E-commerce ready
              </li>
              <li>
                <span>✓</span> Blog integration
              </li>
              <li>
                <span>✓</span> Analytics dashboard
              </li>
              <li>
                <span>✓</span> Priority support
              </li>
              <li>
                <span>✓</span> Weekly backups
              </li>
            </ul>
            <button className="get-started-btn pro-btn">Get Started</button>
          </div>

          {/* Custom Plan */}
          <div className="pricing-card custom-card">
            <div className="card-header">
              <h3 className="plan-name">Custom Plan</h3>
              <p className="plan-description">
                Tailored solution for your unique requirements
              </p>
            </div>
            <div className="price-display">
              <span className="price">${customPrice}</span>
              <span className="period">/one-time</span>
            </div>

            <div className="custom-options">
              <div className="pages-input">
                <label htmlFor="pageCount">Number of Pages:</label>
                <input
                  type="number"
                  id="pageCount"
                  min="1"
                  value={pageCount}
                  onChange={handlePageCountChange}
                  className="page-input"
                />
                <span className="page-cost">
                  +${pricePerPage} per additional page
                </span>
              </div>

              <div className="features-checkboxes">
                <h4>Additional Features:</h4>
                {features.map((feature) => (
                  <label key={feature.id} className="feature-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedFeatures[feature.id]}
                      onChange={() => handleFeatureToggle(feature.id)}
                    />
                    <span className="checkmark"></span>
                    <span className="feature-text">
                      {feature.label}
                      <span className="feature-price">+${feature.price}</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button className="get-started-btn custom-btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
