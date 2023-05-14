import React from "react";

const ContentBox = () => {
  return (
    <div className="contentBox">
      <h3>THESIS</h3>
      <div
        style={{ display: "flex", justifyContent: "center", paddingTop: "1%" }}
      >
        <div style={{ height: "1px", background: "gray", width: "5%" }}></div>
      </div>

      <p style={{ marginTop: "5%", paddingBottom: "5%" }}>
        Buddhism is an amazing philosophy full of wisdom with great truths,
        however I believe Buddhists have lost the way of the Buddha and lack a
        real basis of impact. Effective Buddhism is a solution to those who seek
        to follow the Buddhist Path as Buddha Wanted. If Buddha was alive today,
        imagine the amount of change and impact he would be having.
      </p>
    </div>
  );
};

export default ContentBox;
