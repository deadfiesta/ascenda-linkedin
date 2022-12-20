import styles from '../../styles/ThemeToggle.module.scss';

const ThemeToggle = ({ value, onChange }) => {
  return (
    <div className={styles.themeToggleContainer}>
      <input
        checked={value === "light" ? true : false}
        onChange={(e) => onChange(e.target.id)}
        type="radio"
        id="light"
        name="theme"
      />
      <label htmlFor="light" />
      <input
        checked={value === "dark" ? true : false}
        onChange={(e) => onChange(e.target.id)}
        type="radio"
        id="dark"
        name="theme"
      />
      <label htmlFor="dark" />
      <input
        checked={value === "shakespare" ? true : false}
        onChange={(e) => onChange(e.target.id)}
        type="radio"
        id="shakespare"
        name="theme"
      />
      <label htmlFor="shakespare" />
    </div>
  );
};

export default ThemeToggle;
