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
  <div className="row">
    <div className="col-6">
      <form onSubmit={onSubmit}>
        <label htmlFor="controlled-name">Usuario</label>
        <input id="controlled-name" type="text" value={formState.user} onChange={onChange("userName")} />
        <label htmlFor="controlled-color">Contraseña</label>
        <input id="controlled-color" type="text" value={formState.color} onChange={onChange("password")} />
        <button>Login</button>
      </form>
    </div>
  </div>
  );
}