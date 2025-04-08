import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
import { socialIcons, homeCarousel } from '../../constants';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === homeCarousel.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <ul className={styles.socialIcons}>
        {socialIcons.map((icon) => (
          <li key={icon.id}>
            <img src={icon.icon} alt={icon.name} className={styles.iconImg} />
          </li>
        ))}
      </ul>

      <div className={styles.homeContent}>
        <div className={styles.carousel}>
          <img src={homeCarousel[currentImageIndex].img} alt="carousel" />
        </div>
        {/* <div className={styles.content}>
            <h1>Lorem ipsum dolor sitete </h1>
            <ul>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati</li>
            </ul>
            <button>Click Me</button>
        </div> */}
      </div>
    </div>
  );
};
