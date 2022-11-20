import style from "./style.module.css";
import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";

export default function Inicio() {
  return (
    <div className={style.container}>
      <div className={`${style.login__container} ${style.section__container}`}>
        <LoginForm />
      </div>
      <div className={`${style.title__container} ${style.section__container}`}>
        <div className={style.title__box}>
          <Logo />
          <h2 className={style.h2}>
            Un formulario <br />
            para gobernarlos a todos
          </h2>
          <p className={style.paragraph}>
            Formify te permite llenar formularios a partir de un código creado
            por tí en lugar de llenarlos a mano.
          </p>
        </div>
      </div>
    </div>
  );
}
