
import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouteMatch , useHistory} from "react-router-dom";
import { useCallback } from 'react';

const Home = () => {
const history = useHistory();
const handleOnClick = (field) => useCallback(() => history.push(`/` + field));

return (
         <div className="container">
          <h1>Training note</h1>
            <div className="d-grid gap-2">
            
                  <Button  size="lg" onClick={handleOnClick("login")} class="btn btn-primary btn-lg btn-block">Inicio de sesion</Button>
                  <Button  size="lg" onClick={handleOnClick("signup")} class="btn btn-secondary btn-lg btn-block">Registro</Button>
            </div>
          <main>
          </main>
        </div>
      );
}

export default Home;