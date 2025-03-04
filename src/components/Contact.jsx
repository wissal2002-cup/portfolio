import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:wissalaqdim2002@gmail.com">wissalaqdim2002@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"contact/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="www.linkedin.com/in/wissal-aqdim-667b79313">linkedin.com/wissal</a>
        </li>
        <li className={styles.link}>
          <img src={"contact/githubIcon.png"} alt="Github icon" />
          <a href="https://www.github.com/wissal2002-cup">github.com/wissal2002-cup</a>
        </li>
      </ul>
    </footer>
  );
};