import styles from "./FirstScreen.module.css"
import up from "../images/social-up.png"
import down from "../images/social-down.png"
import Button from "../components/Button"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const FirstScreen=()=>{

    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.image}`, {
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
        ScrollReveal().reveal(`.${styles.slogen}`, {
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
          ScrollReveal().reveal(`.${styles.below}`, {
            duration: 1000,
            distance: "30px",
            origin: "bottom", // Start from the right side
            easing: "ease-in-out",
            reset:false,
            viewFactor: 0.2,
            interval: 100, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
      
          });
      },[])
 return <>
 <div className={styles.container}>
 <div className={styles.center}><img className={styles.image} src={up}/></div>
<h1 className={styles.slogen}>הגיע התור <h1 className={styles.b}>שלך</h1> לבלוט ברשתות</h1>
<h2 className={styles.below}> ניהול social media משנה חיים</h2>
<Button text="לשיחת ייעוץ חינמית"/>
 </div>
 </>
}
export default FirstScreen