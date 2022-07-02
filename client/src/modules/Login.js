import { useState } from "react"
import { loginAction } from "../../store/actions/AuthActions";
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

import "./Login.css";

const DEFAULT_STATE = {
    userName: "",
    password: ""
  };

export const Login = () => {

  const [formState, setFormState] = useState(DEFAULT_STATE);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onChange = (key) => {
    return (e) => setFormState({
      ...formState,
      [key]: e.target.value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(formState.userName, formState.password, history));
  }

  return (
  
      <form onSubmit={onSubmit}>
      <div className="mb-3">
        <body>
        <label className="form-label">Usuario</label>
        <input type="text" value={formState.user} onChange={onChange("userName")} />
        <label className="form-label">Contraseña</label>
        <input  type="text" value={formState.color} onChange={onChange("password")} />
        <button type="submit" class="btn btn-primary">Login</button>
        </body>
      </div>
      </form>
  );
}