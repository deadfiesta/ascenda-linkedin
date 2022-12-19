import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import Reports from "./components/Reports";
import ThemeToggle from "./components/subcomponents/ThemeToggle";
import InputField from "./components/subcomponents/InputField";
import CameraIcon from "./components/subcomponents/CameraIcon";
import styles from "./styles/App.module.scss";

function App() {
  const captureRef = useRef(null);
  const resultRef = useRef(null);

  const [guide, setGuide] = useState("guide");
  const [title, setTitle] = useState(
    "Article title goes here lorem ipsum dolor"
  );
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  const capture = () => {
    html2canvas(captureRef.current).then((canvas) => {
      setOpen(!open);
      resultRef.current.appendChild(canvas);
    });
  };

  const remove = () => {
    setOpen(!open);
    document.querySelector("canvas").remove();
  };

  return (
    <div className="App">
      <div className={styles.mainContainer}>
        <ThemeToggle value={theme} onChange={setTheme} />
        <div ref={captureRef} className={styles.previewContainer}>
          <Reports theme={theme} title={title} guide={guide} />
        </div>
        <InputField
          title={title}
          changeTitle={setTitle}
          guide={guide}
          changeGuide={setGuide}
        />
        <button onClick={capture}>
          Export <CameraIcon />
        </button>
        <div
          ref={resultRef}
          id="result"
          className={
            open
              ? `${styles.resultContainer} ${styles.open}`
              : styles.resultContainer
          }
        >
          <div onClick={remove} className={styles.outside} />
        </div>
      </div>
    </div>
  );
}

export default App;
