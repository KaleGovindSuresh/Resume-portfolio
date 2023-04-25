import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link href="https://www.linkedin.com/in/govind-kale-9b447325b/">
          <LinkedInIcon />
        </Link>
        <Link href="https://github.com/KaleGovindSuresh">
          <GitHubIcon />
        </Link>
        <Link href="https://www.instagram.com/______govind_kale_patil_____/">
          <InstagramIcon />
        </Link>
        <Link href="https://www.facebook.com/govind.kale.7568">
          <FacebookIcon />
        </Link>
        <Link href="https://wa.me/9130814901">
          <WhatsAppIcon />
        </Link>
      </div>
      <p> &copy; 2022 Govind Kale | All Rights Reserved</p>
    </div>
  );
};

export default Footer;
