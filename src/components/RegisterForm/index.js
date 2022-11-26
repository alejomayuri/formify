import style from "./style.module.css";
import { useEffect, useState } from "react";
import { registerWithEmailAndPassword } from "../../firebase/client";
import { Link } from "wouter";
import useUser from "../../hooks/useUser";
import InitFormContainer from "../global/InitFormContainer";
import InitButton from "../global/InitButton";
import InitInput from "../global/InitInput";

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
    <InitFormContainer title="Registrarse" typeContainer="register">
      <InitInput
        lable="Email"
        htmlFor="email"
        type="text"
        name="email"
        onChange={handleEmail}
      />
      <InitInput
        lable="Password"
        htmlFor="password"
        type="password"
        name="password"
        onChange={handlePassword}
      />
      <InitInput
        lable="Repeat Password"
        htmlFor="repeat_password"
        type="password"
        name="repeat_password"
        onChange={handleRepeatPassword}
      />
      <InitButton onClick={handleRegisterWithEmailAndPassword}>
        Registrarme
      </InitButton>
    </InitFormContainer>
  );
}
