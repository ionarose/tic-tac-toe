import React, { useState } from "react";

const LeagueTable = ( {league, playerNames}) => {

  
 

  return (
    <div>
      <h2>League Table</h2>
      <p>{playerNames.X}</p> <p>{league.X}</p>
      <p>{playerNames.O}</p><p>{league.O}</p>
    </div>
  );
};

export default LeagueTable;
