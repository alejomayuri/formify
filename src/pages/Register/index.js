import style from "./style.module.css";
import RegisterForm from "../../components/RegisterForm";

export default function Register() {
  return (
    <div className={style.container}>
      <RegisterForm />
    </div>
  );
}
