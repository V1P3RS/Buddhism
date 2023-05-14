import React from "react";
import { Parallax } from "react-parallax";
import Landing from "./images/Hero.jpg";

const Hero = () => (
  <>
    <Parallax className="image" bgImage={Landing} strength={500}>
      <div className="Title">
        <span>
          <h1 style={{ fontSize: "5rem" }}>
            <strong>EFFECTIVE BUDDHISM</strong>
          </h1>
          <br />
        </span>
      </div>
      <div
        className="TagLine"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <strong>
          <p>The Path Buddha Wanted Us To Follow</p>
          <br />
          <p style={{ display: "flex", justifyContent: "center" }}>
            <i class="arrow down"></i>
          </p>
        </strong>
      </div>
    </Parallax>
  </>
);

export default Hero;
