import React from "react";

export default function Jugadores() {
  const jugadoresMock = [
    { id: 1, nombre: "Carlos Ruiz", posicion: "Base", equipo: "Halcones" },
    { id: 2, nombre: "Antonio López", posicion: "Alero", equipo: "Tigres" }
  ];

  return (
    <div className="page">
      <h1>Jugadores</h1>

      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Jugador</th>
            <th>Posición</th>
            <th>Equipo</th>
          </tr>
        </thead>
        <tbody>
          {jugadoresMock.map((j) => (
            <tr key={j.id}>
              <td>{j.id}</td>
              <td>{j.nombre}</td>
              <td>{j.posicion}</td>
              <td>{j.equipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
