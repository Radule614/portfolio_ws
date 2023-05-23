import { useCallback, useEffect, useState } from "react";
import classes from "./App.module.css";
import { Header } from "./components/header";
import { useScroll } from "framer-motion";
import { SectionAnimation } from "./components/animation";
import { BOOKMARKS } from "./utility";
import { ThemeProvider, createTheme } from "@mui/material";
import { isMobile } from "react-device-detect";
import clsx from "clsx";

function App() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const calculateVisibility = useCallback(() => {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const n = BOOKMARKS.length + 1;
    const index = Math.max(
      Math.ceil(Math.max(-rect.y) / (rect.height / n)) - 1,
      0
    );
    setVisibleIndex(index);
  }, [element]);
  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.onChange((_) => calculateVisibility());
  }, [calculateVisibility, element, scrollY]);

  useEffect(() => calculateVisibility(), [calculateVisibility, element]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Header activeSection={visibleIndex} />
        {!isMobile && (
          <>
            <div ref={setElement}>
              {BOOKMARKS.map((_, i) => (
                <div
                  id={BOOKMARKS[i].value}
                  style={{ height: "100vh", width: "100%" }}
                  key={i}
                />
              ))}
            </div>
            <div className={classes.container}>
              {BOOKMARKS.map((bookmark, i) => (
                <SectionAnimation key={i} isVisible={visibleIndex === i}>
                  {bookmark.element}
                </SectionAnimation>
              ))}
            </div>
          </>
        )}

        {isMobile && (
          <div ref={setElement} className={clsx(classes.container, classes.mobile)}>
            {BOOKMARKS.map((bookmark, i) => (
              <div key={i} id={BOOKMARKS[i].value}>
                <SectionAnimation isVisible={true}>
                  {bookmark.element}
                </SectionAnimation>
              </div>
            ))}
          </div>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
