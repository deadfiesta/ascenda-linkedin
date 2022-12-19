import styles from "../../styles/InputField.module.scss";

const InputField = ({ title, changeTitle, guide, changeGuide }) => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="title">Title</label>
        <input
          placeholder="Enter your title"
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => changeTitle(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="guide">Subtitle</label>
        <input
          placeholder="Enter your subtitle"
          type="text"
          id="guide"
          name="guide"
          value={guide}
          onChange={(e) => changeGuide(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputField;
