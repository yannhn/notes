import NoteCard from "../NoteCard/NoteCard";
import { StyledNoteTitle } from "./Styled";

export default function NoteItem({ title, body }) {
  return (
    <NoteCard>
      <StyledNoteTitle>{title}</StyledNoteTitle>
      <p>{body}</p>
    </NoteCard>
  );
}
