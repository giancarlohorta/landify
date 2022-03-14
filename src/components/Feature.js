import React from "react";
import styles from "./Feature.module.css";

const Feature = ({ title, img, text }) => {
  return (
    <div className={styles.featureContainer}>
      <img className={styles.featureImg} src={img} alt={title} />
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureText}>{text}</p>
    </div>
  );
};

export default Feature;
