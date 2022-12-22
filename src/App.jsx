import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { saveAsPng } from "save-html-as-image";
import Reports from "./components/Reports";
import ThemeToggle from "./components/subcomponents/ToggleTheme";
import InputField from "./components/subcomponents/InputField";
import IconDownload from "./components/subcomponents/IconDownload";
import CameraIcon from "./components/subcomponents/IconCamera";
import IconClose from "./components/subcomponents/IconClose";
import InputFile from "./components/subcomponents/InputFile";
import styles from "./styles/App.module.scss";
import ToggleStyle from "./components/subcomponents/ToggleStyle";

function App() {
  const captureRef = useRef(null);
  const resultRef = useRef(null);

  const [guide, setGuide] = useState("guide");
  const [title, setTitle] = useState(
    "Article title goes here lorem ipsum dolor"
  );
  const [theme, setTheme] = useState("light");
  const [style, setStyle] = useState(2);
  const [noOfStyles, setNoOfStyles] = useState(6);

  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("./01.jpg");

  const [download, setDownload] = useState(false);

  //* Using html2canvas
  const capture = () => {
    setOpen(true);
    html2canvas(captureRef.current, {
      scale: 2,
      quality: 0.95,
    }).then((canvas) => {
      setDownload(true);
      resultRef.current.prepend(canvas);
    });
  };

  //* Using save-html-to-image for saving image
  const save = () => {
    saveAsPng(
      captureRef.current,
      { filename: "ascenda", printDate: false },
      { quality: 0.95 }
    );
  };

  const remove = () => {
    setOpen(false);
    setDownload(false);
    document.querySelector("canvas").remove();
  };

  return (
    <div className="App">
      <div className={styles.mainContainer}>
        <section id="preview" className={styles.previewContainer}>
          <div className={`${styles.wrapper} style${style}`} ref={captureRef}>
            <Reports
              style={style}
              theme={theme}
              image={imgSrc}
              title={title}
              guide={guide}
            />
          </div>
        </section>
        <section id="form">
          <div className={styles.wrapper}>
            <div className={styles.formContainer}>
              <div className={styles.toggleContainer}>
                <ToggleStyle
                  no={noOfStyles}
                  style={style}
                  setStyle={setStyle}
                />
                <ThemeToggle value={theme} onChange={setTheme} />
              </div>
              <InputFile img={imgSrc} changeImg={setImgSrc} />
              <InputField
                title={title}
                changeTitle={setTitle}
                guide={guide}
                changeGuide={setGuide}
              />
            </div>
          </div>
        </section>
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
