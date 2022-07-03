import { useState } from "react";

export const useGetDefaultNote = (noteId, authData) => {
  const DEFAULT_STATE = {
    title: "",
    body: "",
  };

  const [defaultFormValue, setDefaultFormValue] = useState(DEFAULT_STATE);
  // Cargamos los valores por defecto

  fetch("/api/notes/" + noteId, {
    method: "GET",
    headers: {
      apitoken: authData.auth.token,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((formValues) => {
      console.log(formValues);
      setDefaultFormValue(formValues);
    });

  console.log(defaultFormValue);

  return defaultFormValue;
};

export const useModal = () => {
 
  const [selected, setSelected] = useState("");
  const [isShowing, setIsShowing] = useState(false);

  const open = (id) => {
    setSelected(id);
    setIsShowing(true);
  };

  const close = () => {
    setSelected(null);
    setIsShowing(false);
  };

  return {
    isShowing,
    open,
    close,
    selected,
  };
};