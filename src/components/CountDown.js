import React from 'react';
import { useTimer } from 'react-timer-hook';
import styles from "./CountDown.module.css"
import course from "../images/צילום.png"
const Countingdown = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
 
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div>
     
      <div className={styles.container}>
        <div className={styles.numbers}>
        <span className={styles.number}>{days}</span>
        <div className={styles.name}>ימים</div>
        </div>
        
        <div className={styles.numbers}>
        <span className={styles.number}>{hours}</span>
        <div className={styles.name}>שעות</div>
        </div>
        <div className={styles.numbers}>
        <span className={styles.number}>{minutes}</span>
        <div className={styles.name}>דקות</div>
        </div> 
        <div className={styles.numbers}>
        <span className={styles.number}>{seconds}</span>
        <div className={styles.name}>שניות</div>
        </div>
      
      </div>
    
      <div>
        <div className={styles.center}><img className={styles.image} src={course}/></div>
      <div className={styles.date}>עד שהקורס "לעמוד מול המצלמה" באוויר</div>
      
      </div>
    </div>
  );
};

export default Countingdown;
