import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-title">Liga de Baloncesto</div>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/equipos">Equipos</Link>
        <Link to="/jugadores">Jugadores</Link>
        <Link to="/partidos">Partidos</Link>
        <Link to="/estadisticas">Estadísticas</Link>
      </div>
    </nav>
  );
}
