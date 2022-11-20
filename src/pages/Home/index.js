import useUser from "../../hooks/useUser";
import { useEffect } from "react";
export default function Home() {
  const { user, isNotLogged } = useUser();

  useEffect(() => {
    if (isNotLogged) {
      window.location.href = `/`;
    }
  }, [isNotLogged]);

  return (
    <div>
      <header>
        <p>formify</p>
        <nav>
          <ul>
            <li>
              <a href="/">¿Como funciona?</a>
            </li>
          </ul>
        </nav>
      </header>
      <h1>Mi formify</h1>
      <p>Llena los campos que quieras utilizar en todos los formularios</p>
      <div>
        <form>
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="lastname">Apellido</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Teléfono</label>
            <input type="text" name="phone" id="phone" />
          </div>
          <div>
            <label htmlFor="address">Dirección</label>
            <input type="text" name="address" id="address" />
          </div>
        </form>
      </div>
    </div>
  );
}
