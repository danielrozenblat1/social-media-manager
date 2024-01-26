import  styles from "./OnMe.module.css"
import Button from "../components/Button"

import iphone from "./wired-lineal-721-hand-with-phone.json"
import camera from "./wired-lineal-61-camera.json"
import sign from "./wired-lineal-1019-document-signature-hand (1).json"
import { useEffect,useRef } from "react"
import { Player } from '@lordicon/react';

import ScrollReveal from "scrollreveal"
    const OnMe=()=>{
        const containerRef = useRef(null);
        const playerRef1 = useRef(null);
        const playerRef2 = useRef(null);
        const playerRef3 = useRef(null);

        useEffect(()=>{
    
            playerRef1.current?.playFromBeginning();
            playerRef2.current?.playFromBeginning();
            playerRef3.current?.playFromBeginning();
 
               
               
            ScrollReveal().reveal(`.${styles.box1}`, {
                duration: 1000,
                distance: "30px",
                origin: "right", // Start from the right side
                easing: "ease-out",
                reset:false,
                viewFactor: 0.2,
                interval: 100, // Delay between each element
                delay: 200, // Delay before the animation starts
                scale: 1, // Set scale to 1 or null
    
              });
  
    
      
        },[])
    
        return <><div className={styles.background} id="קצת עלי">
            <div className={styles.row}>
            <div className={styles.box1} id="center4">
        <div className={styles.title1}>מנהלת דיגיטל</div>
        <div className={styles.row}>
        <div className={styles.icons}>
            <Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()}
            icon={iphone}
          /></div>
        </div>
        <div className={styles.sentence1}>מנהלת את כל התוכן שעולה ברשתות החברתיות שקשור לעסק שלך</div>
        <div className={styles.center}><Button background={false} text="לתיאום פגישת ייעוץ"/></div>
        </div>
        <div className={styles.box1} id="center4">
        <div className={styles.title1} >מצלמת ועורכת</div>
        <div className={styles.row}>
            <div className={styles.icons}>
            <Player ref={playerRef2} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()} icon={camera}/></div>
        </div>
        <div className={styles.sentence1}>מצלמת ועורכת את הסרטונים שישרתו את העסק שלך ברשתות החברתיות</div>
       <div className={styles.center}><Button background={false} text="לתיאום פגישת ייעוץ"/></div>
        </div>
        <div className={styles.box1} id="center4" >
        <div className={styles.title1} >מתחייבת לתוצאות</div>
        <div className={styles.row}>
            <div className={styles.icons}>
                <Player 
            ref={playerRef3} 
            size="100%"
            onComplete={() => playerRef3.current?.playFromBeginning()}
            icon={sign}
          /></div>
        </div>
        <div className={styles.sentence1}>במידה ומתוך 5 סרטונים , 2 לא חוצים את ה50 אלף צפיות אתם מקבלים סרטונים בחינם עד שזה קורה</div>
        <div className={styles.center}><Button background={false} text="לתיאום פגישת ייעוץ"/></div>
        </div>
    
    
        
   
        
        </div>
       
        </div>
        </>
}
export default OnMe