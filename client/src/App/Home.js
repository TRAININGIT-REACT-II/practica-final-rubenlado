import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="list-group">
        <NavLink to="/login">Inicio de sesion</NavLink>
        <NavLink to="/signup">Registro</NavLink>
      </div>
    </div>
  );
};

export default Home;