import React from "react";

export default function Partidos() {
  const partidosMock = [
    { id: 1, local: "Halcones", visitante: "Tigres", fecha: "2024-09-10" },
    { id: 2, local: "Tigres", visitante: "Halcones", fecha: "2024-09-17" }
  ];

  return (
    <div className="page">
      <h1>Partidos</h1>

      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Local</th>
            <th>Visitante</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {partidosMock.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.local}</td>
              <td>{p.visitante}</td>
              <td>{p.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
