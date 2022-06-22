import { useEffect, useState } from "react";
import Body from "./src/App/Body";
import {BrowserRouter as Router} from 'react-router-dom';

// Componente principal de la aplicación.
const App = () => {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cargamos el estado del servidor
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setStatus(data.status === "ok"))
      .finally(() => setLoading(false));
  }, []);

  // Mostramos la aplicación
  return (
    <>
      <Router>

        <Body/>  
        </Router>         
    </>
  );
};

export default App;

