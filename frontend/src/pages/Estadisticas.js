import React from "react";

export default function Estadisticas() {
  const statsMock = [
    { jugador: "Carlos Ruiz", puntos: 20, rebotes: 5, asistencias: 7 },
    { jugador: "Antonio López", puntos: 15, rebotes: 8, asistencias: 4 }
  ];

  return (
    <div className="page">
      <h1>Estadísticas</h1>

      <table className="tabla">
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Puntos</th>
            <th>Rebotes</th>
            <th>Asistencias</th>
          </tr>
        </thead>
        <tbody>
          {statsMock.map((s, index) => (
            <tr key={index}>
              <td>{s.jugador}</td>
              <td>{s.puntos}</td>
              <td>{s.rebotes}</td>
              <td>{s.asistencias}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
