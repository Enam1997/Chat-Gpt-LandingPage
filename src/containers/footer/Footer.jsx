import React from "react";
import "./footer.css";
import gptLogo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt__footer section__padding">
      <div className="gpt__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt__footer-button">
        <p>Request Early Access</p>
      </div>

      <div className="gpt__footer-links">
        <div className="gpt__footer-links__logo">
          <img src={gptLogo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt__footer-links__div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt__footer-links__div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt__footer-links__div">
          <h4>Get in touch</h4>
          <p>Enam ahamed</p>
          <p>0186-4299319</p>
          <p>Counters</p>
          <p>mdenamahamedchowdhury@gmail.com</p>
        </div>
      </div>

      <div className="gpt__footer-copyright">
        <p>© 2023 GPT. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
