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
            <StyledListAnchor href="#">Current</StyledListAnchor>
          </StyledListItem>
          <StyledListItem>
            <StyledListAnchor href="#">All</StyledListAnchor>
          </StyledListItem>
        </ul>
      </nav>
    </StyledHeader>
  );
}
