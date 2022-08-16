import NoteCard from "../NoteCard/NoteCard";
import { StyledNoteTitle } from "./Styled";

export default function NoteItem({ title, body, date }) {
  return (
    <NoteCard>
      <StyledNoteTitle>{title}</StyledNoteTitle>
      <p>{body}</p>
      <span>{date}</span>
    </NoteCard>
  );
}
