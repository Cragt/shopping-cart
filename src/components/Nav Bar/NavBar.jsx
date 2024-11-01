import styles from "./NavBar.module.css";

export default function NavBar({ className }) {
  return (
    <nav className={`${styles.navBar} ${className}`}>
      <a>Example Link</a>
      <a>Example Link #2</a>
    </nav>
  );
}
