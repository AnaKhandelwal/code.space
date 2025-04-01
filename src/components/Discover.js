import React from "react";
import styles from "./DiscoverPage.module.css";

const DiscoverPage = () => {
  return (
    <div className={styles.discoverContainer}>
      <aside className={styles.sidebar}>
        <h2>Trending Projects</h2>
        <ul>
          <li>#ReactJS</li>
          <li>#JavaScript</li>
          <li>#Python</li>
          <li>#MachineLearning</li>
          <li>#OpenSource</li>
        </ul>
      </aside>
      
      <main className={styles.content}>
        <h1>Discover Coding Projects & Languages</h1>
        <div className={styles.projectIdeas}>
          <div className={styles.ideaCard}>
            <h3>Build a Todo App</h3>
            <p>Learn state management by building a simple Todo app in React.</p>
          </div>
          <div className={styles.ideaCard}>
            <h3>Create a Weather App</h3>
            <p>Use APIs to fetch real-time weather data and display it beautifully.</p>
          </div>
          <div className={styles.ideaCard}>
            <h3>Develop a Portfolio Website</h3>
            <p>Showcase your skills with a personal portfolio built with Next.js.</p>
          </div>
          
        </div>
        <div className={styles.projectIdeas}>
          <div className={styles.ideaCard}>
            <h3>Build a Todo App</h3>
            <p>Learn state management by building a simple Todo app in React.</p>
          </div>
          <div className={styles.ideaCard}>
            <h3>Create a Weather App</h3>
            <p>Use APIs to fetch real-time weather data and display it beautifully.</p>
          </div>
          <div className={styles.ideaCard}>
            <h3>Develop a Portfolio Website</h3>
            <p>Showcase your skills with a personal portfolio built with Next.js.</p>
          </div>
          
        </div>
        <div className={styles.projectIdeas}>
          <div className={styles.ideaCard}>
            <h3>Build a Todo App</h3>
            <p>Learn state management by building a simple Todo app in React.</p>
          </div>
          <div className={styles.ideaCard}>
            <h3>Create a Weather App</h3>
            <p>Use APIs to fetch real-time weather data and display it beautifully.</p>
          </div>
          <div className={styles.ideaCard}>
            <h3>Develop a Portfolio Website</h3>
            <p>Showcase your skills with a personal portfolio built with Next.js.</p>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default DiscoverPage;
