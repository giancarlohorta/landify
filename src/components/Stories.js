import React from "react";
import styles from "./Stories.module.css";
import { ReactComponent as Quote } from "../assets/Quote-mark.svg";
import { ReactComponent as Airbnb } from "../assets/airbnb.svg";

const Stories = () => {
  return (
    <section className={styles.storiesContainer}>
      <div className="container">
        <div className={styles.storiesContainerTitle}>
          <Quote className={styles.storiesIcon} />
          <div className={styles.storiesContainerText}>
            <h2 className={styles.storiesTitle}>
              Real Stories from Real Customers
            </h2>
            <p className={styles.storiesText}>Get inspired by these stories.</p>
          </div>
          <div>
            <Airbnb />
            <div>
              <Quote />
              <div>
                <p>
                  I used landify and created a landing page for my startup
                  within a week. The Landify UI Kit is simple and highly
                  intuitive, so anyone can use it.
                </p>
                <p>Jane Cooper</p>
                <p>CEO, Airbnb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
