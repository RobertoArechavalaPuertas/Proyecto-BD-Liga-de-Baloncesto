import React from "react";

export default function Equipos() {
  const equiposMock = [
    { id: 1, nombre: "Los Halcones", localidad: "Madrid", entrenador: "Pérez" },
    { id: 2, nombre: "Tigres", localidad: "Sevilla", entrenador: "García" }
  ];

  return (
    <div className="page">
      <h1>Equipos</h1>

      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Equipo</th>
            <th>Localidad</th>
            <th>Entrenador</th>
          </tr>
        </thead>
        <tbody>
          {equiposMock.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.nombre}</td>
              <td>{e.localidad}</td>
              <td>{e.entrenador}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
