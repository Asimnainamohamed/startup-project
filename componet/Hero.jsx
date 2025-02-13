import React from 'react'
import  styles from './Hero.module.css'
import bg from '../assets/bg1.png'
import bg2 from '../assets/bg1.png'
import bg1 from '../assets/background.png'
import blue from '../assets/blue.jpg'
import blue1 from '../assets/blue.jpg'
import hero from '../assets/hero.png'
const Hero = () => {
  return (
    <>
    
         <div className={styles.div1}>
              <div className={styles.div0}>
                
              <h1 className={styles.div2}>E D U C A T I O N S O L U T I O N</h1>
              <h1 className={styles.div3}>Your Awesome</h1>
              <h1 className={styles.div4}>Online Course</h1>
              <p className={styles.p1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </p>
              <p className={styles.p2}>Soluta quo fuga corporis cupiditate quaerat voluptates ab
              libero,?. 
                </p>
      
               <button className= {styles.button1}>
                <h1> View Course</h1></button>
               <button className= {styles.button2}>
                <h1 > Explore More</h1> </button>
               <img src={bg} className={styles.bg}></img>
               <img src={bg2} className={styles.bg2}></img>
               <img src={blue} className={styles.blue}></img>
               <img src={blue1} className={styles.blue1}></img>

               <img src={bg1} className={styles.bg1}></img>
               <img src={hero} className={styles.hero}></img>

              
              
            </div>
            </div>
    
    </>
  )
}

export default Hero
