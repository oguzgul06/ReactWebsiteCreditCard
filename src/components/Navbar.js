import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
              <MdFingerprint className="navbar-icon"/>
            LAVISH
          </Link>
          <div className="menu-icon"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
