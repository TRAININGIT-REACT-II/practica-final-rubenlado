import {Login}  from "../modules/Login";
import {SignUp}  from "../modules/SignUp";
import Home from "./Home"
import {Route, NavLink, Switch } from "react-router-dom";
import { CreateNote } from "../modules/CreateNote";
import { MyNotes } from "../modules/MyNotes";


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
        <Route path="/signup" exact>
          <SignUp/>
        </Route>
        <Route path="/createnote" exact>
          <CreateNote/>
        </Route>
        <Route path="/mynotes" exact>
          <MyNotes/>
        </Route>
        <Route><Home/></Route>
     </Switch>
    </>
  );
};

export default Body;
