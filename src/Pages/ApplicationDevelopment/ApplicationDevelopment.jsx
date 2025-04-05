import React from "react";
import styles from "./applicationDevelopment.module.css";
import { applicationDevelopmentData } from "../../constants";

const ApplicationDevelopment = () => {
  return (
    <div className={styles.applicationDevelopmentContainer}>
      <div className={styles.applicationDevelopmentHeading}>
        <h1>Application Development</h1>
        <p>
          Software services that minimize your risk, operational costs and
          system downtime. Through Valuedge Software as a service you can gain
          the visibility to pinpoint inefficiencies and the capabilities to
          transform them into competitive advantage and foresight to identify
          new opportunities and the ability to respond. We will provide the
          functionality to optimize your operations and resources.
        </p>
      </div>

      <div className={styles.imageGrid}>
        {applicationDevelopmentData.map((item) => (
          <div key={item.id} className={styles.imageCard}>
            <img src={item.img} alt={`Screen ${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationDevelopment;
