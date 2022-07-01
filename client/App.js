import { useEffect, useState } from "react";
import Body from "./src/App/Body";
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from "./src/App/Header";
import ErrorBoundary from "./utils/ErrorBoundary";
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
    <Provider store={store}>
      <Router>
        <ErrorBoundary message="Se ha producido un error">
          <Header/>
          <Body/>  
        </ErrorBoundary>
      </Router>     
    </Provider>   
    </>
  );
};

export default App;

