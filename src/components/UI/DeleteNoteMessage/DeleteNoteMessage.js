import { useState } from "react";
import DeleteNoteModal from "../DeleteNoteModal/DeleteNoteModal";

export default function DeleteNoteMessage({ deleteNote }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(!showModal)}>Delete note?</button>
      {showModal && (
        <DeleteNoteModal>
          <p>Are you sure you want to delete this note?</p>
          <button type="button" onClick={() => setShowModal(!showModal)}>
            Cancel
          </button>
          <button type="button" onClick={deleteNote}>
            Delete Note
          </button>
        </DeleteNoteModal>
      )}
    </>
  );
}
