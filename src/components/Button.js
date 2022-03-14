import React from "react";
import styles from "./Button.module.css";

function Button({ children, styleElement }) {
  if (styleElement === "purple") {
    return (
      <button className={`${styles.btnPurple} ${styles.btn}`}>
        {children}
      </button>
    );
  } else {
    return (
      <button className={`${styles.btnTransparent} ${styles.btn}`}>
        {children}
      </button>
    );
  }
}

export default Button;
