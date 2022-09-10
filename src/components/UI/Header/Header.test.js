import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { StyledTitle } from "./Styled";

describe("Header Component", () => {
  it("should render Header Title", () => {
    const text = "Notes";
    render(<StyledTitle>{text}</StyledTitle>);
    const title = screen.getByText(text);
    expect(title).toBeInTheDocument();
  });
});
