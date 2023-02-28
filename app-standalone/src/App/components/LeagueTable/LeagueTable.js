import React, { useState } from "react";

const LeagueTable = (data) => {

  
 

  return (
    <div>
      <h2>League Table</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
          {data.map(([player, wins]) => (
            <tr key={player}>
              <td>{player}</td>
              <td>{wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;
