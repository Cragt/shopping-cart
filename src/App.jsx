import { useState } from "react";
import "./App.css";
import NavBar from "./components/Nav Bar/NavBar";
import Card from "./components/Card/Card";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.page}>
        <NavBar className={styles.nav} />
        <Card />
      </div>
    </>
  );
}

export default App;
