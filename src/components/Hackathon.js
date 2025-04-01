import React from "react";
import styles from "./Hackathon.module.css"; // Import CSS Module

const hackathons = [
  { id: 1, name: "AI Innovation Challenge", date: "April 10, 2025", description: "Build innovative AI solutions to solve real-world problems." },
  { id: 2, name: "Web3 Hackfest", date: "May 5, 2025", description: "Create decentralized applications using blockchain technology." },
  { id: 3, name: "Sustainability Hack", date: "June 20, 2025", description: "Develop eco-friendly tech solutions for a greener planet." },
];

const Hackathons = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Upcoming Hackathons</h1>
      </header>

      <main className={styles.main}>
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className={styles.card}>
            <h2>{hackathon.name}</h2>
            <p className={styles.date}>{hackathon.date}</p>
            <p>{hackathon.description}</p>
            <button className={styles.registerButton}>Register</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Hackathons;
