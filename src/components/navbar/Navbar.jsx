import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home"></a>Home
    </p>
    <p>
      <a href="#whatGPT">What is GPT</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studys</a>
    </p>
    <p>
      <a href="#blog"></a>Librabry
    </p>
  </>
);

const Navbar = () => {
  const [toggoleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>

      <div className="gpt__navbar-menu">
        {toggoleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggoleMenu && (
          <div className="gpt__navbar-menu_container scale-up-center">
            <div className="gpt__navbar-menu_container-links">
              <Menu />
              <div className="gpt__navbar-menu_containe-links-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
