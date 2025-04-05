import React from "react";
import styles from "./testingServices.module.css";
import { testingServicesData } from "../../constants";

const TestingServices = () => {
  return (
    <div className={styles.testingServicesContainer}>
      <div className={styles.testingHeading}>
        <h1>TESTING SERVICES</h1>
        <p>
          We with our testing experience, keen industry knowledge and
          rationalized testing tool expertise to monitor testing, set new
          standards for software quality and reduce costs. Valuedge's Testing
          services will support you in every of your future activities by taking
          the product to the expected performance level and satisfy the need.
          Along with basic testing services such as White-box testing, Black-box
          testing, Grey-box testing, and System Integration testing, we also
          offer value-added testing services such as Migration testing,
          Globalization, and Localization testing.
        </p>
      </div>

      <div className={styles.testingContent}>
        {testingServicesData.map((service, index) => (
          <div
            key={service.id}
            className={`${styles.serviceCard} ${index % 2 === 0 ? styles.leftImage : styles.rightImage}`}
          >
            <div className={styles.serviceImage}>
              <img src={service.img} alt={service.name} />
            </div>
            <div className={styles.serviceDescription}>
              <h2>{service.name}</h2>
              <ul>
                {service.description.map((desc) => (
                  <li key={desc.id}>{desc.value}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestingServices;
