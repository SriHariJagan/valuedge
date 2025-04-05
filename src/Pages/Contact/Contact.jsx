import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      {/* Heading */}
      <div className={styles.contactHeading}>
        <h1>Contact Us</h1>
        <p>
          Valuedge is a comprehensive group that provides technology solutions
          spanning a range of services. Our service professionals offer advice
          and expertise for every stage of the game, from design and integration
          to support and management. The company provides multiple solutions and
          services for a variety of industry verticals, including application
          software development, enterprise resource planning, and IT consulting.
        </p>
      </div>

      {/* Contact Section */}
      <div className={styles.contactData}>
        {/* Left Side - Contact Form */}
        <div className={styles.contactForm}>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Your Email address" />
          <textarea placeholder="Your Message Here"></textarea>
          <button type="submit">Submit</button>
        </div>

        {/* Right Side - Contact Details */}
        <div className={styles.contactDetails}>
          <h2>Head Office</h2>
          <p>
            📍 #503, 5th Floor, Plot 57, Road No.4, Ayyappa Society, Madhapur,
            Hyderabad - 500081, Telangana, INDIA
          </p>
          <p>📞 Phone: +91 40 48544147</p>
          <p>📧 Email: support@valuedge-solutions.com</p>
          <p>🌐 Website: www.valuedge-solutions.com</p>
        </div>
      </div>

      {/* Google Map */}
      <div className={styles.mapContainer}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2984171243565!2d78.38880617493618!3d17.445425383451653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9167181f1c77%3A0x4b2d8efd25b7a7e3!2sValuedge%20Solutions!5e0!3m2!1sen!2sin!4v1742887396213!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
