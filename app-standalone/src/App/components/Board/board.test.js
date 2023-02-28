import React from "react";
import { render } from "@testing-library/react";
import Board from "./index";

describe("Board", () => {
  const squares = Array(9).fill(null);

  it("renders!", () => {
    render(<Board squares={squares} />);
  });

  it("9 squares", () => {
    const { getAllByRole } = render(<Board squares={squares} />);
    const squareButtons = getAllByRole("button");
    expect(squareButtons.length).toBe(9);
  });


});