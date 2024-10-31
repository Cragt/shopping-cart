import styles from "./Button.module.css";
import CartLogo from "./shopping-cart.svg";

export default function Button(props) {
  return (
    <button className={styles.addToCart}>
      <img src={CartLogo}></img>
      {props.name}
    </button>
  );
}
