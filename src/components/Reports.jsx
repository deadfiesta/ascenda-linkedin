import AscendaLogo from "./subcomponents/LogoAscenda";
import styles from "../styles/Reports.module.scss";
import CircleArrow from "./subcomponents/CircleArrow";

const Reports = ({ style, theme, title, guide, image }) => {
  switch (style) {
    default:
    case 1:
      return (
        <div className={theme === "light" ? styles.light : styles.dark}>
          <div className={styles.wrapper}>
            <AscendaLogo />
            <div className={styles.contentContainer}>
              <div className={styles.imageContainer} style={{ backgroundImage: `url(${image})` }} />
              <div className={styles.textContainer}>
                <div className={styles.guide}>{guide}</div>
                <h3>{title}</h3>
              </div>
              <CircleArrow />
            </div>
          </div>
        </div>
      );
    case 2:
      <>hello world</>;
  }
};

export default Reports;

Reports.defaultProps = {
  theme: "light",
  style: 1,
  title: "Article title goes here lorem ipsum dolor",
  guide: "guide",
  imgSrc: "./01.jpg"
};
