import styles from "./NavBar.module.css";
import { Outlet, Link } from "react-router-dom";

export default function NavBar({ className }) {
  return (
    <nav className={`${styles.navBar} ${className}`}>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`cart`}>View Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
