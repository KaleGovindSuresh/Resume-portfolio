import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="" />
      <p>
        <b>Technologies:</b> {project.Technologies}
      </p>
      <div>
        <Link href="https://github.com/KaleGovindSuresh" underline="hover">
          <GitHubIcon />
        </Link>
      </div>
    </div>
  );
};

export default ProjectDisplay;
