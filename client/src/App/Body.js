import {Login}  from "../modules/Login";
import {SignUp}  from "../modules/SignUp";
import Home from "./Home"
import {Route, NavLink, Switch } from "react-router-dom";
import { CreateNote } from "../modules/CreateNote";
import { MyNotes } from "../modules/MyNotes";
import { EditNote } from "../modules/EditNote";
import PrivateRoute from "../../utils/PrivateRoute";
import { NoteDetails } from "../modules/NoteDetails";

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
        <PrivateRoute path="/createnote" exact>
          <CreateNote/>
        </PrivateRoute>
        <PrivateRoute path="/mynotes" exact>
          <MyNotes/>
        </PrivateRoute>
        <PrivateRoute path="/editNote/:id" exact>
          <EditNote/>
        </PrivateRoute>
        <PrivateRoute path="/checkNote/:id" exact>
          <NoteDetails/>
        </PrivateRoute>
        <Route><Home/></Route>
     </Switch>
    </>
  );
};

export default Body;
