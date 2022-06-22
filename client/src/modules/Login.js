import { useState } from "react"

import "./Login.css";

const DEFAULT_STATE = {
    name: "",
    color: ""
  };
/**
 * Este formulario usa el estado de React para almacenar los valores actuales
 */
export const Login = () => {
  // Estado del formulario y valores por defecto
  const [formState, setFormState] = useState(DEFAULT_STATE);

  // Devolvemos una funcion para modificar una parte del estado!
  const onChange = (key) => {
    return (e) => setFormState({
      ...formState,
      [key]: e.target.value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
  <div className="row">
    <div className="col-6">
      <form onSubmit={onSubmit}>
        <label htmlFor="controlled-name">Usuario</label>
        <input id="controlled-name" type="text" value={formState.name} onChange={onChange("name")} />
        <label htmlFor="controlled-color">Contraseña</label>
        <input id="controlled-color" type="text" value={formState.color} onChange={onChange("color")} />
        <button>Login</button>
      </form>
    </div>
    <div className="col-6">
      <pre>
        <code>
          {JSON.stringify(formState, null, 2)}
        </code>
      </pre>
    </div>
  </div>
  );
}