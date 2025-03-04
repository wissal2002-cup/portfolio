import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Wissal</h1>
        <p className={styles.description}>
        I'm a passionate Web Developer specializing in Fullstack development with expertise in React, Python, and MongoDB.
         I love creating interactive and optimized web applications.
        </p>
        <a href="mailto:wissalaqdim2002@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={"hero/heroImage.png"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};