import { StyledNoteContainer, StyledNoteTitle } from "./Styled";

export default function NoteItem({ title, body, date }) {
  return (
    <StyledNoteContainer>
      <StyledNoteTitle>{title}</StyledNoteTitle>
      <p>{body}</p>
      <span>{date}</span>
    </StyledNoteContainer>
  );
}
