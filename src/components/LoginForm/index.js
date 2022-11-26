import { useEffect, useState } from "react";
import {
  loginWithGoogle,
  loginWithEmailAndPassword,
} from "../../firebase/client";
import useUser from "../../hooks/useUser";
import GoogleIcon from "../Icons/google";
import InitFormContainer from "../global/InitFormContainer";
import InitButton from "../global/InitButton";
import InitInput from "../global/InitInput";

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
    <InitFormContainer title="Iniciar sesión" typeContainer="login">
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
      <InitButton onClick={handleLoginWithEmailAndPassword}>
        Iniciar sesión
      </InitButton>
      <InitButton onClick={handleLoginWithGoogle}>
        Iniciar con Google
        <GoogleIcon width={25} />
      </InitButton>
    </InitFormContainer>
  );
}
