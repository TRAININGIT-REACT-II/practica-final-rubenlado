import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useStore} from 'react-redux';



// Obtenemos el componente a renderizar y cualquier otro parámetro
const PrivateRoute = ({ children, ...others }) => {

  // Si el usuario está registrado, cargamos el componente de la ruta.
  // Si no, hacemos un redirect a login

  const store = useStore();
  const authData = store.getState();
  const signedIn = authData.auth.isAuth;
  console.log(signedIn);
  return (
    <Route
      {...others}
      render={() =>
        signedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { msg: "Por favor, haz login primero" },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;