import NavBar from "./components/Nav Bar/NavBar";
import styles from "./App.module.css";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar className={styles.nav} />
      </div>
      <div>
        <h1>Shopping Cart App</h1>
        <img
          className={styles.mickeyImage}
          src="src\components\Assets\mickey-mouse.png"
          alt="Mickey Mouse Lying down"
        />
      </div>
    </div>
  );
}
