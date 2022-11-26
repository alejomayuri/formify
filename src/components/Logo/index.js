import style from "./style.module.css";
import logo__w from "../../media/logo__w.png";

export default function Logo() {
  return (
    <div className={style.container}>
      <img src={logo__w} alt="logo" />
    </div>
  );
}
