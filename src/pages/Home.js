import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import "../styles/Home.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="about">
          <h2> Hi, Govind Suresh Kale</h2>
          <div className="prompt">
            <p> Web/ReactJs/NodeJs Developer</p>
            <Link href="https://www.linkedin.com/in/govind-kale-9b447325b/">
              <LinkedInIcon />
            </Link>
            <Link href="mailto:kalegovind0610@gmail.com" target="_top">
              {/* <a> */}
              <EmailIcon />
            </Link>
            <Link href="https://github.com/KaleGovindSuresh">
              <GitHubIcon />
            </Link>
          </div>
        </div>
        {/* <hr /> */}
        <div className="skills">
          <h1>Technical Skills</h1>
          <ol className="list">
            <li className="item">
              <h2> Front-End</h2>
              <span>HTML5, CSS3, ReactJS, Redux.</span>
              <span>
                {" "}
                <br />
                <span style={{ fontWeight: "bold", fontSize: "26px" }}>
                  Style :
                </span>{" "}
                React-BootStrap, StyledComponents, MaterialUI, SCSS, LESS,
                BootStrap5 .
              </span>
            </li>
            <li className="item">
              <h2>Back-End</h2>
              <span>NodeJS, ExpressJS, MongoDB & MongoDB Atlas . </span>
            </li>
            <li className="item">
              <h2>Programming Languages</h2>
              <span>JavaScript,TypeScript</span>
            </li>
            <li className="item">
              <h2>IDE/Editors</h2>
              <span>Visual Studio Code , Sublime Text .</span>
            </li>
            <li className="item">
              <h2>Bundler/Compiler/API Tool</h2>
              <span>Webpack,Babel,Postman .</span>
            </li>
          </ol>
        </div>
        {/* <hr /> */}
        <div className="skills">
          <h1>Soft Skills</h1>
          <ol className="list">
            <li className="item">
              <h4>Research & Development</h4>
              <h4>Problem Solver</h4>
              <h4>Creative Mindset</h4>
              <h4>Quick Adaptability</h4>
            </li>
          </ol>
        </div>
      </div>
      {/* <hr /> */}
      <div className="mern-img">
        <img className="tech-logo" src="tech.png" alt="#" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
