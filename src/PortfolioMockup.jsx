import React, { useState } from "react";
import "./PortfolioMockup.css";

const PortfolioMockup = ({ laptopMockup, phoneMockup }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="portfolio-mockup">
      {/* Thumbnail trigger */}
      <div className="mockup-thumbnail" onClick={() => setModalOpen(true)}>
        <img src={laptopMockup} alt="Laptop preview" />
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="mockup-wrapper">
              <img
                src={laptopMockup}
                alt="Laptop Mockup"
                className="mockup-laptop"
              />
              <img
                src={phoneMockup}
                alt="Phone Mockup"
                className="mockup-phone"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioMockup;
