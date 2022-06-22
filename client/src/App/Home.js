
import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouteMatch , useHistory} from "react-router-dom";
import { useCallback } from 'react';

const Home = () => {
const history = useHistory();
const handleOnClick = useCallback(() => history.push(`/login`));

return (
        <div className="layout">
          <header className="layout_header">
          <h1>Training note</h1>
            <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" onClick={handleOnClick}>Inicio de sesion</Button>
                  <Button variant="secondary" size="lg" onClick={handleOnClick}>Registro</Button>
            </div>
          </header>
          <main>
          </main>
        </div>
      );
}

export default Home;