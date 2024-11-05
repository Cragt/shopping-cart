import styles from "./NavBar.module.css";

export default function NavBar({ className }) {
  return (
    <nav className={`${styles.navBar} ${className}`}>
      <a>Home</a>
      <a>View Cart</a>
    </nav>
  );
}
