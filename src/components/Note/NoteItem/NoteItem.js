import NoteCard from "../NoteCard/NoteCard";
import { StyledNoteTitle } from "./Styled";

export default function NoteItem({ title, body, deleteNote }) {
  return (
    <NoteCard>
      <StyledNoteTitle>{title}</StyledNoteTitle>
      <p>{body}</p>
      <button type="button" onClick={deleteNote}>
        Delete Note
      </button>
    </NoteCard>
  );
}
