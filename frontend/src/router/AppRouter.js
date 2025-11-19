import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Equipos from "../pages/Equipos";
import Jugadores from "../pages/Jugadores";
import Partidos from "../pages/Partidos";
import Estadisticas from "../pages/Estadisticas";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/jugadores" element={<Jugadores />} />
        <Route path="/partidos" element={<Partidos />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
      </Routes>
    </BrowserRouter>
  );
}
