import { useState } from "react";
import "./App.css";
import NavBar from "./components/Nav Bar/NavBar";
import Card from "./components/Card/Card";
import styles from "./App.module.css";

function App() {
  const cards = [];

  for (let index = 0; index < 8; index++) {
    cards.push(<Card className={styles.cards} key={index} id={index} />);
  }

  return (
    <div className={styles.page}>
      <NavBar className={styles.nav} />
      <div className={styles.cards}>{cards}</div>
    </div>
  );
}

export default App;
