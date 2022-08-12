import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer component", () => {
  it("should render footer text", () => {
    render(<Footer />);

    const footerElement = screen.getByText("Footer Placeholder");
    expect(footerElement).toBeInTheDocument();
  });
});
