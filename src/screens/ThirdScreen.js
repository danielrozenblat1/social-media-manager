 import OnMe from "../components/OnMe"
 import styles from "./ThirdScreen.module.css"
 import social from "../images/social.png"
 const ThirdScreen=()=>{
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
