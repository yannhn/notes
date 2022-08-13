import { useState } from "react";
import InputModal from "../InputModal/InputModal";
import InputNote from "../InputNote/InputNote";

export default function AddNoteButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(!showModal)}>Add new note</button>
      {showModal && (
        <InputModal>
          <InputNote></InputNote>
        </InputModal>
      )}
    </>
  );
}
