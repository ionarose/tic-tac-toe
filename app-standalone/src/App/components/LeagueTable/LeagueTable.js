import React, { useState } from "react";

const LeagueTable = ( {winner, playerNames}) => {

    // const [league, setLeague] = useState({X:0, O:0})
    let league ={X:0, O:0}
 if(winner){
league[winner] += 1
 }

  return (
    <div>
      <h2>League Table</h2>
      <p>{playerNames.X}</p> <p>{league.X}</p>
      <p>{playerNames.O}</p><p>{league.O}</p>
    </div>
  );
};

export default LeagueTable;
