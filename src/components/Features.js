import React from "react";
import Feature from "./Feature";
import iconFeatures from "../assets/icon-feature.svg";
import iconFeatures2 from "../assets/icon-feature-2.svg";
import iconFeatures3 from "../assets/icon-feature-3.svg";
import iconFeatures4 from "../assets/icon-feature-4.svg";
import iconFeatures5 from "../assets/icon-feature-5.svg";
import iconFeatures6 from "../assets/icon-feature-6.svg";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <section className={styles.featuresContainer}>
      <div className="container">
        <h2 className={styles.featuresTitle}>Tailor-made features</h2>
        <p className={styles.featuresText}>
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </p>
        <div className={styles.containerFeaturesItens}>
          <Feature
            title="Robust workflow"
            img={iconFeatures}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />
          <Feature
            title="Flexibility"
            img={iconFeatures2}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />{" "}
          <Feature
            title="User friendly"
            img={iconFeatures3}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />
          <Feature
            title="Multiple layouts"
            img={iconFeatures4}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />{" "}
          <Feature
            title="Better components"
            img={iconFeatures5}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />
          <Feature
            title="Well organised"
            img={iconFeatures6}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
