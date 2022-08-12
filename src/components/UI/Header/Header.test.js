import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header Component", () => {
  it("should render Header text", () => {
    render(<Header />);

    const title = screen.getByText("Notes");
    expect(title).toBeInTheDocument();
  });
});
