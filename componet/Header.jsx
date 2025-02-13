import React, { useState }from 'react'

import styles from './Header.module.css'
import tech from '../assets/techtotslogo.png'


const Header = () => {
    let navlinks = ["Home", "Course","About"]
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  return (
    <div>
    <img src={tech} className={styles.bg}></img>
    
      <button className={styles.getstart}>Get Start</button>
       
      
        <ul className={styles.navlinks}>
        {navlinks.map((link)=>{
          return<li className={styles.navlink}>{link}</li>
        }
        )}
        </ul>
        </div>



   
  )
}

export default Header
