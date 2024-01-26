import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from "./Button.module.css";

const Button = (props) => {

  return (
    <ScrollLink to="פרטים" smooth={true} duration={1500} offset={-50}>
    <div className={styles.container}>
        <button className={styles.button}>{props.text}</button>
    </div>
    </ScrollLink>
  );
};

export default Button;