import { useState } from "react";
import InputNote from "../InputNote/InputNote";
import { StyledInputNoteButton } from "./Styled";

export default function AddNoteButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <StyledInputNoteButton onClick={() => setShowModal(!showModal)}>
        Add new note
      </StyledInputNoteButton>
      {showModal && <InputNote />}
    </>
  );
}
