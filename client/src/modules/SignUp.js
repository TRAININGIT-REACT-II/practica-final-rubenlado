import { useState } from "react"
import {useAuth} from '../hooks'
import { signupAction } from "../../store/actions/AuthActions";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import "./Login.css";

const DEFAULT_STATE = {
    userName: "",
    password: ""
  };


export const SignUp = () => {

  const [formState, setFormState] = useState(DEFAULT_STATE);
  const [error, setError] = useState("");
  const history = useHistory()
  const dispatch = useDispatch();

  const onChange = (key) => {
    return (e) => setFormState({
      ...formState,
      [key]: e.target.value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signupAction( formState.userName, formState.password, history));
  }

  return (
  <div className="row">
    <div className="col-6">
      <form onSubmit={onSubmit}>
        <label htmlFor="controlled-name">Usuario</label>
        <input id="controlled-name" type="text" value={formState.userName} onChange={onChange("userName")}/>
        <label htmlFor="controlled-color">Contraseña</label>
        <input id="controlled-color" type="text" value={formState.password} onChange={onChange("password")} />
        <button>Sign Up</button>
      </form>
    </div>
  </div>
  );
}