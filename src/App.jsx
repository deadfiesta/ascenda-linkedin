import { useState } from "react";
import Reports from "./components/Reports";
import ThemeToggle from "./components/subcomponents/ThemeToggle";
import InputField from "./components/subcomponents/InputField"
import styles from "./styles/App.module.scss";

function App() {
  const [guide, setGuide] = useState("guide");
  const [title, setTitle] = useState("Article title goes here lorem ipsum dolor");
  const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <div className={styles.mainContainer}>
        <ThemeToggle value={theme} onChange={setTheme} />
        <div className={styles.previewContainer}>
          <Reports theme={theme} title={title} guide={guide} />
        </div>
        <InputField title={title} changeTitle={setTitle} guide={guide} changeGuide={setGuide} />
      </div>
    </div>
  );
}

export default App;
