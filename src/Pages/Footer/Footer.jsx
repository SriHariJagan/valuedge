import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* Top Section - Contact Details */}
      <div className={styles.footerContent}>
        <div className={styles.location}>
          <h3>Hyderabad</h3>
          <p>
            #503, 5th Floor, Plot No. 57, Road No.4, Ayyappa Society, Madhapur,
            Hyderabad - 500081.
          </p>
          <p>
            <strong>Phone:</strong> +91 40 4854 4147
          </p>
          <p>
            <strong>Email:</strong> info@valuedge-solutions.com
          </p>
          <p>
            <a
              href="https://www.valuedge-solutions.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.valuedge-solutions.com
            </a>
          </p>
        </div>

        {/* <div className={styles.location}>
          <h3>Vizag</h3>
          <p>
            #39-6-19//1, Sector - 6, Murali Nagar, Vishakhapatnam - 530007.
            India.
          </p>
          <p>
            <strong>Phone:</strong> +91 9392504567
          </p>
          <p>
            <strong>Email:</strong> info@valuedge-solutions.com
          </p>
          <p>
            <a
              href="https://www.valuedge-solutions.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.valuedge-solutions.com
            </a>
          </p>
        </div> */}

        {/* Embedded Google Map */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2984171243565!2d78.38880617493618!3d17.445425383451653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9167181f1c77%3A0x4b2d8efd25b7a7e3!2sValuedge%20Solutions!5e0!3m2!1sen!2sin!4v1742887396213!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className={styles.footerBottom}>
        <p>© 2019 Valuedge-solutions.com. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
