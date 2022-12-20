import IconUpload from "./IconUpload";
import styles from "../../styles/InputField.module.scss";

const InputFile = ({ img, changeImg }) => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputFileContainer}>
        <div className={styles.label}>Upload your image</div>
        <label htmlFor="imgupload" style={{ backgroundImage: `url(${img})` }}>
          <div className={styles.iconContainer}>
            <IconUpload />
          </div>
          <input
            onChange={(e) => changeImg(URL.createObjectURL(e.target.files[0]))}
            type="file"
            name="image"
            id="imgupload"
            accept="image/x-png,image/gif,image/jpeg"
          />
        </label>
      </div>
    </div>
  );
};

export default InputFile;
