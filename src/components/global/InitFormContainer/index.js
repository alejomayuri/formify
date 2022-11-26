import style from "./style.module.css";
import { Link } from "wouter";

export default function InitFormContainer({ children, title, typeContainer }) {
  let footerForm = null;

  if (typeContainer === "login") {
    footerForm = (
      <div className={style.other__option}>
        <p>¿No tienes cuenta?</p>
        <Link href="/registro">
          <button>Regístrate</button>
        </Link>
      </div>
    );
  } else if (typeContainer === "register") {
    footerForm = (
      <div className={style.other__option}>
        <p>¿Ya tienes cuenta?</p>
        <Link href="/">
          <button>Inicia sesión</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <form>
        <h3 className={style.title}>{title}</h3>
        {children}
        {footerForm}
      </form>
    </div>
  );
}
