import styles from "./SecondScreen.module.css"
import image1 from "../images/image1.png"
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
import image5 from "../images/image5.png"
import image6 from "../images/image6.png"
import image9 from "../images/image9.png"
import image8 from "../images/image8.png"
import image7 from "../images/image7.png"
import image4 from "../images/image4.png"
import  Button  from "../components/Button"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const SecondScreen=()=>{
    
  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.slogen}`, {
      duration: 1000,
      distance: "30px",
      origin: "top", // Start from the right side
      easing: "ease-in-out",
      reset:true,
      viewFactor: 0.2,
      interval: 100, // Delay between each element
      delay: 200, // Delay before the animation starts
      scale: 1, // Set scale to 1 or null

    });
    ScrollReveal().reveal(`.${styles.row3}`, {
        duration: 1000,
        distance: "30px",
        origin: "top", // Start from the right side
        easing: "ease-in-out",
        reset:true,
        viewFactor: 0.2,
        interval: 100, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
  
      });
  },[])
return <>
<h1 className={styles.slogen}>זמן שהתוצאות ידברו</h1>
<div className={styles.container}>
    <div className={styles.row3}>
<img className={styles.image1} src={image5}/>
<img className={styles.image1} src={image4}/>
<img className={styles.image1} src={image2}/>

</div>
<div className={styles.row3}>
<img className={styles.image1} src={image7}/>
<img className={styles.image1} src={image9}/>
<img className={styles.image1} src={image8}/>

</div>
{/* <div className={styles.row}>
<img className={styles.image3} src={image6}/>
</div> */}
<div className={styles.row3}>
<img className={styles.image1} src={image6}/>
<img className={styles.image1} src={image1}/>
<img className={styles.image1} src={image3}/>
</div>

</div>
<Button text="אני רוצה תוצאות כאלה"/>
</>
}
export default SecondScreen