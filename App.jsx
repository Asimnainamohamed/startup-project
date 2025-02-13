import React from 'react'
import styles from './App.module.css'
import insta from '././assets/insta.png'
import youtube from '././assets/youtube.png'
import x from '././assets/x.png'
import facebook from '././assets/facebook.png'
import location from '././assets/location.png'
import Hero from './componet/Hero'
import Header from './componet/Header'



const App = () => {
  const youtubeLink = "https://www.youtube.com/watch?v=m7gCn9u9bM4";
  const youtubeLink1 = "https://www.youtube.com/watch?v=5BJDFKs41pI";
  const youtubeLink2 = "https://www.youtube.com/watch?v=PqVvrF7pwDQ";
  const youtubeLink3 = "https://www.youtube.com/watch?v=e1mOmdykmwI";

  const handleImageClick = () => {
    window.open(youtubeLink, "_blank");

  }
  const handleImageClick1 = () => {
    window.open(youtubeLink1, "_blank1");
  }
  const handleImageClick2 = () => {
    window.open(youtubeLink2, "_blank2");
  }

  const handleImageClick3 = () => {
    window.open(youtubeLink3, "_blank3");
  }
  return (
    <>
    
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <h1>Call Us: +91 8345278201 -    Mail Us:Asimnaina@gmail.com</h1>

        </nav>
        {/* <div className={styles.social}></div> */}
        <div className={styles.logo} >
          <img src={insta} onClick={handleImageClick}></img>

          <div className={styles.you} onClick={handleImageClick1}>
            <img src={youtube}></img>
          </div>
          <div className={styles.x} onClick={handleImageClick2}>
            <img src={x}></img>
          </div>

          <div className={styles.facebook} onClick={handleImageClick3}>
            <img src={facebook}></img>
          </div>

          <div className={styles.location}>
            <img src={location}></img>
          </div>
          <div className={styles.locationname}>
            <h2>123,Coimbatore,India</h2>
          </div>


        </div>

      </header>
     
      <Hero/>
      <Header/>
      
    </>
  )
}

export default App
