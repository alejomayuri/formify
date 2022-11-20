import style from "./style.module.css";
import logo from "../../media/logo.png";

export default function Logo() {
  return (
    <div className={style.container}>
      <img src={logo} alt="logo" />
    </div>
  );
}
