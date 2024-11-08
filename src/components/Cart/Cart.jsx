import Card from "../Card/Card";
import { useCart } from "../../CartContext";
import NavBar from "../Nav Bar/NavBar";
import styles from "../../App.module.css";

export default function ShoppingCart() {
  const { itemsInCart } = useCart();
  return (
    <div className={styles.page}>
      <NavBar />
      <h2>Shopping Cart</h2>
      {itemsInCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {itemsInCart.map((item, index) => (
              <Card className={styles.cards} key={index} id={item.id - 1} />
            ))}
          </ul>
          <p>
            Total: ${itemsInCart.reduce((acc, item) => acc + item.price, 0)}
          </p>
        </div>
      )}
    </div>
  );
}
