import {
  StyledHeader,
  StyledTitle,
  StyledListItem,
  StyledListAnchor,
} from "./Styled";

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>Notes</StyledTitle>
      <nav>
        <ul>
          <StyledListItem>
            <StyledListAnchor to="/">Current</StyledListAnchor>
          </StyledListItem>
          <StyledListItem>
            <StyledListAnchor to="/all">All</StyledListAnchor>
          </StyledListItem>
        </ul>
      </nav>
    </StyledHeader>
  );
}
