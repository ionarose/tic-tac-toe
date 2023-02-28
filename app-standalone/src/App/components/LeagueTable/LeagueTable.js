import React, { useState, useEffect } from "react";

const LeagueTable = ({ winner, playerNames }) => {
  const [leagueTable, setLeagueTable] = useState({
    "Player 1": 0,
    "Player 2": 0,
  });


 //add to scoreboard
  useEffect(() => {
    if (winner) {
      const winningPlayer = playerNames[winner];
      setLeagueTable((prevTable) => ({
        ...prevTable,
        [winningPlayer]: prevTable[winningPlayer] + 1,
      }));
    }
  }, [winner, playerNames]);

  //to persist the score data

  useEffect(() => {
    localStorage.setItem("leagueTable", JSON.stringify(leagueTable));
  }, [leagueTable]);

  useEffect(() => {
    const storedTable = JSON.parse(localStorage.getItem("leagueTable"));
    if (storedTable) {
      setLeagueTable(storedTable);
    }
  }, []);

  return (
    <div>
      <h2>League Table</h2>
      <p>{playerNames.X}</p> <p>{leagueTable["Player 1"]}</p>
      <p>{playerNames.O}</p>
      <p>{leagueTable["Player 2"]}</p>
    </div>
  );
};

export default LeagueTable;
