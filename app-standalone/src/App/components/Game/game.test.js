import React from "react";
import { shallow } from "enzyme";
import Game from "./index";
import Board from "../Board/index";
import LeagueTable from "../LeagueTable/LeagueTable";

describe("Game", () => {
  it("renders", () => {
    shallow(<Game />);
  });

  it("renders Board", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(Board)).toHaveLength(1);
  });

  it("renders LeagueTable", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(LeagueTable)).toHaveLength(1);
  });



})
