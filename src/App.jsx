import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { saveAsPng } from "save-html-as-image";
import Reports from "./components/Reports";
import ThemeToggle from "./components/subcomponents/ThemeToggle";
import InputField from "./components/subcomponents/InputField";
import IconDownload from "./components/subcomponents/IconDownload";
import CameraIcon from "./components/subcomponents/IconCamera";
import IconClose from "./components/subcomponents/IconClose";
import InputFile from "./components/subcomponents/InputFile";
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
  const [imgSrc, setImgSrc] = useState("./01.jpg");

  const [download, setDownload] = useState(false);

  //* Using html2canvas
  const capture = () => {
    setOpen(true);
    html2canvas(captureRef.current, {
      quality: 0.95,
    }).then((canvas) => {
      setDownload(true);
      resultRef.current.prepend(canvas);
    });
  };

  //* Using save-html-to-image for saving image
  const save = () => {
    saveAsPng(captureRef.current, { filename: "ascenda", printDate: false }, { quality: .95 });
  };

  const remove = () => {
    setOpen(false);
    setDownload(false);
    document.querySelector("canvas").remove();
  };

  return (
    <div className="App">
      <div className={styles.mainContainer}>
        <ThemeToggle value={theme} onChange={setTheme} />
        <div ref={captureRef} className={styles.previewContainer}>
          <Reports theme={theme} image={imgSrc} title={title} guide={guide} />
        </div>
        <div className={styles.formContainer}>
          <InputFile img={imgSrc} changeImg={setImgSrc} />
          <InputField
            title={title}
            changeTitle={setTitle}
            guide={guide}
            changeGuide={setGuide}
          />
        </div>
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
          <div onClick={remove} className={styles.closeContainer}>
            <IconClose />
          </div>
          {download && (
            <button onClick={save}>
              Download
              <IconDownload />
            </button>
          )}
          <div onClick={remove} className={styles.outside} />
        </div>
      </div>
    </div>
  );
}

export default App;
