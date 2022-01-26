import React from 'react';
import { NavLink } from 'react-router-dom';

//creamos los link que van a redirigir la pagina y harán el match con los router
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">

            <NavLink className="navbar-brand" to="/home">useContext</NavLink>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink exact activeClassName="active" to="/" className="nav-link" aria-current="page">Home</NavLink>
                <NavLink exact activeClassName="active" to="/about" className="nav-link">About</NavLink>
                <NavLink exact activeClassName="active" to="/login" className="nav-link">Login</NavLink>
            </div>
            </div>
        </div>
    </nav>
  )
};
