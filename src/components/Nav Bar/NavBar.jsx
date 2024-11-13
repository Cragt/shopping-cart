import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import PropTypes from "prop-types";

export default function NavBar({ className }) {
  const { itemsInCart } = useCart();
  let count = itemsInCart.length;
  return (
    <div>
      <nav className={`${styles.navBar} ${className}`}>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/shop`}>Shop</Link>
          </li>
          <li>
            <Link to={`/cart`}>View Cart ({count})</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  className: PropTypes.string,
};
