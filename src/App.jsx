import "./App.css";
import NavBar from "./components/Nav Bar/NavBar";
import Card from "./components/Card/Card";
import styles from "./App.module.css";
import { useCart } from "./CartContext";

function App() {
  const { itemsInCart, setItemsInCart } = useCart();

  if (!itemsInCart || !setItemsInCart) {
    console.error("Error: itemsInCart or setItemsInCart is undefined");
  }

  const cards = [];

  for (let index = 0; index < 8; index++) {
    cards.push(
      <Card
        className={styles.cards}
        key={index}
        id={index}
        setItemsInCart={setItemsInCart}
      />
    );
  }

  return (
    <div className={styles.page}>
      <NavBar className={styles.nav} />
      <div className={styles.cards}>{cards}</div>
    </div>
  );
}

export default App;
