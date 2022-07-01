import React from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

const Header = () => {

   

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light border">
            <Link className="navbar-brand" to="/">Training Note</Link>
            <button className="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link className="nav-link" to="/createnote">
                           Crear nota
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/mynotes">
                           Mis notas
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/inscriptions/find-inscriptions">
                           Cerrar sesión
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    );

};

export default Header;