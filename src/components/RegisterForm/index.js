import { useEffect, useState } from "react";
import { registerWithEmailAndPassword } from "../../firebase/client";
import { Link } from "wouter";
import useUser from "../../hooks/useUser";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { user, isLogged } = useUser();

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleRepeatPassword = (e) => {
    e.preventDefault();
    setRepeatPassword(e.target.value);
  };

  const handleRegisterWithEmailAndPassword = (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      registerWithEmailAndPassword(email, password).catch((err) =>
        console.log(err)
      );
    }
  };

  useEffect(() => {
    if (isLogged) {
      window.location.href = `/home`;
    }
  }, [isLogged, user]);

  return (
    <div>
      <form>
        <h3>Registrarse</h3>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" onChange={handleEmail} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlePassword}
          />
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleRepeatPassword}
          />
        </div>
        <button type="submit" onClick={handleRegisterWithEmailAndPassword}>
          Registrarme
        </button>
      </form>

      <div>
        <p>¿Ya tienes cuenta?</p>
        <Link href="/">
          <button>Inicia sesión</button>
        </Link>
      </div>
    </div>
  );
}
