import { useStore } from "zustand";

export default function DeleteNoteMessage() {
  //   const deleteNote = useStore((state) => state.deleteNote);

  return (
    <>
      <p>Are you sure you want to delete that note?</p>
      <button type="button">Cancel</button>
      <button type="button">Delete Note</button>
    </>
  );
}
