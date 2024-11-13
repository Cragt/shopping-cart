import styles from "./Button.module.css";
import CartLogo from "../Assets/shopping-cart.svg";
import PropTypes from "prop-types";

export default function Button({ name, onClick }) {
  return (
    <button className={styles.addToCart} onClick={onClick}>
      <img src={CartLogo} alt="Cart" />
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
