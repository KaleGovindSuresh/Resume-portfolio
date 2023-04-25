import React from "react";
import "../styles/PersonalStyle.css";
import { Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "../components/Footer";

const ProfileDetails = () => {
  return (
    <>
      <hr />
      <div className="personal">
        <div className="person">
          <h3>
            Name:
            <span> Govind Suresh Kale </span>
          </h3>
        </div>
        <div className="person">
          {" "}
          <h3>
            Mobile:
            <span> 9130814901 </span>
          </h3>
        </div>
        <div className="person">
          <h3>
            Email:
            <span> kalegovind0610@gmail.com </span>
          </h3>
        </div>
        <div className="person">
          <h3>
            DOB:
            <span> 11/09/1999 </span>
          </h3>
        </div>
        <div className="person">
          <h3>
            Location:
            <span>
              {" "}
              Pune{" "}
              <Link href="https://goo.gl/maps/6LGZ6RjQT23UQ9yb8">
                <LocationOnIcon
                  style={{ color: "#e9d35b", fontSize: "20px" }}
                />
              </Link>
            </span>
          </h3>
        </div>
      </div>
      <hr />
      <div className="language">
        <h3 style={{ marginLeft: "50px" }}>
          Language :{"  "}
          <span>English</span>
          {"  "}
          <span>Hindi</span>
          {"  "}
          <span>Marathi</span>
        </h3>
      </div>
      <hr />

      <div className="map-location">
        <iframe
          style={{ margin: "0px " }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.6810172457!2d73.72287834853691!3d18.52489042244042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1677058629190!5m2!1sen!2sin"
          width="99%"
          height="350px"
          loading="lazy"
          alt=""
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default ProfileDetails;
