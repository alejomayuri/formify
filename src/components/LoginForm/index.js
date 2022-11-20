import style from "./style.module.css";
import { useEffect, useState } from "react";
import {
  loginWithGoogle,
  loginWithEmailAndPassword,
} from "../../firebase/client";
import { Link } from "wouter";
import useUser from "../../hooks/useUser";
import GoogleIcon from "../Icons/google";

export default function LoginForm() {
  const { user, isLogged } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleLoginWithEmailAndPassword = (e) => {
    e.preventDefault();
    loginWithEmailAndPassword(email, password).catch((err) => console.log(err));
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle().catch((err) => console.log(err));
  };

  useEffect(() => {
    if (isLogged) {
      window.location.href = `/home`;
    }
  }, [isLogged, user]);

  return (
    <div className={style.container}>
      <form>
        <h3 className={style.title}>Iniciar sesión</h3>
        <div className={style.input__container}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" onChange={handleEmail} />
        </div>
        <div className={style.input__container}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlePassword}
          />
        </div>
        <button
          className={style.login__button}
          onClick={handleLoginWithEmailAndPassword}
          type="submit"
        >
          Iniciar sesión
        </button>
      </form>
      <button className={style.login__button} onClick={handleLoginWithGoogle}>
        Iniciar con Google
        <GoogleIcon width={25} />
      </button>
      <div className={style.other__option}>
        <p>¿No tienes cuenta?</p>
        <Link href="/registro">
          <button>Regístrate</button>
        </Link>
      </div>
    </div>
  );
}
