import React from "react";
import { ourClients } from '../../constants';
import styles from "./whyUs.module.css";

const WhyUs = () => {
  return (
    <div className={styles.whyUsContainer}>
      <div className={styles.whyUs}>
        <div className={styles.whyUsContent}>
          <h1>Why Choose Us</h1>
          <p>
            We provide a wide array of Web Design and Development. We don’t just
            design and develop websites, but we transform them into powerful
            business channels.
          </p>
          <button>Read More</button>
        </div>
        <div className={styles.whyUsImg}>
          <img src="https://valuedge-solutions.com/img/img4.jpg" alt="whyUs" />
        </div>
      </div>

      {/* Clients Section */}
      <div className={styles.ourClientsContainer}>
        <h1>Our Clients</h1>
        <div className={styles.ourClients}>
          <div className={styles.clientSlider}>
            {/* Duplicate logos to create seamless scrolling */}
            {[...ourClients, ...ourClients].map((client, index) => (
              <div key={index} className={styles.clientCard}>
                <img src={client.img} alt="Client Logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
