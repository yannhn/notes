import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Header from "./Header";
import { StyledTitle } from "./Styled";

describe("Header Component", () => {
  it("should render Title text", () => {
    const text = "Notes";
    render(<StyledTitle>{text}</StyledTitle>);
    const title = screen.getByText(text, { exact: false });
    expect(title).toBeInTheDocument();
  });
});

describe("Header links", () => {
  it("should link to other pages", () => {
    const handleClick = jest.fn();
    const text = "";
  });
});
