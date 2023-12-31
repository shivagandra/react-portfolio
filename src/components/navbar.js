import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  return (
    <div class="navbar" id={expandNavbar?"open":"close"}>
      <div class="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar = (prev) => !prev;
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div class="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
