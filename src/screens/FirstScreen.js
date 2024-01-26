import styles from "./FirstScreen.module.css"
import up from "../images/social-up.png"
import down from "../images/social-down.png"
import Button from "../components/Button"
const FirstScreen=()=>{
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