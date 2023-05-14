import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <p className="FooterText" style={{ color: "white" }}>
          Effective Buddhism &copy; 2023. All rights reserved |{"  "}
          <a className="Persist" href="https://persistventures.com/">
            Privacy Policy
          </a>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          paddingTop: "4%",
          width: "30%",
        }}
      >
        <i
          class="fa fa-instagram"
          style={{ fontSize: "20px", color: "white", padding: "4%" }}
        ></i>
        <i
          class="fa fa-twitter"
          style={{ fontSize: "20px", color: "white", padding: "4%" }}
        ></i>
      </div>
    </div>
  );
};

export default Footer;
