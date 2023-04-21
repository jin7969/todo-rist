import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filters, filter, onChangeFilter }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {isDarkMode ? (
          <HiMoon className={styles.mode} />
        ) : (
          <HiSun className={styles.mode} />
        )}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onChangeFilter(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
