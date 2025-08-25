import React, { useState } from "react";
import "./PortfolioMockup.css";

const PortfolioMockup = ({
  laptopMockup,
  phoneMockup,
  desktopImg,
  mobileImg,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentDevice, setCurrentDevice] = useState(null);

  const openModal = (device) => {
    setCurrentDevice(device);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentDevice(null);
  };

  return (
    <div className="portfolio-container">
      {/* Thumbnail Previews */}
      <div className="thumbnail" onClick={() => openModal("laptop")}>
        <img src={laptopMockup} alt="Laptop Preview" />
      </div>
      <div className="thumbnail" onClick={() => openModal("phone")}>
        <img src={phoneMockup} alt="Phone Preview" />
      </div>

      {/* Popup */}
      {modalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>

          {/* Apply separate class per device */}
          <div
            className={
              currentDevice === "laptop" ? "laptop-mockup" : "phone-mockup"
            }
          >
            <img
              src={currentDevice === "laptop" ? laptopMockup : phoneMockup}
              alt={`${currentDevice} frame`}
              className="frame"
            />

            <div className="screen">
              <img
                src={currentDevice === "laptop" ? desktopImg : mobileImg}
                alt="Full Website Screenshot"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioMockup;
