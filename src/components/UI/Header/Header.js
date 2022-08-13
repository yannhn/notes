import { StyledHeader, StyledTitle } from "./Styled";

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>Notes</StyledTitle>
      <nav>
        <ul>
          <li>
            <a href="#">Current</a>
          </li>
          <li>
            <a href="#">All</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
