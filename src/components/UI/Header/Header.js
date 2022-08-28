import {
  StyledHeader,
  StyledTitle,
  StyledListItem,
  StyledListAnchor,
} from "./Styled";

// TODO Link logo to main page

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>Notes</StyledTitle>
      <nav>
        <ul>
          <StyledListItem>
            <StyledListAnchor to="/">Current week</StyledListAnchor>
          </StyledListItem>
          <StyledListItem>
            <StyledListAnchor to="/all">All notes</StyledListAnchor>
          </StyledListItem>
        </ul>
      </nav>
    </StyledHeader>
  );
}
