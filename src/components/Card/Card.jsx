import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";
import { useCart } from "../../CartContext";
import PropTypes from "prop-types";

export default function Card({ id }) {
  const [item, setItem] = useState(null);
  const { itemsInCart, setItemsInCart } = useCart();
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setItem(json[id]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const isItemInCart = itemsInCart.some((cartItem) => cartItem.id === item?.id);

  const handleCartAction = () => {
    if (isItemInCart) {
      setItemsInCart((prevCart) =>
        prevCart.filter((cartItem) => cartItem.id !== item.id)
      );
    } else {
      for (let i = 0; i < inputValue; i++) {
        setItemsInCart((prevCart) => [...prevCart, item]);
      }
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <Button
        className={styles.btn}
        name={isItemInCart ? "Remove from Cart" : "Add to Cart"}
        onClick={handleCartAction}
      />
      {!isItemInCart ? (
        <input type="number" value={inputValue} onChange={handleChange}></input>
      ) : (
        ""
      )}
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
};
