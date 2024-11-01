import Button from "../Button/Button";
import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <div></div>
      <Button className={styles.btn} name={"add to cart"} />
    </div>
  );
}
