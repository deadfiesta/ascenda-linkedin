import AscendaLogo from "./subcomponents/LogoAscenda";
import styles from "../styles/Reports.module.scss";
import CircleArrow from "./subcomponents/CircleArrow";

const Reports = ({ style, theme, title, guide, image }) => {
  switch (style) {
    default:
    case 1:
      return (
        <div
          className={
            theme === "light"
              ? styles.light
              : theme === "dark"
              ? styles.dark
              : styles.shakespeare
          }
        >
          <AscendaLogo />
          <div className={styles.contentContainer__1}>
            <div
              className={styles.imageContainer}
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className={styles.textContainer}>
              <div className={styles.guide}>{guide}</div>
              <h3>{title}</h3>
            </div>
            <CircleArrow />
          </div>
        </div>
      );
    case 2:
      return (
        <div
          className={
            theme === "light"
              ? styles.light
              : theme === "dark"
              ? styles.dark
              : styles.shakespeare
          }
        >
          <AscendaLogo />
          <div className={styles.contentContainer__2}>
            <div className={styles.textContainer}>
              <div className={styles.guide}>{guide}</div>
              <h3>{title}</h3>
            </div>
            <div className={styles.arrowContainer}>
              <svg className={styles.line} width="44px" height="93px">
                <line x1="0" y1="93" x2="43" y2="0" />
              </svg>
              <CircleArrow />
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div
          className={
            theme === "light"
              ? styles.light
              : theme === "dark"
              ? styles.dark
              : styles.shakespeare
          }
        >
          <AscendaLogo />
          <div className={styles.contentContainer__3}>
            <div className={styles.textContainer}>
              <div className={styles.guide}>{guide}</div>
              <h3>{title}</h3>
            </div>
            <div className={styles.arrowContainer}>
              <svg className={styles.line} width="44px" height="93px">
                <line x1="0" y1="93" x2="43" y2="0" />
              </svg>
              <CircleArrow />
            </div>
          </div>
        </div>
      );
  }
};

export default Reports;

Reports.defaultProps = {
  theme: "light",
  style: 1,
  title: "Article title goes here lorem ipsum dolor",
  guide: "guide",
  imgSrc: "./01.jpg",
};
