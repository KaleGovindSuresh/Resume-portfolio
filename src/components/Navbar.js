import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AirplayIcon from "@mui/icons-material/Airplay";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link className="home-link" to="/">
          {" "}
          <HomeIcon />
          Home{" "}
        </Link>
        <Link className="home-link" to="/projects">
          {" "}
          <AirplayIcon /> Projects{" "}
        </Link>
        <Link className="home-link" to="/education-details">
          <SchoolIcon />
          Education Details
        </Link>
        <Link className="home-link" to="/profile-details">
          <AccountCircleIcon />
          Personal Details
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
