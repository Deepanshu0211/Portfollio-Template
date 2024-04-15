import styles from "./page.module.css";
import Navbar from "./navbar";
import Link from 'next/link'
import { motion, useScroll } from "framer-motion"
import Project from "./project"
import Project2 from "./project2"
import Skill from "./skill"
import Image from "next/image"
import Contact from "./contact"


export default function Home() {
  

  return (
    
    
    <div>
      
      <div className={styles.center}>
          
       <Navbar />
        <div className={styles.description}>
          
           RESUME
         
          
        </div>
        <div className={styles.intro}>
          INTRODUCTION
        </div>

        <div className={styles.card}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
        </div>

        <div className={styles.card2}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
        </div>

        <div className={styles.card3}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
        </div>
      </div>

      <div className={styles.page2}>
        <div className={styles.about}>
          ABOUT ME!
        </div>
      <div className={styles.para}>
      I am <span className={styles.name}>DEEPANSHU</span>, a dedicated coder from Uttar Pradesh,
        India, with proficiency in a wide array of programming languages and technologies,
          including <span className={styles.code}>React, Next.js, TypeScript, JavaScript, CSS, Python, and fundamental C programming. </span>
           My journey into the world of coding commenced during my early school days,
            around the 5th or 6th grade, and has been a central aspect of my life ever since.
            As I advance through my 12th grade education, 
            I maintain a strong affinity for gaming and anime, which serve as sources of inspiration and leisure.
              I am keen on fostering collaborations and am open to connecting with individuals 
              who share similar interests in technology. If you are seeking a partnership or wish to 
              engage in a conversation about coding and its intricacies, I welcome you to reach out to me. 
        Let’s navigate the vast expanse of the digital realm together.
      </div>
      <div className={styles.hori}>
        <Link href="https://github.com/Deepanshu0211">Git.</Link>
      </div>
      <div className={styles.hori2}>
        <Link href="https://www.instagram.com/">Insta.</Link>
      </div>
      <div className={styles.hori3}>
        <Link href="https://twitter.com/">Twitt.</Link>
      </div>
      <div className={styles.hori4}>
        <Link href="https://twitter.com/">Link.</Link>
      </div>

    </div>
    <div className={styles.page3}>
        <div className={styles.project}>
          PROJECTS
        </div>
        


        <Project />
        <Project2 />
        <div className={styles.text}>
          These two are my recent project<br></br> to view all the project that
          I've build<br></br> please Visit my <a href="https://github.com/Deepanshu0211"><span className="profile">Github Profile</span></a>
        </div>
        
        <div className={styles.arrow}>
          <span></span>
          <span></span>
          <span></span>
        </div>



    </div>

      <div className={styles.skill}>
        <Skill />
      </div>

      <div className={styles.contact}>
        <Contact />
      </div>


    </div>
    
  );
}
