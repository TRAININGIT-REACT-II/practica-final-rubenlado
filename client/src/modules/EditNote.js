import { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { useHistory } from "react-router-dom";


export const EditNote = () => {
  const url = window.location.href.split("/");
  var noteId = url.at(4);

  const store = useStore();
  const authData = store.getState();

  const history = useHistory();

  const [formState, setFormState] = useState({
    title: "",
    body: "",
  });

  const getDefault = async () => {
    await fetch("/api/notes/" + noteId, {
      method: "GET",
      headers: {
        apitoken: authData.auth.token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((formValues) => {
        setFormState({
          title: formValues.title,
          body: formValues.content,
        });
      });
  };

  useEffect(() => {
    getDefault();
  }, []);

  const onChange = (key) => {
    return (e) =>
      setFormState({
        ...formState,
        [key]: e.target.value,
      });
  };

  const updateNote = () => {
    fetch("/api/notes/" + noteId, {
      method: "PUT",
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
        }
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateNote();
    history.push("/mynotes")
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
        <button>Editar nota</button>
      </form>
    </>
  );
};