import React from "react";
import styles from "./servicesCard.module.css";

const ServicesCard = ({name, img, description}) => {
  return (
    <div className={`${styles.serviceCard} topToBottom`}>
      <img
        src={img}
        alt={name}
      />
      <div className={styles.serviceCardContent}>
        <h1>{name}</h1>
        <p>{description}</p>

        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default ServicesCard;
