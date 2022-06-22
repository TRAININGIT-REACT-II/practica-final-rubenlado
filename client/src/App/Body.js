import {Login}  from "../modules/Login";
//import SignUp  from "../modules/SingUp";
import Home from "./Home"
import {Route, NavLink, Switch } from "react-router-dom";


// Componente principal de la aplicación.
const Body = () => {
  // Mostramos la aplicación
  return (
    <>
     <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
     </Switch>
    </>
  );
};

export default Body;
