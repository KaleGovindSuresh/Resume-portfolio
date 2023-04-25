import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import Footer from "../components/Footer";

const EducationDetails = () => {
  return (
    <>
      <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2015"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Shri Yogeshwari Nutan Vidyalaya Ambajogai,Maharashtra
            </h3>
            <p className="vertical-timeline-element-subtitle">10th (SSC)</p>
            <p>82.60%</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2016 - 2017"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Jodhaprashadaji Modi Jr College,Ambajogai,Maharashtra
            </h3>

            <p className="vertical-timeline-element-subtitle">12th (HSC)</p>

            <p> 72.30%</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2021"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sant Gadge Baba Amravati University,Amravati
            </h4>
            <p>70.42%</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2021 - present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<AssuredWorkloadIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Primal Infosys, Pune
            </h4>
            <p>
              Working on frontend technologies like html,css,BootStrap,reactjs
              and also backend techologies like nodejs,expressjs,mongodb,mysql
              etc.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
    </>
  );
};

export default EducationDetails;
