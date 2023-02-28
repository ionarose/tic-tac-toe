import React from "react";
import { render } from "@testing-library/react";
import LeagueTable from "./LeagueTable.js";
import '@testing-library/jest-dom/extend-expect';


describe("LeagueTable", () => {
   

  it("persists to localStorage", () => {
    localStorage.clear();
    render(<LeagueTable winner={null} playerNames={{ X: "Player 1", O: "Player 2" }} />);
    const storedTable = JSON.parse(localStorage.getItem("leagueTable"));
    expect(storedTable).toEqual({ "Player 1": 0, "Player 2": 0 });
  });


});
