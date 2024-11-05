import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";

export default function Card({ id, setItemsInCart }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setItem(json[id]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const handleAddToCart = () => {
    setItemsInCart((prevCart) => [...prevCart, item]);
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <Button
        className={styles.btn}
        name={"Add to Cart"}
        onClick={handleAddToCart}
      />
    </div>
  );
}
