import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    expect(screen.getByText(/magischen Vier/)).toBeInTheDocument();

    expect(screen.getByTestId("column: 0")).toBeInTheDocument();
    expect(screen.getByTestId("column: 1")).toBeInTheDocument();
    expect(screen.getByTestId("column: 2")).toBeInTheDocument();
    expect(screen.getByTestId("column: 3")).toBeInTheDocument();
    expect(screen.getByTestId("column: 4")).toBeInTheDocument();
    expect(screen.getByTestId("column: 5")).toBeInTheDocument();
    expect(screen.getByTestId("column: 6")).toBeInTheDocument();

    expect(screen.getAllByTestId("row: 0")).toHaveLength(7);
    expect(screen.getAllByTestId("row: 1")).toHaveLength(7);
    expect(screen.getAllByTestId("row: 2")).toHaveLength(7);
    expect(screen.getAllByTestId("row: 3")).toHaveLength(7);
    expect(screen.getAllByTestId("row: 4")).toHaveLength(7);
    expect(screen.getAllByTestId("row: 5")).toHaveLength(7);
  });
});
