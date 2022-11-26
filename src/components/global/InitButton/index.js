import style from "./style.module.css";

export default function InitButton({ children, onClick }) {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}
