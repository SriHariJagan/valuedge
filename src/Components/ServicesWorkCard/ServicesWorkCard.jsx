import React from "react";
import styles from "./servicesWorkCard.module.css";

    
    const ServicesWorkCard = ({name, img, description}) => {
  return (
    <div className={`${styles.ServicesWorkCardContainer} topToBottom`}>
      <div className={styles.serviceWorkImg}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.serviceWorkContent}>
        <h1>{name}</h1>
        <p>{description}</p>

        <button>Read More</button>
      </div>
    </div>
  );
};

export default ServicesWorkCard;
