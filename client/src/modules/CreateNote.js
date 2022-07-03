import { useState } from "react";
import { useStore } from "react-redux";
import { useHistory } from "react-router-dom";

export const CreateNote = () => {
  const DEFAULT_STATE = {
    title: "",
    body: "",
  };

  const [formState, setFormState] = useState(DEFAULT_STATE);
  const history = useHistory();

  const onChange = (key) => {
    return (e) =>
      setFormState({
        ...formState,
        [key]: e.target.value,
      });
  };

  const store = useStore();
  const authData = store.getState();

  const createNote = () => {
    fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({
        title: formState.title,
        content: formState.body,
      }),
      headers: {
        apitoken: authData.auth.token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.error != null) {
          //setError(json.error);
        }
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createNote();
    history.push("/")
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="controlled-name">Título</label>
        <input
          id="controlled-title"
          type="text"
          value={formState.title}
          onChange={onChange("title")}
        />
        <label htmlFor="controlled-color">Cuerpo</label>
        <input
          id="controlled-body"
          type="text"
          value={formState.body}
          onChange={onChange("body")}
        />
        <button>Crear nueva nota</button>
      </form>
    </>
  );
};
