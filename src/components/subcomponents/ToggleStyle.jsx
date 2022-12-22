import React from "react";
import styles from "../../styles/StyleToggle.module.scss";

const ToggleStyle = ({ no, style, setStyle }) => {
  return (
    <div className={styles.stylesToggleContainer}>
      {Array(no)
        .fill()
        .map((_, i) => (
          <React.Fragment key={`${_}${i}`}>
            <input
              onChange={(e) => setStyle(Number(e.target.id.slice(-1)))}
              checked={style === i + 1 ? true : false}
              id={`style${i + 1}`}
              name="style"
              type="radio"
            />
            <label htmlFor={`style${i + 1}`}>{i + 1}</label>
          </React.Fragment>
        ))}
    </div>
  );
};

export default ToggleStyle;

ToggleStyle.defaultProps = {
  no: 3,
};
