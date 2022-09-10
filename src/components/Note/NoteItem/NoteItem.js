import DeleteNoteMessage from "../../UI/DeleteNoteMessage/DeleteNoteMessage";
import NoteCard from "../NoteCard/NoteCard";
import { StyledNoteTitle } from "./Styled";

export default function NoteItem({ title, body, deleteNote }) {
  return (
    <NoteCard>
      <StyledNoteTitle>{title}</StyledNoteTitle>
      <p>{body}</p>
      <DeleteNoteMessage deleteNote={deleteNote} />
    </NoteCard>
  );
}
