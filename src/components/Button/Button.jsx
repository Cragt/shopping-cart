import styles from "./Button.module.css";
import CartLogo from "../Assets/shopping-cart.svg";

export default function Button({ name, onClick }) {
  return (
    <button className={styles.addToCart} onClick={onClick}>
      <img src={CartLogo} alt="Cart"></img>
      {name}
    </button>
  );
}
