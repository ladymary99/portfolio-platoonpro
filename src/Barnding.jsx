import React from "react";
import "./SelectedWork.css";
import TiltedCard from "./TiltedCard";

import b1Image from "./assets/b1.jpg";
import b2Image from "./assets/b2.jpg";
import b3Image from "./assets/b3.jpg";
import b4Image from "./assets/b4.jpg";
import b5Image from "./assets/b5.jpg";
import b6Image from "./assets/b6.jpg";

const Branding = () => {
  return (
    <div className="branding-section">
      <div className="container3">
        <div className="branding-layout">
          {/* Large BRANDING title */}
          <h2 className="branding-main-title">Barnding</h2>

          {/* Scattered product images - exact positioning from original */}
          <div className="branding-items-scattered">
            <div className="branding-item item-1">
              <TiltedCard
                imageSrc={b1Image}
                altText="beauty stone"
                captionText="beauty stone"
                containerHeight="250px"
                containerWidth="200px"
                imageHeight="250px"
                imageWidth="200px"
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
              <p className="item-label">beauty stone</p>
            </div>
            <div className="branding-item item-2">
              <TiltedCard
                imageSrc={b2Image}
                altText="beauty stone"
                captionText="beauty stone"
                containerHeight="250px"
                containerWidth="200px"
                imageHeight="250px"
                imageWidth="200px"
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
              <p className="item-label">beauty stone</p>
            </div>
            <div className="branding-item item-3">
              <TiltedCard
                imageSrc={b3Image}
                altText="beauty stone"
                captionText="beauty stone"
                containerHeight="250px"
                containerWidth="200px"
                imageHeight="250px"
                imageWidth="200px"
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
              <p className="item-label">beauty stone</p>
            </div>

            <div className="branding-item item-4">
              <TiltedCard
                imageSrc={b4Image}
                altText="beauty stone"
                captionText="beauty stone"
                containerHeight="250px"
                containerWidth="200px"
                imageHeight="250px"
                imageWidth="200px"
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
              <p className="item-label">beauty stone</p>
            </div>
            <div className="branding-item item-5">
              <TiltedCard
                imageSrc={b5Image}
                altText="beauty stone"
                captionText="beauty stone"
                containerHeight="250px"
                containerWidth="200px"
                imageHeight="250px"
                imageWidth="200px"
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
              <p className="item-label">Beauty stone</p>
            </div>
            <div className="branding-item item-6">
              <TiltedCard
                imageSrc={b6Image}
                altText="beauty stone"
                captionText="dermi"
                containerHeight="250px"
                containerWidth="200px"
                imageHeight="250px"
                imageWidth="200px"
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
              <p className="item-label">Dermi</p>
            </div>
          </div>

          {/* Bottom subtitle */}
          <div className="branding-subtitle-bottom">
            <p className="section-subtitle">
              // We help brands grow and tell their stories to the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Branding;
