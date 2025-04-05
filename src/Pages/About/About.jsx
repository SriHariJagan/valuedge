import React from "react";
import styles from "./about.module.css";
import Content from "../../Components/Content/Content";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHeading}>
        <h1>About Us</h1>
        <p>
          Valuedge is a comprehensive group which provides technology solutions
          spanning in range of services. Our service professionals offer advice
          and expertise for every stage of the game, from design and integration
          to support and management and beyond. The Company provides multiple
          solution and services for a variety of industry verticals. These
          solutions and services includes Application Software Development &
          Maintenance, Enterprise Resource Planning and IT Consulting services.
        </p>
      </div>
      <div className={styles.aboutContent}>
        <Content />
      </div>
    </div>
  );
};

export default About;
