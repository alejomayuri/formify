import style from "./style.module.css";
import { useEffect, useState } from "react";
import Mitosis from "../../backgrounds/Mitosis";
import MulticolorRandomWalker from "../../backgrounds/MulticolorRandomWalker";

export default function MainLayout({ children }) {
  const [background, setBackground] = useState(null);
  let backgroundNow = null;

  if (background === 0) {
    backgroundNow = <Mitosis />;
  } else if (background === 1) {
    backgroundNow = <MulticolorRandomWalker />;
  }

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 2);
    setBackground(randomIndex);
  }, []);

  return (
    <div className={style.container}>
      {backgroundNow}
      {children}
    </div>
  );
}
