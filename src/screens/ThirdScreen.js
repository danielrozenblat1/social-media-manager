 import OnMe from "../components/OnMe"
 import styles from "./ThirdScreen.module.css"
 import social from "../images/social.png"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
 const ThirdScreen=()=>{

  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 1000,
      distance: "30px",
      origin: "top", // Start from the right side
      easing: "ease-in-out",
      reset:false,
      viewFactor: 0.2,
      interval: 100, // Delay between each element
      delay: 200, // Delay before the animation starts
      scale: 1, // Set scale to 1 or null

    });
  },[])
 return <>


<div className={styles.wrap}>

  

<div className={styles.title} id="קצת עלי"> איתי זה קל</div>
<div className={styles.wraper}>
<img className={styles.image} src={social} alt="מתן חממי"/>

<div className={styles.text}>
    <h1 className={styles.name}>ישראלית ישראלית</h1>
     <div className={styles.li}>יוצרת תוכן ומנהלת סושיאל</div>
     <div className={styles.li}>מלווה ומצלמת בעלי עסקים לרשתות החברתיות </div>
   <div className={styles.li}>עורכת ומנהלת בשבילכם את העסק בדיגיטל</div>

</div>
</div>
<OnMe/>

</div>
</>
 }
 export default ThirdScreen
