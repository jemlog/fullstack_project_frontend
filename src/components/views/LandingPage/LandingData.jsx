import React from "react";
import "./LandingData.css";
function LandingData({ title, description, image }) {
  return (
    <div className="landing_data">
      <img
        src={image}
        alt="hi"
        style={{
          width: "200px",
          height: "250px",
          borderRadius: "20px",
        }}
      />

      {/* <p style={{ fontSize: "20px", listStyle: "none" }}>{description}</p> */}
    </div>
  );
}

export default LandingData;
