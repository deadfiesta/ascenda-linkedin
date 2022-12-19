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
    </div>
  );
};

export default ThemeToggle;
