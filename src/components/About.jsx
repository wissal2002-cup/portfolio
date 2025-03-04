import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={"about/aboutImage.png"}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={"about/cursorIcon.png"} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I'm currently a Fullstack Web Development 
              student with a strong interest in front-end development
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={"about/serverIcon.png"} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Familiar with Python,database management (MongoDB, MySQL).
              </p>
            </div>
          </li>
         
        </ul>
      </div>
    </section>
  );
};