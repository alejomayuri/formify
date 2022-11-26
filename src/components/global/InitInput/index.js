import style from "./style.module.css";

export default function InitInput({ lable, htmlFor, type, name, onChange }) {
  return (
    <div className={style.input__container}>
      <label htmlFor={htmlFor}>{lable}</label>
      <input required type={type} name={name} onChange={onChange} />
    </div>
  );
}
