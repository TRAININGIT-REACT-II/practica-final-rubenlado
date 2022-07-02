
import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouteMatch , useHistory, NavLink} from "react-router-dom";
import { useCallback } from 'react';

const Home = () => {
const history = useHistory();
const handleOnClick = (field) => useCallback(() => history.push(`/` + field));

return (
         <div className="container">

            <div className="list-group"	>
            
                  <NavLink  to="/login">Inicio de sesion</NavLink>
                  <NavLink  to="/signup">Registro</NavLink>
            </div>
        </div>
      );
}

export default Home;