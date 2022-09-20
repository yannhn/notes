import { StyledInputNoteButton } from "./Styled";

export default function AddNoteButton({ handleOpen }) {
  return (
    <>
      <StyledInputNoteButton onClick={handleOpen}>
        Add new note
      </StyledInputNoteButton>
    </>
  );
}
